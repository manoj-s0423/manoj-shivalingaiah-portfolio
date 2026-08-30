import fs from "node:fs";
import path from "node:path";
import { profile } from "@/data/profile";

// Server-only helper: checks whether the real resume PDF has actually been
// dropped into /public. Used so the UI never links to a file that 404s —
// see profile.resumeFile in src/data/profile.ts for the expected path.
export function resumeExists(): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", profile.resumeFile.replace(/^\//, "")));
  } catch {
    return false;
  }
}
