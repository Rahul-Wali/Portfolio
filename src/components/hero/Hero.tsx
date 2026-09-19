"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, GitBranch, Link, Mail, MousePointer } from "lucide-react";
import { AIBackground } from "@/components/3d";
import { useReducedMotion, useDevicePerformance } from "@/hooks";
import { Button } from "@/components/ui";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const { isLowPerformance, isMobile } = useDevicePerformance();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const yTransform = useTransform(scrollY, [0, window.innerHeight], [0, 150]);
  const opacityTransform = useTransform(scrollY, [0, window.innerHeight * 0.5], [1, 0]);
  const scaleTransform = useTransform(scrollY, [0, window.innerHeight], [1, 0.95]);

  if (!mounted) return null;

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <AIBackground
        reducedMotion={reducedMotion}
        isLowPerformance={isLowPerformance}
        isMobile={isMobile}
      />

      <motion.div
        className="relative z-10 w-full max-w-6xl px-6 py-32"
        style={{
          transform: reducedMotion ? undefined : yTransform,
          opacity: reducedMotion ? 1 : opacityTransform,
          scale: reducedMotion ? 1 : scaleTransform,
        }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase"
            style={{
              background: "rgba(6, 182, 212, 0.1)",
              border: "1px solid rgba(6, 182, 212, 0.3)",
              color: "#06b6d4",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: reducedMotion ? 0 : 0.5 }}
          >
            Python Engineer · Data & GenAI · Vector Search · RAG
          </motion.span>
        </motion.div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: reducedMotion ? 0 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]"
          >
            <span className="block">Building Intelligent Systems</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500">
              from Data to AI
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-center mt-6 max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: reducedMotion ? 0 : 0.6 }}
        >
          Python Engineer focused on Data Engineering, RAG Pipelines, Vector Search and GenAI.
        </motion.p>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: reducedMotion ? 0 : 0.5 }}
        >
          <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
            RAHUL ANAND WALI
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-zinc-400 text-sm md:text-base">
            <span className="font-medium text-white">Python Engineer</span>
            <span className="text-zinc-600">·</span>
            <span>Data & GenAI Engineering</span>
            <span className="text-zinc-600">·</span>
            <span>Vector Databases & RAG Pipelines</span>
          </div>
        </motion.div>

        <motion.p
          className="text-center mt-8 max-w-2xl mx-auto text-zinc-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: reducedMotion ? 0 : 0.5 }}
        >
          Engineering practical AI and data systems across pipelines, embeddings, retrieval, machine learning and analytics.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: reducedMotion ? 0 : 0.5 }}
        >
          <Button size="lg" iconRight={<ArrowRight className="w-4 h-4" aria-hidden="true" />}>
            Explore My Work
          </Button>

          <Button variant="outline" size="lg" iconLeft={<GitBranch className="w-4 h-4" aria-hidden="true" />} asChild>
            <a href="https://github.com/Rahul-Wali" target="_blank" rel="noopener noreferrer">View GitHub</a>
          </Button>

          <Button variant="outline" size="lg" iconLeft={<Mail className="w-4 h-4" aria-hidden="true" />} asChild>
            <a href="mailto:rahulrah834@gmail.com">Let&apos;s Connect</a>
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: reducedMotion ? 0 : 1 }}
          style={{ animation: reducedMotion ? "none" : "bounce 2s infinite" }}
        >
          <MousePointer className="w-5 h-5" aria-hidden="true" />
          <span className="text-xs uppercase tracking-wider">Scroll</span>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
      `}</style>
    </section>
  );
}