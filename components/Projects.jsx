'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
  {
    number: '01',
    category: 'Flight Systems',
    title: 'High-Altitude UAV Flight Test Campaign — Fixed-Wing VTOL Platform',
    meta: 'Dashagriv Aerospace · 2024–2025',
    role: 'Project Lead & Remote Pilot',
    description:
      'Led an end-to-end flight test campaign for a fixed-wing VTOL UAV designed for high-altitude reconnaissance. Managed all phases from technical design review through systems integration to airborne execution, coordinating avionics, propulsion, and GCS sub-teams.',
    findings: [
      'Executed 15+ flight test sorties at altitudes above 3,000m MSL with zero critical incidents',
      'Reduced inter-team integration conflicts by 40% through structured CDR and TDR processes',
      'Authored complete flight test documentation package: test plans, risk register, and airworthiness reports',
      'Delivered program milestones on schedule across a 12-month execution window'
    ],
    tools: ['Zoho Projects', 'Gantt Scheduling', 'Risk Register', 'UAS GCS', 'DGCA Protocols']
  },
  {
    number: '02',
    category: 'Engineering Management',
    title: 'Engineering Project Management — Coursework Case Studies',
    meta: 'Northeastern University · Spring 2026',
    role: 'Graduate Researcher',
    description:
      'Applied advanced project lifecycle frameworks, operations research models, and statistical analysis techniques to real-world aerospace and engineering scenarios as part of MS Engineering Management coursework. Developed project plans, resource allocation models, and risk frameworks for complex systems programs.',
    findings: null,
    tools: ['MS Project', 'Operations Research', 'Statistical Analysis', 'Python', 'Excel']
  },
  {
    number: '03',
    category: 'Aerospace Design',
    title: 'Precision Agriculture UAV — Mission Operations & Ground Systems',
    meta: 'FarmXT Innovative · 2024',
    role: 'Trainee Remote Pilot & Mission Planner',
    description:
      'Planned and executed precision agriculture UAV missions over large-area crop fields, handling route optimization, payload management, and real-time flight coordination. Developed ground operations discipline including DGCA-compliant pre-flight checklists, flight log documentation, and post-mission data handoff procedures.',
    findings: null,
    tools: ['DJI Platforms', 'Mission Planner', 'DGCA Compliance', 'Ground Control', 'Flight Logging']
  }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="bg-space-900 py-28 lg:py-36">
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
            Projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-white mb-16 leading-tight"
        >
          Programs I&apos;ve
          <span className="gradient-text"> delivered.</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.number}
              variants={cardVariants}
              className="group bg-space-800 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-600 text-xs font-bold tracking-widest">
                  PROJECT {project.number}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-900/40 border border-blue-700/40 text-blue-400">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base leading-snug mb-2">
                {project.title}
              </h3>

              {/* Meta */}
              <p className="text-slate-500 text-xs mb-1">{project.meta}</p>
              <p className="text-blue-400 text-xs font-medium mb-4">{project.role}</p>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Findings block */}
              {project.findings && (
                <div className="border-l-2 border-blue-500/60 pl-4 mb-4 space-y-1.5">
                  {project.findings.map((f, i) => (
                    <p key={i} className="text-slate-400 text-xs leading-relaxed">
                      &mdash; {f}
                    </p>
                  ))}
                </div>
              )}

              {/* Tool chips */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center px-2 py-0.5 rounded-full bg-space-950 border border-slate-800 text-slate-500 text-xs"
                  >
                    {tool}
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
