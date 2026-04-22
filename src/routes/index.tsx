import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thanmaya K N — Software Engineer" },
      {
        name: "description",
        content: "Software Engineer at Nokia. Backend, distributed systems, and AI/ML. Java, Python, RAG pipelines, and production microservices.",
      },
      { property: "og:title", content: "Thanmaya K N — Software Engineer" },
      { property: "og:description", content: "Backend & AI/ML engineer building production systems at Nokia." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr,1fr]">
          <div>
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for interesting problems
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I'm Thanmaya.<br />
                <span className="text-gradient">Software Engineer</span>
                <span className="text-muted-foreground"> building reliable systems.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I specialize in backend engineering, distributed microservices, and applied AI/ML — currently shipping production NMS features and RAG pipelines at Nokia.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link to="/resume">
                    View Resume <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Contact Me</Link>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <a href="/resume.pdf" download>
                    <Download className="mr-1 h-4 w-4" /> Download PDF
                  </a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" /> Bengaluru, India
                </span>
                <a
                  href="https://github.com/Thanmaya-K-N"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" /> Thanmaya-K-N
                </a>
                <a
                  href="https://linkedin.com/in/thanmaya-kn"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" /> thanmaya-kn
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="relative mx-auto aspect-square w-64 sm:w-80">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 via-transparent to-primary/10 blur-2xl"
              />
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-border bg-card shadow-[var(--shadow-glow)]">
                <div className="flex flex-col items-center text-muted-foreground">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <p className="mt-3 px-6 text-center text-xs">
                    Your photo goes here — add to{" "}
                    <code className="font-mono">src/assets/profile.jpg</code>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <AboutPreview />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}

function AboutPreview() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr,2fr]">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">About</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              2.5 years shipping production systems.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a Software Engineer at <span className="text-foreground">Nokia</span>, where I own end-to-end delivery across a large-scale Network Management System — from requirements gathering to deployment.
              </p>
              <p>
                My work spans performance-sensitive Java services, Kafka/gRPC integrations, and hybrid RAG pipelines that bring natural-language querying to structured ingestion metadata. I care about <span className="text-foreground">measurable impact</span> — cutting error-trace time from hours to seconds, or boosting engagement 5×.
              </p>
              <p>
                Previously B.E. in Information Science from <span className="text-foreground">JSS STU</span> (CGPA 9.49/10). Deep interest in transformers, agentic AI, and resilient backend architecture.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const skillCategories = [
  {
    title: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "C++"],
  },
  {
    title: "Backend & Infra",
    items: ["Node.js", "Flask", "gRPC", "Kafka", "Docker"],
  },
  {
    title: "AI / ML & GenAI",
    items: ["PyTorch", "Transformers", "RAG", "LangChain", "LlamaIndex", "ChromaDB"],
  },
  {
    title: "Frontend",
    items: ["React", "Angular", "TailwindCSS"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Concepts",
    items: ["Microservices", "Distributed Systems", "Vector Search", "Prompt Engineering"],
  },
];

function SkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <FadeIn className="mb-10">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Skills</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Tools of the trade.
        </h2>
      </FadeIn>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <FadeIn key={cat.title} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {cat.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

const experiences = [
  {
    role: "Software Development Engineer I",
    company: "Nokia",
    duration: "Jul 2024 — Present",
    location: "Bengaluru, India",
    highlights: [
      "Owned end-to-end development of a production internal log analysis & observability tool — reduced error-trace time from 3–6 hours to <10 seconds.",
      "Delivered features across multiple frontend and backend microservices in a large-scale NMS application.",
      "Performance optimizations on a Java-based NMS feature contributed to a 5× increase in application engagement under varying network demand.",
      "Built backend APIs and service integrations using Java, gRPC, and Kafka for distributed inter-service communication.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Nokia",
    duration: "Jan 2024 — Jun 2024",
    location: "Bengaluru, India",
    highlights: [
      "Automated API test suites and integrated them into deployment workflows, reducing deployment delays by 25%.",
      "Contributed production-ready code to a large enterprise NMS codebase in an Agile environment.",
    ],
  },
];

function ExperienceSection() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Experience</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Where I've worked.
          </h2>
        </FadeIn>

        <div className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="relative">
                <span className="absolute -left-[34px] top-2 flex h-3 w-3 sm:-left-[42px]">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                </span>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">
                      {exp.role} <span className="text-muted-foreground">· {exp.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">{exp.duration}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{exp.location}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <FadeIn className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Projects</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work.
          </h2>
        </div>
        <Button asChild variant="ghost">
          <Link to="/projects">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </FadeIn>

      <div className="grid gap-4 md:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.05}>
            <ProjectCard {...p} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export const featuredProjects = [
  {
    title: "Datagroom",
    subtitle: "Open-source data ingestion & observability",
    description:
      "Core maintainer. Shipped a production hybrid RAG pipeline (embeddings → ChromaDB → reranking → query routing) enabling natural-language queries over 100K+ MongoDB records.",
    tech: ["React", "LlamaIndex", "ChromaDB", "MongoDB", "Node.js"],
    links: [
      { label: "Gateway", href: "https://github.com/datagroom/datagroom-gateway" },
      { label: "UI", href: "https://github.com/datagroom/datagroom-ui" },
    ],
  },
  {
    title: "Mini-GPT",
    subtitle: "Sentence Completion Transformer",
    description:
      "Implemented an 8.28M-parameter transformer from scratch in PyTorch — attention, training loops, checkpointing, inference. Trained on Penn Treebank for text generation.",
    tech: ["PyTorch", "Python", "Transformers"],
    links: [{ label: "GitHub", href: "https://github.com/Thanmaya-K-N" }],
  },
  {
    title: "Conversational RAG with Memory",
    subtitle: "Multi-turn context-aware QA",
    description:
      "Retrieval-augmented generation with chunking, embedding, retrieval, and memory strategies that maintain relevance across conversational turns.",
    tech: ["LlamaIndex", "ChromaDB", "Python"],
    links: [{ label: "GitHub", href: "https://github.com/Thanmaya-K-N" }],
  },
  {
    title: "Log Analysis & Observability",
    subtitle: "Internal tool @ Nokia",
    description:
      "End-to-end production tool for a separate engineering team, cutting error-trace time from 3–6 hours to under 10 seconds.",
    tech: ["Java", "gRPC", "Kafka", "Microservices"],
    links: [],
  },
];

export function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  links,
}: (typeof featuredProjects)[number]) {
  return (
    <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-0.5 text-xs text-primary">{subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-foreground/80"
          >
            {t}
          </span>
        ))}
      </div>
      {links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-foreground underline-offset-4 hover:underline"
            >
              <Github className="h-3.5 w-3.5" /> {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
