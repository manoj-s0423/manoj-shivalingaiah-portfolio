"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Loader2 } from "lucide-react";
import { certifications } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { SectionBackdrop } from "@/components/backdrops/SectionBackdrop";

export function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-24">
      <SectionBackdrop motif="blueprint" />
      <Container className="relative">
        <SectionHeading eyebrow="Foundation" title="Certifications" />
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  {cert.status === "completed" ? <Award size={18} /> : <Loader2 size={18} />}
                </span>
                {cert.status === "completed" ? (
                  <Badge tone="healthy" dot>Completed</Badge>
                ) : (
                  <Badge tone="warning" dot>Currently Preparing</Badge>
                )}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-text">
                {cert.name}
              </h3>
              <p className="mt-1 text-sm text-text-muted">{cert.issuer}</p>
              {cert.credentialId ? (
                <p className="mono mt-1 text-xs text-text-faint">ID: {cert.credentialId}</p>
              ) : null}
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-strong"
                >
                  Verify Credential
                  <ExternalLink size={13} />
                </a>
              ) : null}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
