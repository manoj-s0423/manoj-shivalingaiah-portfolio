"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function StatsBar() {
  return (
    <section className="border-y border-border bg-surface/40 py-10">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-center sm:text-left"
            >
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
