import { Mail } from "lucide-react";
import { profile, social } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function Footer({ resumeAvailable }: { resumeAvailable: boolean }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-text">
              {profile.name}
            </p>
            <p className="mono text-xs text-text-faint">DevOps • Cloud • Automation</p>
          </div>

          <div className="flex items-center gap-4">
            {social.linkedin ? (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-muted transition-colors hover:text-text"
              >
                <LinkedinIcon size={18} />
              </a>
            ) : null}
            {social.github ? (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-muted transition-colors hover:text-text"
              >
                <GithubIcon size={18} />
              </a>
            ) : null}
            <a
              href={`mailto:${social.email}`}
              aria-label="Email"
              className="text-text-muted transition-colors hover:text-text"
            >
              <Mail size={18} />
            </a>
            {resumeAvailable ? (
              <a
                href={profile.resumeFile}
                download
                className="text-xs font-medium text-text-muted transition-colors hover:text-text"
              >
                Resume
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-1 border-t border-border pt-6 text-center">
          <p className="text-xs text-text-faint">© {year} {profile.name}</p>
          <p className="text-xs text-text-faint">Built with automation, curiosity &amp; cloud.</p>
        </div>
      </Container>
    </footer>
  );
}
