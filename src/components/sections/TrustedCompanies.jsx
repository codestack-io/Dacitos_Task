"use client";

import { motion } from "framer-motion";

const companies = [
  {
    name:"The Golf Property ",
    logo:"/logo1.jpeg"
  },
  {
    name: "Sri Sairam Towers",
    logo: "/logo2.jpeg",
  },
  {
    name: "Lodha",
    logo: "/logo3.png",
  },
  {
    name: "Oliva",
    logo: "/logo4.png",
  },
  {
    name: "JLL",
    logo: "/logo5.png",
  },
  {
    name: "Mahindra Lifespaces",
    logo: "/logo6.png",
  },
];

export default function TrustedCompanies() {
  const logos = [...companies, ...companies];

  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white py-14">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold tracking-wide text-blue-700">
            Trusted Across India
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            Trusted by{" "}
            <span className="text-blue-600">200+</span> Valued Clients
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Delivering reliable facility management, technical services,
            housekeeping and maintenance solutions for leading organisations.
          </p>
        </motion.div>

        {/* Logos */}

        <div className="relative overflow-hidden">

          {/* Left Fade */}

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-28 bg-gradient-to-r from-white to-transparent" />

          {/* Right Fade */}

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-28 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
            }}
            className="group flex w-max gap-14"
          >
            {logos.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex h-28 w-52 shrink-0 items-center justify-center rounded-3xl border border-slate-200 bg-white px-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-12 w-auto grayscale transition duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}