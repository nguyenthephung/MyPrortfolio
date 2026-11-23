"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/data/site";

export function MobileMenu({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="outline"
        size="icon"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open && (
        <div className="fixed inset-x-0 top-14 bottom-0 z-50 flex flex-col justify-between border-t border-border bg-background px-6 py-6 md:top-[72px]">
          <nav className="flex flex-col divide-y divide-border border-b border-border" aria-label="Mobile">
            {items.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-14 items-center justify-between text-[18px] font-medium text-foreground transition-colors hover:text-primary"
              >
                <span>{item.label}</span>
                <span className="font-mono text-[13px] text-muted-foreground tabular-nums">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${site.email}`}
                onClick={() => setOpen(false)}
                className="m-btn flex h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-primary px-6 text-[16px] font-medium text-primary-foreground"
              >
                Email {site.email}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              {site.resumeUrl && (
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="m-btn flex h-12 w-full items-center justify-center rounded-[4px] border border-border bg-muted px-6 text-[16px] font-medium text-foreground"
                >
                  Download CV (PDF)
                </a>
              )}
            </div>
            <p className="font-mono text-[13px] text-muted-foreground">
              {site.role} · {site.location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
