"use client";

import { Award, CheckCircle, Clock, GraduationCap } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/ui/Section";
import { certifications, education, learningRoadmap } from "@/data/resume";

const phaseLabels: Record<string, string> = {
  foundation: "Foundation",
  next: "Up next",
  cloud: "Cloud",
  engineering: "Engineering",
};

export function Education() {
  return (
    <Section id="education" labelledBy="education-heading">
      <SectionHeading
        id="education-heading"
        index="06"
        eyebrow="Education & growth"
        title="Academic"
        highlight="foundation"
        description="Formal education, certifications, and where I'm headed next."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Reveal>
            <h3 className="mb-6 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              <GraduationCap className="size-4 text-primary" aria-hidden="true" />
              Education
            </h3>
          </Reveal>

          <ol className="relative space-y-5 border-l border-white/10 pl-7">
            {education.map((edu, i) => (
              <li key={edu.id} className="relative">
                <span
                  className="absolute -left-[34px] top-7 size-3 rounded-full border-2 border-primary bg-zinc-950"
                  aria-hidden="true"
                />
                <Reveal delay={i * 0.08}>
                  <article className="card p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="text-lg font-semibold leading-snug text-white">{edu.degree}</h4>
                        <p className="mt-1 text-primary">{edu.institution}</p>
                      </div>
                      <span className="font-mono text-xs text-zinc-500">{edu.period}</span>
                    </div>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {edu.board && <li className="chip">{edu.board}</li>}
                      {edu.cgpa && <li className="chip chip-primary">CGPA {edu.cgpa}</li>}
                      {edu.percentage && <li className="chip chip-primary">{edu.percentage}</li>}
                    </ul>

                    {edu.details && (
                      <ul className="mt-4 space-y-1.5 text-sm text-zinc-400">
                        {edu.details.map((d) => (
                          <li key={d} className="flex items-center gap-2">
                            <CheckCircle className="size-4 shrink-0 text-emerald-400" aria-hidden="true" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-2">
          <Reveal>
            <h3 className="mb-6 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              <Award className="size-4 text-primary" aria-hidden="true" />
              Certifications
            </h3>
          </Reveal>

          <ul className="space-y-4">
            {certifications.map((cert, i) => {
              const inProgress = cert.status === "in-progress";
              return (
                <li key={cert.id}>
                  <Reveal delay={i * 0.08}>
                    <article className="card flex items-start gap-4 p-5">
                      <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${
                          inProgress ? "bg-amber-400/10 text-amber-300" : "bg-emerald-400/10 text-emerald-300"
                        }`}
                      >
                        {inProgress ? (
                          <Clock className="size-5" aria-hidden="true" />
                        ) : (
                          <CheckCircle className="size-5" aria-hidden="true" />
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold leading-snug text-white">{cert.name}</h4>
                        <p className="mt-0.5 text-sm text-zinc-500">{cert.issuer}</p>
                      </div>
                      <span className="font-mono text-xs text-zinc-500">{cert.year}</span>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <Reveal>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-400">Learning roadmap</h3>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(learningRoadmap).map(([phase, items], i) => (
            <Reveal key={phase} delay={i * 0.08}>
              <article className="card h-full p-6">
                <p className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</p>
                <h4 className="mt-2 text-lg font-semibold text-white">{phaseLabels[phase] ?? phase}</h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
