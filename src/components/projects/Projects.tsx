"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { ProjectVisualization } from "./ProjectVisualization";

type Project = (typeof projects)[number];

const tabs = [
  { key: "problem", label: "Problem" },
  { key: "architecture", label: "Architecture" },
  { key: "implementation", label: "Implementation" },
  { key: "outcome", label: "Outcome" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        index="04"
        eyebrow="Projects"
        title="Featured"
        highlight="work"
        description="End-to-end AI and data engineering systems demonstrating practical retrieval, ranking and analytics workflows."
      />

      <div className="space-y-10">
        {projects.map((project, index) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const uid = useId();
  const [tab, setTab] = useState<TabKey>("problem");

  const onKeyDown = (e: React.KeyboardEvent) => {
    const i = tabs.findIndex((t) => t.key === tab);
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    else return;
    e.preventDefault();
    setTab(tabs[next].key);
    document.getElementById(`${uid}-tab-${tabs[next].key}`)?.focus();
  };

  const accent = project.visualization.nodes[0].color;

  return (
    <article className="card overflow-hidden">
      <div className="p-7 md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="min-w-0 max-w-2xl">
            <p className="font-mono text-xs tracking-[0.2em] text-zinc-500">
              PROJECT {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">{project.title}</h3>
            <p className="mt-1.5 text-lg font-medium" style={{ color: accent }}>
              {project.subtitle}
            </p>
            <p className="mt-5 leading-relaxed text-zinc-300">{project.description}</p>
          </div>

          <Button
            href={project.github}
            external
            variant="outline"
            iconLeft={<GitHubIcon className="size-4" />}
            iconRight={<ArrowUpRight className="size-4" aria-hidden="true" />}
          >
            View on GitHub
          </Button>
        </div>

        <div className="mt-8">
          <ProjectVisualization nodes={project.visualization.nodes} />
        </div>

        <div className="mt-10">
          <div
            role="tablist"
            aria-label={`${project.title} details`}
            onKeyDown={onKeyDown}
            className="scrollbar-hide -mx-1 flex gap-1 overflow-x-auto border-b border-white/10 px-1"
          >
            {tabs.map((t) => {
              const isActive = tab === t.key;
              return (
                <button
                  key={t.key}
                  role="tab"
                  type="button"
                  id={`${uid}-tab-${t.key}`}
                  aria-selected={isActive}
                  aria-controls={`${uid}-panel`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setTab(t.key)}
                  className={`relative whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  {t.label}
                  {isActive && (
                    <motion.span
                      layoutId={`${uid}-tab-underline`}
                      className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`${uid}-panel`}
            aria-labelledby={`${uid}-tab-${tab}`}
            className="min-h-[200px] pt-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <TabContent project={project} tab={tab} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-black/20 px-7 py-5 md:px-10">
        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}

function TabContent({ project, tab }: { project: Project; tab: TabKey }) {
  if (tab === "problem" || tab === "outcome") {
    return <p className="max-w-3xl leading-relaxed text-zinc-300">{project[tab]}</p>;
  }

  return (
    <ul className="grid gap-x-10 gap-y-3 md:grid-cols-2">
      {project[tab].map((line) => (
        <li key={line} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          {line}
        </li>
      ))}
    </ul>
  );
}
