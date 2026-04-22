import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16", className)}>
      {children}
    </main>
  );
}

/** A chrome-less terminal window frame. */
export function TerminalWindow({
  title = "~",
  children,
  className,
  accent = "amber",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
  accent?: "amber" | "phosphor" | "terracotta";
}) {
  const dotClass =
    accent === "phosphor" ? "bg-phosphor" : accent === "terracotta" ? "bg-terracotta" : "bg-amber";
  return (
    <div className={cn("terminal-window rounded-md overflow-hidden", className)}>
      <div className="terminal-header flex items-center gap-2 px-3 py-2 text-[11px] text-muted-foreground">
        <span className={cn("h-2 w-2 rounded-full opacity-80", dotClass)} />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="ml-2 truncate font-mono">{title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <FadeIn className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 font-mono text-xs text-amber">
          <span className="text-muted-foreground">$</span> {eyebrow}
        </p>
      )}
      <h1 className="text-3xl tracking-tight sm:text-4xl">
        <span className="font-serif text-foreground">{title}</span>
      </h1>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      )}
      <AsciiRule className="mt-5" />
    </FadeIn>
  );
}

export function AsciiRule({
  char = "─",
  className,
}: {
  char?: string;
  className?: string;
}) {
  return (
    <div className={cn("ascii-rule text-xs leading-none", className)} aria-hidden>
      {char.repeat(200)}
    </div>
  );
}
