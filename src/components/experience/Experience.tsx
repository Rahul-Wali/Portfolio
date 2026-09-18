"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver, useReducedMotion } from "@/hooks";
import { experience } from "@/data/resume";
import { ChevronRight, Database, Cpu, Network, Brain, Terminal, Code, Sparkles } from "lucide-react";
import { useState } from "react";

function getStepIcon(step: string) {
  switch (step) {
    case "Documents":
      return Database;
    case "Symptom Extraction":
      return Code;
    case "Vectorization":
      return Sparkles;
    case "FAISS Retrieval":
      return Network;
    case "Random Forest":
      return Brain;
    case "Confidence + Severity":
      return Cpu;
    case "Response":
      return Terminal;
    default:
      return Code;
  }
}

export function Experience() {
  const reducedMotion = useReducedMotion();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="experience"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isIntersecting ? 1 : 0, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase"
            style={{
              background: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              color: "#22c55e",
            }}
          >
            Experience
          </motion.span>
          <h2
            id="experience-heading"
            className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Intelligent Systems</span>
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isIntersecting ? 1 : 0, y: 0 }}
          transition={{ delay: 0.2, duration: reducedMotion ? 0 : 0.8 }}
        >
          <div className="absolute left-8 md:left-[calc(50%-1px)] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/30 via-violet-500/30 to-transparent" />
          
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative flex md:flex-row flex-col gap-8 mb-16 last:mb-0"
              style={{ minHeight: 300 }}
            >
              <motion.div
                className="relative flex items-start md:items-end md:w-1/2 pr-8 md:pr-12"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: reducedMotion ? 0 : 0.5 }}
              >
                <motion.div
                  className="relative z-10 w-full max-w-md"
                  style={{
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(148, 163, 184, 0.1)",
                    borderRadius: "1.5rem",
                    padding: "2rem",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: "#22c55e", boxShadow: "0 0 20px #22c55e80" }}
                      animate={{ scale: reducedMotion ? 1 : [1, 1.2, 1] }}
                      transition={{ duration: reducedMotion ? 0 : 2, repeat: Infinity }}
                    />
                    <motion.span className="text-xs font-mono font-medium text-zinc-400">
                      {exp.type}
                    </motion.span>
                  </div>
                  
                  <motion.h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {exp.role}
                  </motion.h3>
                  <motion.p className="text-cyan-400 font-medium mb-1">{exp.company}</motion.p>
                  <motion.p className="text-zinc-500 text-sm mb-6">{exp.period} · {exp.duration}</motion.p>

                  <motion.div className="space-y-3 mb-6">
                    {exp.highlights.slice(0, 3).map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.05, duration: reducedMotion ? 0 : 0.3 }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: "#22c55e" }}
                          animate={{ scale: reducedMotion ? 1 : [1, 1.3, 1] }}
                          transition={{ duration: reducedMotion ? 0 : 1.5, repeat: Infinity, delay: i * 0.2 }}
                        />
                        {highlight}
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div className="flex flex-wrap gap-2">
                    {exp.tech.slice(0, 6).map((t, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(6, 182, 212, 0.1)",
                          color: "#06b6d4",
                          border: "1px solid rgba(6, 182, 212, 0.2)",
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.03, duration: reducedMotion ? 0 : 0.2 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[2px]"
                  style={{
                    background: "linear-gradient(to bottom, transparent, #22c55e, transparent)",
                  }}
                />
              </motion.div>

              <motion.div
                className="relative md:w-1/2 flex-1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + 0.1, duration: reducedMotion ? 0 : 0.5 }}
              >
                <motion.button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="relative w-full h-full min-h-[280px] p-6 group"
                  style={{
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(148, 163, 184, 0.1)",
                    borderRadius: "1.5rem",
                    backdropFilter: "blur(10px)",
                  }}
                  whileHover={{ borderColor: "rgba(34, 197, 94, 0.5)" }}
                >
                  <motion.div className="flex items-center justify-between mb-4">
                    <motion.h4 className="text-lg font-semibold text-white">Technical Workflow</motion.h4>
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: expandedIndex === index ? "rgba(34, 197, 94, 0.2)" : "rgba(148, 163, 184, 0.1)",
                        color: expandedIndex === index ? "#22c55e" : "#64748b",
                      }}
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: reducedMotion ? 0 : 0.3 }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="overflow-hidden"
                    initial={false}
                    animate={{ height: expandedIndex === index ? "auto" : 0, opacity: expandedIndex === index ? 1 : 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <motion.div className="space-y-3">
                      {exp.workflow.map((step, i) => {
                        const StepIcon = getStepIcon(step.step);
                        return (
                          <motion.div
                            key={step.step}
                            className="flex items-center gap-4 p-3 rounded-xl group relative"
                            style={{
                              background: "rgba(2, 6, 23, 0.5)",
                              border: "1px solid rgba(148, 163, 184, 0.05)",
                            }}
                            whileHover={{ x: 4, borderColor: "rgba(34, 197, 94, 0.3)" }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05, duration: reducedMotion ? 0 : 0.3 }}
                          >
                            <motion.div
                              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{
                                background: "rgba(34, 197, 94, 0.15)",
                                border: "1px solid rgba(34, 197, 94, 0.2)",
                              }}
                            >
                              <StepIcon
                                className="w-5 h-5"
                                style={{ color: "#22c55e" }}
                                aria-hidden="true"
                              />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <motion.p className="font-medium text-white text-sm">{step.step}</motion.p>
                              <motion.p className="text-zinc-500 text-xs mt-0.5">{step.description}</motion.p>
                            </div>
                            <motion.div
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ background: "#22c55e" }}
                              animate={{ scale: reducedMotion ? 1 : [1, 1.5, 1] }}
                              transition={{ duration: reducedMotion ? 0 : 1.5, repeat: Infinity, delay: i * 0.15 }}
                            />
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </motion.div>

                  {expandedIndex === null && (
                    <motion.div
                      className="absolute bottom-6 right-6 flex items-center gap-2 text-zinc-500 text-sm group-hover:text-cyan-400 transition-colors"
                    >
                      <motion.span>Click to expand</motion.span>
                      <motion.span
                        className="w-4 h-4"
                        animate={{ x: reducedMotion ? 0 : [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: reducedMotion ? 0 : 1.5 }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.span>
                    </motion.div>
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}