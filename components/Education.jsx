'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EDUCATION = [
  {
    university: 'Northeastern University',
    period: 'Jan 2026 – Expected May 2028',
    degree: 'MS Engineering Management',
    location: 'Boston, MA',
    gpa: 'GPA: 3.33 / 4.0',
    status: 'Current Station',
    statusColor: 'emerald',
    coursework: ['Engineering Project Management', 'Operations Research', 'Engineering Probability & Statistics'],
    logo: 'NEU'
  },
  {
    university: 'KCG College of Technology',
    subtext: 'Anna University',
    period: 'Nov 2020 – Jun 2024',
    degree: 'BE Aerospace Engineering',
    location: 'Chennai, India',
    gpa: 'CGPA: 7.41 / 10',
    status: 'Completed',
    statusColor: 'slate',
    coursework: ['Flight Mechanics', 'Aircraft Structures', 'Propulsion Systems', 'Avionics'],
    logo: 'KCG'
  }
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="bg-white dark:bg-slate-950 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-indigo-500 dark:bg-indigo-400" />
          <span className="text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">Education</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-16 leading-tight"
        >
          Academic<span className="gradient-text"> foundation.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.university}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/50 rounded-2xl p-8 hover:border-indigo-300 dark:hover:border-indigo-600/50 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' }}
                  >
                    {edu.logo}
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-snug">{edu.university}</h3>
                    {edu.subtext && <p className="text-slate-400 dark:text-slate-500 text-xs">{edu.subtext}</p>}
                  </div>
                </div>
                <span className={`flex-shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  edu.statusColor === 'emerald'
                    ? 'bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-400'
                    : 'bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400'
                }`}>
                  {edu.status}
                </span>
              </div>

              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-base mb-2">{edu.degree}</p>

              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm mb-6">
                <span>{edu.location}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span className="font-semibold text-slate-700 dark:text-slate-300 font-mono text-xs">{edu.gpa}</span>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-700/50 pt-4">
                <p className="text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-3">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span key={course} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600/50 text-slate-600 dark:text-slate-300">
                      {course}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-mono">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
