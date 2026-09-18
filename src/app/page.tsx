"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation/Navigation";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { EngineeringPipeline } from "@/components/about/EngineeringPipeline";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import { Education } from "@/components/education/Education";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { useReducedMotion, useDevicePerformance } from "@/hooks";

export default function Home() {
  const reducedMotion = useReducedMotion();
  const { isLowPerformance, isMobile } = useDevicePerformance();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-zinc-950 z-50">
        <motion.div
          className="flex flex-col items-center gap-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p className="text-zinc-400 text-sm font-mono">
            INITIALIZING SYSTEM...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-x-hidden">

      <Navigation />

      <main className="flex-1 relative z-10" id="main-content">
        <Hero />
        <About />
        <EngineeringPipeline />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />

      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: reducedMotion ? 0 : 0.5 }}
      >
        <motion.a
          href="#home"
          className="w-12 h-12 rounded-full flex items-center justify-center group"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(148, 163, 184, 0.1)",
            backdropFilter: "blur(10px)",
            color: "#64748b",
          }}
          whileHover={{ scale: 1.1, borderColor: "#06b6d4", color: "#06b6d4" }}
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
}