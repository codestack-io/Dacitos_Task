// src/components/sections/CallToAction.jsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Sparkles, ArrowRight, CheckCircle2, X, Send, Loader2 } from "lucide-react"

// Real business proof-points
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
  
  // Modal & Form States
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 1200)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setIsSubmitted(false), 300) // Reset success state after animation
  }

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-[#32374b] px-6 py-28 md:py-36"
    >
      {/* Ambient floating blobs */}
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
            className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]"
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
        {/* Animated conic-gradient border wrapper */}
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

          {/* Card body */}
          <div className="relative rounded-[32px] bg-[#32374b] px-8 py-14 text-center backdrop-blur-2xl md:px-16 md:py-20">
            {/* Badge */}
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

            {/* Heading */}
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

            {/* Supporting copy */}
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
              {/* Primary button triggers modal */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
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
              </motion.button>

              {/* Secondary button */}
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

            {/* Trust indicators */}
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

      {/* Glassmorphism Consultation Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-[#050816]/75 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-[#252a3b]/90 p-6 shadow-2xl backdrop-blur-2xl sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-5 top-5 rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="mb-6 text-left">
                    <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
                      Free Consultation
                    </span>
                    <h3 className="mt-1 text-2xl font-bold text-white">
                      Let&rsquo;s discuss your project
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all duration-200"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Project Details / Requirements
                      </label>
                      <textarea
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us briefly about your property management needs..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3.5 text-sm font-semibold text-[#050816] shadow-[0_0_25px_-5px_rgba(34,211,238,0.4)] transition-all hover:shadow-[0_0_35px_-3px_rgba(34,211,238,0.6)] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                /* Success State Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Consultation Requested!</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Thank you for reaching out. Our team will review your details and contact you shortly.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-6 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}