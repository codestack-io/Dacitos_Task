"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-xl",

  secondary:
    "bg-white text-foreground border border-border hover:border-primary",

  outline:
    "border border-primary text-primary hover:bg-primary hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  icon = true,
  className,
  ...props
}) {
  return (
    <motion.button
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "group inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}

      {icon && (
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </motion.button>
  );
}