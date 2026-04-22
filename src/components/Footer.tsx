import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Thanmaya K N. Built with care.
        </p>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/Thanmaya-K-N"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/thanmaya-kn"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:tanung901@gmail.com"
            aria-label="Email"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
