"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver, useReducedMotion } from "@/hooks";
import { education, certifications, learningRoadmap } from "@/data/resume";
import { GraduationCap, Award, Target, CheckCircle, Clock, TrendingUp } from "lucide-react";

export function Education() {
  const reducedMotion = useReducedMotion();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="education"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="education-heading"
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
              background: "rgba(6, 182, 212, 0.1)",
              border: "1px solid rgba(6, 182, 212, 0.3)",
              color: "#06b6d4",
            }}
          >
            Education & Growth
          </motion.span>
          <h2
            id="education-heading"
            className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Foundation</span> & Certifications
          </h2>
        </motion.div>

        <motion.div
          className="space-y-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isIntersecting ? 1 : 0, y: 0 }}
          transition={{ delay: 0.2, duration: reducedMotion ? 0 : 0.8 }}
        >
          <motion.div className="relative">
            <motion.h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-5 h-5" style={{ color: "#06b6d4" }} />
              Education
            </motion.h3>

            <motion.div className="space-y-6">
              {education.map((edu, index) => (
                <motion.article
                  key={edu.id}
                  className="relative p-6 md:p-8 rounded-2xl group"
                  style={{
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(148, 163, 184, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                  whileHover={{ borderColor: "rgba(6, 182, 212, 0.5)" }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: reducedMotion ? 0 : 0.5 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(6, 182, 212, 0.15)",
                        border: "1px solid rgba(6, 182, 212, 0.2)",
                      }}
                    >
                      <GraduationCap className="w-6 h-6" style={{ color: "#06b6d4" }} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <motion.h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</motion.h4>
                      <motion.p className="text-cyan-400 font-medium mb-2">{edu.institution}</motion.p>
                      <motion.div className="flex flex-wrap items-center gap-4 text-zinc-500 text-sm">
                        {edu.board && <motion.span>{edu.board}</motion.span>}
                        <motion.span>{edu.period}</motion.span>
                        {edu.cgpa && <motion.span className="font-medium text-white">{edu.cgpa}</motion.span>}
                        {edu.percentage && <motion.span className="font-medium text-white">{edu.percentage}</motion.span>}
                      </motion.div>
                      {edu.details && (
                        <motion.ul className="mt-4 space-y-2">
                          {edu.details.map((detail, i) => (
                            <motion.li key={i} className="flex items-center gap-2 text-zinc-400 text-sm">
                              <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#22c55e" }} />
                              {detail}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  </div>

                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, transparent 50%)" }}
                  />
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative">
            <motion.h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-3">
              <Award className="w-5 h-5" style={{ color: "#f59e0b" }} />
              Certifications
            </motion.h3>

            <motion.div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.article
                  key={cert.id}
                  className="relative p-6 rounded-2xl group"
                  style={{
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(148, 163, 184, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                  whileHover={{ borderColor: "rgba(245, 158, 11, 0.5)", y: -4 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: reducedMotion ? 0 : 0.5 }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <motion.div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: cert.status === "in-progress"
                          ? "rgba(245, 158, 11, 0.15)"
                          : "rgba(34, 197, 94, 0.15)",
                        border: cert.status === "in-progress"
                          ? "1px solid rgba(245, 158, 11, 0.2)"
                          : "1px solid rgba(34, 197, 94, 0.2)",
                      }}
                    >
                      {cert.status === "in-progress" ? (
                        <Clock className="w-5 h-5" style={{ color: "#f59e0b" }} />
                      ) : (
                        <CheckCircle className="w-5 h-5" style={{ color: "#22c55e" }} />
                      )}
                    </motion.div>
                    <div className="flex-1">
                      <motion.h4 className="font-semibold text-white">{cert.name}</motion.h4>
                      <motion.p className="text-zinc-500 text-sm">{cert.issuer}</motion.p>
                    </div>
                  </div>
                  <motion.div className="flex items-center justify-between">
                    <motion.span
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: cert.status === "in-progress"
                          ? "rgba(245, 158, 11, 0.2)"
                          : "rgba(34, 197, 94, 0.2)",
                        color: cert.status === "in-progress" ? "#f59e0b" : "#22c55e",
                      }}
                    >
                      {cert.status === "in-progress" ? "In Progress" : cert.year}
                    </motion.span>
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative">
            <motion.h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-3">
              <Target className="w-5 h-5" style={{ color: "#ec4899" }} />
              Learning Roadmap
            </motion.h3>

            <motion.div className="space-y-8">
              {Object.entries(learningRoadmap).map(([phase, items], phaseIndex) => (
                <motion.div
                  key={phase}
                  className="relative p-6 rounded-2xl"
                  style={{
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(148, 163, 184, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: phaseIndex * 0.1, duration: reducedMotion ? 0 : 0.5 }}
                >
                  <motion.div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(236, 72, 153, 0.15)",
                        border: "1px solid rgba(236, 72, 153, 0.2)",
                      }}
                    >
                      <TrendingUp className="w-5 h-5" style={{ color: "#ec4899" }} />
                    </motion.div>
                    <motion.h4 className="text-lg font-semibold text-white capitalize">{phase.replace("-", " ")}</motion.h4>
                  </motion.div>

                  <motion.div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <motion.span
                        key={item}
                        className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
                        style={{
                          background: "rgba(236, 72, 153, 0.1)",
                          color: "#ec4899",
                          border: "1px solid rgba(236, 72, 153, 0.2)",
                        }}
                        whileHover={{ scale: 1.05, background: "rgba(236, 72, 153, 0.2)" }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05, duration: reducedMotion ? 0 : 0.3 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>

                  {phaseIndex < Object.keys(learningRoadmap).length - 1 && (
                    <motion.div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 hidden md:block">
                      <motion.div
                        className="w-[2px] h-16"
                        style={{ background: "linear-gradient(to bottom, #ec4899, transparent)" }}
                        animate={{ scaleY: reducedMotion ? 1 : [1, 0.5, 1] }}
                        transition={{ duration: reducedMotion ? 0 : 2, repeat: Infinity }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}