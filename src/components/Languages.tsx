"use client";

import { motion } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";
import { languages } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function Languages() {
  return (
    <section className="pb-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-xl border border-border bg-surface px-6 py-5"
        >
          <div className="flex items-center gap-2 text-text-muted">
            <LanguagesIcon size={16} className="text-primary" />
            <p className="mono text-xs font-medium uppercase tracking-[0.15em]">Languages</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {languages.map((lang) => (
              <p key={lang.name} className="text-sm text-text-muted">
                <span className="font-medium text-text">{lang.name}</span>{" "}
                <span className="text-text-faint">— {lang.level}</span>
              </p>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
