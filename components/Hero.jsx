'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), {
  ssr: false,
  loading: () => null
})

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }
  })
}

const CREDENTIAL_BADGES = [
  { label: 'DGCA Certified Pilot', color: 'green' },
  { label: 'Google PM Certificate', color: 'blue' },
  { label: 'Northeastern University', color: 'blue' },
  { label: 'Growth Champion', color: 'amber' },
  { label: 'Boston, MA', color: 'neutral' }
]

const badgeStyles = {
  green: 'bg-emerald-900/40 border border-emerald-700/50 text-emerald-400',
  blue: 'bg-blue-900/40 border border-blue-700/50 text-blue-400',
  amber: 'bg-amber-900/40 border border-amber-700/50 text-amber-400',
  neutral: 'bg-slate-800/60 border border-slate-700/50 text-slate-400'
}

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-space-950 flex items-center"
    >
      {/* Three.js particles */}
      <ParticlesBackground />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30, 58, 138, 0.18) 0%, transparent 70%)'
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full py-32 lg:py-0 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-blue-400" />
            <span className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Aerospace &middot; UAV Systems &middot; Engineering Management
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="font-extrabold tracking-tight leading-none mb-6"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 6.5rem)' }}
          >
            <span className="text-white block">Sabari Balan</span>
            <span className="gradient-text block">Ganesan</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="text-xl text-slate-400 font-medium mb-4"
          >
            Aerospace Project Lead &middot; MS Engineering Management
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="text-slate-500 text-base leading-relaxed max-w-xl mb-10"
          >
            Leading UAV flight test campaigns from concept through high-altitude
            airborne execution. DGCA-certified remote pilot bridging technical
            depth with delivery discipline.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleScroll('#contact')
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)'
              }}
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-800/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </motion.div>

          {/* Credential badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
            className="flex flex-wrap gap-2"
          >
            {CREDENTIAL_BADGES.map((badge) => (
              <span
                key={badge.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${badgeStyles[badge.color]}`}
              >
                {badge.color === 'amber' && (
                  <span className="text-xs">🏆</span>
                )}
                {badge.color === 'neutral' && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                )}
                {badge.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-[10px] tracking-[0.3em] uppercase font-medium">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#475569"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
