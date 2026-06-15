'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EXPERIENCES = [
  {
    company: 'NeuMove Lab, Northeastern University',
    period: 'May 2026 – Present',
    role: 'Graduate Research Coordinator',
    location: 'Boston, MA',
    current: true,
    bullets: [
      'Program Design: Designing the end-to-end operational structure for a new student research-training program from the ground up — student intake pipeline, quality-control (QC) criteria, and centralized tracking systems.',
      'Process Optimization: Standardizing informal lab workflows into repeatable SOPs and reporting templates to streamline student training and improve data-collection efficiency.',
      'Technical Coordination: Developing the core motion-analysis program framework with the PI and a PhD researcher, ensuring systems and documentation scale as the program grows.'
    ]
  },
  {
    company: 'Dashagriv Aerospace Technology Pvt. Ltd.',
    period: 'Oct 2024 – Nov 2025',
    role: 'Project Lead — Flight Systems Engineer & Remote Pilot',
    location: 'Chennai, India',
    bullets: [
      'Led end-to-end UAV flight test campaigns across 3 major programs, coordinating 10+ multi-disciplinary team members through concept definition, PDRs, CDRs, and airborne execution phases.',
      'Managed project schedules, risk registers, and technical milestones using Zoho Projects and Gantt-based planning tools, ensuring on-time delivery across concurrent flight test programs.',
      'Served as DGCA-certified remote pilot for high-altitude flight test missions, providing operational ground truth that directly informed systems integration and safety decision-making.',
      'Facilitated cross-functional technical design reviews (TDR) and coordinated between avionics, structures, propulsion, and GCS teams to resolve integration blockers and maintain schedule.',
      'Authored mission operations documentation, flight test reports, and compliance records; maintained program-level status visibility for internal stakeholders and leadership.'
    ]
  },
  {
    company: 'FarmXT Innovative',
    period: 'Sep 2024 – Oct 2024',
    role: 'Trainee Drone Pilot',
    location: 'Salem, India',
    bullets: [
      'Conducted precision agriculture UAV missions over crop fields, operating DJI platforms under DGCA protocols with full pre-flight, in-flight, and post-flight documentation.',
      'Coordinated with ground teams for route planning and real-time flight adjustments, building foundational operational discipline for subsequent high-altitude test programs.'
    ]
  },
  {
    company: 'Air India Engineering Services Ltd.',
    period: 'Sep 2023 – Oct 2023',
    role: 'Aircraft Maintenance Intern',
    location: 'Trivandrum, India',
    bullets: [
      'Observed and documented scheduled and unscheduled maintenance procedures on commercial airline fleets, gaining hands-on understanding of MRO workflows and regulatory compliance.',
      'Worked alongside licensed aircraft maintenance engineers, supporting system inspections and learning to interpret technical manuals, logbooks, and airworthiness directives.'
    ]
  }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="bg-space-950 py-28 lg:py-36">
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
            Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-white mb-16 leading-tight"
        >
          Where I&apos;ve built
          <span className="gradient-text"> the work.</span>
        </motion.h2>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="relative md:pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-blue-400 bg-space-950 hidden md:block" />

                <div className="bg-space-800 border border-slate-700/50 rounded-xl p-7 hover:border-blue-500/30 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-1">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <h3 className="text-white font-bold text-lg leading-snug">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-900/50 border border-emerald-700/60 text-emerald-400 text-xs font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className="text-blue-400 text-sm font-medium mt-0.5">
                        {exp.role}
                      </p>
                      <p className="text-slate-500 text-xs mt-0.5">
                        {exp.location}
                      </p>
                    </div>
                    <span className="self-start sm:self-center flex-shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 border border-blue-800/50 text-blue-300">
                      {exp.period}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-slate-800 my-4" />

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-blue-500 mt-0.5 flex-shrink-0">&mdash;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
