import { ArrowUpRight, Facebook, Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/data/site";
import type { SocialLink } from "@/lib/types";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  facebook: Facebook,
  "message-circle": MessageCircle,
} as const;

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 text-center md:px-16 md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="bg-grid absolute inset-0 opacity-60" />
            <div className="absolute -bottom-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]" />
          </div>

          <div className="relative">
            <p className="mb-4 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <span className="text-muted-foreground">05</span>
              <span className="h-px w-8 bg-primary/60" />
              Contact
            </p>
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              Let&apos;s build something <span className="text-gradient">reliable</span> together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I&apos;m open to backend / full-stack roles in fintech and product teams. Whether it&apos;s
              an opportunity or a chat about Java and distributed systems — my inbox is open.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:shadow-primary/50"
            >
              <Mail className="h-5 w-5" />
              {site.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="mx-auto mt-12 grid max-w-3xl gap-3 text-left sm:grid-cols-2 md:grid-cols-3">
              {site.socials
                .filter((s) => s.icon !== "mail")
                .map((s) => (
                  <ContactRow key={s.label} social={s} />
                ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ social }: { social: SocialLink }) {
  const Icon = iconMap[social.icon];
  const external = social.href.startsWith("http");
  return (
    <a
      href={social.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 p-3.5 backdrop-blur transition-colors hover:border-primary/50"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {social.label}
        </span>
        <span className="block truncate text-sm font-medium">{social.handle}</span>
      </span>
    </a>
  );
}
