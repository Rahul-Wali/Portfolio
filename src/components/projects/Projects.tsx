import { ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { ProjectVisualization } from "./ProjectVisualization";

type Project = (typeof projects)[number];

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        index="04"
        eyebrow="Projects"
        title="Featured"
        highlight="work"
        description="A production-style multi-tenant platform and an AI application, built end to end."
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
  const accent = project.visualization.nodes[0].color;

  return (
    <article className="card overflow-hidden">
      <div className="p-7 md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="min-w-0 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs tracking-[0.2em] text-zinc-500">
                PROJECT {String(index + 1).padStart(2, "0")}
              </p>
              <span className="chip">{project.context}</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">{project.title}</h3>
            <p className="mt-1.5 text-lg font-medium" style={{ color: accent }}>
              {project.subtitle}
            </p>
            <p className="mt-5 leading-relaxed text-zinc-300">{project.description}</p>
          </div>

          {project.github && (
            <Button
              href={project.github}
              external
              variant="outline"
              iconLeft={<GitHubIcon className="size-4" />}
              iconRight={<ArrowUpRight className="size-4" aria-hidden="true" />}
            >
              View on GitHub
            </Button>
          )}
        </div>

        <div className="mt-8">
          <ProjectVisualization nodes={project.visualization.nodes} />
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Key contributions</h4>
          <ul className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {project.highlights.map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {line}
              </li>
            ))}
          </ul>
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
