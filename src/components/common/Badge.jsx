"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Badge({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-md"
    >
      <Sparkles size={15} />

      {children}
    </motion.div>
  );
}