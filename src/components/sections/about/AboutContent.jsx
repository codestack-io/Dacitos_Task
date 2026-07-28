"use client";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  Building2,
  MapPin,
} from "lucide-react";


const features = [
  "15,000+ trained workforce across India",
  "PAN India property management services",
  "Integrated Facility & Technical Management",
  "Security, MEP, Housekeeping & Soft Services",
];

const stats = [
  {
    icon: Users,
    value: 15000,
    suffix: "+",
    label: "Professional Workforce",
  },
  {
    icon: Building2,
    value: 200,
    suffix: "+",
    label: "Enterprise Clients",
  },
  {
    icon: MapPin,
    value: "PAN India",
    label: "Operational Presence",
  },
];
function CountUp({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,.08),transparent_35%)]" />

      <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <ShieldCheck className="h-4 w-4" />
              About Amaze PMS
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Delivering Reliable
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Property Management
              </span>
              <br />
              Across India
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              Amaze PMS Pvt. Ltd. is the Property Management division of
              <span className="font-semibold text-white">
                {" "}
                ACTION GROUP
              </span>
              . Since 2001, the company has been delivering integrated facility
              management solutions with a strong nationwide workforce and a
              commitment to operational excellence for commercial, residential,
              industrial, and corporate properties.
            </p>

            {/* Features */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    x: 8,
                  }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  </div>

                  <p className="text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="mt-5 text-3xl font-bold text-white">
                   {typeof item.value === "number" ? (
                   <CountUp value={item.value} suffix={item.suffix} />
                  ) : (
                  item.value
                    )}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white shadow-xl shadow-cyan-500/25"
            >
              Learn More

              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Circle */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10"
            />

            {/* Main Logo Card */}

            

            {/* Floating Team Card */}

            

            {/* Experience Card */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-6 left-10 rounded-3xl border border-cyan-500/20 bg-amber-50 p-6 shadow-xl"
            >
              <h3 className="text-4xl font-bold text-white">
  <CountUp value={24} suffix="+" />
</h3>

              <p className="mt-2 text-sm text-slate-400">
                Years of Excellence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}