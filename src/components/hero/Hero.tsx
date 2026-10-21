"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/resume";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: "8.2", label: "CGPA · BE CSE" },
  { value: "2", label: "Software internships" },
  { value: "6", label: "Programming languages" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-dvh items-center px-5 pb-16 pt-28 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="min-w-0"
        >
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Open to opportunities · {personalInfo.availability.mode}
            </span>
          </motion.div>

          <motion.p variants={item} className="mt-8 font-mono text-sm tracking-wide text-zinc-400">
            Hi, I&apos;m <span className="text-white">{personalInfo.name}</span>
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-3 text-balance text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]"
          >
            I build full-stack products — <span className="text-gradient">from React to Go to AI.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            Full Stack Web Developer building multi-tenant platforms and AI-enabled applications with React,
            TypeScript, Go, Python and PostgreSQL.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projects" size="lg" iconRight={<ArrowRight className="size-4" aria-hidden="true" />}>
              View my work
            </Button>
            <Button
              href={personalInfo.github}
              external
              variant="outline"
              size="lg"
              iconLeft={<GitHubIcon className="size-4" />}
            >
              GitHub
            </Button>
            <Button
              href={`mailto:${personalInfo.email}`}
              variant="ghost"
              size="lg"
              iconLeft={<Mail className="size-4" aria-hidden="true" />}
            >
              Get in touch
            </Button>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs leading-snug text-zinc-500">{s.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.p variants={item} className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
            <MapPin className="size-4" aria-hidden="true" />
            {personalInfo.location} · US EST overlap available
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm min-w-0 lg:max-w-md"
        >
          <div
            className="absolute -inset-8 -z-10 rounded-[3rem] opacity-80 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 55% at 25% 15%, rgba(34,211,238,0.28), transparent 70%), radial-gradient(60% 60% at 85% 85%, rgba(129,140,248,0.26), transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-primary/25 sm:translate-x-4 sm:translate-y-4"
            aria-hidden="true"
          />

          <div
            className="relative rounded-[2rem] p-px"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.7), rgba(255,255,255,0.08) 40%, rgba(129,140,248,0.6))",
            }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-1px)] bg-zinc-900">
              {photoFailed ? (
                <div
                  className="flex size-full items-center justify-center"
                  role="img"
                  aria-label={`Monogram of ${personalInfo.name}`}
                >
                  <span className="text-gradient font-mono text-7xl font-semibold">RW</span>
                </div>
              ) : (
                <Image
                  src="/profile.jpg"
                  alt={`Portrait of ${personalInfo.name}`}
                  fill
                  preload
                  sizes="(max-width: 1024px) 85vw, 448px"
                  className="object-cover object-top"
                  onError={() => setPhotoFailed(true)}
                />
              )}

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
                style={{ background: "linear-gradient(to top, rgba(9,9,11,0.85), transparent)" }}
                aria-hidden="true"
              />

              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-zinc-950/55 p-4 backdrop-blur-md">
                <p className="text-base font-semibold tracking-tight text-white">{personalInfo.name}</p>
                <p className="mt-0.5 text-sm text-zinc-300">Full Stack Web Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
