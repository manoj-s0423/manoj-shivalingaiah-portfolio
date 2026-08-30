"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { controlPlane } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge, TechBadge } from "@/components/ui/Badge";
import type { UsageContext } from "@/types/profile";

const contextLabel: Record<UsageContext, { label: string; tone: "healthy" | "info" | "warning" }> = {
  professional: { label: "Current professional role", tone: "healthy" },
  portfolio: { label: "Portfolio project", tone: "info" },
  learning: { label: "Learning / in progress", tone: "warning" },
};

export function DevOpsControlPlane() {
  const [active, setActive] = useState(0);
  const node = controlPlane[active];
  const ctx = contextLabel[node.context];

  return (
    <section id="control-plane" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="How My Tools Work Together"
          title="My DevOps Control Plane"
          description="Every stage of the delivery lifecycle, tagged by where I've actually used it — current role, portfolio project, or active learning."
        />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {controlPlane.map((n, i) => {
              const tone = contextLabel[n.context].tone;
              return (
                <motion.button
                  key={n.id}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className={`relative rounded-xl border p-4 text-left transition-colors ${
                    active === i
                      ? "border-primary/50 bg-primary/10"
                      : "border-border bg-surface hover:border-border-strong"
                  }`}
                >
                  <span
                    className={`absolute right-3 top-3 h-1.5 w-1.5 rounded-full ${
                      tone === "healthy" ? "bg-healthy" : tone === "warning" ? "bg-warning" : "bg-primary"
                    }`}
                  />
                  <p className="mono text-[10px] text-text-faint">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-1 text-sm font-semibold text-text">{n.stage}</p>
                  <p className="mono mt-1 text-[11px] text-text-muted">{n.tools.join(" / ")}</p>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="h-fit rounded-xl border border-border bg-surface p-6"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-text">
                {node.stage}
              </h3>
              <Badge tone={ctx.tone} dot>
                {ctx.label}
              </Badge>
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              {node.tools.map((t) => (
                <TechBadge key={t}>{t}</TechBadge>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-text-muted">{node.description}</p>
            {node.relatedProject ? (
              <p className="mt-4 border-t border-border pt-4 text-xs text-text-faint">
                Related: <span className="text-text-muted">{node.relatedProject}</span>
              </p>
            ) : null}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
