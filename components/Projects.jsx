'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FEATURED_PROJECT = {
  number: '01',
  category: 'Program Design · Systems Engineering',
  title: 'Engineering a Scalable Research-Training Framework',
  meta: 'NeuMove Lab, Northeastern University · Boston, MA',
  period: 'May 2026 – Present',
  role: 'Graduate Research Coordinator & Systems Developer',
  context:
    'The NeuMove Lab is a neuromechanics research laboratory at Northeastern University that relies on a steady pipeline of trained students to collect high-fidelity motion data. The Principal Investigator needed a way to onboard and train students efficiently — without consuming PhD researcher bandwidth — so the lab could scale its research output sustainably.',
  challenge: [
    'Tribal Knowledge bottleneck: onboarding relied entirely on one-on-one PhD mentorship, creating an operational constraint on lab throughput',
    'No data-quality verification: without standardized QA gates, student-collected motion data risked failing research-grade compliance for academic studies',
    'No centralized tracking: zero single source of truth for student progress, intake metrics, or system compliance across cohorts'
  ],
  strategy:
    'Applied an Engineering Management systems framework: treated the training lifecycle as a managed, repeatable process. Embedded myself in the data pipeline first — personally executing software workflows and documenting my own path — so the program would be built from real practice, not assumptions.',
  deliverables: [
    {
      num: '01',
      title: 'Milestone-Based Training Pipeline',
      detail:
        'Multi-stage roadmap with defined completion criteria moving students from orientation to independently collecting research-grade motion data'
    },
    {
      num: '02',
      title: 'Quality Assurance Gates',
      detail:
        'Objective QC criteria and formal sign-off process ensuring all student-collected data meets research-grade standards before use in studies'
    },
    {
      num: '03',
      title: 'Centralized Tracking System',
      detail:
        'Single source of truth for applications, onboarding compliance, milestone progress, and data reports — updated in real time'
    },
    {
      num: '04',
      title: 'Standardized Documentation Suite',
      detail:
        'Intake forms, onboarding guides, session workflows, and QC checklists — fully decoupled from individual dependency so any future coordinator can run the program'
    }
  ],
  skills: [
    'Program & Process Design',
    'SOP Development',
    'Quality Control / Assurance',
    'Stakeholder Management',
    'Operations & Tracking Systems'
  ]
}

const PROJECTS = [
  {
    number: '02',
    category: 'Engineering Statistics',
    title: 'Statistical Analysis of E-Commerce Demand Patterns',
    tagline:
      'Identifying operational drivers of demand variability across 107,552 transactions.',
    meta: 'Northeastern University · IE 6200 · Spring 2026',
    role: 'Project Coordinator & Documentation Lead · 5-Member Team',
    description:
      'Team analysis of the Brazilian E-Commerce Public Dataset (Olist) covering nearly two years of commerce activity. Applied seven inferential statistical methods to identify which factors drive day-to-day demand variability, then translated findings into actionable inventory and staffing recommendations.',
    findings: [
      'Weekday demand 33% higher than weekends (t = 6.180, p < 0.001) — statistically and operationally significant',
      'Product category demand differed significantly (F = 38.674, p < 0.001), supporting tiered inventory policies over uniform targets',
      'Price was NOT a statistically significant linear driver of demand',
      '95th percentile (284 orders/day) recommended over Normal-based intervals for safety stock planning'
    ],
    bullets: null,
    tools: ['Python', 'pandas', 'scipy', 'matplotlib', 'ANOVA', "Welch's t-test", 'Tukey HSD']
  },
  {
    number: '03',
    category: 'Aerospace Design',
    title: 'Aerodynamic Analysis of Flat Plate in Tandem Configuration',
    tagline:
      'Wind tunnel investigation of tandem flat plate aerodynamics with flight control applications.',
    meta: 'Anna University · B.E. Aerospace Capstone · Nov 2023 – Apr 2024',
    role: 'Team Lead — Experimental Design & Coordination',
    description:
      'Wind tunnel study investigating aerodynamic behavior of flat plates in tandem, simulating jet tab arrangements used in flight control surfaces. Explored how upstream flow interactions affect downstream plate performance across multiple Reynolds number ranges.',
    findings: null,
    bullets: [
      'Led full experimental lifecycle — initial design, fabrication, data acquisition, and analysis',
      'Designed wind tunnel setup and fabricated the experimental rig in collaboration with teammates',
      'Performed data analysis in MATLAB characterizing aerodynamic interactions between upstream and downstream plates'
    ],
    tools: ['Wind Tunnel Instrumentation', 'MATLAB', 'Experimental Design', 'Aerodynamic Analysis']
  },
  {
    number: '04',
    category: 'Propulsion Systems',
    title: 'Smart Launch Vehicle — Vulcain Engine Propulsion Analysis',
    tagline:
      'Conceptual structural analysis of the Ariane 5 cryogenic main-stage engine system.',
    meta: 'Anna University · B.E. Aerospace · Jun 2023 – Oct 2023',
    role: 'Structural & Systems Analysis Contributor',
    description:
      'Conceptual study of the Vulcain LH2/LOX cryogenic engine used in the Ariane 5 launch vehicle, focusing on load distribution, stress analysis, and structural validation at the system level. Multi-disciplinary collaboration across propulsion, structures, and systems teams.',
    findings: null,
    bullets: [
      'Contributed to structural and system-level calculations supporting the team\'s conceptual propulsion design',
      'Modeled components in SolidWorks for propulsion structural validation',
      'Used ANSYS for stress and load distribution validation and post-processing'
    ],
    tools: ['SolidWorks', 'ANSYS', 'Structural Analysis', 'FEA', 'Systems Engineering']
  }
]

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

        {/* ── Featured Project: NeuMove Lab ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8 bg-space-800 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/40 transition-colors duration-300"
        >
          {/* Top bar */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-900/50 border border-emerald-700/60 text-emerald-400 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ONGOING
            </span>
            <span className="text-slate-600 text-xs font-bold tracking-widest">
              PROJECT {FEATURED_PROJECT.number}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-900/40 border border-blue-700/40 text-blue-400">
              {FEATURED_PROJECT.category}
            </span>
          </div>

          {/* Title block */}
          <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight mb-1">
            {FEATURED_PROJECT.title}
          </h3>
          <p className="text-slate-500 text-sm mb-0.5">{FEATURED_PROJECT.meta}</p>
          <p className="text-blue-400 text-sm font-medium mb-6">
            {FEATURED_PROJECT.role} &middot; {FEATURED_PROJECT.period}
          </p>

          <div className="h-px bg-slate-800 mb-6" />

          {/* Two-col body */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: Context + Challenge + Strategy + Skills */}
            <div className="lg:col-span-3 space-y-5">
              <p className="text-slate-400 text-sm leading-relaxed">
                {FEATURED_PROJECT.context}
              </p>

              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-3">
                  The Challenge
                </p>
                <div className="space-y-2.5">
                  {FEATURED_PROJECT.challenge.map((c, i) => (
                    <div key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="text-amber-500 flex-shrink-0 mt-0.5">&#x25B8;</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">
                  The Strategy
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {FEATURED_PROJECT.strategy}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {FEATURED_PROJECT.skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center px-2.5 py-1 rounded-full bg-space-950 border border-slate-800 text-slate-400 text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Deliverables */}
            <div className="lg:col-span-2">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
                Core Deliverables
              </p>
              <div className="space-y-3">
                {FEATURED_PROJECT.deliverables.map((d) => (
                  <div
                    key={d.num}
                    className="flex gap-3 bg-space-950/70 border border-slate-800/60 rounded-lg p-4"
                  >
                    <span className="gradient-text text-xs font-bold flex-shrink-0 mt-0.5">
                      {d.num}
                    </span>
                    <div>
                      <p className="text-white text-xs font-semibold mb-0.5">{d.title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{d.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Grid: remaining 3 projects ── */}
        <div className="grid lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 + idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              <h3 className="text-white font-bold text-base leading-snug mb-1">
                {project.title}
              </h3>
              <p className="text-slate-500 text-xs italic mb-3 leading-snug">{project.tagline}</p>

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

              {/* Bullet list */}
              {project.bullets && (
                <ul className="mb-4 space-y-1.5">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-slate-400 text-xs leading-relaxed">
                      <span className="text-blue-500 flex-shrink-0">&mdash;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
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
        </div>
      </div>
    </section>
  )
}
