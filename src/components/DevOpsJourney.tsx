"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { journeyStages } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/Badge";

export function DevOpsJourney() {
  const [active, setActive] = useState(journeyStages.length - 1);
  const stage = journeyStages[active];

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="From Testing to Production Engineering"
          title="The DevOps Journey"
          description="My current professional role is QA Engineer I. This is the technical direction that role's responsibilities have been pulling toward — click any stage to see how it connects to the next."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-wrap gap-2 sm:flex-col sm:gap-1.5">
            {journeyStages.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                  active === i
                    ? "border-primary/50 bg-primary/10 text-text"
                    : "border-border bg-surface text-text-muted hover:border-border-strong"
                }`}
              >
                <span className="mono text-xs text-text-faint">{s.stage}</span>
                <span className="font-medium">{s.label}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <span className="mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
              Stage {stage.stage}
            </span>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-text">
              {stage.label}
            </h3>

            <p className="mono mb-2 mt-5 text-xs font-medium uppercase tracking-[0.15em] text-text-faint">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {stage.technologies.map((t) => (
                <TechBadge key={t}>{t}</TechBadge>
              ))}
            </div>

            <p className="mono mb-2 mt-5 text-xs font-medium uppercase tracking-[0.15em] text-text-faint">
              Concepts
            </p>
            <div className="flex flex-wrap gap-2">
              {stage.concepts.map((c) => (
                <span key={c} className="rounded-md bg-bg px-2.5 py-1 text-xs text-text-muted">
                  {c}
                </span>
              ))}
            </div>

            <p className="mono mb-2 mt-5 text-xs font-medium uppercase tracking-[0.15em] text-text-faint">
              Related
            </p>
            <ul className="space-y-1">
              {stage.relatedProjects.map((p) => (
                <li key={p} className="text-sm text-text-muted">
                  · {p}
                </li>
              ))}
            </ul>

            <div className="mt-5 border-t border-border pt-4">
              <p className="mono mb-1 text-[11px] font-medium uppercase tracking-[0.15em] text-text-faint">
                How this connects forward
              </p>
              <p className="text-sm leading-relaxed text-text-muted">{stage.connection}</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
