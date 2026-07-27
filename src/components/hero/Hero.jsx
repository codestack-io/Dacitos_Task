"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

/**
 * Amaze PMS — Hero section.
 *
 * Hero.jsx only handles layout: a two-column grid (copy left, dashboard
 * mockup right) that collapses to a single stacked column on mobile per
 * the brief. All visuals, copy, and motion live in the child components
 * so each can be iterated on independently.
 *
 * Shared design tokens (kept consistent across every hero/* component,
 * and matching the Navbar already built):
 *   - Canvas:    #0A0E1A  (ink navy)
 *   - Surface:   #10162A  (card / glass base, used at low opacity)
 *   - Accent:    amber-300 → amber-600 gradient (#FCD34D → #D97706)
 *   - Signal:    emerald-400 (#34D399) — the "live property" indicator,
 *                same dot motif used on the Navbar logo
 *   - Text:      white/90 primary, white/60 secondary, white/40 tertiary
 *   - Radius:    rounded-2xl for cards, rounded-full for pills/buttons
 *
 * Copy direction: language stays in property-management vocabulary
 * (occupancy, bookings, maintenance) rather than generic SaaS filler —
 * carried through in HeroContent, FloatingCards, and StatsCard.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Amaze PMS introduction"
      className="relative isolate overflow-hidden bg-[#0A0E1A] px-4 pb-24 pt-36 sm:px-6 lg:px-8 lg:pb-32 lg:pt-44"
    >
      {/* Animated gradient mesh, grid, and orbs — sits behind everything */}
      <HeroBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-10 xl:gap-16">
        {/* Left: badge, headline, paragraph, CTAs */}
       <div className="relative z-20">
            <HeroContent />
        </div>

        <div className="relative z-10">
          <HeroImage />
        </div>
      </div>

      {/* Bottom-center, scrolls to the next section on click */}
      <ScrollIndicator targetId="solutions" />
    </section>
  );
}