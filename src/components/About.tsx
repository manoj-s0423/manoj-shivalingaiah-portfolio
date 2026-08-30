"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-lg leading-relaxed text-text-muted"
          >
            {profile.aboutNarrative}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <p className="mono mb-4 text-xs font-medium uppercase tracking-[0.15em] text-text-faint">
              Engineering Path
            </p>
            <p className="mono text-sm leading-loose text-primary">
              Software Quality → Automation → CI/CD → Docker → Cloud → Kubernetes → DevOps
            </p>
            <p className="mono mt-6 mb-3 text-xs font-medium uppercase tracking-[0.15em] text-text-faint">
              Focus Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.aboutFocus.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-bg px-2.5 py-1 text-xs text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
