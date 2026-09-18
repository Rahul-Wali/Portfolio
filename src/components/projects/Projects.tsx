"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver, useReducedMotion } from "@/hooks";
import { projects } from "@/data/projects";
import { GitBranch, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui";
import { ProjectVisualization } from "./ProjectVisualization";

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [6, 182, 212];
}

export function Projects() {
  const reducedMotion = useReducedMotion();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="projects-heading"
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
              background: "rgba(245, 158, 11, 0.1)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              color: "#f59e0b",
            }}
          >
            Projects
          </motion.span>
          <h2
            id="projects-heading"
            className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Work</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            End-to-end AI and data engineering systems demonstrating practical retrieval, ranking, and analytics workflows.
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isIntersecting ? 1 : 0, y: 0 }}
          transition={{ delay: 0.2, duration: reducedMotion ? 0 : 0.8 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} reducedMotion={reducedMotion} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, reducedMotion }: { project: typeof projects[0]; index: number; reducedMotion: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: reducedMotion ? 0 : 0.3 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl"
        style={{
          background: "rgba(15, 23, 42, 0.6)",
          border: "1px solid rgba(148, 163, 184, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
          background: `linear-gradient(135deg, ${project.visualization.nodes[0].color}10 0%, ${project.visualization.nodes[project.visualization.nodes.length - 1].color}10 100%)`,
        }} />

        <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12">
          <motion.div className="flex-1 min-w-0 md:max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <motion.span
                className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full"
                style={{
                  background: `rgba(${hexToRgb(project.visualization.nodes[0].color).join(",")}, 0.15)`,
                  color: project.visualization.nodes[0].color,
                  border: `1px solid ${project.visualization.nodes[0].color}30`,
                }}
              >
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </motion.span>
            </div>

            <motion.h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {project.title}
            </motion.h3>
            <motion.p className="text-cyan-400 text-lg font-medium mb-6">
              {project.subtitle}
            </motion.p>

            <motion.p className="text-zinc-300 leading-relaxed mb-6">
              {project.description}
            </motion.p>

            <motion.div className="mb-6">
              <motion.h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Problem</motion.h4>
              <motion.p className="text-zinc-300 text-sm leading-relaxed">{project.problem}</motion.p>
            </motion.div>

            <motion.div className="mb-6">
              <motion.h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Architecture</motion.h4>
              <motion.ul className="space-y-2">
                {project.architecture.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2 text-zinc-300 text-sm leading-relaxed"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: reducedMotion ? 0 : 0.3 }}
                  >
                    <motion.div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#06b6d4" }} />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div className="mb-6">
              <motion.h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Technical Implementation</motion.h4>
              <motion.ul className="space-y-2">
                {project.implementation.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2 text-zinc-300 text-sm leading-relaxed"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: reducedMotion ? 0 : 0.3 }}
                  >
                    <motion.div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#8b5cf6" }} />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div className="mb-6">
              <motion.h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Outcome</motion.h4>
              <motion.p className="text-zinc-300 text-sm leading-relaxed">{project.outcome}</motion.p>
            </motion.div>

            <motion.div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <motion.span
                  key={i}
                  className="px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300"
                  style={{
                    background: isHovered
                      ? `rgba(${hexToRgb(project.visualization.nodes[0].color).join(",")}, 0.2)`
                      : "rgba(148, 163, 184, 0.1)",
                    color: isHovered ? project.visualization.nodes[0].color : "#64748b",
                    border: isHovered
                      ? `1px solid ${project.visualization.nodes[0].color}40`
                      : "1px solid rgba(148, 163, 184, 0.1)",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            <motion.div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: "rgba(148, 163, 184, 0.1)" }}>
              <Button variant="outline" size="sm" iconLeft={<GitBranch className="w-4 h-4" />} iconRight={<ArrowRight className="w-4 h-4" />} asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden md:block w-80 md:w-96 flex-shrink-0"
            style={{ minHeight: 300 }}
          >
            <ProjectVisualization
              nodes={project.visualization.nodes}
              edges={project.visualization.edges}
              reducedMotion={reducedMotion}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
}