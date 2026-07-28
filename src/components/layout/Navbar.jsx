"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
/**
 * Amaze PMS — primary navigation.
 *
 * Design notes:
 * - "Key-swipe" underline: the hover/active indicator draws itself left→right,
 *   like a card passing over a reader, instead of a generic fade or scale.
 * - A single amber "occupancy" dot near the wordmark pulses softly — a quiet
 *   nod to live property status without leaning on a dashboard cliché.
 * - Glass state only engages after scroll; above the fold the bar stays
 *   transparent so it never fights the hero.
 */

const NAV_LINKS = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About Us",
    href: "/about",
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
  },
  {
    id: "careers",
    label: "Careers",
    href: "/careers",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
];
const SCROLL_THRESHOLD = 24;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [activeId, setActiveId] = useState(NAV_LINKS[0].id);
  const menuButtonRef = useRef(null);

  // Transparent → glass transition on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Escape to close, and return focus to the trigger
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const handleLinkClick = (id) => {
    setActiveId(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={clsx(
          "mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
          isScrolled
  ? "border border-white/10 bg-slate-900/55 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
  : "border border-white/5 bg-[#0A0E1A]/35 backdrop-blur-md"
        )}
      >
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none "
        >
          <motion.span
            whileHover={{ rotate: -6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br  text-[13px] font-bold text-[#0A0E1A]"
          >
            <Image
           src="/logo.png"
           alt="Dcitos"
           width={160}
           height={45}
/>
            <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
          </motion.span>
          <span className="text-[15px] font-semibold tracking-tight text-white">
            Amaze <span className="text-white/50">PMS</span>
          </span>
        </a>

        {/* Center links — desktop */}
   <ul
  className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-white px-4 py-2 shadow-lg lg:flex"
  onMouseLeave={() => setHoveredId(null)}
>
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            const isHovered = hoveredId === link.id;
            return (
              <li key={link.id} className="relative">
                <a
                  href={link.href}
                  onMouseEnter={() => setHoveredId(link.id)}
                  onFocus={() => setHoveredId(link.id)}
                  onBlur={() => setHoveredId(null)}
                  onClick={() => setActiveId(link.id)}
                className="relative block rounded-lg px-4 py-2 text-[13.5px] font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
                >
                  {link.label}
                 
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA — desktop */}
        <motion.a
          href="#demo"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="
hidden
lg:flex
items-center
gap-2
rounded-full
bg-gradient-to-r
from-amber-500
to-orange-500
px-6
py-3
font-semibold
text-white
shadow-lg
hover:scale-105
transition
"
        >
          Request Demo
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.a>

        {/* Hamburger — mobile */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="relative z-10 flex h-9 w-9 items-center justify-center rounded-lg text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMenuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#0A0E1A] lg:hidden"
          >
            <div className="flex items-center justify-between px-5 pt-6">
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Amaze <span className="text-white/50">PMS</span>
              </span>
            </div>

            <motion.ul
              className="mt-16 flex flex-col gap-1 px-6"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="border-b border-white/10"
                >
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className="flex items-center justify-between py-4 text-2xl font-semibold tracking-tight text-white/90 transition-colors hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
                  >
                    {link.label}
                    <ArrowUpRight size={20} className="text-white/30" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ delay: 0.28, type: "spring", stiffness: 300, damping: 24 }}
              className="mt-auto px-6 pb-10"
            >
              <a
                href="#demo"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-5 py-3.5 text-base font-semibold text-[#0A0E1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
              >
                Request Demo
                <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}