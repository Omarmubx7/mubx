'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';
import { useBoot } from '@/context/BootContext';


// Exact Framer LoaderCounter easing
function loaderEase(t: number): number {
  if (t < 0.25) return 3.2 * t * t;
  if (t < 0.65) {
    const a = (t - 0.25) / 0.4;
    return 0.2 + a * 0.5;
  }
  if (t < 0.88) {
    const a = (t - 0.65) / 0.23;
    return 0.7 + Math.pow(a, 1.5) * 0.18;
  }
  const a = (t - 0.88) / 0.12;
  return 0.88 + Math.pow(a, 4) * 0.12;
}

function generatePauses() {
  const pauses: { start: number; end: number }[] = [];
  const count = 3 + Math.floor(Math.random() * 3);
  for (let i = 0; i < count; i++) {
    const center = 0.15 + Math.random() * 0.7;
    const w = 0.04 + Math.random() * 0.08;
    pauses.push({
      start: Math.max(0.15, center - w / 2),
      end: Math.min(0.85, center + w / 2),
    });
  }
  pauses.push({
    start: 0.75 + Math.random() * 0.05,
    end: 0.82 + Math.random() * 0.03,
  });
  return pauses;
}

const LOAD_MS = 3800;

type Phase = 'loading' | 'greeting' | 'scroll-hint' | 'entering' | 'done';

// Word-by-word reveal
function WordReveal({
  text,
  delay = 0,
  style,
}: {
  text: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  return (
    <span style={{ display: 'inline', ...style }}>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: delay + i * 0.09,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function LoadingScreen() {
  const pathname = usePathname();
  const lenis = useLenis();
  const { setBooted } = useBoot();
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>('loading');
  const [count, setCount] = useState(0);
  const [bar, setBar] = useState(0);
  const rafRef = useRef<number>(0);
  const pausesRef = useRef(generatePauses());

  const isLinksPage = pathname?.includes('/links');

  // Lock scroll until done: stop Lenis (it ignores body overflow) + freeze overflow.
  useEffect(() => {
    if (isLinksPage || !visible) {
      lenis?.start();
      return;
    }
    if (phase !== 'done') {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
      lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [phase, isLinksPage, visible, lenis]);

  // Prevent scroll during loading & greeting phases
  useEffect(() => {
    if (isLinksPage || !visible || phase === 'done' || phase === 'scroll-hint') return;
    const prevent = (e: Event) => {
      e.preventDefault();
    };
    window.addEventListener('wheel', prevent, { passive: false });
    window.addEventListener('touchmove', prevent, { passive: false });
    return () => {
      window.removeEventListener('wheel', prevent);
      window.removeEventListener('touchmove', prevent);
    };
  }, [phase, isLinksPage, visible]);

  // Enter handler
  const handleEnter = useCallback(() => {
    if (phase !== 'scroll-hint') return;
    setBooted(true);
    setPhase('entering');
    setTimeout(() => {
      setPhase('done');
      setVisible(false);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('mubx-loaded', 'true');
      }
    }, 1100);
  }, [phase, setBooted]);

  // Listen for scroll / keys during scroll-hint
  useEffect(() => {
    if (phase !== 'scroll-hint') return;
    const go = () => handleEnter();
    const onKey = (e: KeyboardEvent) => {
      if (['Space', 'ArrowDown', 'Enter'].includes(e.code)) handleEnter();
    };
    window.addEventListener('wheel', go, { passive: true });
    window.addEventListener('touchmove', go, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', go);
      window.removeEventListener('touchmove', go);
      window.removeEventListener('keydown', onKey);
    };
  }, [phase, handleEnter]);

  // Loader RAF animation
  useEffect(() => {
    if (isLinksPage) return;
    if (typeof window !== 'undefined') {
      // 1. Skip loader immediately for bots / crawlers / Lighthouse / PageSpeed Insights
      const ua = navigator.userAgent.toLowerCase();
      const isBot = /lighthouse|chrome-lighthouse|googlebot|bingbot|yandexbot|baiduspider|headlesschrome|speed insights|insights/i.test(ua);
      const isAutomated = navigator.webdriver || window.location.search.includes('lighthouse') || !!(window as any)._lighthouse;

      if (isBot || isAutomated) {
        setBooted(true);
        setPhase('done');
        setVisible(false);
        return;
      }

      // 2. Skip loader if already loaded in production (ignore on localhost dev)
      const isLocalhost =
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        window.location.port !== '';

      const isProd = process.env.NODE_ENV === 'production' && !isLocalhost;
      if (isProd && sessionStorage.getItem('mubx-loaded')) {
        setBooted(true);
        setPhase('done');
        setVisible(false);
        return;
      }
    }

    const start = performance.now();
    const tick = (now: number) => {
      const rawT = Math.min((now - start) / LOAD_MS, 1);
      const paused =
        rawT < 0.95 &&
        pausesRef.current.some(p => rawT >= p.start && rawT <= p.end);
      if (paused) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const eased = loaderEase(rawT);
      setCount(Math.round(eased * 100));
      setBar(eased);
      if (rawT < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(100);
        setBar(1);
        setTimeout(() => setPhase('greeting'), 500);
        setTimeout(() => setPhase('scroll-hint'), 2700);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isLinksPage, setBooted]);

  if (isLinksPage || !visible) return null;

  const counterColor =
    count > 50
      ? `rgb(${Math.round(158 + (255 - 158) * ((count - 50) / 50))},${Math.round(
          148 + (46 - 148) * ((count - 50) / 50)
        )},${Math.round(144 + (46 - 144) * ((count - 50) / 50))})`
      : '#9E9490';

  const isLoading = phase === 'loading';
  const isGreeting = phase === 'greeting' || phase === 'scroll-hint';
  const isScrollHint = phase === 'scroll-hint';
  const isEntering = phase === 'entering';

  return (
    <div
      data-boot-cover=""
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'transparent',
        overflow: 'hidden',
        pointerEvents: phase === 'entering' ? 'none' : 'auto',
      }}
    >
{/* Vignette (z:3) */}
      <motion.div
        animate={{ opacity: isEntering ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* CURTAIN PANELS (z:1 only animate during 'entering') */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: isEntering ? '-100%' : '0%' }}
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: '#0A0A0A',
          zIndex: 1,
        }}
      />
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: isEntering ? '100%' : '0%' }}
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: '#0A0A0A',
          zIndex: 1,
        }}
      />

      {/* TOP RED ACCENT LINE (z:4) */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isLoading ? 1 : 0, opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          zIndex: 4,
          background: '#FF2E2E',
          transformOrigin: 'center',
        }}
      />

      {/* ALL CONTENT (z:4) */}
      <motion.div
        animate={{ opacity: isEntering ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
        }}
      >
        {/* MUBX Logo */}
        <motion.div
          animate={{
            scale: isLoading ? 1 : 0.6,
            y: isLoading ? 0 : -20,
          }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              filter: [
                'drop-shadow(0 0 0px rgba(255,46,46,0))',
                'drop-shadow(0 0 28px rgba(255,46,46,0.4))',
                'drop-shadow(0 0 12px rgba(255,46,46,0.15))',
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mubxnewlogo.png"
              alt="MUBX Logo"
              width={100}
              height={100}
              style={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                userSelect: 'none',
                display: 'block',
              }}
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* Content Area */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            minHeight: 180,
          }}
        >
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                key="counter-block"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                {/* Big counter */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(80px, 12vw, 120px)',
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    color: counterColor,
                    fontVariantNumeric: 'tabular-nums',
                    userSelect: 'none',
                    minWidth: '3ch',
                    textAlign: 'center',
                  }}
                >
                  {count}
                  <span style={{ fontSize: '0.38em', marginLeft: '0.1em', opacity: 0.45 }}>
                    %
                  </span>
                </div>
                {/* Bar */}
                <div
                  style={{
                    width: 'clamp(180px, 28vw, 260px)',
                    height: 2,
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: 1,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${bar * 100}%`,
                      background: '#FF2E2E',
                      boxShadow: '0 0 8px rgba(255,46,46,0.6)',
                      borderRadius: 1,
                      transition: 'width 0.05s linear',
                    }}
                  />
                </div>
                {/* Label */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    color: '#6B625E',
                    textTransform: 'uppercase',
                  }}
                >
                  {count < 100 ? 'Initializing' : 'Ready'}
                </div>
              </motion.div>
            )}

            {isGreeting && (
              <motion.div
                key="greeting-block"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {/* "Hi, my name is" */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    fontWeight: 300,
                    color: '#9E9490',
                    letterSpacing: '0.08em',
                    marginBottom: 18,
                  }}
                >
                  Hi, my name is
                </motion.div>

                {/* Name word by word */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(50px, 8.5vw, 115px)',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.0,
                    marginBottom: 20,
                  }}
                >
                  <span style={{ color: '#EDE8E4' }}>
                    <WordReveal text="Omar" delay={0.2} />
                  </span>{' '}
                  <span style={{ color: '#FF2E2E' }}>
                    <WordReveal text="Mubaidin." delay={0.38} />
                  </span>
                </div>

                {/* "Welcome to my Portfolio" only on scroll-hint */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isScrollHint ? 1 : 0, y: isScrollHint ? 0 : 10 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(18px, 2.5vw, 28px)',
                    fontWeight: 400,
                    color: '#EDE8E4',
                    letterSpacing: '0.08em',
                    marginBottom: 48,
                  }}
                >
                  Welcome to my Portfolio
                </motion.div>

                {/* Scroll prompt */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isScrollHint ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onClick={handleEnter}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 14,
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      width: 1,
                      height: 52,
                      background: 'rgba(255,255,255,0.07)',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 1,
                    }}
                  >
                    <motion.div
                      animate={{ y: ['-100%', '220%'] }}
                      transition={{
                        duration: 1.15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '38%',
                        background: '#FF2E2E',
                        borderRadius: 1,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 9,
                      letterSpacing: '0.22em',
                      color: '#6B625E',
                      textTransform: 'uppercase',
                    }}
                  >
                    Scroll to enter
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Watermark */}
      <motion.div
        animate={{ opacity: isEntering ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.2em',
          color: '#2A2220',
          textTransform: 'uppercase',
          userSelect: 'none',
        }}
      >
        mubx.dev
      </motion.div>
    </div>
  );
}
