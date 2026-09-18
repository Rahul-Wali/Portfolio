"use client";

import { useEffect, useRef, useState } from "react";

interface AIBackgroundProps {
  reducedMotion?: boolean;
  isLowPerformance?: boolean;
  isMobile?: boolean;
  scrollProgress?: number;
  mousePosition?: [number, number];
}

export function AIBackground({
  reducedMotion = false,
  isLowPerformance = false,
  isMobile = false,
  scrollProgress = 0,
  mousePosition = [0, 0],
}: AIBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  // Always call useEffect for mounting - this ensures consistent hook order
  useEffect(() => {
    setMounted(true);
  }, []);

  // Always call the animation effect - it will just return early if not ready
  useEffect(() => {
    if (!mounted || reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId: number;
    let particles: Particle[] = [];
    const colors = ["#06b6d4", "#8b5cf6", "#ec4899", "#22c55e", "#f59e0b"];

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
      size: number;
    }

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx?.scale(dpr, dpr);
      initParticles();
    }

    function initParticles() {
      const count = isMobile ? 60 : isLowPerformance ? 100 : 150;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.1,
          size: Math.random() * 2 + 1,
        });
      }
    }

    function animate() {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.001;
      const mouseInfluenceX = mousePosition[0] * width * 0.1;
      const mouseInfluenceY = mousePosition[1] * height * 0.1;

      // Draw connections
      ctx.strokeStyle = "rgba(6, 182, 212, 0.05)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p, i) => {
        p.x += p.vx + Math.sin(time * 0.5 + i) * 0.05;
        p.y += p.vy + Math.cos(time * 0.3 + i) * 0.05;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pulse = 1 + Math.sin(time * 2 + i) * 0.1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * pulse, 0, Math.PI * 2);
        const r = parseInt(p.color.slice(1, 3), 16);
        const g = parseInt(p.color.slice(3, 5), 16);
        const b = parseInt(p.color.slice(5, 7), 16);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    resize();
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [mounted, isLowPerformance, isMobile, scrollProgress, mousePosition, reducedMotion]);

  // Render fallback when not mounted or reduced motion
  if (!mounted || reducedMotion) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none",
          background: "linear-gradient(135deg, #020617 0%, #0a0f1a 50%, #1a0a2e 100%)",
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}

export function RAGVisualization({
  reducedMotion = false,
  isLowPerformance = false,
}: { reducedMotion?: boolean; isLowPerformance?: boolean }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
        borderRadius: "1rem",
        border: "1px solid rgba(148, 163, 184, 0.1)",
      }}
      aria-hidden="true"
    >
      <div style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
        <p>RAG Pipeline Visualization</p>
        <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>Documents → Chunks → Embeddings → Vector Space → Search → Context → LLM → Response</p>
      </div>
    </div>
  );
}