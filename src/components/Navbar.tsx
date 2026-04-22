import { Link, useLocation } from "@tanstack/react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "~", name: "home" },
  { to: "/about", label: "about", name: "about" },
  { to: "/resume", label: "resume", name: "resume" },
  { to: "/projects", label: "projects", name: "projects" },
  { to: "/contact", label: "contact", name: "contact" },
] as const;

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/40 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-2 font-mono text-sm">
          <span className="text-amber">●</span>
          <span className="text-muted-foreground">thanmaya</span>
          <span className="text-foreground">@</span>
          <span className="text-phosphor">portfolio</span>
          <span className="text-muted-foreground">:~$</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "group relative px-2.5 py-1 font-mono text-xs transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className={cn("mr-1", active ? "text-amber" : "text-muted-foreground/60")}>
                  {active ? "▸" : " "}
                </span>
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-amber hover:text-amber"
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted-foreground hover:border-amber hover:text-amber md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 font-mono text-sm">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "flex items-center gap-2 px-2 py-2.5",
                    active ? "text-amber" : "text-muted-foreground"
                  )}
                >
                  <span>{active ? "▸" : "·"}</span>
                  <span>{l.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
