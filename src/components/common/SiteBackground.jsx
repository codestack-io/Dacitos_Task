"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    className:
      "left-[-8rem] top-20 h-[28rem] w-[28rem] bg-cyan-500/10",
    duration: 16,
    y: [-20, 20, -20],
  },
  {
    className:
      "right-[-10rem] top-[35%] h-[32rem] w-[32rem] bg-blue-500/10",
    duration: 22,
    y: [25, -25, 25],
  },
  {
    className:
      "left-1/3 bottom-[-8rem] h-[24rem] w-[24rem] bg-indigo-500/10",
    duration: 18,
    y: [-15, 15, -15],
  },
];

export default function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]"
    >
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,.08),transparent_35%)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Orbs */}
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          animate={{
            y: orb.y,
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full blur-[130px] ${orb.className}`}
        />
      ))}

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(5,8,22,.9)_100%)]" />
    </div>
  );
}