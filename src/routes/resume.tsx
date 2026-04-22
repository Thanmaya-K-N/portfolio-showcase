import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink } from "lucide-react";
import { PageShell, SectionHeader, FadeIn, TerminalWindow } from "@/components/Section";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Thanmaya K N" },
      {
        name: "description",
        content: "Download or view the resume of Thanmaya K N, Software Engineer at Nokia.",
      },
      { property: "og:title", content: "Resume — Thanmaya K N" },
      {
        property: "og:description",
        content: "View and download resume — Software Engineer at Nokia.",
      },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="cat resume.pdf"
        title="résumé, front and center."
        description="View below or download the PDF. For recruiters — happy to share a detailed version on request."
      />

      <FadeIn>
        <div className="mb-5 flex flex-wrap gap-2 font-mono text-xs">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-amber bg-amber/10 px-3 py-2 text-amber transition-colors hover:bg-amber hover:text-primary-foreground"
          >
            <Download className="h-3 w-3" /> ./download-resume.pdf
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border px-3 py-2 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            open --new-tab <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <TerminalWindow title="resume.pdf — preview">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="h-[80vh] w-full border border-border bg-background"
            aria-label="Thanmaya K N Resume PDF"
          >
            <div className="flex h-96 flex-col items-center justify-center gap-3 p-6 text-center font-mono text-xs">
              <p className="text-muted-foreground">
                your browser can't display PDFs inline.
              </p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-amber bg-amber/10 px-3 py-2 text-amber hover:bg-amber hover:text-primary-foreground"
              >
                <Download className="h-3 w-3" /> download instead
              </a>
            </div>
          </object>
        </TerminalWindow>
      </FadeIn>
    </PageShell>
  );
}
