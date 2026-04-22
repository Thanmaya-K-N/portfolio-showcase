import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, SectionHeader, FadeIn } from "@/components/Section";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Thanmaya K N" },
      { name: "description", content: "Download or view the resume of Thanmaya K N, Software Engineer at Nokia." },
      { property: "og:title", content: "Resume — Thanmaya K N" },
      { property: "og:description", content: "View and download resume — Software Engineer at Nokia." },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Resume"
        title="My resume, front and center."
        description="View below or download the PDF. For recruiters — happy to share a detailed version on request."
      />

      <FadeIn>
        <div className="mb-6 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="/resume.pdf" download>
              <Download className="mr-1 h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Open in new tab <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="h-[80vh] w-full"
            aria-label="Thanmaya K N Resume PDF"
          >
            <div className="flex h-96 flex-col items-center justify-center gap-3 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Your browser can't display PDFs inline.
              </p>
              <Button asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-1 h-4 w-4" /> Download instead
                </a>
              </Button>
            </div>
          </object>
        </div>
      </FadeIn>
    </PageShell>
  );
}
