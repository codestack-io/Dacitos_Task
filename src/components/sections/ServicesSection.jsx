// components/sections/ServicesSection.jsx
"use client"

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"
import {
  Building2,
  ShieldCheck,
  ClipboardList,
  Gauge,
  CalendarClock,
  Landmark,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react"
import { useRef } from "react"
import ServiceCard from "@/components/services/ServiceCard"

// Content consolidated from the original "Why Choose Us" list into 7
// capabilities, sized by how much weight each one carries.
const services = [
  {
    icon: Building2,
    title: "Portfolio at scale",
    description:
      "Over 20 million sq. ft. under active management, delivered entirely in-house — no subcontracted layers, no gaps in accountability.",
    span: "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "Compliance & risk audits",
    description:
      "Recurring EHS, security, technical, fire & safety, inventory, process, and customer-satisfaction audits, site by site.",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: ClipboardList,
    title: "Site-specific SOPs",
    description: "Every property runs on a checklist built around its own conditions, not a generic template.",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: Gauge,
    title: "Cost optimization",
    description: "Internal audits surface power-saving and manpower plans that lower cost, quarter over quarter.",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: CalendarClock,
    title: "Shutdown coordination",
    description: "Annual shutdown maintenance planned, mobilized, and supervised end-to-end by our own team.",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: Landmark,
    title: "Contracts & liaison",
    description:
      "AMC tracking, renewal negotiation, and direct coordination with government agencies — handled before anything lapses.",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: HeartHandshake,
    title: "Staff welfare, built in",
    description:
      "Festival gifts, performance rewards, ₹2 lakh insurance, and compensation cover — our people are protected like our portfolios.",
    span: "md:col-span-2 lg:col-span-2",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

/** Magnetic CTA — nudges toward the cursor within its own bounds. */
function MagneticButton({ children }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15 })
  const springY = useSpring(y, { stiffness: 200, damping: 15 })

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }
  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 px-6 py-3 text-sm font-medium text-cyan-200 backdrop-blur-md transition-colors hover:border-cyan-300/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
      <span className="relative">{children}</span>
      <ArrowUpRight
        className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </motion.button>
  )
}

export default function ServicesSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#32374b] px-6 py-28 md:px-12 md:py-36"
    >
      {/* ambient floating blobs — disabled under prefers-reduced-motion */}
      {!reduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[110px]"
            animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-10">
        {/* left: thesis, copy, CTA, stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit"
        >
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-blue-500" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
              Our Operating Model
            </span>
          </div>

          <h2 id="services-heading" className="mt-5 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
            Property operations,
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              engineered for scale.
            </span>
          </h2>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-400 md:text-base">
            Every audit, checklist, and shutdown plan runs in-house across more than 20 million sq. ft. of
            managed portfolios — with no subcontracted layers and no gaps in accountability.
          </p>

          <div className="mt-8">
            <MagneticButton>See how we operate</MagneticButton>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/[0.08] pt-8">
            {[
              { value: "20M+", label: "sq. ft. managed" },
              { value: "100%", label: "in-house delivery" },
              { value: "8", label: "audit disciplines" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-xl font-medium text-slate-100">{stat.value}</dd>
                <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* right: asymmetric bento grid of services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid auto-rows-[190px] grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-8 lg:auto-rows-[180px] lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants} className={service.span}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                featured={service.featured}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}