"use client";

import AboutContent from "./AboutContent";
import AboutImages from "./AboutImages";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,.08),transparent_35%)]" />

      <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        <AboutContent />
        <AboutImages />
      </div>
    </section>
  );
}