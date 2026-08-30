"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionBackdrop } from "@/components/backdrops/SectionBackdrop";

export function Resume({ resumeAvailable }: { resumeAvailable: boolean }) {
  return (
    <section id="resume" className="relative overflow-hidden py-24">
      <SectionBackdrop motif="blueprint" />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-surface px-6 py-14 text-center sm:px-12"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
            <FileText size={24} />
          </span>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-text sm:text-3xl">
              Want the Full Story?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-muted">
              Download my resume for a detailed overview of my professional experience,
              DevOps-related responsibilities, cloud and automation projects, technical
              skills, education, and certifications.
            </p>
          </div>
          {resumeAvailable ? (
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-primary-strong"
            >
              <Download size={16} />
              Download Resume
            </a>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-border-strong px-6 py-3 text-sm font-semibold text-text-faint">
                <Download size={16} />
                Resume Coming Soon
              </span>
              <p className="text-xs text-text-faint">
                PDF not yet added — see README.md for how to drop it in.
              </p>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
