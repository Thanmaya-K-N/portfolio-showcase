import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader, FadeIn } from "@/components/Section";
import { ProjectCard, featuredProjects } from "./index";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Thanmaya K N" },
      {
        name: "description",
        content:
          "Selected projects: Datagroom, Mini-GPT transformer, Conversational RAG, and Nokia log observability.",
      },
      { property: "og:title", content: "Projects — Thanmaya K N" },
      {
        property: "og:description",
        content: "Open source, transformers, RAG pipelines, and production tooling.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="ls -la ./projects"
        title="things I've built."
        description="A mix of production work, open source maintenance, and research-style experiments."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.05}>
            <ProjectCard {...p} />
          </FadeIn>
        ))}
      </div>
    </PageShell>
  );
}
