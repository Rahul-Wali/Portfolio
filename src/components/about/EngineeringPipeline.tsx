"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useIntersectionObserver, useReducedMotion } from "@/hooks";
import { engineeringPipeline } from "@/data/resume";
import { ChevronDown, Sparkles, Database, Cpu, HardDrive, Search, Brain, Terminal } from "lucide-react";

const stageIcons: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  "raw-data": Database,
  "processing": Cpu,
  "embeddings": Sparkles,
  "vector-db": HardDrive,
  "retrieval": Search,
  "ml-llm": Brain,
  "response": Terminal,
};

const stageColors: Record<string, string> = {
  "raw-data": "#06b6d4",
  "processing": "#06b6d4",
  "embeddings": "#8b5cf6",
  "vector-db": "#8b5cf6",
  "retrieval": "#ec4899",
  "ml-llm": "#ec4899",
  "response": "#22c55e",
};

export function EngineeringPipeline() {
  const reducedMotion = useReducedMotion();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 2000], [0, -100]);

  return (
    <section
      ref={ref}
      id="pipeline"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      aria-labelledby="pipeline-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isIntersecting ? 1 : 0, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase"
            style={{
              background: "rgba(236, 72, 153, 0.1)",
              border: "1px solid rgba(236, 72, 153, 0.3)",
              color: "#ec4899",
            }}
          >
            Engineering Pipeline
          </motion.span>
          <h2
            id="pipeline-heading"
            className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
          >
            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">AI Data Pipeline</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            From raw data ingestion to intelligent response generation — each stage transforms information into actionable intelligence.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="relative"
          style={{
            transform: reducedMotion ? undefined : `translateX(${scrollX.get()}px)`,
          }}
        >
          <div className="flex items-center gap-4 overflow-x-auto pb-8 snap-x" style={{ scrollSnapType: "x mandatory" }}>
            {engineeringPipeline.map((stage, index) => {
              const color = stageColors[stage.id] || "#06b6d4";
              const Icon = stageIcons[stage.id] || Database;
              return (
                <motion.div
                  key={stage.id}
                  className="relative flex flex-col items-center min-w-[280px] max-w-[320px] snap-center"
                  onMouseEnter={() => setHoveredStage(stage.id)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  <motion.div
                    className="relative flex flex-col items-center z-10"
                    animate={{
                      scale: hoveredStage === stage.id ? 1.05 : 1,
                      y: hoveredStage === stage.id ? -8 : 0,
                    }}
                    transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <motion.div
                      className="relative flex items-center justify-center mb-4"
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: `rgba(${hexToRgb(color).join(",")}, 0.15)`,
                        border: `1px solid ${color}40`,
                      }}
                      animate={{
                        boxShadow: hoveredStage === stage.id
                          ? `0 0 40px ${color}60, 0 0 80px ${color}30`
                          : "none",
                        borderColor: hoveredStage === stage.id ? color : `${color}40`,
                      }}
                      transition={{ duration: reducedMotion ? 0 : 0.3 }}
                    >
                      <Icon
                        className="w-10 h-10"
                        style={{ color }}
                        aria-hidden="true"
                      />
                      {hoveredStage === stage.id && !reducedMotion && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                          style={{
                            border: `2px solid ${color}`,
                            borderRadius: "50%",
                          }}
                        />
                      )}
                    </motion.div>

                    <motion.h3 className="text-lg font-semibold text-white text-center mb-2">
                      {stage.label}
                    </motion.h3>
                    <motion.p className="text-zinc-500 text-sm text-center px-2">
                      {stage.description}
                    </motion.p>
                  </motion.div>

                  {hoveredStage === stage.id && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 z-20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: reducedMotion ? 0 : 0.2 }}
                    >
                      <motion.div
                        className="p-4 rounded-xl"
                        style={{
                          background: "rgba(15, 23, 42, 0.95)",
                          border: `1px solid ${color}40`,
                          backdropFilter: "blur(20px)",
                          boxShadow: `0 20px 40px -20px ${color}40`,
                        }}
                      >
                        <motion.p className="text-zinc-300 text-sm leading-relaxed mb-4">
                          {stage.description}
                        </motion.p>
                        <motion.div className="flex flex-wrap gap-2">
                          {stage.tech.map((t, i) => (
                            <motion.span
                              key={i}
                              className="px-2.5 py-1 rounded-full text-xs font-medium"
                              style={{
                                background: `rgba(${hexToRgb(color).join(",")}, 0.15)`,
                                color,
                                border: `1px solid ${color}30`,
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05, duration: reducedMotion ? 0 : 0.2 }}
                            >
                              {t}
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
                        style={{ background: "rgba(15, 23, 42, 0.95)", borderLeft: `1px solid ${color}40`, borderTop: `1px solid ${color}40` }}
                      />
                    </motion.div>
                  )}

                  {index < engineeringPipeline.length - 1 && (
                    <motion.div
                      className="absolute top-[40px] left-full right-[50%] h-[2px] flex items-center"
                      style={{
                        background: `linear-gradient(90deg, ${color}40, ${stageColors[engineeringPipeline[index + 1].id] || "#06b6d4"}40)`,
                      }}
                    >
                      <ChevronDown
                        className="w-4 h-4 mx-2 flex-shrink-0"
                        style={{ color }}
                        aria-hidden="true"
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [6, 182, 212];
}