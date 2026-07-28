// components/sections/ServicesSection.jsx
"use client"

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useScroll,
  useTransform,
  animate,
} from "framer-motion"
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
import { useRef, useState } from "react"
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

// Stats are separate data so the count-up animation can parse each value's
// numeric part independently of its suffix ("20M+" → 20 + "M+").
const stats = [
  { value: "20M+", label: "sq. ft. managed" },
  { value: "100%", label: "in-house delivery" },
  { value: "8", label: "audit disciplines" },
]

// ─────────────────────────────────────────────────────────────────────────
// ANIMATION CHANGE: shared premium easing curve.
// A single non-bouncy cubic-bezier (ease-out, no overshoot) used for both
// the left-column slide-in and the right-grid card reveal, so the two
// motions feel like one designed system instead of two different tools.
// ─────────────────────────────────────────────────────────────────────────
const EASE_PREMIUM = [0.16, 1, 0.3, 1]

// Word-level reveal variants for the heading — unchanged, still used by the
// nested <AnimatedHeadingLine /> inside the left column.
const wordContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const wordVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

/** Splits a line into animated word spans, preserving natural spacing. */
function AnimatedHeadingLine({ text, className = "" }) {
  const words = text.split(" ")
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1 pr-[0.28em] align-bottom">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/** Stat number that counts up from 0 the first time it enters the viewport. */
function AnimatedStat({ value, label }) {
  const match = value.match(/^([\d.]+)(.*)$/)
  const target = match ? parseFloat(match[1]) : null
  const suffix = match ? match[2] : ""
  const isInteger = target !== null && Number.isInteger(target)
  const [display, setDisplay] = useState(target !== null ? 0 : value)
  const hasAnimated = useRef(false)

  return (
    <motion.div
      onViewportEnter={() => {
        if (hasAnimated.current || target === null) return
        hasAnimated.current = true
        animate(0, target, {
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => setDisplay(isInteger ? Math.round(v) : v.toFixed(1)),
        })
      }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <dt className="sr-only">{label}</dt>
      <dd className="font-mono text-xl font-medium tabular-nums text-slate-100">
        {display}
        {suffix}
      </dd>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </motion.div>
  )
}

/** Magnetic CTA — nudges toward the cursor within its own bounds. Untouched. */
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
  const sectionRef = useRef(null)

  // Scroll-linked parallax for the ambient blobs — unchanged.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const blob1Parallax = useTransform(scrollYProgress, [0, 1], [-40, 40])
  const blob2Parallax = useTransform(scrollYProgress, [0, 1], [40, -40])

  // ───────────────────────────────────────────────────────────────────────
  // ANIMATION CHANGE 1 — Left column: slide-in-from-left variants.
  // Replaces the previous fade-up-from-below (opacity 0→1, y 24→0) with a
  // horizontal slide (opacity 0→1, x -80→0), 0.8s, EASE_PREMIUM (no bounce).
  // Defined inside the component (not at module scope) because it depends
  // on `reduceMotion`: with reduced motion, the slide is dropped entirely
  // and only a quick opacity fade remains, per requirement #6.
  // ───────────────────────────────────────────────────────────────────────
  const leftColumnVariants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_PREMIUM } },
      }
    : {
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE_PREMIUM } },
      }

  // ───────────────────────────────────────────────────────────────────────
  // ANIMATION CHANGE 2 — Right grid: staggered container.
  // staggerChildren now sits in the 0.08–0.12s range (0.1s) as requested,
  // so cards reveal one after another instead of all at once. Stagger is
  // zeroed under reduced motion so every card just fades in together.
  // ───────────────────────────────────────────────────────────────────────
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.05,
      },
    },
  }

  // ───────────────────────────────────────────────────────────────────────
  // ANIMATION CHANGE 3 — Right grid: per-card slide-in-from-right + scale.
  // Replaces the previous fade-up (opacity 0→1, y 36→0) with a slide-in
  // from the right combined with a subtle scale-up (0.96→1), matching the
  // "cards enter from the right, slightly smaller, then settle" spec.
  // No bounce: single ease-out curve, no spring/overshoot.
  // Reduced motion: falls back to a plain opacity fade, no transform.
  // ───────────────────────────────────────────────────────────────────────
  const cardVariants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_PREMIUM } },
      }
    : {
        hidden: { opacity: 0, x: 80, scale: 0.96 },
        visible: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { duration: 0.7, ease: EASE_PREMIUM },
        },
      }

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#32374b] px-6 py-28 md:px-12 md:py-36"
    >
      {/* ambient floating blobs — untouched */}
      {!reduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            style={{ y: blob1Parallax }}
            className="pointer-events-none absolute -left-32 top-10 h-80 w-80"
          >
            <motion.div
              className="h-full w-full rounded-full bg-blue-600/20 blur-[100px]"
              animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            aria-hidden="true"
            style={{ y: blob2Parallax }}
            className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96"
          >
            <motion.div
              className="h-full w-full rounded-full bg-cyan-400/10 blur-[110px]"
              animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </>
      )}

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-10">
        {/* left: thesis, copy, CTA, stats */}
        <motion.div
          variants={leftColumnVariants}
          initial="hidden"
          whileInView="visible"
          // ANIMATION CHANGE: viewport trigger now fires at ~25% visibility
          // (`amount: 0.25`) instead of a fixed pixel margin, per spec #3.
          viewport={{ once: true, amount: 0.25 }}
          className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit"
        >
          <div className="flex items-center gap-2">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="h-px w-8 bg-gradient-to-r from-cyan-400 to-blue-500"
            />
            {/* live status dot — unchanged */}
            {!reduceMotion && (
              <motion.span
                aria-hidden="true"
                className="relative h-1.5 w-1.5 rounded-full bg-cyan-400"
                animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
              Our Operating Model
            </span>
          </div>

          <motion.h2
            id="services-heading"
            variants={wordContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-5 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl"
          >
            <AnimatedHeadingLine text="Property operations," />
            <br />
            <AnimatedHeadingLine
              text="engineered for scale."
              className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent"
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-400 md:text-base"
          >
            Every audit, checklist, and shutdown plan runs in-house across more than 20 million sq. ft. of
            managed portfolios — with no subcontracted layers and no gaps in accountability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <MagneticButton>See how we operate</MagneticButton>
          </motion.div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/[0.08] pt-8">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </dl>
        </motion.div>

        {/* right: asymmetric bento grid of services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // ANIMATION CHANGE: same 25% viewport trigger as the left column,
          // so both sides of the section start reacting at the same scroll
          // position instead of drifting apart.
          viewport={{ once: true, amount: 0.25 }}
          className="grid auto-rows-[190px] grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-8 lg:auto-rows-[180px] lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              // Existing hover-lift on the grid cell — untouched, still
              // layers on top of ServiceCard's own tilt/spotlight/icon fx.
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={service.span}
            >
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