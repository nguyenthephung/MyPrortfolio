import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/data/site";

const iconLinks = [
  { icon: Github, href: "https://github.com/nguyenthephung", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ph%E1%BB%A5ng-nguy%E1%BB%85n-th%E1%BB%83-285107385/",
    label: "LinkedIn",
  },
  { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-medium">{site.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {site.role}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {iconLinks.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
