"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver, useReducedMotion } from "@/hooks";
import { aboutCards } from "@/data/skills";
import { Database, Search, Brain } from "lucide-react";

const cardIcons = {
  database: Database,
  search: Search,
  brain: Brain,
};

export function About() {
  const reducedMotion = useReducedMotion();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isIntersecting ? 1 : 0, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase"
            style={{
              background: "rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              color: "#8b5cf6",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: reducedMotion ? 0 : 0.4 }}
          >
            Engineering Philosophy
          </motion.span>
          <h2
            id="about-heading"
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            I work across the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">data lifecycle</span> — from cleaning and transformation to embeddings, retrieval, machine learning and AI-powered applications.
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isIntersecting ? 1 : 0, y: 0 }}
          transition={{ delay: 0.2, duration: reducedMotion ? 0 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {aboutCards.map((card, index) => (
            <motion.article
              key={card.id}
              className="group relative p-8 rounded-2xl border transition-all duration-500"
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                borderColor: "rgba(148, 163, 184, 0.1)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{
                y: -8,
                borderColor: card.color,
                boxShadow: `0 20px 40px -20px ${card.color}40`,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: reducedMotion ? 0 : 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.span
                  className="text-xs font-mono font-bold tracking-wider"
                  style={{ color: card.color }}
                >
                  {card.number}
                </motion.span>
                <motion.h3 className="text-xl font-semibold text-white">{card.label}</motion.h3>
              </div>

              <motion.p
                className="text-zinc-400 text-sm leading-relaxed mb-6"
                style={{ color: card.color }}
              >
                {card.description}
              </motion.p>

              <motion.ul className="space-y-3">
                {card.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 + i * 0.05, duration: reducedMotion ? 0 : 0.3 }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: card.color }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                    {detail}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${card.color}10 0%, transparent 50%)`,
                }}
              />
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 md:mt-20 p-8 md:p-12 rounded-2xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
            border: "1px solid rgba(148, 163, 184, 0.1)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isIntersecting ? 1 : 0, y: 0 }}
          transition={{ delay: 0.6, duration: reducedMotion ? 0 : 0.6 }}
        >
          <motion.p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            <span className="font-medium text-white">Data</span> flows through every layer — ingestion, transformation, vectorization, retrieval, reasoning. I build systems that make this flow reliable, scalable, and intelligent.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}