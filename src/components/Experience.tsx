"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge, TechBadge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="Software quality engineering that expanded into meaningful CI/CD, containerization, and cloud deployment-support work."
        />

        <ol className="relative flex flex-col gap-10 border-l border-border pl-8 sm:pl-10">
          {experience.map((role, i) => (
            <motion.li
              key={role.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative"
            >
              <span
                className={`absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 border-bg sm:-left-[calc(2.5rem+5px)] ${
                  role.current ? "bg-primary" : "bg-text-faint"
                }`}
              />

              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-text">
                  {role.title}
                </h3>
                {role.current ? <Badge tone="healthy" dot>Current</Badge> : null}
              </div>
              <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted">
                <span className="font-medium text-text">{role.company}</span>
                <span className="flex items-center gap-1 text-text-faint">
                  <MapPin size={12} /> {role.location}
                </span>
                {role.period ? <span className="mono text-text-faint">{role.period}</span> : null}
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">{role.summary}</p>

              {role.devOpsHighlights.length > 0 ? (
                <div className="mt-4">
                  <p className="mono mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-text-faint">
                    DevOps-Relevant Contributions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {role.devOpsHighlights.map((h) => (
                      <Badge key={h} tone="info">{h}</Badge>
                    ))}
                  </div>
                </div>
              ) : null}

              <details className="group mt-4">
                <summary className="cursor-pointer text-sm font-medium text-primary transition-colors hover:text-primary-strong">
                  <span className="group-open:hidden">View full responsibilities</span>
                  <span className="hidden group-open:inline">Hide responsibilities</span>
                </summary>
                <ul className="mt-3 space-y-2">
                  {role.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2 text-sm leading-relaxed text-text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                      {r}
                    </li>
                  ))}
                </ul>
              </details>

              <div className="mt-4 flex flex-wrap gap-2">
                {role.tech.map((t) => (
                  <TechBadge key={t}>{t}</TechBadge>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
