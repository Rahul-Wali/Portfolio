"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/data/resume";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = ["home", "about", "architecture", "experience", "projects", "skills", "education", "contact"];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "architecture" ? "about" : entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const wasOpen = menuOpen;
      setMenuOpen(false);

      const behavior: ScrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";

      window.setTimeout(
        () => {
          document.querySelector(href)?.scrollIntoView({ behavior, block: "start" });
          window.history.replaceState(null, "", href);
        },
        wasOpen ? 150 : 0
      );
    },
    [menuOpen]
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isScrolled || menuOpen
            ? "border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            onClick={(e) => goTo(e, "#home")}
            className="group flex items-center gap-2.5"
            aria-label="Rahul Anand Wali — back to top"
          >
            <span className="flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-sm font-semibold text-primary transition-colors group-hover:bg-primary/20">
              RW
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
              Rahul Wali
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => goTo(e, item.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-1 lg:flex">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex size-10 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <GitHubIcon className="size-[18px]" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex size-10 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <LinkedInIcon className="size-[18px]" />
            </a>
            <Button
              href="#contact"
              size="sm"
              className="ml-2"
              onClick={(e) => goTo(e as React.MouseEvent<HTMLAnchorElement>, "#contact")}
            >
              Hire me
            </Button>
          </div>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full text-zinc-200 transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        <motion.div
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-primary"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-zinc-950/95 px-6 pb-10 pt-24 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <ul className="flex flex-1 flex-col justify-center gap-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => goTo(e, item.href)}
                    className="flex items-baseline gap-4 rounded-xl px-3 py-3 text-3xl font-semibold tracking-tight text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <span className="font-mono text-sm text-primary">0{i + 1}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center gap-3 border-t border-white/10 pt-6">
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="flex size-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 hover:text-primary"
              >
                <Mail className="size-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex size-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 hover:text-primary"
              >
                <LinkedInIcon className="size-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex size-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 hover:text-primary"
              >
                <GitHubIcon className="size-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
