import {
  ArrowUpRight,
  Download,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
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
      index="06"
      eyebrow="Contact"
      specMeta="Direct dispatch · Ho Chi Minh City, Vietnam"
      title={
        <>
          Open to backend and full-stack roles in fintech and product teams.{" "}
          <span className="text-muted-foreground">
            Available for opportunities or conversations about Java and distributed systems.
          </span>
        </>
      }
    >
      {/* Dealt close-type: email set very large as the main link */}
      <div className="border-t border-border pt-8">
        <p className="font-mono text-[13px] text-muted-foreground">
          Primary channel · Direct email
        </p>

        <div className="mt-3 flex flex-wrap items-baseline justify-between gap-6">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex flex-wrap items-center gap-3 text-[24px] font-medium leading-[1.15] tracking-[-0.03em] text-primary break-all sm:text-[36px] md:text-[48px]"
          >
            <span className="underline decoration-primary/40 decoration-2 underline-offset-8 transition-colors group-hover:decoration-primary">
              {site.email}
            </span>
            <ArrowUpRight className="h-7 w-7 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:h-9 md:w-9" />
          </a>

          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="m-btn inline-flex h-11 items-center gap-2 rounded-[4px] border border-border bg-muted px-5 text-[15px] font-medium text-foreground hover:border-primary/50"
            >
              Download CV (PDF) <Download className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Socials as one ruled editorial ledger list */}
      <div className="mt-12">
        <div className="mb-3 flex items-baseline justify-between font-mono text-[13px] text-muted-foreground">
          <span className="font-medium text-foreground">
            Directory & channels
          </span>
          <span>6 endpoints</span>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {site.socials.map((s) => (
            <ContactRow
              key={s.label}
              social={
                s.label === "Zalo" ? { ...s, href: "/images/zalo.png" } : s
              }
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function ContactRow({ social }: { social: SocialLink }) {
  const Icon = iconMap[social.icon];
  const isZalo = social.label === "Zalo";
  const external = social.href.startsWith("http");

  return (
    <a
      href={social.href}
      target={isZalo || external ? "_blank" : undefined}
      rel={isZalo || external ? "noopener noreferrer" : undefined}
      aria-label={isZalo ? "Open Zalo QR Code" : social.label}
      className="group grid grid-cols-1 items-center gap-2 py-4 transition-colors hover:text-primary sm:grid-cols-12 sm:gap-4"
    >
      <div className="flex items-center gap-3 sm:col-span-4">
        <Icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        <span className="font-mono text-[14px] font-medium text-foreground group-hover:text-primary">
          {social.label}
        </span>
      </div>

      <div className="text-[16px] text-foreground/90 sm:col-span-7">
        {social.handle}
      </div>

      <div className="hidden justify-end sm:col-span-1 sm:flex">
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
    </a>
  );
}
