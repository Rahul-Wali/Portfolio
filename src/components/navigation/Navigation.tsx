"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import { Menu, X, GitBranch, Link as LinkIcon, Mail } from "lucide-react";
import { useScrollProgress, useReducedMotion } from "@/hooks";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { scrollY } = useScroll();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0.1 }
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300"
        style={{
          background: isScrolled
            ? "rgba(2, 6, 23, 0.85)"
            : "rgba(2, 6, 23, 0.4)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
          borderBottom: isScrolled ? "1px solid rgba(148, 163, 184, 0.1)" : "none",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <NextLink
          href="#home"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white"
          aria-label="Rahul Wali - Home"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
            RAHUL
          </span>
          <span className="text-zinc-400">/</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
            WALI
          </span>
        </NextLink>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-violet-505 hover:after:w-full transition-all duration-300"
              style={{ textDecoration: "none" }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:rahulrah834@gmail.com"
            className="text-zinc-400 hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://linkedin.com/in/rahul-wali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkIcon size={18} />
          </a>
          <a
            href="https://github.com/Rahul-Wali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <GitBranch size={18} />
          </a>
        </div>

        <button
          className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <motion.div
        id="mobile-menu"
        className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-40 flex flex-col items-center justify-center gap-8 bg-zinc-950/95 backdrop-blur-xl"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? "100vh" : 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        exit={{ opacity: 0, height: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {navItems.map((item, i) => (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium text-zinc-300 hover:text-white transition-colors"
            style={{ textDecoration: "none" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: 0 }}
            transition={{ delay: i * 0.08, duration: reducedMotion ? 0 : 0.3 }}
          >
            {item.label}
          </motion.a>
        ))}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: 0 }}
          transition={{ delay: 0.3, duration: reducedMotion ? 0 : 0.3 }}
        >
          <a href="mailto:rahulrah834@gmail.com" className="text-zinc-400 hover:text-cyan-400" aria-label="Email"><Mail size={22} /></a>
          <a href="https://linkedin.com/in/rahul-wali" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400" aria-label="LinkedIn"><LinkIcon size={22} /></a>
          <a href="https://github.com/Rahul-Wali" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400" aria-label="GitHub"><GitBranch size={22} /></a>
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed bottom-8 right-8 z-40 hidden md:block"
        role="status"
        aria-live="polite"
      >
        <motion.div
          className="w-[2px] h-32 bg-gradient-to-b from-cyan-400 to-transparent rounded-full overflow-hidden"
          animate={{ scaleY: [0, 1] }}
          transition={{ duration: reducedMotion ? 0 : 1.5, ease: "easeInOut" }}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-b from-cyan-400 to-violet-500 rounded-full"
            style={{
              transformOrigin: "bottom",
              height: `${Math.min(scrollY.get() / (document.documentElement.scrollHeight - window.innerHeight), 1) * 100}%`,
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}