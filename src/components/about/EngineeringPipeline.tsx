"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Brain, Database, Monitor, Server, ShieldCheck, Terminal } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { engineeringPipeline } from "@/data/resume";

const layerIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  frontend: Monitor,
  auth: ShieldCheck,
  backend: Server,
  data: Database,
  quality: Terminal,
  ai: Brain,
};

const total = engineeringPipeline.length;

export function EngineeringPipeline() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const layer = engineeringPipeline[active];
  const Icon = layerIcons[layer.id] ?? Server;

  const select = (index: number, focus = false) => {
    const next = (index + total) % total;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        select(active + 1, true);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        select(active - 1, true);
        break;
      case "Home":
        e.preventDefault();
        select(0, true);
        break;
      case "End":
        e.preventDefault();
        select(total - 1, true);
        break;
    }
  };

  return (
    <Section id="architecture" labelledBy="architecture-heading">
      <SectionHeading
        id="architecture-heading"
        index="02"
        eyebrow="Full-stack architecture"
        title="How I build"
        highlight="across the stack"
        description="From the browser to the database — select a layer to see how I approach it and the tools I use."
      />

      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div
            role="tablist"
            aria-label="Architecture layers"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="scrollbar-hide -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {engineeringPipeline.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  type="button"
                  id={`layer-tab-${s.id}`}
                  aria-selected={isActive}
                  aria-controls="architecture-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => select(i)}
                  className={`flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors lg:shrink ${
                    isActive
                      ? "border-primary/40 bg-primary/10 text-white"
                      : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                  }`}
                >
                  <span
                    className={`font-mono text-xs ${isActive ? "text-primary" : "text-zinc-600"}`}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="whitespace-nowrap text-sm font-medium tracking-wide">{s.label}</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="architecture-panel"
            aria-labelledby={`layer-tab-${layer.id}`}
            className="card min-h-[320px] p-7 md:p-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={layer.id}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Layer {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">{layer.label}</h3>
                  </div>
                </div>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">{layer.description}</p>

                <p className="mt-8 text-xs uppercase tracking-wider text-zinc-500">Tools & techniques</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {layer.tech.map((t) => (
                    <li key={t} className="chip chip-primary">
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between gap-6 border-t border-white/10 pt-6">
              <div className="flex flex-1 gap-1.5" aria-hidden="true">
                {engineeringPipeline.map((s, i) => (
                  <span
                    key={s.id}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      i <= active ? "bg-primary" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => select(active + 1)}
                iconRight={<ArrowRight className="size-4" aria-hidden="true" />}
              >
                {active === total - 1 ? "Start over" : "Next layer"}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
