"use client";

import { motion } from "framer-motion";

const ORBS = [
  {
    id: "amber",
    className:
      "left-[5%] top-[15%] h-[22rem] w-[22rem] md:h-[28rem] md:w-[28rem] bg-[radial-gradient(circle,rgba(245,158,11,0.22),transparent_70%)]",
    animate: {
      x: [0, 20, 0],
      y: [0, -30, 0],
      scale: [1, 1.08, 1],
    },
    duration: 14,
  },

  {
    id: "violet",
    className:
      "right-[4%] top-[8%] h-[24rem] w-[24rem] md:h-[32rem] md:w-[32rem] bg-[radial-gradient(circle,rgba(139,92,246,0.22),transparent_70%)]",
    animate: {
      x: [0, -25, 0],
      y: [0, 25, 0],
      scale: [1, 1.06, 1],
    },
    duration: 18,
  },

  {
    id: "emerald",
    className:
      "left-[35%] bottom-[0%] h-[18rem] w-[18rem] md:h-[24rem] md:w-[24rem] bg-[radial-gradient(circle,rgba(16,185,129,0.18),transparent_70%)]",
    animate: {
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
    },
    duration: 16,
  },
];

export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >

      {/* Base Background */}
      <div className="absolute w-full inset-0 bg-[#32374b]" />


      {/* Grid Pattern */}
      <div
        className="
          absolute inset-0
          opacity-[0.05]
          pointer-events-none
        "
        style={{
          backgroundImage:
            `
            linear-gradient(
              to right,
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            )
            `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 30%, transparent 75%)",
        }}
      />


      {/* Main Hero Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 45% at 50% 20%, rgba(245,158,11,0.18), transparent 75%)",
        }}
      />


      {/* Floating Orbs */}
      <div className="absolute inset-0">

        {ORBS.map((orb) => (

          <motion.div
            key={orb.id}
            className={`
              absolute
              rounded-full
              blur-[80px]
              pointer-events-none
              will-change-transform
              ${orb.className}
            `}
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



      {/* Noise Texture */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          mix-blend-overlay
          pointer-events-none
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />


      {/* Edge Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(7,11,22,0.95) 100%)",
        }}
      />

    </div>
  );
}