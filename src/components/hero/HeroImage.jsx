// src/components/hero/HeroImage.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// Fixed image paths (served directly from the /public folder without '/public/' prefix)
const bannerCards = [
  {
    id: 1,
    title: "Technical Services",
    
    image: "/banner2.webp",
    tag: "Core Solutions",
  },
  {
    id: 2,
    title: "Soft Services & Housekeeping",
    
    image: "/banner1.webp",
    tag: "Operations",
  },
  {
    id: 3,
    title: "Energy & Sustainability",
    
    image: "/banner3.jpg",
    tag: "Green Tech",
  },
  {
    id: 4,
    title: "Workforce Management",
    
    image: "/banner4.webp",
  },
  {
    id: 5,
    title: "Security & Surveillance",
    
    image: "/banner5.jpg",
    tag: "Protection",
  },
  {
    id: 6,
    title: "Property Lifecycle Management",
    
    image: "/banner6.webp",
    tag: "Asset Care",
  },
  {
    id: 7,
    title: "Smart Automation & IoT",
    
    image: "/banner7.jpg",
    tag: "Innovation",
  },
  {
    id: 8,
    title: "Compliance & Safety Audits",
   
    image: "/banner8.webp",
    tag: "Governance",
  },
];

export default function HeroImage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % bannerCards.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + bannerCards.length) % bannerCards.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const currentBanner = bannerCards[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.02,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <div 
      className="relative w-full px-4 sm:px-6 lg:px-12 py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Ambient Glow */}
      <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-blue-600/10 blur-3xl opacity-80" />

      {/* Grid Layout spanning full available width */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
        
        {/* Main Hero Banner (Spans 9 Columns) */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
          className="relative lg:col-span-9 h-[520px] sm:h-[620px] lg:h-[680px] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#0d1424]/90 shadow-2xl backdrop-blur-2xl"
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentBanner.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 h-full w-full"
            >
              <div className="relative h-full w-full">
                <img
                  src={currentBanner.image}
                  alt={currentBanner.title}
                  className="h-full w-full object-cover text-amber-100 object-center transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                
                {/* Subtle dark gradient overlay for text legibility */}
                
              </div>

              {/* Banner Details Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-amber-300 backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                    {currentBanner.tag}
                  </span>
                  <span className="font-mono text-xs font-semibold tracking-widest text-white/80 bg-black/50 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                    0{currentBanner.id} / 0{bannerCards.length}
                  </span>
                </div>

                <div className="relative max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-black/40 p-6 sm:p-8 backdrop-blur-xl">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-4xl font-bold tracking-tight text-white"
                  >
                    {currentBanner.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-3 text-sm sm:text-lg text-slate-200"
                  >
                    {currentBanner.subtitle}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute bottom-10 right-10 z-20 flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="absolute bottom-10 left-10 z-20 flex items-center gap-2">
            {bannerCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-10 bg-amber-400"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Side Feature Cards (Spans 3 Columns) */}
        <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4 h-full">
          {bannerCards.slice(0, 4).map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`relative group overflow-hidden rounded-2xl border text-left p-5 transition-all duration-300 flex flex-col justify-end h-full min-h-[140px] ${
                idx === currentIndex
                  ? "border-amber-400/80 bg-amber-500/10 shadow-lg ring-1 ring-amber-400/50"
                  : "border-white/10 bg-[#0d1424]/60 hover:border-white/30 hover:bg-[#0d1424]/90"
              }`}
            >
              <div className="absolute inset-0 -z-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover opacity-25 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/80 to-transparent" />
              </div>

              <span className="text-[11px] font-mono tracking-wider text-amber-400 uppercase mb-1">
                {item.tag}
              </span>
              <h4 className="text-base font-semibold text-white line-clamp-1">
                {item.title}
              </h4>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}