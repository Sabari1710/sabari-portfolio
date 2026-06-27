'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILL_GROUPS = [
  {
    icon: '📋',
    title: 'Program & Project Management',
    skills: ['Project Lifecycle', 'Risk Management', 'Stakeholder Management', 'Schedule & Budget', 'Gantt Scheduling', 'Technical Design Reviews', 'Cross-Functional Teams']
  },
  {
    icon: '✈️',
    title: 'Aerospace & Flight Operations',
    skills: ['Flight Systems Integration', 'UAV Mission Planning', 'High-Altitude Testing', 'Remote Pilot (UAS)', 'Avionics Coordination', 'Ground Control Ops']
  },
  {
    icon: '📊',
    title: 'Analytics & Process',
    skills: ['Statistical Analysis', 'Operations Research', 'Workflow Optimization', 'Process Documentation', 'Quality Assurance', 'Compliance Reporting']
  },
  {
    icon: '🛠️',
    title: 'Tools & Platforms',
    skills: ['MS Project', 'Zoho Projects', 'Python (Data Analysis)', 'MS Excel', 'MATLAB', 'SolidWorks', 'ANSYS', 'Google Workspace']
  }
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="bg-slate-50 dark:bg-slate-900 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-indigo-500 dark:bg-indigo-400" />
          <span className="text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-16 leading-tight"
        >
          Capabilities &amp;<span className="gradient-text"> expertise.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-600/50 hover:shadow-sm transition-all duration-300"
            >
              <div className="text-2xl mb-3">{group.icon}</div>
              <h3 className="text-slate-800 dark:text-white text-sm font-bold uppercase tracking-wider mb-4 leading-snug">{group.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600/50 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
