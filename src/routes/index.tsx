import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import { FadeIn, AsciiRule, TerminalWindow } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thanmaya K N — Software Engineer" },
      {
        name: "description",
        content:
          "Software Engineer at Nokia. Backend, distributed systems, and AI/ML. Java, Python, RAG pipelines, and production microservices.",
      },
      { property: "og:title", content: "Thanmaya K N — Software Engineer" },
      {
        property: "og:description",
        content: "Backend & AI/ML engineer building production systems at Nokia.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <section className="mx-auto w-full max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1fr,320px] lg:gap-10">
          {/* Main terminal */}
          <FadeIn>
            <TerminalWindow title="thanmaya@portfolio:~ — zsh — 96×32">
              <div className="font-mono text-[13px] leading-relaxed">
                <p className="text-muted-foreground">
                  <span className="text-phosphor">$</span> whoami
                </p>
                <h1 className="mt-1 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                  <span className="font-serif italic text-foreground">Thanmaya K N</span>
                </h1>
                <p className="mt-3 text-muted-foreground">
                  <span className="text-phosphor">$</span> cat role.txt
                </p>
                <p className="mt-1 text-base text-amber sm:text-lg">Software Engineer</p>
                <p className="text-xs text-muted-foreground">
                  backend · distributed systems · applied AI/ML
                </p>

                <AsciiRule className="my-5" />

                <p className="text-muted-foreground">
                  <span className="text-phosphor">$</span> cat about.md
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/90 sm:text-base">
                  I ship production backend systems — Java microservices, gRPC + Kafka
                  integrations, and hybrid RAG pipelines over MongoDB. Currently at{" "}
                  <span className="text-amber">Nokia</span>, shipping features across a
                  large-scale Network Management System. I like problems with{" "}
                  <span className="text-phosphor">measurable impact</span>: cutting
                  error-trace time from hours to seconds, boosting engagement 5×.
                  <span className="caret" />
                </p>

                <AsciiRule className="my-5" />

                <p className="text-muted-foreground">
                  <span className="text-phosphor">$</span> ls -l ./actions
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link
                    to="/resume"
                    className="group inline-flex items-center gap-2 border border-amber bg-amber/10 px-3 py-2 text-xs text-amber transition-colors hover:bg-amber hover:text-primary-foreground"
                  >
                    <span className="text-amber group-hover:text-primary-foreground">▸</span>
                    ./view-resume
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 border border-phosphor bg-phosphor/10 px-3 py-2 text-xs text-phosphor transition-colors hover:bg-phosphor hover:text-primary-foreground"
                  >
                    <span>▸</span>
                    ./contact-me
                  </Link>

                </div>

                <AsciiRule className="my-5" />

                <p className="text-muted-foreground">
                  <span className="text-phosphor">$</span> contact --links
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-amber" /> Bengaluru, India
                  </span>
                  <a
                    href="https://github.com/Thanmaya-K-N"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-amber"
                  >
                    <Github className="h-3 w-3" /> Thanmaya-K-N
                  </a>
                  <a
                    href="https://linkedin.com/in/thanmaya-kn"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-amber"
                  >
                    <Linkedin className="h-3 w-3" /> thanmaya-kn
                  </a>
                </div>
              </div>
            </TerminalWindow>
          </FadeIn>

          {/* Side panel */}
          <FadeIn delay={0.12} className="space-y-4">
            <TerminalWindow title="profile.txt" accent="phosphor">
              <div className="space-y-1 font-mono text-[11px] text-muted-foreground">
                <p>
                  <span className="text-amber">status</span> ·{" "}
                  <span className="text-phosphor">● available</span>
                </p>
                <p>
                  <span className="text-amber">role</span> · SDE I @ Nokia
                </p>
                <p>
                  <span className="text-amber">since</span> · Jul 2024
                </p>
                <p>
                  <span className="text-amber">focus</span> · backend · RAG
                </p>
              </div>
            </TerminalWindow>

            <TerminalWindow title="stats.log" accent="terracotta">
              <dl className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div>
                  <dt className="text-muted-foreground">years_xp</dt>
                  <dd className="font-serif text-2xl italic text-foreground">2.5+</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">cgpa</dt>
                  <dd className="font-serif text-2xl italic text-foreground">9.49</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">trace_time</dt>
                  <dd className="font-serif text-2xl italic text-phosphor">-99%</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">engagement</dt>
                  <dd className="font-serif text-2xl italic text-amber">5×</dd>
                </div>
              </dl>
            </TerminalWindow>
          </FadeIn>
        </div>
      </section>

      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}

const skillCategories = [
  { title: "languages", items: ["Java", "Python", "TypeScript", "JavaScript", "C++"] },
  { title: "backend", items: ["Node.js", "Flask", "gRPC", "Kafka", "Docker"] },
  {
    title: "ai_ml",
    items: ["PyTorch", "Transformers", "RAG", "LangChain", "LlamaIndex", "ChromaDB"],
  },
  { title: "frontend", items: ["React", "Angular"] },
  { title: "databases", items: ["MongoDB", "MySQL"] },
  {
    title: "concepts",
    items: ["Microservices", "Distributed Systems", "Vector Search", "Prompt Engineering"],
  },
];

function SkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <FadeIn className="mb-6">
        <p className="font-mono text-xs text-amber">
          <span className="text-muted-foreground">$</span> tree ./skills
        </p>
        <h2 className="mt-1 text-2xl sm:text-3xl">
          <span className="font-serif italic">what's in the toolbox.</span>
        </h2>
        <AsciiRule className="mt-4" />
      </FadeIn>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <FadeIn key={cat.title} delay={i * 0.04}>
            <div className="h-full border border-border bg-card p-5 transition-colors hover:border-amber">
              <p className="font-mono text-xs">
                <span className="text-muted-foreground">drwxr-xr-x</span>{" "}
                <span className="text-amber">./{cat.title}</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-foreground/85"
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
      "Owned end-to-end delivery of an internal log analysis & observability tool — cut error-trace time from 3–6 hours to <10 seconds.",
      "Delivered features across multiple frontend and backend microservices in a large-scale NMS.",
      "Performance optimizations on a Java NMS feature contributed to a 5× increase in application engagement.",
      "Built backend APIs and integrations using Java, gRPC, and Kafka for distributed inter-service communication.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Nokia",
    duration: "Jan 2024 — Jun 2024",
    location: "Bengaluru, India",
    highlights: [
      "Automated API test suites and integrated them into deployment workflows, reducing deployment delays by 25%.",
      "Contributed production-ready code to a large enterprise NMS codebase in an Agile team.",
    ],
  },
];

function ExperienceSection() {
  return (
    <section className="border-t border-border bg-background/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <FadeIn className="mb-6">
          <p className="font-mono text-xs text-amber">
            <span className="text-muted-foreground">$</span> git log --oneline ./experience
          </p>
          <h2 className="mt-1 text-2xl sm:text-3xl">
            <span className="font-serif italic">commits in production.</span>
          </h2>
          <AsciiRule className="mt-4" />
        </FadeIn>

        <div className="space-y-4 font-mono text-sm">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="border border-border bg-card p-5">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-amber">commit</span>
                  <span className="text-muted-foreground">
                    {exp.role.toLowerCase().replace(/ /g, "-").slice(0, 10)}
                    {String(i).padStart(2, "0")}
                  </span>
                  <span className="ml-auto text-[11px] text-muted-foreground">
                    Date: {exp.duration}
                  </span>
                </div>
                <p className="mt-2 text-foreground">
                  <span className="text-phosphor">{exp.company}</span>{" "}
                  <span className="text-muted-foreground">· {exp.role}</span>
                </p>
                <p className="text-[11px] text-muted-foreground">{exp.location}</p>
                <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-foreground/85">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-amber">+</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
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
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <FadeIn className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs text-amber">
            <span className="text-muted-foreground">$</span> ls ./projects
          </p>
          <h2 className="mt-1 text-2xl sm:text-3xl">
            <span className="font-serif italic">selected work.</span>
          </h2>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-amber"
        >
          view all <ArrowRight className="h-3 w-3" />
        </Link>
      </FadeIn>
      <AsciiRule className="mb-5" />

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
    subtitle: "open-source · data ingestion + observability",
    description:
      "Core maintainer. Shipped a production hybrid RAG pipeline (embeddings → ChromaDB → reranking → query routing) enabling natural-language queries over 100K+ MongoDB records.",
    tech: ["React", "LlamaIndex", "ChromaDB", "MongoDB", "Node.js"],
    links: [
      { label: "gateway", href: "https://github.com/datagroom/datagroom-gateway" },
      { label: "ui", href: "https://github.com/datagroom/datagroom-ui" },
    ],
  },
  {
    title: "Mini-GPT",
    subtitle: "sentence completion transformer",
    description:
      "Implemented an 8.28M-parameter transformer from scratch in PyTorch — attention, training loops, checkpointing, inference. Trained on Penn Treebank.",
    tech: ["PyTorch", "Python", "Transformers"],
    links: [{ label: "github", href: "https://github.com/Thanmaya-K-N" }],
  },
  {
    title: "Conversational RAG w/ Memory",
    subtitle: "multi-turn context-aware QA",
    description:
      "Retrieval-augmented generation with chunking, embedding, retrieval, and memory strategies that maintain relevance across conversational turns.",
    tech: ["LlamaIndex", "ChromaDB", "Python"],
    links: [{ label: "github", href: "https://github.com/Thanmaya-K-N" }],
  },
  {
    title: "Log Analysis & Observability",
    subtitle: "internal tool @ Nokia",
    description:
      "End-to-end production tool for a separate engineering team. Cut error-trace time from 3–6 hours to under 10 seconds.",
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
    <div className="group relative flex h-full flex-col border border-border bg-card transition-colors hover:border-amber">
      <div className="flex items-center gap-2 border-b border-border bg-background/40 px-4 py-2 font-mono text-[11px] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-amber" />
        <span className="truncate">./projects/{title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl italic text-foreground">{title}</h3>
        <p className="mt-0.5 font-mono text-[11px] text-amber">{subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/85">{description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>
        {links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-3 pt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-phosphor hover:underline"
              >
                <Github className="h-3 w-3" /> {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
