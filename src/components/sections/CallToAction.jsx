// src/components/sections/CallToAction.jsx
"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"

// Real business proof-points — kept as data so the stagger animation
// and markup stay decoupled from content.
const trustIndicators = [
  { label: "24+ Years Experience" },
  { label: "15,000+ Workforce" },
  { label: "PAN India Presence" },
  { label: "200+ Enterprise Clients" },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function CallToAction() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-[#32374b] px-6 py-28 md:py-36"
    >
      {/* ambient floating blobs — match Services/Hero atmosphere */}
      {!reduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]"
            animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]"
            animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-5xl"
      >
        {/* animated conic-gradient border wrapper */}
        <div className="relative overflow-hidden rounded-[32px] p-px">
          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              className="absolute -inset-1/2 opacity-70"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, #22d3ee 12%, transparent 28%, transparent 72%, #3b82f6 88%, transparent 100%)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          )}

          {/* card body */}
          <div className="relative rounded-[32px] bg-[#32374b] px-8 py-14 text-center backdrop-blur-2xl md:px-16 md:py-20">
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-1.5"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
                Let&rsquo;s work together
              </span>
            </motion.div>

            {/* heading */}
            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl"
            >
              Ready to run your properties{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                without the guesswork?
              </span>
            </motion.h2>

            {/* supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 md:text-base"
            >
              Talk to our team about facility, technical, and workforce management built for portfolios that
              can&rsquo;t afford downtime — audited, compliant, and delivered in-house.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              {/* primary */}
              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-sm font-semibold text-[#050816] shadow-[0_0_30px_-6px_rgba(34,211,238,0.5)] transition-shadow duration-300 hover:shadow-[0_0_40px_-4px_rgba(34,211,238,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              >
                Request a Free Consultation
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </motion.a>

              {/* secondary */}
              <motion.a
                href="#sales"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-colors duration-300 hover:border-cyan-300/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40"
              >
                Contact Sales
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>

            {/* trust indicators */}
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/[0.08] pt-8"
            >
              {trustIndicators.map((item) => (
                <motion.li
                  key={item.label}
                  variants={itemVariants}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                  {item.label}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}