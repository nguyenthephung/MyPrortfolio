import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data/projects";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects"
      description="Things I've built — from a Kafka-based emergency response platform to smaller solo projects that let me explore new stacks."
    >
      <div className="space-y-16">
        {featured.map((p, i) => (
          <FeaturedProject key={p.slug} project={p} reverse={i % 2 === 1} />
        ))}

        {others.length > 0 && (
          <div>
            <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Earlier projects
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {others.map((p) => (
                <CompactProject key={p.slug} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

function FeaturedProject({
  project,
  reverse,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <article className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
      <div className={cn(reverse && "md:order-2")}>
        <Link
          href={project.links.demo || project.links.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-xl border border-border bg-card"
        >
          <div className="relative aspect-video w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Link>
      </div>

      <div className={cn(reverse && "md:order-1")}>
        <p className="font-mono text-xs text-primary">
          {project.period} · {project.role}
          {project.team ? ` · ${project.team}` : ""}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.summary}
        </p>

        {project.bullets && project.bullets.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {project.bullets.slice(0, 3).map((b, i) => (
              <li
                key={i}
                className="relative pl-4 text-sm leading-relaxed text-foreground/85"
              >
                <span
                  className="absolute left-0 top-2 h-1 w-1 rounded-full bg-muted-foreground/60"
                  aria-hidden="true"
                />
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          )}
          {project.links.demo && (
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary transition-colors hover:text-primary/80"
            >
              <ExternalLink className="h-4 w-4" />
              Live demo
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function CompactProject({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
      <p className="font-mono text-xs text-primary">
        {project.period} · {project.role}
      </p>
      <h4 className="mt-2 text-lg font-semibold tracking-tight">
        {project.title}
      </h4>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 6).map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 text-sm">
        {project.links.github && (
          <Link
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        )}
        {project.links.demo && (
          <Link
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary transition-colors hover:text-primary/80"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </Link>
        )}
      </div>
    </article>
  );
}
