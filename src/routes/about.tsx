import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader, FadeIn, TerminalWindow, AsciiRule } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Thanmaya K N" },
      {
        name: "description",
        content:
          "Software Engineer with 2.5+ years of experience in backend, microservices, and AI/ML. Currently at Nokia.",
      },
      { property: "og:title", content: "About Thanmaya K N" },
      { property: "og:description", content: "2.5+ years shipping production backend and AI/ML systems." },
    ],
  }),
  component: About,
});

const certifications = [
  "Neural Networks and Deep Learning — DeepLearning.AI",
  "Generative AI with Large Language Models — DeepLearning.AI",
  "Building Agentic RAG with LlamaIndex — DeepLearning.AI",
  "Google Cloud Fundamentals — Google Cloud",
];

function About() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="cat about.md"
        title="engineer, maintainer, learner."
        description="A quick look at who I am, what I've built, and where I'm headed."
      />

      <div className="grid gap-6 lg:grid-cols-[2fr,1fr] min-w-0">
        <FadeIn delay={0.05} className="min-w-0">
          <TerminalWindow title="about.md" accent="amber">
            <article className="space-y-4 font-mono text-[13px] leading-relaxed text-foreground/90 break-words">
              <p>
                <span className="text-amber"># </span>
                <span className="font-serif text-xl italic text-foreground not-italic">
                  Hello, I'm Thanmaya.
                </span>
              </p>
              <p>
                I'm a Software Engineer based in Bengaluru with{" "}
                <span className="text-amber">2.5+ years</span> of industry experience — most of
                it spent at Nokia, working on a large-scale Network Management System. I've
                shipped features across frontend and backend microservices, tuned
                performance-sensitive Java components, and built distributed integrations with
                gRPC and Kafka.
              </p>
              <p>
                Beyond day-to-day feature work, I care about{" "}
                <span className="text-phosphor">developer experience</span>. I designed and
                deployed an internal log analysis and observability tool used by a separate
                engineering team — reducing error-trace time from 3–6 hours to under 10 seconds.
                That kind of impact is what makes engineering fun.
              </p>
              <p>
                Outside of work, I contribute as a core maintainer to{" "}
                <span className="text-amber">Datagroom</span>, an open-source data ingestion
                platform. There I built a production hybrid RAG pipeline (embeddings, ChromaDB,
                reranking, query routing with LlamaIndex) that brings natural-language querying
                to 100K+ record MongoDB datasets.
              </p>
              <AsciiRule />
              <p className="text-muted-foreground">
                <span className="text-phosphor">$</span> echo "always shipping"
                <span className="caret" />
              </p>
            </article>
          </TerminalWindow>
        </FadeIn>

        <FadeIn delay={0.1} className="space-y-4">
          <TerminalWindow title="education.log" accent="phosphor">
            <p className="font-mono text-xs text-amber">## education</p>
            <p className="mt-2 font-serif text-lg italic text-foreground">
              JSS Science and Technology University
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              B.E. in Information Science · 2020 – 2024
            </p>
            <p className="mt-1 font-mono text-xs">
              <span className="text-muted-foreground">cgpa:</span>{" "}
              <span className="text-phosphor">9.49 / 10</span>
            </p>
          </TerminalWindow>

          <TerminalWindow title="certs.txt" accent="terracotta">
            <p className="font-mono text-xs text-amber">## certifications</p>
            <ul className="mt-2 space-y-1.5 font-mono text-[12px]">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2 text-foreground/80">
                  <span className="text-phosphor">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </TerminalWindow>
        </FadeIn>
      </div>
    </PageShell>
  );
}
