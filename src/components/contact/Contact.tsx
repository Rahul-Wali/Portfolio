"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MapPin } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/Icons";
import { personalInfo, socialLinks } from "@/data/resume";

const focusAreas = [
  "Full-stack Web Development",
  "React / TypeScript",
  "Go Services",
  "Python",
  "PostgreSQL",
  "Auth & Multi-tenancy",
  "AI Applications / RAG",
];

const displayValue: Record<string, string> = {
  Email: personalInfo.email,
  Phone: personalInfo.phone,
  LinkedIn: "linkedin.com/in/rahul-wali",
  GitHub: "github.com/Rahul-Wali",
};

export function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <Section id="contact" labelledBy="contact-heading" className="pb-24 md:pb-32">
      <SectionHeading
        id="contact-heading"
        index="07"
        eyebrow="Get in touch"
        title="Let's build something"
        highlight="great together"
        description="Open to full-stack, React / TypeScript, Go / Python and AI application engineering roles."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="card relative h-full overflow-hidden p-7 md:p-10">
            <div
              className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, #22d3ee, transparent 70%)" }}
              aria-hidden="true"
            />

            <p className="relative max-w-lg text-lg leading-relaxed text-zinc-300">
              Whether you&apos;re building a multi-tenant platform, a React front end, a Go back end, or an
              AI-powered feature — I&apos;d love to hear about it.
            </p>

            <div className="relative mt-8 flex flex-wrap items-center gap-3">
              <Button
                href={`mailto:${personalInfo.email}`}
                size="lg"
                iconLeft={<Mail className="size-4" aria-hidden="true" />}
              >
                Start a conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={copyEmail}
                iconLeft={
                  copied ? (
                    <Check className="size-4 text-emerald-400" aria-hidden="true" />
                  ) : (
                    <Copy className="size-4" aria-hidden="true" />
                  )
                }
              >
                {copied ? "Copied!" : "Copy email"}
              </Button>
              <span className="sr-only" role="status" aria-live="polite">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </div>

            <div className="relative mt-10 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Availability</h3>
                <p className="mt-3 flex items-center gap-2 font-medium text-white">
                  <MapPin className="size-4 text-primary" aria-hidden="true" />
                  {personalInfo.availability.type}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                  {personalInfo.availability.cities.join(" · ")}
                  <br />
                  US EST overlap available
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Focus areas</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {focusAreas.map((a) => (
                    <li key={a} className="chip">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <ul className="space-y-4 lg:col-span-2">
          {socialLinks.map((link, i) => {
            const external = link.name === "LinkedIn" || link.name === "GitHub";
            return (
              <li key={link.name}>
                <Reveal delay={i * 0.07}>
                  <a
                    href={link.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="card card-hover group flex items-center gap-4 p-5"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      <SocialIcon name={link.icon} className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs uppercase tracking-wider text-zinc-500">{link.name}</span>
                      <span className="mt-0.5 block truncate font-medium text-white">
                        {displayValue[link.name] ?? link.href}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
