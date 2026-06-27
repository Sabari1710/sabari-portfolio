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
    ],
    skills: ['Program Design', 'Process Optimization', 'SOPs', 'Quality Control', 'Tracking Systems', 'Stakeholder Management']
  },
  {
    company: 'Dashagriv Aerospace Technology Pvt. Ltd.',
    period: 'Oct 2024 – Nov 2025',
    role: 'Project Lead — Flight Systems Engineer & Remote Pilot',
    location: 'Chennai, India',
    current: false,
    bullets: [
      'Led end-to-end UAV flight test campaigns across 3 major programs, coordinating 10+ multi-disciplinary team members through concept definition, PDRs, CDRs, and airborne execution phases.',
      'Managed project schedules, risk registers, and technical milestones using Zoho Projects and Gantt-based planning tools, ensuring on-time delivery across concurrent flight test programs.',
      'Served as DGCA-certified remote pilot for high-altitude flight test missions, providing operational ground truth that directly informed systems integration and safety decision-making.',
      'Facilitated cross-functional technical design reviews (TDR) and coordinated between avionics, structures, propulsion, and GCS teams to resolve integration blockers and maintain schedule.',
      'Authored mission operations documentation, flight test reports, and compliance records; maintained program-level status visibility for internal stakeholders and leadership.'
    ],
    skills: ['UAV Flight Test', 'Zoho Projects', 'Risk Management', 'TDR/CDR', 'DGCA Compliance', 'Gantt Planning']
  },
  {
    company: 'FarmXT Innovative',
    period: 'Sep 2024 – Oct 2024',
    role: 'Trainee Drone Pilot',
    location: 'Salem, India',
    current: false,
    bullets: [
      'Conducted precision agriculture UAV missions over crop fields, operating DJI platforms under DGCA protocols with full pre-flight, in-flight, and post-flight documentation.',
      'Coordinated with ground teams for route planning and real-time flight adjustments, building foundational operational discipline for subsequent high-altitude test programs.'
    ],
    skills: ['DJI Platforms', 'DGCA Protocols', 'Mission Planning', 'Flight Logging']
  },
  {
    company: 'Air India Engineering Services Ltd.',
    period: 'Sep 2023 – Oct 2023',
    role: 'Aircraft Maintenance Intern',
    location: 'Trivandrum, India',
    current: false,
    bullets: [
      'Observed and documented scheduled and unscheduled maintenance procedures on commercial airline fleets, gaining hands-on understanding of MRO workflows and regulatory compliance.',
      'Worked alongside licensed aircraft maintenance engineers, supporting system inspections and learning to interpret technical manuals, logbooks, and airworthiness directives.'
    ],
    skills: ['MRO Workflows', 'Airworthiness', 'Technical Manuals', 'Aviation Compliance']
  }
]

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="bg-white dark:bg-slate-950 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-indigo-500 dark:bg-indigo-400" />
          <span className="text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-16 leading-tight"
        >
          Where I&apos;ve built<span className="gradient-text"> the work.</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/60 via-indigo-300/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative md:pl-10"
              >
                <div className="absolute left-0 top-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-950 hidden md:block" />

                <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/50 rounded-2xl p-6 md:p-7 hover:border-indigo-300 dark:hover:border-indigo-600/50 hover:shadow-sm transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-1">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-snug">{exp.company}</h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mt-0.5">{exp.role}</p>
                      <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{exp.location}</p>
                    </div>
                    <span className="self-start sm:self-center flex-shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400">
                      {exp.period}
                    </span>
                  </div>

                  <div className="h-px bg-slate-100 dark:bg-slate-700/50 my-4" />

                  <ul className="space-y-2.5 mb-4">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <span className="text-indigo-400 flex-shrink-0 mt-0.5">▪</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/40">
                    {exp.skills.map((s) => (
                      <span key={s} className="px-2.5 py-0.5 rounded-lg text-[10px] uppercase font-bold bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600/50 text-slate-500 dark:text-slate-400">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
