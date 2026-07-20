import Link from "next/link";
import { Facebook, Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
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
    <Section
      id="contact"
      eyebrow="Say hello"
      title="Get in touch"
      description="Interested in working together or just want to chat about Java, distributed systems, or fintech? Drop me a line."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {site.socials.map((s) => (
          <ContactRow key={s.label} social={s} />
        ))}
      </div>
    </Section>
  );
}

function ContactRow({ social }: { social: SocialLink }) {
  const Icon = iconMap[social.icon];

  return (
    <Link
      href={social.href}
      target={social.href.startsWith("http") ? "_blank" : undefined}
      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
    >
      <Icon className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
      <div className="min-w-0">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {social.label}
        </p>
        <p className="mt-0.5 truncate text-sm font-medium text-foreground">
          {social.handle}
        </p>
      </div>
    </Link>
  );
}
