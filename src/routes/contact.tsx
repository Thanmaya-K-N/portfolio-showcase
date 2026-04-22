import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { PageShell, SectionHeader, FadeIn, TerminalWindow } from "@/components/Section";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Thanmaya K N" },
      {
        name: "description",
        content: "Get in touch — email, LinkedIn, or GitHub. Open to backend and AI/ML roles.",
      },
      { property: "og:title", content: "Contact Thanmaya K N" },
      {
        property: "og:description",
        content: "Let's talk about backend, distributed systems, or AI/ML.",
      },
    ],
  }),
  component: Contact,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "name required").max(80),
  email: z.string().trim().email("invalid email").max(200),
  message: z.string().trim().min(10, "message too short (min 10)").max(1500),
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
    const subject = encodeURIComponent(`Portfolio contact from ${result.data.name}`);
    const body = encodeURIComponent(
      `${result.data.message}\n\n— ${result.data.name}\n${result.data.email}`
    );
    window.location.href = `mailto:tanung901@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    toast.success("opening your email client…");
  };

  const inputCls =
    "mt-1 w-full border border-border bg-background/60 px-3 py-2 font-mono text-[13px] text-foreground placeholder:text-muted-foreground/60 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber";

  return (
    <PageShell>
      <SectionHeader
        eyebrow="./contact --send"
        title="let's build something."
        description="Open to full-time roles, contract work, and interesting collaborations. I usually reply within a day or two."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr]">
        <FadeIn>
          <TerminalWindow title="channels.txt" accent="phosphor">
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a
                  href="mailto:tanung901@gmail.com"
                  className="group flex items-center justify-between gap-3 border border-border bg-background/40 px-3 py-2.5 transition-colors hover:border-amber"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-amber" />
                    <span className="text-muted-foreground">email</span>
                  </span>
                  <span className="text-foreground">tanung901@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/thanmaya-kn"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 border border-border bg-background/40 px-3 py-2.5 transition-colors hover:border-amber"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="h-3.5 w-3.5 text-amber" />
                    <span className="text-muted-foreground">linkedin</span>
                  </span>
                  <span className="text-foreground">thanmaya-kn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Thanmaya-K-N"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 border border-border bg-background/40 px-3 py-2.5 transition-colors hover:border-amber"
                >
                  <span className="flex items-center gap-2">
                    <Github className="h-3.5 w-3.5 text-amber" />
                    <span className="text-muted-foreground">github</span>
                  </span>
                  <span className="text-foreground">Thanmaya-K-N</span>
                </a>
              </li>
            </ul>
            <p className="mt-4 font-mono text-[11px] text-muted-foreground">
              <span className="text-phosphor">status:</span> ● accepting new conversations
            </p>
          </TerminalWindow>
        </FadeIn>

        <FadeIn delay={0.1}>
          <TerminalWindow title="compose.sh" accent="amber">
            <form onSubmit={onSubmit} className="space-y-3 font-mono text-xs">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-amber">
                    --name
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={80}
                    className={inputCls}
                    placeholder="jane recruiter"
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] text-terracotta">! {errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="text-amber">
                    --email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={200}
                    className={inputCls}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-terracotta">! {errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-amber">
                  --message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1500}
                  rows={7}
                  className={`${inputCls} resize-none`}
                  placeholder="tell me about the role or project…"
                />
                {errors.message && (
                  <p className="mt-1 text-[11px] text-terracotta">! {errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 border border-amber bg-amber/10 px-4 py-2 font-mono text-xs text-amber transition-colors hover:bg-amber hover:text-primary-foreground"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-3 w-3" /> ./sent
                  </>
                ) : (
                  <>
                    <Send className="h-3 w-3" /> ./send-message
                  </>
                )}
              </button>
            </form>
          </TerminalWindow>
        </FadeIn>
      </div>
    </PageShell>
  );
}
