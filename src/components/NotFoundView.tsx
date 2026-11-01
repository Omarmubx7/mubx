import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const COMMANDS = [
  {
    command: 'cd /the-page-you-wanted',
    output: 'bash: cd: /the-page-you-wanted: No such file or directory',
  },
  {
    command: 'git show this-page',
    output: "fatal: pathspec 'this-page' did not match any file(s) known to git",
  },
  {
    command: 'ls ./clues',
    output: "ls: cannot access './clues': No such file or directory",
  },
];

export default function NotFoundView() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-16 text-white">
      {/* CRT scanlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 4px)',
        }}
      />

      {/* Neon bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/10 blur-[140px]"
      />

      <div className="relative w-full max-w-2xl">
        <span className="sr-only">
          404 — the page you requested does not exist. Return home or view the work.
        </span>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#080808] shadow-[0_30px_80px_-40px_rgba(255,46,46,0.45)]">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-[11px] text-white/40">
              omar@mubx: ~/portfolio
            </span>
            <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-red">
              404
            </span>
          </div>

          <div aria-hidden="true" className="px-5 py-6 font-mono text-[12.5px] leading-7 sm:text-[13.5px]">
            {COMMANDS.map((entry) => (
              <div key={entry.command} className="mb-4 last:mb-0">
                <p className="text-white/90">
                  <span className="text-red">$</span> {entry.command}
                </p>
                <p className="text-white/45">{entry.output}</p>
              </div>
            ))}

            <p className="flex items-center gap-2 text-white/90">
              <span className="text-red">$</span>
              <span className="inline-block h-[14px] w-[7px] animate-pulse bg-red align-middle" />
            </p>
          </div>
        </div>

        <div className="mt-8 sm:pl-1">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            You found nothing<span className="text-red">.</span>
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#9E9490]">
            Even the best devs hit dead ends. This route was never committed — go back home,
            or better: hire me to build the next thing.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Return home
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-red hover:text-red"
            >
              View projects
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-[#9E9490] transition-colors hover:text-red"
            >
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
