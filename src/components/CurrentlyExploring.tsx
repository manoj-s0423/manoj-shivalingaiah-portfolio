"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { currentlyExploring } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function CurrentlyExploring() {
  return (
    <section className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-dashed border-border-strong bg-surface/50 p-6 sm:p-8"
        >
          <div className="mb-4 flex items-center gap-2 text-text-muted">
            <Compass size={16} className="text-secondary" />
            <p className="mono text-xs font-medium uppercase tracking-[0.15em]">Currently Exploring</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentlyExploring.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1.5 text-xs font-medium text-secondary"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
