'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const CONTACT_ITEMS = [
  {
    label: 'Email', value: 'ganesan.sab@northeastern.edu', href: 'mailto:ganesan.sab@northeastern.edu',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
  },
  {
    label: 'Phone', value: '+1-857-344-6596', href: 'tel:+18573446596',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.38-1.38a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
  },
  {
    label: 'LinkedIn', value: 'linkedin.com/in/sabaribalan1710', href: 'https://linkedin.com/in/sabaribalan1710', external: true,
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
  },
  {
    label: 'GitHub', value: 'github.com/Sabari1710', href: 'https://github.com/Sabari1710', external: true,
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
  },
  {
    label: 'Resume', value: 'Download PDF', href: '/resume.pdf', download: true,
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
  }
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="bg-slate-50 dark:bg-slate-900 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-indigo-500 dark:bg-indigo-400" />
          <span className="text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">Contact</span>
        </motion.div>

        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-slate-900 dark:text-white">Let&apos;s Build Something</span>
            <br />
            <span className="gradient-text">That Flies.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed"
          >
            Open to project, program, and operations management opportunities in aerospace, UAV, and autonomous systems. Let&apos;s connect.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}
        >
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              download={item.download ? true : undefined}
              className="group bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/50 rounded-2xl p-5 hover:border-indigo-300 dark:hover:border-indigo-600/50 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-wider font-semibold">{item.label}</span>
                <span className="text-indigo-500 dark:text-indigo-400 opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-slate-800 dark:text-white text-sm font-medium truncate">{item.value}</span>
                <svg className="text-indigo-400 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
