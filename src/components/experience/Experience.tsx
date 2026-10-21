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
        title="Internship"
        highlight="experience"
        description="Hands-on work on a multi-tenant HR platform and an AI healthcare assistant."
      />

      <ol className="relative space-y-8 border-l border-white/10 pl-6 md:pl-8">
        {experience.map((exp) => {
          const meta = [exp.location, exp.period, exp.duration].filter((v): v is string => Boolean(v));

          return (
            <li key={exp.id} className="relative">
              <span
                className="absolute -left-[31px] top-9 size-3 rounded-full border-2 border-primary bg-zinc-950 md:-left-[39px]"
                aria-hidden="true"
              />
              <Reveal>
                <article className="card overflow-hidden">
                  <header className="border-b border-white/10 p-7 md:p-9">
                    <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{exp.role}</h3>
                    <p className="mt-1.5 text-lg font-medium text-primary">{exp.company}</p>

                    {meta.length > 0 && (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {meta.map((m) => (
                          <li key={m} className="chip">
                            {m}
                          </li>
                        ))}
                      </ul>
                    )}
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
                    </div>

                    <div className="space-y-6 border-t border-white/10 bg-black/20 p-7 md:p-9 lg:col-span-2 lg:border-l lg:border-t-0">
                      {exp.groups.map((group) => (
                        <div key={group.label}>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                            {group.label}
                          </h4>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                              <li key={item} className="chip">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
