import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader, FadeIn } from "@/components/Section";
import { GraduationCap, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Thanmaya K N" },
      { name: "description", content: "Software Engineer with 2.5+ years of experience in backend, microservices, and AI/ML. Currently at Nokia." },
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
        eyebrow="About"
        title="Engineer, maintainer, learner."
        description="A quick look at who I am, what I've built, and where I'm headed."
      />

      <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
        <FadeIn delay={0.05}>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a Software Engineer based in Bengaluru with <span className="text-foreground">2.5+ years</span> of industry experience — most of it spent at Nokia, working on a large-scale Network Management System. I've shipped features across frontend and backend microservices, tuned performance-sensitive Java components, and built distributed integrations with gRPC and Kafka.
            </p>
            <p>
              Beyond day-to-day feature work, I care about <span className="text-foreground">developer experience</span>. I designed and deployed an internal log analysis and observability tool used by a separate engineering team — reducing error-trace time from 3–6 hours to under 10 seconds. That kind of impact is what makes engineering fun.
            </p>
            <p>
              Outside of work, I contribute as a core maintainer to <span className="text-foreground">Datagroom</span>, an open-source data ingestion platform. There I built a production hybrid RAG pipeline (embeddings, ChromaDB, reranking, query routing with LlamaIndex) that brings natural-language querying to 100K+ record MongoDB datasets. I'm genuinely excited about the intersection of distributed backend systems and applied AI.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-primary">
                <GraduationCap className="h-4 w-4" />
                <h3 className="font-mono text-xs uppercase tracking-widest">Education</h3>
              </div>
              <p className="mt-3 font-display font-semibold">JSS Science and Technology University</p>
              <p className="text-sm text-muted-foreground">B.E. in Information Science · 2020 – 2024</p>
              <p className="mt-1 text-sm">CGPA: <span className="font-semibold text-foreground">9.49 / 10</span></p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-primary">
                <Award className="h-4 w-4" />
                <h3 className="font-mono text-xs uppercase tracking-widest">Certifications</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </PageShell>
  );
}
