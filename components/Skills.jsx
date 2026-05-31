'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILL_GROUPS = [
  {
    icon: '📋',
    title: 'Program & Project Management',
    skills: [
      'Project Lifecycle',
      'Risk Management',
      'Stakeholder Management',
      'Schedule & Budget',
      'Gantt Scheduling',
      'Technical Design Reviews',
      'Cross-Functional Teams'
    ]
  },
  {
    icon: '✈️',
    title: 'Aerospace & Flight Operations',
    skills: [
      'Flight Systems Integration',
      'UAV Mission Planning',
      'High-Altitude Testing',
      'Remote Pilot (UAS)',
      'Avionics Coordination',
      'Ground Control Ops'
    ]
  },
  {
    icon: '📊',
    title: 'Analytics & Process',
    skills: [
      'Statistical Analysis',
      'Operations Research',
      'Workflow Optimization',
      'Process Documentation',
      'Quality Assurance',
      'Compliance Reporting'
    ]
  },
  {
    icon: '🛠️',
    title: 'Tools & Platforms',
    skills: [
      'MS Project',
      'Zoho Projects',
      'Python (Data Analysis)',
      'MS Excel',
      'MATLAB',
      'SolidWorks',
      'ANSYS',
      'Google Workspace'
    ]
  }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="bg-space-900 py-28 lg:py-36">
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
            Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-white mb-16 leading-tight"
        >
          Capabilities &amp;
          <span className="gradient-text"> expertise.</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="bg-space-800 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-colors duration-300"
            >
              <div className="text-2xl mb-3">{group.icon}</div>
              <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 leading-snug">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-space-950 border border-slate-800/80 text-slate-400 hover:text-blue-400 hover:border-blue-900/50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
