'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOTAL_DURATION = 1800; // ms before exit starts
const PROGRESS_DURATION = 1500; // ms for the progress bar fill

export default function LoadingScreen() {
  const [phase, setPhase] = useState<'loading' | 'exit' | 'done'>('loading');
  const [progress, setProgress] = useState(0);

  const startExit = useCallback(() => {
    setPhase('exit');
    setTimeout(() => setPhase('done'), 800);
  }, []);

  // Progress bar animation
  useEffect(() => {
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / PROGRESS_DURATION, 1);
      // Ease out cubic for natural feel
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased * 100);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Phase timer
  useEffect(() => {
    const timer = setTimeout(startExit, TOTAL_DURATION);
    return () => clearTimeout(timer);
  }, [startExit]);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        key="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0A0A',
          pointerEvents: phase === 'exit' ? 'none' : 'all',
        }}
        aria-label="Loading"
        role="status"
      >
        {/* Radial glow behind logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 0.5, 0.3], scale: [0.6, 1.2, 1] }}
          transition={{ duration: 2, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(215, 28, 28, 0.15) 0%, rgba(215, 28, 28, 0.05) 40%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.85 }}
          animate={
            phase === 'exit'
              ? { opacity: 0, y: -40, scale: 1.1 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          transition={{
            duration: phase === 'exit' ? 0.6 : 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: phase === 'exit' ? 0 : 0.15,
          }}
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 32,
          }}
        >
          {/* SVG Logo with glow */}
          <motion.div
            animate={{
              filter: [
                'drop-shadow(0 0 20px rgba(215,28,28,0.0))',
                'drop-shadow(0 0 40px rgba(215,28,28,0.3))',
                'drop-shadow(0 0 20px rgba(215,28,28,0.1))',
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
              src="/mubxlogoloader.svg"
              alt="MUBX"
              width={180}
              height={180}
              style={{
                width: 180,
                height: 180,
                objectFit: 'contain',
                userSelect: 'none',
              }}
              draggable={false}
            />
          </motion.div>

          {/* Progress bar */}
          <div
            style={{
              width: 220,
              height: 3,
              borderRadius: 2,
              background: 'rgba(255,255,255,0.08)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={
                phase === 'exit'
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1 }
              }
              transition={{ duration: phase === 'exit' ? 0.4 : 0.5, delay: phase === 'exit' ? 0 : 0.4 }}
              style={{
                height: '100%',
                borderRadius: 2,
                background: 'linear-gradient(90deg, #D71C1C, #ff4444)',
                width: `${progress}%`,
                boxShadow: '0 0 12px rgba(215,28,28,0.5)',
                transformOrigin: 'left',
              }}
            />
          </div>
        </motion.div>

        {/* Subtle corner vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={
            phase === 'exit'
              ? { scaleX: 0, opacity: 0 }
              : { scaleX: 1, opacity: 1 }
          }
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: 'linear-gradient(90deg, transparent, #D71C1C, transparent)',
            transformOrigin: 'center',
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
