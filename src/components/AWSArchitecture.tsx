"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { awsArchitecture } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AWSArchitecture() {
  const [active, setActive] = useState(2); // EKS by default

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Cloud Architecture"
          title="AWS Architecture"
          description="AWS as a technology ecosystem — not every service below is used in every project. Select a component to see exactly where it applies."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col items-stretch">
            {awsArchitecture.map((node, i) => (
              <div key={node.id} className="flex flex-col items-center">
                <motion.button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className={`w-full rounded-lg border px-4 py-3 text-left transition-colors ${
                    active === i
                      ? "border-primary/50 bg-primary/10 text-text"
                      : "border-border bg-surface text-text-muted hover:border-border-strong"
                  }`}
                >
                  <span className="text-sm font-medium">{node.label}</span>
                  <span className="mono ml-2 text-[11px] text-text-faint">{node.service}</span>
                </motion.button>
                {i < awsArchitecture.length - 1 ? (
                  <ArrowDown size={14} className="my-1.5 shrink-0 text-text-faint" />
                ) : null}
              </div>
            ))}
          </div>

          <motion.div
            key={awsArchitecture[active].id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="h-fit rounded-xl border border-border bg-surface p-6"
          >
            <p className="mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
              {awsArchitecture[active].service}
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-text">
              {awsArchitecture[active].label}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {awsArchitecture[active].description}
            </p>
            <p className="mt-5 border-t border-border pt-4 text-xs text-text-faint">
              Applies to: <span className="text-text-muted">{awsArchitecture[active].relatedProject}</span>
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
