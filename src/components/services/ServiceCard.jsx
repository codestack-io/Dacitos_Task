// components/sections/ServiceCard.jsx
"use client"

// NOTE: No changes made to this file. All scroll-reveal animation logic
// (slide-in direction, stagger timing, viewport trigger, reduced-motion
// fallback) lives in the parent `ServicesSection.jsx`, which wraps each
// <ServiceCard /> in its own motion.div for the reveal. This component only
// owns the "rest" → "hover" pointer-interaction states (tilt, spotlight,
// icon rotation, accent line, arrow), which were required to stay exactly
// as they are — so nothing here needed to change.

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"

// Hover-state variants — the parent sets whileHover="hover", these children
// inherit it automatically because they share the same variant keys.
const iconVariants = {
  rest: { rotate: 0, scale: 1 },
  hover: { rotate: 10, scale: 1.08, transition: { type: "spring", stiffness: 260, damping: 18 } },
}

const lineVariants = {
  rest: { scaleX: 0.18 },
  hover: { scaleX: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const arrowVariants = {
  rest: { x: 0, y: 0, opacity: 0.45 },
  hover: { x: 3, y: -3, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
}

/**
 * A single glass service card with:
 * - cursor-tracking spotlight glow
 * - subtle 3D tilt toward the pointer
 * - icon rotation, expanding accent line, and arrow nudge on hover
 */
export default function ServiceCard({ icon: Icon, title, description, featured = false, className = "" }) {
  const cardRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 })

  function handleMouseMove(e) {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top

    // Spotlight position (imperative — avoids a re-render per pointer move)
    card.style.setProperty("--mx", `${px}px`)
    card.style.setProperty("--my", `${py}px`)

    if (reduceMotion) return
    const relX = px / rect.width
    const relY = py / rect.height
    rotateY.set((relX - 0.5) * 8)
    rotateX.set((0.5 - relY) * 8)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial="rest"
      animate="rest"
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 900 }}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/30 focus-within:border-cyan-400/40 md:p-7 ${className}`}
    >
      {/* cursor-tracking spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(34,211,238,0.10), transparent 65%)",
        }}
      />

      <div className="relative z-10">
        <motion.div
          variants={iconVariants}
          className={`inline-flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 text-cyan-300 ${
            featured ? "h-14 w-14" : "h-12 w-12"
          }`}
        >
          <Icon className={featured ? "h-6 w-6" : "h-5 w-5"} strokeWidth={1.75} aria-hidden="true" />
        </motion.div>

        <h3
          className={`mt-5 font-semibold tracking-tight text-slate-50 ${
            featured ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 leading-relaxed text-slate-400 ${
            featured ? "max-w-md text-[15px] md:text-base" : "text-sm"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-6 flex items-center justify-between">
        <motion.span
          variants={lineVariants}
          style={{ transformOrigin: "left" }}
          className="h-px w-full max-w-[72px] bg-gradient-to-r from-cyan-400 to-blue-500"
        />
        <motion.span variants={arrowVariants} className="text-slate-500 group-hover:text-cyan-300">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </div>
    </motion.div>
  )
}