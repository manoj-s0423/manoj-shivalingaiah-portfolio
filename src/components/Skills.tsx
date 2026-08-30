"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { skills } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  const [active, setActive] = useState(0);
  const group = skills[active];

  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Technology Ecosystem"
          title="Skills"
          description="Organized by where each technology sits in the delivery lifecycle, not by an arbitrary proficiency score."
        />

        <div className="flex flex-wrap gap-2">
          {skills.map((g, i) => (
            <button
              key={g.domain}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === i
                  ? "border-primary/50 bg-primary/10 text-text"
                  : "border-border bg-surface text-text-muted hover:border-border-strong"
              }`}
            >
              {g.domain}
            </button>
          ))}
        </div>

        <motion.div
          key={group.domain}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8"
        >
          <p className="max-w-xl text-sm leading-relaxed text-text-muted">{group.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {group.items.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: i * 0.02 }}
                className="mono rounded-lg border border-border bg-bg px-3 py-2 text-xs text-text-muted transition-colors hover:border-primary/40 hover:text-text"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
