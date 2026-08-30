"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { shipPipeline } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ShipPipeline() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Code → Build → Validate → Deploy → Observe"
          title="How I Ship Software"
          description="This represents my engineering workflow and technical focus as a whole — not necessarily one single production pipeline."
        />

        <div className="overflow-x-auto pb-4">
          <div className="flex min-w-[720px] gap-1.5 sm:min-w-0 sm:flex-wrap">
            {shipPipeline.map((stage, i) => (
              <button
                key={stage.id}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`flex-1 rounded-lg border px-3 py-4 text-center transition-colors ${
                  active === i
                    ? "border-primary/50 bg-primary/10"
                    : "border-border bg-surface hover:border-border-strong"
                }`}
              >
                <span className="mono text-[10px] text-text-faint">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 text-sm font-semibold text-text">{stage.stage}</p>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={shipPipeline[active].id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center"
        >
          <p className="mono text-xs uppercase tracking-[0.15em] text-text-faint">
            {shipPipeline[active].stage}
          </p>
          <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-primary">
            {shipPipeline[active].technologies}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
