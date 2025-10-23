import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 bg-gradient-to-b from-[#0a0f2c] via-[#0b0e1f] to-black text-gray-200">
      {/* Left side — Text content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 max-w-lg"
      >
        <span className="inline-block bg-blue-700/20 text-blue-300 px-4 py-1 rounded-full text-sm mb-4">
          Welcome to my Portfolio
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
          Hi! I’m <span className="text-blue-400">Fernando Campos</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          QA Automation Engineer & SDET with hands-on experience in API and UI testing,
          performance validation, accessibility audits, and test automation frameworks
          with <span className="text-blue-300 font-medium">TypeScript</span>,{" "}
          <span className="text-blue-300 font-medium">Playwright</span>, and{" "}
          <span className="text-blue-300 font-medium">Pactum</span>. I love building reliable
          testing solutions that ensure quality and efficiency.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 border border-blue-500 text-blue-300 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-black transition-all"
        >
          Let’s Connect <span className="text-xl">↗</span>
        </a>
      </motion.div>

      {/* Right side — Avatar / Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <div className="relative">
          <img
            src="/qa.png"
            alt="QA Automation"
            className="w-[500px] md:w-[600px] rounded-2xl shadow-[0_0_50px_-10px_rgba(65,105,225,0.5)] animate-float"
          />
          <div className="absolute inset-0 bg-blue-700/10 rounded-2xl blur-2xl opacity-30"></div>
        </div>
      </motion.div>
    </section>
  );
}