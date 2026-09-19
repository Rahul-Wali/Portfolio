"use client";

import { useEffect, useState, useRef } from "react";

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const lastScrollYRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const pendingProgressRef = useRef(0);
  const pendingDirectionRef = useRef<"up" | "down">("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? currentScrollY / maxScroll : 0;

      pendingProgressRef.current = Math.max(0, Math.min(1, progress));
      pendingDirectionRef.current = currentScrollY > lastScrollYRef.current ? "down" : "up";
      lastScrollYRef.current = currentScrollY;

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          setScrollProgress(pendingProgressRef.current);
          setScrollDirection(pendingDirectionRef.current);
          rafRef.current = null;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return { scrollProgress, scrollDirection };
}

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return reducedMotion;
}

export function useDevicePerformance() {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      const connection = (navigator as Navigator & { connection?: { effectiveType?: string; saveData?: boolean } }).connection;
      const effectiveType = connection?.effectiveType;
      const saveData = connection?.saveData;
      const lowEndDevice = navigator.hardwareConcurrency <= 4 || effectiveType === "slow-2g" || effectiveType === "2g" || saveData === true;
      setIsLowPerformance(mobile || lowEndDevice);
    };

    checkPerformance();
    window.addEventListener("resize", checkPerformance);
    return () => window.removeEventListener("resize", checkPerformance);
  }, []);

  return { isLowPerformance, isMobile };
}

export function useIntersectionObserver(options: IntersectionObserverInit = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    observer.observe(element);
    return () => observer.disconnect();
  }, [element, options.threshold, options.rootMargin]);

  const ref = (el: HTMLElement | null) => {
    if (el) {
      setElement(el);
    }
  };

  return { ref, isIntersecting };
}