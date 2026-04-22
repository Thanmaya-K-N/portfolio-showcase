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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
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
    <main className={cn("mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24", className)}>
      {children}
    </main>
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
    <FadeIn className="mb-12 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</p>
      )}
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </FadeIn>
  );
}
