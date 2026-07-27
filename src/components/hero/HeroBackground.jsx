"use client";

import { motion } from "framer-motion";

// Reusable orb configs — position, size, color, and timing all differ so
// the three shapes never read as copies of one animation.
const ORBS = [
  {
    id: "amber",
    className:
      "left-[8%] top-[12%] h-[26rem] w-[26rem] bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.35),transparent_70%)]",
    animate: { y: [0, -28, 0], scale: [1, 1.08, 1] },
    duration: 13,
  },
  {
    id: "violet",
    className:
      "right-[6%] top-[6%] h-[30rem] w-[30rem] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.28),transparent_70%)]",
    animate: { y: [0, 24, 0], scale: [1, 1.05, 1] },
    duration: 17,
  },
  {
    id: "emerald",
    className:
      "left-[32%] bottom-[4%] h-[22rem] w-[22rem] bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.22),transparent_70%)]",
    animate: { y: [0, -18, 0], scale: [1, 1.1, 1] },
    duration: 15,
  },
];

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Layer 1 — dark base */}
      <div className="absolute inset-0 z-0 bg-[#0A0E1A] pointer-events-none" />

      {/* Layer 2 — subtle grid, faded toward the edges via mask */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 85%)",
        }}
      />

      {/* Layer 3 — large radial gradient wash behind the hero */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, rgba(217,119,6,0.16) 0%, rgba(10,14,26,0) 70%)",
        }}
      />

      {/* Layer 4 — floating glow orbs */}
      <div className="absolute inset-0 z-30">
        {ORBS.map((orb) => (
          <motion.div
            key={orb.id}
            className={`pointer-events-none absolute rounded-full blur-3xl ${orb.className}`}
            animate={orb.animate}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Layer 5 — CSS-only noise texture */}
      <div
        className="pointer-events-none absolute inset-0 z-40 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Vignette — keeps the edges dark so content stays the focus */}
      <div
        className="pointer-events-none absolute inset-0 z-40"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 40%, transparent 55%, rgba(10,14,26,0.9) 100%)",
        }}
      />
    </div>
  );
}