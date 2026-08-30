"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { motifs, type MotifKey } from "./motifs";

/**
 * Interactive, per-section themed backdrop. Render as the FIRST child of a
 * `relative overflow-hidden` section, with the section's real content given
 * `relative` too so it stacks above (see e.g. Hero.tsx / About.tsx).
 *
 * - Pointer parallax + a cursor spotlight, applied via CSS custom properties
 *   set directly on the element (no React state / re-renders).
 * - A gentle scroll-linked drift (Framer Motion `useScroll`).
 * - Both are skipped entirely on touch devices and under
 *   prefers-reduced-motion — checked once on mount, not just left to CSS,
 *   since these are JS-driven transforms rather than CSS transitions.
 * - The line-art itself (motifs.tsx) always renders; only the motion layers
 *   are conditional, so the section still looks intentional with JS/motion
 *   off.
 */
export function SectionBackdrop({ motif }: { motif: MotifKey }) {
  const layerRef = useRef<HTMLDivElement>(null);
  const scrollTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const section = layer?.closest("section");
    if (!layer || !section) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        layer.style.setProperty("--mx", `${x}%`);
        layer.style.setProperty("--my", `${y}%`);
        layer.style.setProperty("--px", `${(x - 50) / 50}`);
        layer.style.setProperty("--py", `${(y - 50) / 50}`);
        // Set on every move rather than relying solely on a separate
        // pointerenter firing first — some input sources (touch-to-mouse
        // emulation, automated drivers) can deliver a move without a
        // distinct enter event.
        layer.style.setProperty("--spot-opacity", "1");
      });
    };
    const onLeave = () => layer.style.setProperty("--spot-opacity", "0");

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  const Motif = motifs[motif];

  return (
    <div ref={scrollTargetRef} className="backdrop-layer" aria-hidden="true">
      <div ref={layerRef} className="absolute inset-0">
        <motion.div className="backdrop-layer__parallax" style={{ y }}>
          <Motif />
        </motion.div>
        <div className="backdrop-layer__spotlight" />
      </div>
    </div>
  );
}
