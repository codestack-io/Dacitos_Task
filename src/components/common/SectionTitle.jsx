"use client";

import { motion } from "framer-motion";
import Badge from "./Badge";

export default function SectionTitle({
  badge,
  title,
  description,
  center = false,
}) {
  return (
    <div
      className={`mb-16 ${
        center ? "text-center mx-auto max-w-3xl" : ""
      }`}
    >
      {badge && <Badge>{badge}</Badge>}

      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.15,
        }}
        className="mt-5 font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="mt-6 text-lg leading-8 text-muted"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}