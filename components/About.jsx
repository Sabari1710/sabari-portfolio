'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: '15+', unit: 'Months', label: 'Industry Experience' },
  { value: '3.33', unit: 'GPA', label: 'MS Engineering Management' },
  { value: '4', unit: '', label: 'Major Projects Led' },
  { value: '8+', unit: '', label: 'Certifications & Badges' }
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="bg-slate-50 dark:bg-slate-900 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-8 h-px bg-indigo-500 dark:bg-indigo-400" />
          <span className="text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">About</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="space-y-6">
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Engineering meets<span className="gradient-text"> execution.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {`I'm an aerospace engineer turned project lead with hands-on industry experience coordinating cross-functional teams through full UAV flight test campaigns — from concept definition and technical design reviews through high-altitude systems integration to airborne execution. Currently, I'm designing and operationalizing a student research-training program from the ground up at NeuMove Lab, Northeastern University. I hold a DGCA Remote Pilot Certificate (small-category UAS), giving me both the management perspective and operational ground truth to lead programs effectively.`}
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {`My project management foundation is built from real delivery: managing live UAV schedules, risk registers, and multi-disciplinary teams at Dashagriv Aerospace. The Google Project Management Certificate and Google AI Professional Certificate (both via Coursera) gave that experience a structured framework — project lifecycle, stakeholder communication, delivery methodologies, and AI-driven productivity tools. I'm currently deepening both through a Master of Science in Engineering Management at Northeastern University (GPA 3.33), with coursework in engineering project management, operations research, and statistical analysis.`}
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {`I'm actively seeking project, program, or operations management roles in aerospace, UAV, and autonomous systems — where technical depth and execution discipline meet to build things that actually fly.`}
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/50 rounded-2xl p-6 hover:border-indigo-300 dark:hover:border-indigo-600/50 hover:shadow-sm transition-all duration-300"
              >
                <div className="mb-2">
                  <span className="gradient-text text-4xl font-bold leading-none">{stat.value}</span>
                  {stat.unit && <span className="text-slate-500 dark:text-slate-400 text-sm ml-1.5 font-medium">{stat.unit}</span>}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
