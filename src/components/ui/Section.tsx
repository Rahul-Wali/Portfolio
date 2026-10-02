"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  labelledBy,
  children,
  className = "",
}: {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  highlight,
  description,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  highlight?: ReactNode;
  description?: ReactNode;
}) {
  return (
    <Reveal className="mb-12 max-w-3xl md:mb-16">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        <span>{index}</span>
        <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2
        id={id}
        className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title}
        {highlight && <> <span className="text-gradient">{highlight}</span></>}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
