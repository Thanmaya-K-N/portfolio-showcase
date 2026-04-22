import { Link, useLocation } from "@tanstack/react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          <span className="text-gradient">Thanmaya</span>
          <span className="text-muted-foreground">.dev</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                pathname === l.to ? "text-foreground" : "text-muted-foreground"
              )}
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-medium",
                  pathname === l.to ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
