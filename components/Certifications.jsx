'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CERT_GROUPS = [
  {
    category: 'Project Management',
    certs: [{ name: 'Google Project Management Certificate', issuer: 'Google · Coursera', date: 'May 2026' }]
  },
  {
    category: 'AI & Technology',
    certs: [{ name: 'Google AI Professional Certificate', issuer: 'Google · Coursera', date: 'Jun 2026' }]
  },
  {
    category: 'Aerospace & Drone',
    certs: [
      { name: 'DGCA Remote Pilot Certificate (Small-Category UAS)', issuer: 'DGCA, India', date: '' },
      { name: 'Fundamentals of Flight Mechanics', issuer: 'ISAE-SUPAERO, France', date: '' },
      { name: 'Advanced Drone Innovations', issuer: 'TiHAN, IIT Hyderabad', date: '' }
    ]
  },
  {
    category: 'Northeastern University',
    certs: [
      { name: 'Graduate Leadership Institute Badge', issuer: 'Lead Northeastern', date: '' },
      { name: 'Foundations of Business Learning Badge', issuer: 'Northeastern University', date: '' }
    ]
  },
  {
    category: 'Safety & First Aid',
    certs: [{ name: 'CPR and AED Certification', issuer: 'American Heart Association', date: '' }]
  }
]

const LEADERSHIP = [
  {
    org: 'KCG Space Technology Center',
    role: 'Technical Coordinator',
    period: 'Jan 2025 – Nov 2025',
    location: 'Chennai',
    bullets: [
      'Served as primary technical liaison between student research teams and faculty, coordinating lab resources, project reviews, and documentation standards.',
      'Managed facility scheduling and equipment access for 20+ active student projects across avionics, propulsion, and structures disciplines.'
    ]
  },
  {
    org: 'Rotaract Club of KCG College',
    role: 'PRO Head',
    period: 'May 2023 – Apr 2024',
    location: 'Chennai',
    bullets: [
      'Organized and promoted 8+ community workshops and skill-building events engaging 100+ participants, managing communications, scheduling, and logistics.'
    ]
  }
]

const CheckIcon = () => (
  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/50 flex items-center justify-center mt-0.5">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
)

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const totalCerts = CERT_GROUPS.reduce((acc, g) => acc + g.certs.length, 0)

  return (
    <section id="certifications" className="bg-white dark:bg-slate-950 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-indigo-500 dark:bg-indigo-400" />
          <span className="text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">Certifications & Leadership</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-16 leading-tight"
        >
          Credentials &amp;<span className="gradient-text"> impact.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left 2/3 */}
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {CERT_GROUPS.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + gi * 0.08 }}
              >
                <h3 className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">{group.category}</h3>
                <div className="space-y-3">
                  {group.certs.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/50 rounded-2xl p-4 hover:border-indigo-300 dark:hover:border-indigo-600/50 transition-colors duration-300"
                    >
                      <CheckIcon />
                      <div className="flex-1 min-w-0">
                        <p className="text-slate-900 dark:text-white text-sm font-semibold leading-snug">{cert.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-slate-500 dark:text-slate-400 text-xs">{cert.issuer}</span>
                          {cert.date && (
                            <>
                              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                              <span className="text-slate-400 dark:text-slate-500 text-xs">{cert.date}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Award */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Award</h3>
              <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <p className="text-amber-800 dark:text-amber-300 font-bold text-base leading-snug">Growth Champion Award</p>
                    <p className="text-amber-700 dark:text-amber-400 text-sm mt-1">Graduate Student Mentor (GSM) Program</p>
                    <p className="text-amber-600 dark:text-amber-600 text-xs mt-0.5">Northeastern University · Spring 2026</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Leadership</h3>
              <div className="space-y-4">
                {LEADERSHIP.map((item) => (
                  <div
                    key={item.org}
                    className="bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/50 rounded-2xl p-5 hover:border-indigo-300 dark:hover:border-indigo-600/50 transition-colors duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <p className="text-slate-900 dark:text-white font-semibold text-sm">{item.org}</p>
                        <p className="text-indigo-600 dark:text-indigo-400 text-xs font-medium">{item.role}</p>
                        <p className="text-slate-400 dark:text-slate-500 text-xs">{item.location}</p>
                      </div>
                      <span className="self-start sm:self-center flex-shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400">
                        {item.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                          <span className="text-indigo-400 flex-shrink-0 mt-0.5">▪</span><span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right 1/3: At a Glance */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-slate-900 dark:text-white font-bold text-base mb-6">At a Glance</h3>
              <div className="space-y-5">
                {[
                  { label: 'Certifications', value: totalCerts },
                  { label: 'Domains', value: 5 },
                  { label: 'Leadership Roles', value: 2 },
                  { label: 'Awards', value: 1 }
                ].map((item, i) => (
                  <div key={item.label} className={`flex items-center justify-between py-3 ${i < 3 ? 'border-b border-slate-200 dark:border-slate-700/50' : ''}`}>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">{item.label}</span>
                    <span className="gradient-text font-bold text-2xl">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700/50">
                <p className="text-slate-400 dark:text-slate-500 text-xs leading-relaxed">
                  Credentialed across project management, AI, aerospace operations, leadership, and safety domains — with direct application across all major programs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
