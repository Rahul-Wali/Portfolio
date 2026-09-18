"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks";
import { personalInfo, socialLinks } from "@/data/resume";
import { GitBranch, Link, Mail, Code, Database, Sparkles } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui";

export function Footer() {
  const reducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-16 px-6 border-t"
      style={{ borderColor: "rgba(148, 163, 184, 0.1)" }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <motion.div className="text-center md:text-left">
            <motion.div className="flex items-center gap-2 text-xl font-semibold tracking-tight mb-3">
              <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">RAHUL</motion.span>
              <motion.span className="text-zinc-500">/</motion.span>
              <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">WALI</motion.span>
            </motion.div>
            <motion.p className="text-zinc-400 text-sm">
              {personalInfo.title}
            </motion.p>
          </motion.div>

          <motion.div className="flex items-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon === "mail" ? Mail : link.icon === "linkedin" ? Link : link.icon === "github" ? GitBranch : Mail;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: reducedMotion ? 0 : 0.3 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0"
                    asChild
                    aria-label={link.name}
                  >
                    <a
                      href={link.href}
                      target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
                      rel={link.name !== "Email" && link.name !== "Phone" ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-center w-full h-full"
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: reducedMotion ? 0 : 0.6 }}
        >
          <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          
          <motion.div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.p className="text-zinc-500 text-sm">
              &copy; {currentYear} Rahul Anand Wali. Built with curiosity, data and AI.
            </motion.p>

            <motion.div className="flex items-center gap-4 text-zinc-500 text-sm">
              <motion.span className="flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" style={{ color: "#06b6d4" }} />
                Next.js + React + Three.js
              </motion.span>
              <motion.span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" style={{ color: "#8b5cf6" }} />
                Tailwind CSS + Framer Motion
              </motion.span>
              <motion.span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" style={{ color: "#ec4899" }} />
                TypeScript
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}