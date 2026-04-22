import { Github, Linkedin, Mail } from "lucide-react";
import { AsciiRule } from "@/components/Section";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <AsciiRule char="═" className="mb-4" />
        <div className="flex flex-col items-start justify-between gap-3 font-mono text-xs sm:flex-row sm:items-center">
          <div className="space-y-1">
            <p className="text-muted-foreground">
              <span className="text-amber">$</span> echo "© {new Date().getFullYear()} Thanmaya K N"
            </p>
            <p className="text-muted-foreground/60">
              built with care — <span className="text-phosphor">process complete</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Thanmaya-K-N"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-amber hover:text-amber"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/thanmaya-kn"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-amber hover:text-amber"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:tanung901@gmail.com"
              aria-label="Email"
              className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-amber hover:text-amber"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
