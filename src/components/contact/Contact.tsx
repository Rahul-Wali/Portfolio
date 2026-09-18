"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver, useReducedMotion } from "@/hooks";
import { personalInfo, socialLinks } from "@/data/resume";
import { Mail, Link, GitBranch, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui";

export function Contact() {
  const reducedMotion = useReducedMotion();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto relative z-10">
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
            Get In Touch
          </motion.span>
          <h2
            id="contact-heading"
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Intelligent</span>
          </h2>
          <motion.p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Open to opportunities in Python, Data Engineering, GenAI and AI-focused engineering roles.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isIntersecting ? 1 : 0, y: 0 }}
          transition={{ delay: 0.2, duration: reducedMotion ? 0 : 0.8 }}
        >
          <motion.div className="space-y-8">
            <motion.div className="p-6 md:p-8 rounded-2xl" style={{
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(148, 163, 184, 0.1)",
              backdropFilter: "blur(10px)",
            }}>
              <motion.h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-5 h-5" style={{ color: "#ec4899" }} />
                Availability
              </motion.h3>
              <motion.div className="space-y-4">
                <motion.div className="flex items-center gap-3 text-zinc-300">
                  <motion.div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{
                    background: "rgba(34, 197, 94, 0.15)",
                    border: "1px solid rgba(34, 197, 94, 0.2)",
                  }}>
                    <MapPin className="w-5 h-5" style={{ color: "#22c55e" }} />
                  </motion.div>
                  <div>
                    <motion.p className="font-medium text-white">{personalInfo.availability.type}</motion.p>
                    <motion.p className="text-zinc-500 text-sm">{personalInfo.availability.cities.join(", ")}</motion.p>
                  </div>
                </motion.div>
                <motion.div className="flex items-center gap-3 text-zinc-300">
                  <motion.div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{
                    background: "rgba(6, 182, 212, 0.15)",
                    border: "1px solid rgba(6, 182, 212, 0.2)",
                  }}>
                    <Sparkles className="w-5 h-5" style={{ color: "#06b6d4" }} />
                  </motion.div>
                  <div>
                    <motion.p className="font-medium text-white">Open to Relocation</motion.p>
                    <motion.p className="text-zinc-500 text-sm">Available for US EST overlap</motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="p-6 md:p-8 rounded-2xl" style={{
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(148, 163, 184, 0.1)",
              backdropFilter: "blur(10px)",
            }}>
              <motion.h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-5 h-5" style={{ color: "#8b5cf6" }} />
                Focus Areas
              </motion.h3>
              <motion.div className="flex flex-wrap gap-2">
                {[
                  "Python Engineering",
                  "Data Engineering",
                  "GenAI / LLM Applications",
                  "RAG Pipelines",
                  "Vector Databases",
                  "ML / NLP",
                  "Cloud Data Platforms",
                ].map((area, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-sm font-medium"
                    style={{
                      background: "rgba(139, 92, 246, 0.1)",
                      color: "#8b5cf6",
                      border: "1px solid rgba(139, 92, 246, 0.2)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, duration: reducedMotion ? 0 : 0.3 }}
                  >
                    {area}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
                rel={link.name !== "Email" && link.name !== "Phone" ? "noopener noreferrer" : undefined}
                className="group relative flex items-center gap-4 p-6 rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(148, 163, 184, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
                whileHover={{ x: 4, borderColor: "rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: reducedMotion ? 0 : 0.5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{
                    background: "rgba(6, 182, 212, 0.15)",
                    border: "1px solid rgba(6, 182, 212, 0.2)",
                  }}
                >
                  {React.createElement(link.icon === "mail" ? Mail : link.icon === "linkedin" ? Link : link.icon === "github" ? GitBranch : Phone, {
                    className: "w-6 h-6",
                    style: { color: "#06b6d4" },
                    "aria-hidden": "true",
                  })}
                </motion.div>
                <motion.div className="relative z-10 flex-1">
                  <motion.p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">{link.name}</motion.p>
                  <motion.p className="text-white font-medium">{link.name === "Email" ? "rahulrah834@gmail.com" : link.name === "Phone" ? "+91-6362662037" : link.name === "LinkedIn" ? "linkedin.com/in/rahul-wali" : "github.com/Rahul-Wali"}</motion.p>
                </motion.div>
                <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, transparent 50%)" }} />
                <motion.div className="relative z-10" style={{ color: "#64748b" }}>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative p-8 md:p-12 rounded-2xl text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(236, 72, 153, 0.08) 100%)",
            border: "1px solid rgba(148, 163, 184, 0.1)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isIntersecting ? 1 : 0, y: 0 }}
          transition={{ delay: 0.4, duration: reducedMotion ? 0 : 0.6 }}
        >
          <motion.div className="absolute inset-0" aria-hidden="true">
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl" style={{ background: "#06b6d4" }} animate={{ scale: reducedMotion ? 1 : [1, 1.1, 1] }} transition={{ duration: reducedMotion ? 0 : 4, repeat: Infinity }} />
            <motion.div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-20 blur-3xl" style={{ background: "#8b5cf6" }} animate={{ scale: reducedMotion ? 1 : [1, 1.1, 1] }} transition={{ duration: reducedMotion ? 0 : 4, repeat: Infinity, delay: 1 }} />
            <motion.div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-20 blur-3xl" style={{ background: "#ec4899" }} animate={{ scale: reducedMotion ? 1 : [1, 1.1, 1] }} transition={{ duration: reducedMotion ? 0 : 4, repeat: Infinity, delay: 2 }} />
          </motion.div>

          <motion.div className="relative z-10">
            <motion.p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Whether you&apos;re building a RAG pipeline, designing a vector search architecture, or scaling data infrastructure — I&apos;d love to hear about your challenges.
            </motion.p>
            <motion.div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" iconLeft={<Mail className="w-4 h-4" />} iconRight={<ArrowRight className="w-4 h-4" />} asChild>
                <a href="mailto:rahulrah834@gmail.com">Start a Conversation</a>
              </Button>
              <Button variant="outline" size="lg" iconLeft={<Link className="w-4 h-4" />} asChild>
                <a href="https://linkedin.com/in/rahul-wali" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}