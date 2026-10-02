"use client";

import { Reveal, Section, SectionHeading } from "@/components/ui/Section";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionHeading
        id="skills-heading"
        index="05"
        eyebrow="Technical arsenal"
        title="Skills &"
        highlight="technologies"
        description="The tools I use across the data lifecycle — and the ones I'm actively learning next."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => {
          const isLearning = category.id === "learning";
          return (
            <Reveal key={category.id} delay={(i % 3) * 0.08} className={isLearning ? "md:col-span-2 lg:col-span-3" : ""}>
              <section
                aria-labelledby={`skills-${category.id}`}
                className={`card card-hover h-full p-6 ${isLearning ? "border-dashed" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="size-2.5 rounded-full"
                    style={{ background: category.color, boxShadow: `0 0 12px ${category.color}80` }}
                    aria-hidden="true"
                  />
                  <h3
                    id={`skills-${category.id}`}
                    className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300"
                  >
                    {category.label}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className={`chip ${isLearning ? "chip-dashed" : ""}`}>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-12">
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
          Currently expanding into <span className="font-medium text-white">cloud data engineering</span> (AWS,
          Snowflake), <span className="font-medium text-white">agentic AI workflows</span> (LangChain, LlamaIndex)
          and <span className="font-medium text-white">production ML ops</span> (CI/CD, Redis, Pinecone).
        </p>
      </Reveal>
    </Section>
  );
}
