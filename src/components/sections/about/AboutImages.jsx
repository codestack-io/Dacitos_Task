"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Users, ShieldCheck } from "lucide-react";

export default function AboutImages() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto flex w-full max-w-[560px] items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Animated Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[470px] w-[470px] rounded-full border border-cyan-500/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[380px] w-[380px] rounded-full border border-white/5"
      />

      {/* Main Image */}
      <motion.div
        whileHover={{
          rotate: -2,
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}
        className="relative z-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_40px_80px_rgba(0,0,0,.45)] backdrop-blur-xl"
      >
        <Image
          src="/logo7.jpeg"
          alt="Amaze PMS Team"
          width={700}
          height={800}
          className="rounded-[24px] object-cover"
          priority
        />
      </motion.div>

      {/* Card 1 */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-6 top-10 z-20 rounded-3xl border border-white/10 bg-cyan-500/10 p-5 backdrop-blur-xl shadow-2xl"
      >
        <div className="flex items-center gap-3 ">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
            <Users className="h-6 w-6 text-white" />
          </div>

          <div >
            <h4 className="text-xl font-bold ">
              15,000+
            </h4>

            <p className="text-xs text-slate-400">
              Professionals
            </p>
          </div>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        animate={{
          y: [0, 14, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-6 bottom-12 z-20 rounded-3xl border border-white/10 bg-[#0f172a]/95 p-5 backdrop-blur-xl shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500">
            <MapPin className="h-6 w-6 text-white" />
          </div>

          <div>
            <h4 className="absolute -right-6 bottom-12 z-30 rounded-3xl bg-blue-300 p-3 backdrop-blur-xl">
              PAN India
            </h4>

            <p className="text-xs text-slate-400">
              Service Network
            </p>
          </div>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        animate={{
          x: [0, 8, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-16 z-20 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-cyan-400" />

          <span className="text-sm font-medium text-white">
            24+ Years Experience
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}