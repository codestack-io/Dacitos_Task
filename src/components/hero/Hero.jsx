// src/components/hero/Hero.jsx
"use client";

import HeroBackground from "./HeroBackground";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Amaze PMS introduction"
      className="relative isolate overflow-hidden bg-[#32374b] pb-20 pt-28 sm:pt-36 w-full"
    >
      {/* Animated gradient mesh, grid, and orbs — sits behind everything */}
      <HeroBackground />

      {/* Full-width container with no max-width restriction */}
      <div className="relative z-10 w-full px-2 sm:px-4 lg:px-8">
        <HeroImage />
      </div>

      {/* Bottom-center scroll button */}
      <ScrollIndicator targetId="solutions" />
    </section>
  );
}