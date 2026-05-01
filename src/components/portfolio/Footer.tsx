import { Github, Linkedin, Mail } from "lucide-react";

const LINKEDIN =
  "https://www.linkedin.com/posts/lokeshwari-ramesh-20b61a36a_audionex-techsprint-ieee-ugcPost-7429716004269715456-iono";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-gradient font-semibold">Lokeswari R</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:rlokeswari23@gmail.com"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full glass transition-all hover:glow-blue"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Lokeshwari624"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full glass transition-all hover:glow-blue"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full glass transition-all hover:glow-blue"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}