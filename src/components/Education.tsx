"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic Background" />
        <ol className="relative flex flex-col gap-8 border-l border-border pl-8 sm:pl-10">
          {education.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative"
            >
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-bg text-primary sm:-left-[calc(2.5rem+5px)]">
                <GraduationCap size={14} />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-text">
                  {item.degree}
                </h3>
                {item.period ? <span className="mono text-xs text-text-faint">{item.period}</span> : null}
              </div>
              <p className="mt-1 text-sm text-text-muted">
                {item.institution ? `${item.institution} · ` : ""}
                {item.location}
              </p>
              {item.focusAreas && item.focusAreas.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-text-muted"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
