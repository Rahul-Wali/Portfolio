"use client";

import { Brain, Database, GraduationCap, MapPin, Monitor, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/ui/Section";
import { aboutCards } from "@/data/skills";
import { personalInfo, philosophy, summary } from "@/data/resume";

const cardIcons = {
  monitor: Monitor,
  shield: ShieldCheck,
  database: Database,
  brain: Brain,
};

const facts = [
  { icon: MapPin, label: "Based in", value: personalInfo.location },
  { icon: GraduationCap, label: "Education", value: "BE CSE · KLSGIT · CGPA 8.2" },
  {
    icon: Sparkles,
    label: "Availability",
    value: personalInfo.availability.type,
  },
];

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <SectionHeading
        id="about-heading"
        index="01"
        eyebrow="About"
        title="Building across the"
        highlight="full stack"
        description={philosophy}
      />

      <div className="grid gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="card h-full p-7 md:p-8">
            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">{summary}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <dl className="card flex h-full flex-col justify-center gap-5 p-7 md:p-8">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">{label}</dt>
                  <dd className="mt-0.5 font-medium text-white">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {aboutCards.map((card, index) => {
          const Icon = cardIcons[card.icon as keyof typeof cardIcons] ?? Database;
          return (
            <Reveal key={card.id} delay={index * 0.08}>
              <article className="card card-hover h-full p-6">
                <div className="flex items-center justify-between">
                  <span
                    className="flex size-11 items-center justify-center rounded-xl"
                    style={{ background: `${card.color}1f`, color: card.color }}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-zinc-600">{card.number}</span>
                </div>

                <h3 className="mt-6 text-base font-semibold tracking-wide text-white">{card.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{card.description}</p>

                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                  {card.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full"
                        style={{ background: card.color }}
                        aria-hidden="true"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
