"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { social } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a recruiter"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Reliable Systems."
          description="I'm interested in DevOps, cloud infrastructure, Kubernetes, automation, CI/CD, and building reliable production systems."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-3"
          >
            <ContactLink
              icon={<Mail size={16} />}
              label="Email"
              value={social.email}
              href={`mailto:${social.email}`}
            />
            {social.phone ? (
              <ContactLink
                icon={<Phone size={16} />}
                label="Phone"
                value={social.phone}
                href={`tel:${social.phone.replace(/[^+\d]/g, "")}`}
              />
            ) : null}
            {social.linkedin ? (
              <ContactLink icon={<LinkedinIcon size={16} />} label="LinkedIn" value="Connect on LinkedIn" href={social.linkedin} />
            ) : null}
            {social.github ? (
              <ContactLink icon={<GithubIcon size={16} />} label="GitHub" value="View my repositories" href={social.github} />
            ) : null}
            <ContactLink icon={<MapPin size={16} />} label="Location" value={social.location} />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.08 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="mb-4">
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-text-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus-visible:border-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus-visible:border-primary"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus-visible:border-primary"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-primary-strong sm:w-auto"
            >
              <Send size={15} />
              Let&apos;s Connect
            </button>
            <p className="mt-3 text-xs text-text-faint">
              Opens your email client with this message pre-filled — there&apos;s no backend on this
              form.
            </p>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-border-strong">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs text-text-faint">{label}</p>
        <p className="truncate text-sm font-medium text-text">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  );
}
