import { ArrowUp } from "lucide-react";
import { site } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-medium">{site.displayName}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {site.role} · {site.tagline}
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Designed & built with Next.js + Tailwind CSS.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          Back to top <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
