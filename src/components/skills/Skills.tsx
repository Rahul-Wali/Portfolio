"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver, useReducedMotion } from "@/hooks";
import { skillCategories } from "@/data/skills";
import { useState } from "react";

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [6, 182, 212];
}

function adjustBrightness(hex: string, amount: number): string {
  const rgb = hexToRgb(hex);
  return `#${rgb.map(c => Math.min(255, Math.max(0, c + amount)).toString(16).padStart(2, "0")).join("")}`;
}

export function Skills() {
  const reducedMotion = useReducedMotion();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="skills"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
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
          >
            Technical Arsenal
          </motion.span>
          <h2
            id="skills-heading"
            className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Skills</span> & Technologies
          </h2>
        </motion.div>

        <motion.div
          className="space-y-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isIntersecting ? 1 : 0, y: 0 }}
          transition={{ delay: 0.2, duration: reducedMotion ? 0 : 0.8 }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div key={category.id} className="relative">
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: catIndex * 0.08, duration: reducedMotion ? 0 : 0.5 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `rgba(${hexToRgb(category.color).join(",")}, 0.15)`,
                    border: `1px solid ${category.color}30`,
                  }}
                >
                  <motion.span className="text-sm font-mono font-bold" style={{ color: category.color }}>
                    {catIndex + 1 < 10 ? `0${catIndex + 1}` : catIndex + 1}
                  </motion.span>
                </motion.div>
                <div>
                  <motion.h3 className="text-xl font-semibold text-white">{category.label}</motion.h3>
                  <motion.div
                    className="mt-1 h-[3px] w-24 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${category.color}, ${adjustBrightness(category.color, 30)})` }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3 + catIndex * 0.08, duration: reducedMotion ? 0 : 0.6 }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + catIndex * 0.08, duration: reducedMotion ? 0 : 0.5 }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <SkillNode
                    key={skill.name}
                    skill={skill}
                    color={category.color}
                    index={skillIndex}
                    reducedMotion={reducedMotion}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 p-8 rounded-2xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
            border: "1px solid rgba(148, 163, 184, 0.1)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isIntersecting ? 1 : 0, y: 0 }}
          transition={{ delay: 0.6, duration: reducedMotion ? 0 : 0.6 }}
        >
          <motion.p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            Currently expanding into <span className="font-medium text-cyan-400">cloud data engineering</span> (AWS, Snowflake), <span className="font-medium text-violet-400">agentic AI workflows</span> (LangChain, LlamaIndex), and <span className="font-medium text-pink-400">production ML ops</span> (CI/CD, Redis, Pinecone).
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function SkillNode({ skill, color, index, reducedMotion }: { skill: { name: string; level: number }; color: string; index: number; reducedMotion: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    background: isHovered
      ? `rgba(${hexToRgb(color).join(",")}, 0.12)`
      : "rgba(15, 23, 42, 0.6)",
    border: isHovered
      ? `1px solid ${color}40`
      : "1px solid rgba(148, 163, 184, 0.1)",
    backdropFilter: "blur(10px)",
    transitionDelay: `${index * 0.03}s`,
    transitionDuration: reducedMotion ? "0s" : "0.3s",
  };

  return (
    <motion.button
      className="relative group p-4 rounded-xl text-left overflow-hidden"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: reducedMotion ? 0 : 0.2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(135deg, ${color}15 0%, transparent 50%)` }}
      />
      
      <motion.div className="relative z-10 flex items-center justify-between mb-3">
        <motion.span className="font-medium text-white text-sm">{skill.name}</motion.span>
        <motion.span
          className="text-xs font-mono font-medium"
          style={{ color: isHovered ? color : "#64748b" }}
        >
          {skill.level}%
        </motion.span>
      </motion.div>

      <motion.div className="relative z-10 h-2 rounded-full overflow-hidden" style={{ background: "rgba(148, 163, 184, 0.1)" }}>
        <motion.div
          className="h-full rounded-full transform-gpu origin-left"
          style={{
            background: `linear-gradient(90deg, ${color}, ${adjustBrightness(color, 30)})`,
            transformOrigin: "left center",
            boxShadow: `0 0 20px ${color}60`,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: skill.level / 100 }}
          transition={{ delay: 0.3 + index * 0.03, duration: reducedMotion ? 0 : 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, ${color}, ${adjustBrightness(color, 30)})` }}
      />
    </motion.button>
  );
}