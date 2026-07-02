"use client";

import { useEffect, useRef } from "react";

interface VisibilityGraphProps {
  variant?: "hero" | "broken" | "subtle";
  className?: string;
}

export function VisibilityGraph({
  variant = "hero",
  className = "",
}: VisibilityGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const isTouch = window.matchMedia("(hover: none)").matches;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // Only attach mouse listeners on pointer devices (desktop)
    if (!isTouch) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    const draw = (time: number) => {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      if (w === 0 || h === 0) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      const mouse = mouseRef.current;
      const isMobile = w < 768;

      // Draw Interactive Spotlight Matrix Reveal — desktop pointer devices only
      if (!isTouch && !isMobile && variant === "hero" && mouse.x > 0 && mouse.y > 0) {
        const spotRadius = 150;
        const cellSize = 28;
        const cols = Math.ceil(w / cellSize);
        const rows = Math.ceil(h / cellSize);

        ctx.font = "8px var(--font-geist-mono), ui-monospace, monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        for (let c = 0; c <= cols; c++) {
          for (let r = 0; r <= rows; r++) {
            const cx = c * cellSize;
            const cy = r * cellSize;

            const dx = cx - mouse.x;
            const dy = cy - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Draw character if inside spotlight area
            if (dist < spotRadius) {
              const ratio = 1 - dist / spotRadius;
              const char = Math.random() > 0.65 ? (Math.random() > 0.5 ? "1" : "0") : "·";
              ctx.fillStyle = `rgba(255, 255, 255, ${ratio * 0.08})`;
              ctx.fillText(char, cx, cy);
            }
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      if (!isTouch) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
