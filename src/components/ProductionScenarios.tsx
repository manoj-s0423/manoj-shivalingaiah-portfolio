"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { incidents } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function ProductionScenarios() {
  const [active, setActive] = useState(0);
  const incident = incidents[active];

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Production Troubleshooting"
          title="Can I Troubleshoot Systems?"
          description="Structured investigation workflows for common production issues. These demonstrate how I approach diagnosis — they are explicitly labeled scenarios, not claims of specific real incidents."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {incidents.map((inc, i) => (
            <button
              key={inc.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                active === i
                  ? "border-primary/50 bg-primary/10 text-text"
                  : "border-border bg-surface text-text-muted hover:border-border-strong"
              }`}
            >
              {inc.title}
            </button>
          ))}
        </div>

        <motion.div
          key={incident.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-text">
              {incident.title}
            </h3>
            <Badge tone="warning">{incident.label}</Badge>
          </div>

          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {incident.steps.map((s, i) => (
              <li
                key={s.step}
                className="relative rounded-lg border border-border bg-bg p-4"
              >
                <span className="mono text-[11px] text-text-faint">Step {i + 1}</span>
                <p className="mt-1 text-sm font-semibold text-text">{s.step}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{s.detail}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-xs italic text-text-faint">{incident.note}</p>
        </motion.div>
      </Container>
    </section>
  );
}
