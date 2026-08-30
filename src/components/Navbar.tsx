"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar({ resumeAvailable }: { resumeAvailable: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`section-container flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2 font-[family-name:var(--font-display)] text-sm font-semibold text-text"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
            <Terminal size={14} strokeWidth={2.5} />
          </span>
          <span className="hidden whitespace-nowrap sm:inline lg:hidden xl:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="block whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface-hover hover:text-text xl:px-3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <ThemeToggle />
          {resumeAvailable ? (
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-primary-strong"
            >
              Download Resume
            </a>
          ) : (
            <span
              title="Resume PDF coming soon"
              className="inline-flex cursor-not-allowed items-center rounded-lg border border-border-strong px-4 py-2 text-sm font-semibold text-text-faint"
            >
              Resume Coming Soon
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-bg lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-text transition-colors hover:bg-surface-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                {resumeAvailable ? (
                  <a
                    href={profile.resumeFile}
                    download
                    onClick={() => setOpen(false)}
                    className="block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-bg"
                  >
                    Download Resume
                  </a>
                ) : (
                  <span className="block rounded-lg border border-border-strong px-4 py-3 text-center text-sm font-semibold text-text-faint">
                    Resume Coming Soon
                  </span>
                )}
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
