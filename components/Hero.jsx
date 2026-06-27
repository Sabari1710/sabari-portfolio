'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay }
  })
}

const BADGES = [
  { label: 'DGCA Certified Pilot', color: 'emerald' },
  { label: 'Google PM Certificate', color: 'indigo' },
  { label: 'Google AI Certificate', color: 'indigo' },
  { label: 'Northeastern University', color: 'indigo' },
  { label: 'Growth Champion', color: 'amber' },
  { label: 'Boston, MA', color: 'slate' }
]

const badgeClass = {
  emerald: 'bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-400',
  indigo: 'bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700/50 text-indigo-700 dark:text-indigo-400',
  amber: 'bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700/50 text-amber-700 dark:text-amber-400',
  slate: 'bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
}

export default function Hero() {
  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px'
        }}
      />

      {/* Radial gradient blob */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(99,102,241,0.08) 0%, transparent 60%)'
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 80%, rgba(124,58,237,0.06) 0%, transparent 60%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full py-32 lg:py-0 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-indigo-500 dark:bg-indigo-400" />
            <span className="text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Aerospace &middot; UAV Systems &middot; Engineering Management
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
            className="font-extrabold tracking-tight leading-none mb-6 text-slate-900 dark:text-white"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 6.5rem)' }}
          >
            <span className="block">Sabari Balan</span>
            <span className="gradient-text block">Ganesan</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.35}
            className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-4"
          >
            Aerospace Project Lead &middot; MS Engineering Management
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.45}
            className="text-slate-500 dark:text-slate-500 text-base leading-relaxed max-w-xl mb-10"
          >
            Leading UAV flight test campaigns from concept through high-altitude airborne execution.
            DGCA-certified remote pilot bridging technical depth with delivery discipline.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.55}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25"
              style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' }}
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </motion.div>

          {/* Credential badges */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.65}
            className="flex flex-wrap gap-2"
          >
            {BADGES.map((badge) => (
              <span
                key={badge.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${badgeClass[badge.color]}`}
              >
                {badge.color === 'amber' && <span>🏆</span>}
                {badge.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-400 dark:text-slate-600 text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
