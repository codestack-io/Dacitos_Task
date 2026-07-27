"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator({ targetId = "" }) {
  const handleScroll = () => {
    if (!targetId) return;

    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.button
      type="button"
      aria-label="Scroll to next section"
      onClick={handleScroll}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.2,
        duration: 0.6,
      }}
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
    >
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-14 w-10 items-start justify-center rounded-full border border-white/15 bg-white/5 p-2 backdrop-blur-xl"
      >
        <ChevronDown className="h-5 w-5 text-cyan-400" />
      </motion.div>
    </motion.button>
  );
}