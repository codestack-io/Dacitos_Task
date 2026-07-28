"use client"

import Link from "next/link";
import Image from "next/image"
import { motion } from "framer-motion"
import Lenis from "lenis"
import {
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  Award,
} from "lucide-react"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Motion Variants --------------------------------------------------------

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

// --- Data -------------------------------------------------------------------

const missionVisionValues = [
  {
    id: "mission",
    title: "Our Mission",
    description:
      "Our Mission is to be a leading provider of comprehensive property management solutions in PAN INDIA. We are committed to delivering exceptional services that exceed our clients' expectations, while prioritizing technology, sustainability, and the well-being of our employees.",
    icon: Target,
    badgeText: "Mission",
    badgeColor: "from-amber-500 to-orange-600",
  },
  {
    id: "vision",
    title: "Our Vision",
    description:
      "To set the benchmark in integrated facility management across India by continuously innovating, leveraging cutting-edge technology, and fostering long-term strategic partnerships built on trust, efficiency, and operational excellence.",
    icon: Eye,
    badgeText: "Vision",
    badgeColor: "from-blue-600 to-indigo-700",
  },
  {
    id: "values",
    title: "Our Core Values",
    description:
      "Integrity, Transparency, Excellence, and Customer-Centricity. We empower our 15,000+ strong workforce through rigorous training, ethical leadership, and a steadfast dedication to safety and quality standard compliance.",
    icon: Award,
    badgeText: "Values",
    badgeColor: "from-emerald-500 to-teal-700",
  },
]

export default function AboutUsPage() {
    const cardsRef = useRef([]);
const missionSectionRef = useRef(null);

useEffect(() => {
  gsap.fromTo(
    cardsRef.current,
    {
      opacity: 0,
      y: 80,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: missionSectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    }
  );
}, []);
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 text-slate-800">
      
      {/* ------------------------------------------------------------------ */}
      {/* 1. TOP HEADER CONTACT BAR                                          */}
      {/* ------------------------------------------------------------------ */}
      <header className="relative z-20 bg-[#061238] text-xs text-slate-300 py-2.5 px-4 md:px-12 border-b border-white/10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span>4th floor, High Mark Chambers, Khajaguda X road, Cyberabad, Hyderabad-500008</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <a href="mailto:Info@amazepms.com" className="hover:text-cyan-300 transition-colors">
                Info@amazepms.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <a href="tel:9100694137" className="hover:text-cyan-300 transition-colors">
                9100694137
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a href="#" aria-label="Facebook" className="p-1.5 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <FaFacebookF className="h-3 w-3" />
            </a>
            <a href="#" aria-label="Instagram" className="p-1.5 rounded bg-pink-600 text-white hover:bg-pink-700 transition-colors">
              <FaInstagram className="h-3 w-3" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-1.5 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors">
              <FaLinkedinIn className="h-3 w-3" />
            </a>
          </div>

        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* 2. HERO BREADCRUMB BANNER                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative flex h-64 md:h-80 w-full items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="City Skyline"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Decorative Radial & Wave Vector Shapes */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
        <svg className="pointer-events-none absolute left-0 top-0 opacity-20" width="400" height="300" viewBox="0 0 400 300" fill="none">
          <circle cx="50" cy="50" r="150" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="200" stroke="white" strokeWidth="1" />
        </svg>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">About Us</h1>
          <nav className="mt-3 flex items-center justify-center gap-2 text-sm  text-slate-300">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
  Home
</Link>
            <ChevronRight className="h-4 w-4 text-cyan-400" />
            <span className="font-semibold text-white">About Us</span>
          </nav>
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. MAIN ABOUT CONTENT SECTION                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative px-6 py-16 md:py-24 md:px-12 bg-white">
        
        {/* Background Curved Vector Accent */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-25">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <path d="M0 200 Q 100 100, 200 200 T 400 200" stroke="#0284c7" strokeWidth="1.5" />
            <path d="M0 230 Q 100 130, 200 230 T 400 230" stroke="#0284c7" strokeWidth="1.5" />
            <path d="M0 260 Q 100 160, 200 260 T 400 260" stroke="#0284c7" strokeWidth="1.5" />
          </svg>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-[#061238]">
              About Us
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-sm md:text-base text-slate-600 leading-relaxed">
              Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of ACTION GROUP of Companies founded in the year 2001 by Mr. Subhani Abdul, a veteran from the Indian Navy, a Certified Security Practitioner, and a renowned name in the Service Industry. Amaze has its Head Quarters in Cyberabad, Telangana – INDIA, providing Property Management Solutions PAN INDIA, partnering with leading clientele with 15000 + strong strength of professionals. We specialize in offering comprehensive integrated Property Management Services such as Housekeeping, MEP (Mechanical, Electrical, Plumbing), Security, Pest Control, Gardening, STP & WTP, Parking, Swimming Pool Maintenance, office support services, deep cleaning services etc all these services are inhouse.
            </motion.p>

            {/* Feature Highlights */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 fill-blue-600/10" />
                <span className="font-semibold text-slate-800 text-sm">Strong 15000+ Work Force</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 fill-blue-600/10" />
                <span className="font-semibold text-slate-800 text-sm">200+ Clients</span>
              </div>
              <div className="flex items-center gap-2.5 sm:col-span-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 fill-blue-600/10" />
                <span className="font-semibold text-slate-800 text-sm">Presence PAN INDIA</span>
              </div>
            </motion.div>

            {/* Button */}
            <motion.div variants={fadeInUp} className="pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-between rounded-full border border-blue-600 pl-6 pr-1.5 py-1.5 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white shadow-sm hover:shadow-blue-500/20"
              >
                <span className="mr-4">GET STARTED WITH US</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white transition-transform duration-300 group-hover:bg-white group-hover:text-blue-600 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Layered Visual Graphic */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 relative flex justify-center">
            
            {/* Background Dot Pattern Accent */}
            <div className="absolute -top-6 left-6 -z-10 grid grid-cols-6 gap-2 opacity-30">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-slate-700" />
              ))}
            </div>

            <div className="relative w-full max-w-md">
              {/* Blue Shield / Action Group Badge Container */}
              <div className="relative aspect-[4/5] w-4/5 ml-auto rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-4 shadow-xl flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex flex-col items-center justify-center border border-white/20 rounded-xl p-6 text-center text-white">
                  
                  {/* Action Group Crest */}
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-4 border-yellow-400 bg-red-600 shadow-lg transition-transform duration-300 hover:scale-105">
                    <div className="text-center">
                      <span className="block text-[10px] font-bold tracking-wider text-yellow-300 uppercase">Action Group</span>
                      <span className="block text-3xl font-extrabold tracking-tight text-yellow-300">AG</span>
                      <span className="block text-[9px] font-medium text-white">ESTD : 2001</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Overlapping Team Photo */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-1/3 w-3/4 rounded-xl border-4 border-white bg-white p-1 shadow-2xl overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                    alt="Amaze PMS Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

          </motion.div>
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. MISSION | VISION | VALUES SECTION                               */}
      {/* ------------------------------------------------------------------ */}
      <section
  ref={missionSectionRef}
  className="relative px-6 py-16 md:py-24 md:px-12 bg-slate-50"
>
        <div className="mx-auto max-w-7xl">
          
          {/* Section Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#061238]">
              Mission | Vision | Values
            </h2>
            <div className="mt-3 mx-auto h-1 w-16 rounded bg-blue-600" />
          </motion.div>

          {/* Cards Grid */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {missionVisionValues.map((item, index) => {
  const Icon = item.icon;

  return (
    <div
      key={item.id}
      ref={(el) => (cardsRef.current[index] = el)}
      className="overflow-hidden rounded-2xl bg-white p-6 md:p-10 shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
    >
      {/* Left Text */}
      <div className="md:col-span-8 space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-[#061238]">
          {item.title}
        </h3>

        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Right Badge */}
      <div className="md:col-span-4 flex justify-center md:justify-end">
        <div className="relative flex h-36 w-36 items-center justify-center">
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-tr ${item.badgeColor} opacity-90 shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300`}
          />
          <div className="relative z-10 flex flex-col items-center justify-center text-white text-center p-2">
            <Icon className="h-8 w-8 mb-1" />
            <span className="text-sm font-bold tracking-wide uppercase">
              {item.badgeText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
})}
          </div>

        </div>
      </section>

    </div>
  )
}