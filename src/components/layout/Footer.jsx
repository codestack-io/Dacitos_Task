// src/components/sections/Footer.jsx
"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  Building2,
  
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

// --- Data -------------------------------------------------------------
// Kept as arrays so the markup stays a clean `.map()` and content can be
// updated without touching layout.

const socialLinks = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  { label: "Facility Management", href: "#services" },
  { label: "Technical Management", href: "#services" },
  { label: "Security Services", href: "#services" },
  { label: "Housekeeping", href: "#services" },
  { label: "Property Maintenance", href: "#services" },
  { label: "Soft Services", href: "#services" },
]

const bottomLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms & Conditions", href: "#terms" },
]

// --- Motion variants ----------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const columnVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

// --- Small reusable pieces ------------------------------------------------

/** Footer link with an arrow-free, pure slide-right micro-interaction. */
function FooterLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-300"
      >
        <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
          {children}
        </span>
      </a>
    </li>
  )
}

function FooterColumnHeading({ children }) {
  return (
    <div className="mb-5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">{children}</h3>
      <span className="mt-2 block h-px w-6 bg-gradient-to-r from-cyan-400 to-blue-500" />
    </div>
  )
}

export default function Footer() {
  const reduceMotion = useReducedMotion()

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#32374b] px-6 pt-24 pb-10 md:px-12">
      {/* ambient blobs, subtler than the CTA above */}
      {!reduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[110px]"
            animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/[0.07] blur-[110px]"
            animate={{ y: [0, -18, 0], x: [0, -12, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* whole footer fades upward as it enters the viewport */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {/* Column 1 — brand */}
          <motion.div variants={columnVariants}>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-400/15 to-blue-500/15">
                <Building2 className="h-5 w-5 text-cyan-300" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-slate-50">
                Amaze <span className="text-cyan-300">PMS</span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Amaze Property Management Solutions Pvt Ltd — in-house facility, technical, and workforce
              management for portfolios across India.
            </p>

            {/* social icons */}
            <ul className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    aria-label={label}
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-colors duration-200 hover:border-cyan-400/40 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2 — company */}
          <motion.div variants={columnVariants}>
            <FooterColumnHeading>Company</FooterColumnHeading>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 — services */}
          <motion.div variants={columnVariants}>
            <FooterColumnHeading>Services</FooterColumnHeading>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 — contact */}
          <motion.div variants={columnVariants}>
            <FooterColumnHeading>Contact</FooterColumnHeading>
            <address className="space-y-4 text-sm not-italic text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <span>
                  4th floor, High Mark Chambers, Khajaguda X road,
                  <br />
                  Cyberabad, Hyderabad&ndash;500008
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <a href="tel:+919100694137" className="hover:text-cyan-300 transition-colors">
                  +91 91006 94137
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <a href="mailto:info@amazepms.com" className="hover:text-cyan-300 transition-colors">
                  info@amazepms.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <span>Mon &ndash; Sat, 9:00 AM &ndash; 6:00 PM</span>
              </div>
            </address>
          </motion.div>
        </motion.div>

        {/* bottom bar */}
        <div className="mt-16 border-t border-white/[0.08] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
            <p>© 2026 Amaze PMS. All Rights Reserved.</p>
            <ul className="flex items-center gap-6">
              {bottomLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-cyan-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}