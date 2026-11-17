import Image from "next/image";
import { ArrowUpRight, Github, Scale } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data/projects";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

const accentMap: Record<NonNullable<Project["accent"]>, string> = {
  violet: "from-violet-500/30 via-fuchsia-500/10 to-transparent",
  blue: "from-sky-500/30 via-blue-500/10 to-transparent",
  emerald: "from-emerald-500/30 via-teal-500/10 to-transparent",
  amber: "from-amber-500/30 via-orange-500/10 to-transparent",
};

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Selected work"
      title={
        <>
          Side projects where I <span className="text-gradient">explore new architectures.</span>
        </>
      }
      description="From a RAG-powered legal assistant to a Kafka-driven rescue dispatcher — built outside work to go deeper on distributed systems and AI."
    >
      <div className="space-y-8">
        {featured.map((p, i) => (
          <FeaturedProject key={p.slug} project={p} reverse={i % 2 === 1} />
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-20">
          <Reveal>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              More projects
            </h3>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className="h-full">
                <CompactProject project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}

function ProjectCover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        sizes="(max-width: 1024px) 100vw, 55vw"
      />
    );
  }
  // Generated cover for projects without a screenshot
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-950 p-8 text-center">
      <div className="bg-grid absolute inset-0 opacity-30 [mask-image:none]" />
      <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20">
        <Scale className="h-8 w-8 text-violet-200" />
      </div>
      <p className="relative text-3xl font-semibold tracking-tight text-white">{project.title}</p>
      <div className="relative w-full max-w-xs space-y-2 rounded-xl bg-white/5 p-3 text-left font-mono text-[11px] text-violet-100/80 ring-1 ring-white/10">
        <p><span className="text-violet-300">user ›</span> Hợp đồng này có hợp lệ không?</p>
        <p><span className="text-cyan-300">ai ›</span> Theo Điều 117 BLDS 2015…</p>
      </div>
    </div>
  );
}

function FeaturedProject({ project, reverse }: { project: Project; reverse?: boolean }) {
  const href = project.links.demo || project.links.github || "#";
  return (
    <Reveal
      as="article"
      className="glow-card group relative overflow-hidden rounded-3xl border border-border bg-card"
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-40 h-96 w-96 rounded-full bg-gradient-to-br opacity-60 [mask-image:radial-gradient(closest-side,#000,transparent)]",
          reverse ? "-left-24" : "-right-24",
          accentMap[project.accent ?? "violet"]
        )}
      />
      <div className="relative grid lg:grid-cols-[1.15fr_1fr]">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("block p-3 lg:p-4", reverse && "lg:order-2")}
          aria-label={`Open ${project.title}`}
        >
          <div className="relative aspect-[16/10] h-full w-full overflow-hidden rounded-2xl border border-border bg-muted">
            <ProjectCover project={project} />
          </div>
        </a>

        <div className={cn("flex flex-col p-6 md:p-8 lg:py-10", reverse && "lg:order-1")}>
          <p className="font-mono text-xs text-muted-foreground">
            {project.period} · {project.role}
            {project.team ? ` · ${project.team}` : ""}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h3>
          <p className="text-sm font-medium text-primary">{project.subtitle}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
            {project.summary}
          </p>

          {project.bullets && (
            <ul className="mt-4 space-y-2">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Live demo <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function CompactProject({ project }: { project: Project }) {
  const href = project.links.demo || project.links.github || "#";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glow-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1"
    >
      {project.image && (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
          <ProjectCover project={project} />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold tracking-tight">{project.title}</h4>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
        <p className="font-mono text-[11px] text-muted-foreground">
          {project.subtitle} · {project.period}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </a>
  );
}
