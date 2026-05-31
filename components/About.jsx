'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: '13', unit: 'Months', label: 'Industry Experience' },
  { value: '3.33', unit: 'GPA', label: 'MS Engineering Management' },
  { value: '3', unit: '', label: 'Major Projects Led' },
  { value: '7+', unit: '', label: 'Certifications & Badges' }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="bg-space-900 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-8 h-px bg-blue-400" />
          <span className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase">
            About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Engineering meets
              <span className="gradient-text"> execution.</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed text-base">
              {`I'm an aerospace engineer turned project lead with 13 months of hands-on industry experience coordinating cross-functional teams through full UAV flight test campaigns — from concept definition and technical design reviews through high-altitude systems integration to airborne execution. I hold a DGCA Remote Pilot Certificate (small-category UAS), giving me both the management perspective and operational ground truth to lead flight programs effectively.`}
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed text-base">
              {`My project management foundation is built from real delivery: managing live UAV schedules, risk registers, and multi-disciplinary teams at Dashagriv Aerospace. The Google Project Management Certificate (Coursera) gave that experience a structured framework — project lifecycle, stakeholder communication, and delivery methodologies. I'm currently deepening both through a Master of Science in Engineering Management at Northeastern University (GPA 3.33), with coursework in engineering project management, operations research, and statistical analysis.`}
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed text-base">
              {`I'm actively seeking project, program, or product management roles in aerospace, UAV, and autonomous systems — where technical depth and execution discipline meet to build things that actually fly.`}
            </motion.p>
          </motion.div>

          {/* Right: Stat cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-space-800 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-colors duration-300"
              >
                <div className="mb-2">
                  <span className="gradient-text text-4xl font-bold leading-none">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-slate-500 text-sm ml-1.5 font-medium">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
