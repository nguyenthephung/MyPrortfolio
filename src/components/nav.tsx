"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#problems", label: "Architecture" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = navItems
      .map((i) => document.querySelector(i.href))
      .filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));

    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-14 border-b border-border bg-background md:h-[72px]">
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <div className="wrap flex h-full items-center justify-between gap-4">
        <Link
          href="#top"
          className="inline-flex h-11 items-center gap-2.5 text-[19px] font-medium tracking-[-0.02em] text-foreground"
        >
          <span>{site.displayName}</span>
          <span className="hidden border-l border-border pl-2.5 font-mono text-[13px] font-normal text-muted-foreground sm:inline">
            thephung.dev
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => {
            const isCurrent = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative inline-flex h-11 items-center px-3.5 text-[15px] font-medium transition-colors",
                  isCurrent
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {isCurrent && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3.5 bottom-1.5 h-[2px] bg-primary"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="m-btn hidden h-11 items-center justify-center rounded-[4px] bg-primary px-5 text-[15px] font-medium text-primary-foreground sm:inline-flex"
          >
            Email me
          </a>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
