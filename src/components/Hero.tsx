"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { HeroPipeline } from "@/components/HeroPipeline";
import { SectionBackdrop } from "@/components/backdrops/SectionBackdrop";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <SectionBackdrop motif="pipeline-flow" />
      <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-muted"
          >
            <MapPin size={12} className="text-primary" />
            {profile.location} · Open to {profile.positioning} roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-[3.25rem]"
          >
            {profile.heroHeadline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mono mt-5 text-sm font-medium text-primary sm:text-base"
          >
            {profile.heroSubtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-text-muted"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-primary-strong"
            >
              Explore My Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#control-plane"
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface-hover"
            >
              View the Control Plane
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mono mt-10 text-xs uppercase tracking-[0.2em] text-text-faint"
          >
            {profile.lifecycle.join("  →  ")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeroPipeline />
        </motion.div>
      </Container>
    </section>
  );
}
