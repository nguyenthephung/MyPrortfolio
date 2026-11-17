import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MapPin, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/data/site";

const marquee = [
  "Java 17",
  "Spring Boot 3",
  "Kafka",
  "Redis",
  "Oracle",
  "PostgreSQL",
  "RabbitMQ",
  "Angular Nx",
  "Module Federation",
  "Next.js",
  "Docker",
  "Kubernetes",
  "GitLab CI/CD",
  "WebSocket",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="animate-float absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <div className="animate-float absolute top-40 right-[-10%] h-[320px] w-[420px] rounded-full bg-accent/20 blur-[120px] [animation-delay:-4s]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to new opportunities
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-balance md:text-7xl">
              Hi, I&apos;m <span className="text-gradient">{site.name.split(" ").slice(-1)}</span>.
              <br />
              <span className="text-muted-foreground">I build systems where</span>{" "}
              money moves safely.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {site.bio}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Ho Chi Minh City, VN
              </span>
              <span>{site.role}</span>
              <span className="text-primary">{site.tagline}</span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="#projects">
                  See my work <ArrowRight />
                </Link>
              </Button>
              {site.resumeUrl && (
                <Button asChild size="lg" variant="outline">
                  <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer">
                    Download CV <Download />
                  </a>
                </Button>
              )}
              <div className="ml-1 flex items-center gap-1">
                {[
                  { href: "https://github.com/nguyenthephung", icon: Github, label: "GitHub" },
                  { href: site.socials.find((s) => s.icon === "linkedin")!.href, icon: Linkedin, label: "LinkedIn" },
                  { href: `mailto:${site.email}`, icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile card */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-2xl" />
            <div className="glass overflow-hidden rounded-[1.75rem] border border-border p-3 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                <Image
                  src={site.avatarSrc}
                  alt={`${site.name} — profile photo`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 384px, 400px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-16">
                  <p className="text-lg font-semibold text-white">{site.displayName}</p>
                  <p className="font-mono text-xs text-white/70">Full Stack Engineer @ FPT IS</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-3">
                {site.stats.slice(0, 2).map((s) => (
                  <div key={s.label} className="rounded-xl bg-muted/60 px-3 py-2.5">
                    <p className="text-xl font-semibold">{s.value}</p>
                    <p className="text-[11px] leading-tight text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-20 overflow-hidden border-y border-border/60 py-4 [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
        <div className="animate-marquee flex w-max gap-10 font-mono text-sm text-muted-foreground">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              {t}
              <span className="text-primary/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
