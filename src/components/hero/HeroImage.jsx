"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Bell,
  Search,
  Home,
  Wallet,
  Wrench,
  Users,
  TrendingUp,
  Calendar,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
} from "lucide-react";
const stats = [
  {
    icon: Building2,
    value: "248",
    label: "Total Properties",
    growth: "+12%",
    color: "from-cyan-500 to-sky-500",
  },
  {
    icon: Home,
    value: "1,842",
    label: "Occupied Units",
    growth: "+5%",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Wallet,
    value: "£98K",
    label: "Monthly Revenue",
    growth: "+18%",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Wrench,
    value: "36",
    label: "Maintenance",
    growth: "-8%",
    color: "from-amber-500 to-orange-500",
  },
];
const revenueData = [42, 56, 48, 74, 62, 96, 84];

const chartPath =
  "M20 170 C60 130 90 145 120 115 S190 60 220 78 S290 145 320 95 S390 20 430 42 S500 85 530 58";

export default function HeroImage() {
  return (
    <motion.div
      role="img"
      aria-label="Amaze PMS Dashboard Preview"
      initial={{ opacity: 0, x: 80, scale: 0.96, rotate: 2 }}
      animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="relative mx-auto w-full max-w-4xl"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Dashboard */}
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.01,
        }}
        transition={{ duration: 0.3 }}
        className="
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_40px_120px_rgba(0,0,0,.55)]
          overflow-hidden
        "
      >
        {/* Content will be added here */}
      </motion.div>
    </motion.div>
  );
}
{/* =========================
    Top Navigation
========================= */}
<div className="border-b border-white/10 px-6 py-5">
  <div className="flex items-center justify-between gap-4">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30">
        <Building2 className="h-6 w-6 text-white" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white">
          Amaze PMS
        </h3>

        <p className="text-xs text-zinc-400">
          Property Management
        </p>
      </div>
    </div>

    {/* Search */}
    <div className="hidden flex-1 px-10 lg:block">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 backdrop-blur-xl"
      >
        <Search className="h-4 w-4 text-zinc-400" />

        <input
          type="text"
          placeholder="Search properties..."
          className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none"
        />
      </motion.div>
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-4">

      {/* Notification */}
      <motion.button
        whileHover={{
          scale: 1.08,
          rotate: 8,
        }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
      >
        <Bell className="h-5 w-5 text-white" />

        <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-zinc-900" />
      </motion.button>

      {/* Avatar */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
      >
        <div className="relative">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 font-semibold text-white">
            AS
          </div>

          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-zinc-900 bg-emerald-400" />
        </div>

        <div className="hidden md:block">
          <p className="text-sm font-medium text-white">
            Admin
          </p>

          <p className="text-xs text-zinc-400">
            Online
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</div>
{/* =========================
    Statistics
========================= */}

<div className="grid grid-cols-2 gap-5 p-6 xl:grid-cols-4">
  {stats.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.label}
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2 + index * 0.1,
          duration: 0.5,
        }}
        whileHover={{
          y: -6,
          scale: 1.03,
        }}
        className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,.15)]"
      >
        <div className="flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>

          <motion.div
            whileHover={{ x: 3, y: -3 }}
            className="rounded-full bg-emerald-500/15 p-2"
          >
            <ArrowUpRight className="h-4 w-4 text-emerald-400" />
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5 + index * 0.1,
          }}
          className="mt-6 text-3xl font-bold text-white"
        >
          {item.value}
        </motion.h2>

        <p className="mt-2 text-sm text-zinc-400">
          {item.label}
        </p>

        <div className="mt-5 flex items-center gap-2">
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              item.growth.startsWith("+")
                ? "bg-emerald-500/15 text-emerald-400"
                : "bg-red-500/15 text-red-400"
            }`}
          >
            {item.growth}
          </span>

          <span className="text-xs text-zinc-500">
            this month
          </span>
        </div>
      </motion.div>
    );
  })}
</div>
{/* =========================
      Revenue Analytics
========================= */}

<div className="grid gap-6 px-6 pb-6 lg:grid-cols-[2fr_1fr]">

  {/* Revenue Card */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    whileHover={{ y: -4 }}
    className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
  >

    {/* Header */}

    <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

      <div>
        <p className="text-sm text-zinc-400">
          Revenue Analytics
        </p>

        <h2 className="mt-1 text-3xl font-bold text-white">
          £98,450
        </h2>
      </div>

      <div className="flex items-center gap-2">

        {["Week", "Month", "Year"].map((tab, i) => (
          <button
            key={tab}
            className={`rounded-xl px-3 py-2 text-sm transition ${
              i === 1
                ? "bg-cyan-500 text-white"
                : "bg-white/5 text-zinc-400 hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>
    </div>

    {/* Chart */}

    <div className="relative h-[330px] p-6">

      {/* Grid */}

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Badge */}

      <div className="absolute right-6 top-6 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
        +18.4%
      </div>

      {/* SVG */}

      <svg
        viewBox="0 0 550 200"
        className="absolute inset-0 h-full w-full"
      >
        <defs>

          <linearGradient
            id="lineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          <linearGradient
            id="fillGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#22d3ee55" />
            <stop offset="100%" stopColor="#22d3ee00" />
          </linearGradient>

        </defs>

        {/* Area */}

        <motion.path
          d={`${chartPath} L530 200 L20 200 Z`}
          fill="url(#fillGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Line */}

        <motion.path
          d={chartPath}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />

        {/* Points */}

        {revenueData.map((_, index) => {

          const points = [
            [20,170],
            [95,135],
            [170,120],
            [245,70],
            [320,95],
            [420,42],
            [530,58],
          ];

          return (
            <motion.circle
              key={index}
              cx={points[index][0]}
              cy={points[index][1]}
              r="5"
              fill="#22d3ee"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 1 + index * 0.1,
              }}
            />
          );

        })}

      </svg>

      {/* Bottom Labels */}

      <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs text-zinc-500">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>

    </div>

  </motion.div>

  {/* Empty column for next step */}
  <div className="space-y-6">
    {/* Occupancy card goes here in Step 5 */}
  </div>

</div>