"use client";

import { Check } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/ui/Section";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        index="03"
        eyebrow="Experience"
        title="Engineering"
        highlight="intelligent systems"
        description="Hands-on work building production-style AI and data applications."
      />

      <div className="space-y-8">
        {experience.map((exp) => (
          <Reveal key={exp.id}>
            <article className="card overflow-hidden">
              <header className="border-b border-white/10 p-7 md:p-9">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{exp.role}</h3>
                    <p className="mt-1.5 text-lg font-medium text-primary">{exp.company}</p>
                  </div>
                  <span className="chip chip-primary">{exp.type}</span>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  <li className="chip">{exp.period}</li>
                  <li className="chip">{exp.duration}</li>
                  <li className="chip">{exp.domain}</li>
                </ul>
              </header>

              <div className="grid lg:grid-cols-5">
                <div className="p-7 md:p-9 lg:col-span-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Highlights</h4>
                  <ul className="mt-5 space-y-4">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-zinc-300">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Check className="size-3" aria-hidden="true" />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                    {exp.tech.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 bg-black/20 p-7 md:p-9 lg:col-span-2 lg:border-l lg:border-t-0">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Pipeline I built
                  </h4>
                  <div className="relative mt-5">
                    <span
                      className="absolute bottom-3 left-[15px] top-3 w-px"
                      style={{ background: "linear-gradient(to bottom, rgba(34,211,238,0.5), rgba(255,255,255,0.1), transparent)" }}
                      aria-hidden="true"
                    />
                    <ol>
                    {exp.workflow.map((step, i) => (
                      <li key={step.step} className="relative flex items-start gap-4 pb-5 last:pb-0">
                        <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-zinc-950 font-mono text-xs text-primary">
                          {i + 1}
                        </span>
                        <div className="pt-0.5">
                          <p className="text-sm font-medium text-white">{step.step}</p>
                          <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">{step.description}</p>
                        </div>
                      </li>
                    ))}
                    </ol>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
