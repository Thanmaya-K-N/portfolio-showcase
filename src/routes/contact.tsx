import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageShell, SectionHeader, FadeIn } from "@/components/Section";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Thanmaya K N" },
      { name: "description", content: "Get in touch — email, LinkedIn, or GitHub. Open to backend and AI/ML opportunities." },
      { property: "og:title", content: "Contact Thanmaya K N" },
      { property: "og:description", content: "Let's talk about backend, distributed systems, or AI/ML." },
    ],
  }),
  component: Contact,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Invalid email").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1500),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const next: typeof errors = {};
      result.error.issues.forEach((i) => {
        next[i.path[0] as keyof typeof form] = i.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    // Open mail client with prefilled content
    const subject = encodeURIComponent(`Portfolio contact from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name}\n${result.data.email}`);
    window.location.href = `mailto:tanung901@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    toast.success("Opening your email client…");
  };

  return (
    <PageShell>
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something."
        description="Open to full-time roles, contract work, and interesting collaborations. I usually reply within a day or two."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
        <FadeIn>
          <div className="space-y-3">
            <a
              href="mailto:tanung901@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="font-medium">tanung901@gmail.com</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/thanmaya-kn"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
                <p className="font-medium">thanmaya-kn</p>
              </div>
            </a>
            <a
              href="https://github.com/Thanmaya-K-N"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <Github className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">GitHub</p>
                <p className="font-medium">Thanmaya-K-N</p>
              </div>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={80}
                  className="mt-1.5"
                  placeholder="Jane Recruiter"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={200}
                  className="mt-1.5"
                  placeholder="you@company.com"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1500}
                rows={6}
                className="mt-1.5 resize-none"
                placeholder="Tell me a bit about the role or project…"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <Button type="submit" size="lg" className="mt-5 w-full sm:w-auto">
              {sent ? (
                <>
                  <CheckCircle2 className="mr-1 h-4 w-4" /> Sent
                </>
              ) : (
                <>
                  <Send className="mr-1 h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </form>
        </FadeIn>
      </div>
    </PageShell>
  );
}
