'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EDUCATION = [
  {
    university: 'Northeastern University',
    period: 'Jan 2026 – Expected May 2028',
    degree: 'MS Engineering Management',
    location: 'Boston, MA',
    gpa: 'GPA: 3.33',
    coursework: [
      'Engineering Project Management',
      'Operations Research',
      'Engineering Probability & Statistics'
    ],
    logo: 'NEU'
  },
  {
    university: 'KCG College of Technology',
    subtext: 'Anna University',
    period: 'Nov 2020 – Jun 2024',
    degree: 'BE Aerospace Engineering',
    location: 'Chennai, India',
    gpa: 'CGPA: 7.41',
    coursework: [
      'Flight Mechanics',
      'Aircraft Structures',
      'Propulsion Systems',
      'Avionics'
    ],
    logo: 'KCG'
  }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="bg-space-950 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-blue-400" />
          <span className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Education
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-white mb-16 leading-tight"
        >
          Academic
          <span className="gradient-text"> foundation.</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-6"
        >
          {EDUCATION.map((edu) => (
            <motion.div
              key={edu.university}
              variants={cardVariants}
              className="bg-space-800 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/30 transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  {/* Logo placeholder */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)'
                    }}
                  >
                    {edu.logo}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-snug">
                      {edu.university}
                    </h3>
                    {edu.subtext && (
                      <p className="text-slate-500 text-xs">{edu.subtext}</p>
                    )}
                  </div>
                </div>
                <span className="flex-shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 border border-blue-800/50 text-blue-300">
                  {edu.period}
                </span>
              </div>

              {/* Degree */}
              <p className="text-blue-400 font-semibold text-base mb-2">{edu.degree}</p>

              {/* Location + GPA */}
              <div className="flex items-center gap-3 text-slate-500 text-sm mb-6">
                <span className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {edu.location}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                <span className="font-medium text-slate-400">{edu.gpa}</span>
              </div>

              {/* Coursework */}
              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-space-950 border border-slate-800 text-slate-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
