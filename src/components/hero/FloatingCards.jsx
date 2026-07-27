"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FloatingCard({
  icon: Icon,
  title,
  subtitle,
  value,
  badge,
  gradient = "from-amber-400 to-orange-500",
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className={className}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay,
        }}
        className="
          relative
          w-64
          rounded-3xl
          border
          border-white/10
          bg-white/10
          p-5
          backdrop-blur-2xl
          shadow-[0_25px_60px_rgba(0,0,0,.35)]
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            inset-0
            rounded-3xl
            bg-gradient-to-br
            from-white/5
            to-transparent
            pointer-events-none
          "
        />

        {/* Top */}
        <div className="flex items-start justify-between">
          <div
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              ${gradient}
            `}
          >
            <Icon size={22} className="text-white" />
          </div>

          {badge && (
            <span
              className="
                rounded-full
                bg-emerald-500/15
                px-3
                py-1
                text-xs
                font-medium
                text-emerald-400
              "
            >
              {badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="mt-5">
          <p className="text-sm text-white/60">
            {subtitle}
          </p>

          <h3 className="mt-1 text-xl font-bold text-white">
            {title}
          </h3>

          {value && (
            <p className="mt-2 text-3xl font-bold text-white">
              {value}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-sm text-white/50">
            View Details
          </span>

          <motion.div
            whileHover={{
              x: 4,
              y: -4,
            }}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-white/10
            "
          >
            <ArrowUpRight
              size={18}
              className="text-white"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}