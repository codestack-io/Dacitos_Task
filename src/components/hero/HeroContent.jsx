"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star, Users } from "lucide-react";

// Headline split into words so each can reveal on its own beat. The
// highlighted phrase is tagged separately so it can carry the amber
// gradient treatment without breaking the word-by-word animation.
const HEADLINE_LINES = [
  { words: ["Run", "Every", "Property"], highlight: false },
  { words: ["Like", "It"], highlight: false },
  { words: ["Runs", "Itself."], highlight: true },
];

const TRUST_ITEMS = [
  {
    id: "rating",
    icon: Star,
    label: "4.9/5 customer rating",
  },
  {
    id: "managers",
    icon: Users,
    label: "Trusted by 500+ property managers",
  },
];

// Shared stagger container — each direct child fades + slides up with a
// small blur, offset by a fixed delay so the sequence reads badge →
// headline → description → buttons → trust row.
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 220, damping: 24, mass: 0.9 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-start gap-7 text-left"
    >
      {/* Badge */}
      <motion.div variants={itemVariants}>
        <motion.span
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[13px] font-medium text-white/80 backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_0_28px_rgba(251,191,36,0.25)]"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-amber-400/40 via-white/10 to-amber-400/40 opacity-0 blur-[6px] transition-opacity duration-500 group-hover:opacity-100"
          />
          <Sparkles size={14} className="text-amber-400" />
          AI-Powered Property Management
        </motion.span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-6xl xl:text-7xl"
      >
        {HEADLINE_LINES.map((line, lineIndex) => (
          <motion.span
            key={lineIndex}
            variants={containerVariants}
            className={`block ${
              line.highlight
                ? "bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent"
                : ""
            }`}
          >
            {line.words.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
                {wordIndex < line.words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
      >
        One dashboard for bookings, maintenance, tenants, and revenue — so
        your team spends less time switching tabs and more time managing property.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        variants={itemVariants}
        className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
      >
        <motion.a
          href="#demo"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-7 py-3.5 text-[15px] font-semibold text-[#0A0E1A] shadow-[0_10px_30px_rgba(217,119,6,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70"
          aria-label="Request a demo of Amaze PMS"
        >
          Request Demo
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.a>

        <motion.a
          href="#platform"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-[15px] font-semibold text-white/90 backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Explore the Amaze PMS platform"
        >
          Explore Platform
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.a>
      </motion.div>

      {/* Trust indicators */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-3 pt-2 text-sm text-white/50 sm:flex-row sm:items-center sm:gap-6"
      >
        {TRUST_ITEMS.map(({ id, icon: Icon, label }) => (
          <span key={id} className="inline-flex items-center gap-2">
            <Icon size={15} className="text-amber-400" />
            {label}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}