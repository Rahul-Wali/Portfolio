"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Check, Mail, MapPin } from "lucide-react";
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
  { value: "15 wk", label: "AI & Cloud internship" },
  { value: "2", label: "End-to-end projects" },
];

const steps = [
  { label: "Extract", detail: "symptom parsing · fuzzy match" },
  { label: "Embed", detail: "text → vectors" },
  { label: "Retrieve", detail: "FAISS nearest neighbours" },
  { label: "Classify", detail: "Random Forest · top-3" },
  { label: "Respond", detail: "confidence + severity" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-dvh items-center px-5 pb-16 pt-28 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
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
              Open to opportunities · {personalInfo.availability.type}
            </span>
          </motion.div>

          <motion.p variants={item} className="mt-8 font-mono text-sm tracking-wide text-zinc-400">
            Hi, I&apos;m <span className="text-white">{personalInfo.name}</span>
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-3 text-balance text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Building intelligent systems <span className="text-gradient">from data to AI.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            Python engineer focused on data engineering, RAG pipelines, vector search and GenAI — turning raw
            data into reliable retrieval, ranking and analytics workflows.
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
            {personalInfo.location} · Open to relocation
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-w-0"
          aria-label="Simplified RAG pipeline illustration"
        >
          <div
            className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 60% at 30% 20%, rgba(34,211,238,0.22), transparent 70%), radial-gradient(60% 60% at 80% 80%, rgba(129,140,248,0.2), transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="card overflow-hidden bg-zinc-900/70 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-zinc-700" />
                <span className="size-2.5 rounded-full bg-zinc-700" />
                <span className="size-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="font-mono text-xs text-zinc-500">rag_pipeline</span>
              <span className="chip chip-primary">illustrative</span>
            </div>

            <div className="px-5 pb-5 pt-4 font-mono text-sm">
              <p className="text-zinc-500">
                <span className="text-primary">$</span> query{" "}
                <span className="text-zinc-300">&quot;fever, dry cough, fatigue&quot;</span>
              </p>

              <ol className="mt-5 space-y-3">
                {steps.map((step, i) => (
                  <motion.li
                    key={step.label}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/20 px-3.5 py-3"
                    initial={reduce ? false : { opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.22, duration: 0.45 }}
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="w-[4.5rem] shrink-0 text-white">{step.label}</span>
                    <span className="truncate text-xs text-zinc-500">{step.detail}</span>
                  </motion.li>
                ))}
              </ol>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4 font-sans">
                {["Python", "FAISS", "scikit-learn", "Streamlit"].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
