"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "@/components/ui/section";
import { projects } from "@/lib/data/projects";
import type { Project } from "@/lib/types";

function JurisHubChatVisual() {
  return (
    <div
      role="img"
      aria-label="JurisHub RAG legal assistant citing Vietnamese Civil Code Article 117 over an uploaded PDF contract"
      className="flex h-full min-h-[300px] flex-col justify-between bg-muted p-4 sm:p-6"
    >
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-between rounded-[6px] border border-border bg-background shadow-xs">
        {/* Window top bar */}
        <div className="flex items-center justify-between border-b border-border bg-muted/60 px-3.5 py-2.5 font-mono text-[13px]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-medium text-foreground">
              JurisHub · RAG Legal Consultation
            </span>
          </div>
          <span className="text-muted-foreground">
            FastAPI · LangChain · RabbitMQ
          </span>
        </div>

        {/* Chat messages */}
        <div className="space-y-3 p-4 text-[14px]">
          <div className="flex items-center justify-between rounded-[4px] border border-border bg-muted/50 px-3 py-2 font-mono text-[13px]">
            <span className="text-foreground">
              Attachment: hop-dong-thue-nha-2026.pdf
            </span>
            <span className="text-primary">Indexed · 18 chunks</span>
          </div>

          <div className="rounded-[4px] border border-border bg-muted/30 p-3">
            <div className="font-mono text-[13px] font-medium text-muted-foreground">
              User query
            </div>
            <p className="mt-1 text-[15px] text-foreground">
              Hợp đồng này có hợp lệ không nếu một bên chưa đủ năng lực hành vi dân sự?
            </p>
          </div>

          <div className="rounded-[4px] border border-primary/35 bg-primary/6 p-3">
            <div className="flex items-center justify-between font-mono text-[13px]">
              <span className="font-medium text-primary">
                RAG Assistant · Vietnamese Civil Code
              </span>
              <span className="text-muted-foreground">Citation verified</span>
            </div>
            <p className="mt-1.5 text-[15px] leading-[1.55] text-foreground">
              Theo <strong>Điều 117 Bộ luật Dân sự 2015</strong>, giao dịch dân sự chỉ có hiệu lực khi chủ thể có năng lực pháp luật và năng lực hành vi dân sự phù hợp. Hợp đồng có thể bị tuyên vô hiệu theo Điều 125.
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2 font-mono text-[13px] text-muted-foreground">
              <span className="rounded-[4px] border border-border bg-background px-2 py-0.5 text-foreground">
                Ref: Điều 117 BLDS 2015
              </span>
              <span className="rounded-[4px] border border-border bg-background px-2 py-0.5 text-foreground">
                WebSocket / STOMP lawyer chat
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[6px] border border-border bg-muted">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="m-zoom object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 56vw"
        />
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-[6px] border border-border">
      <JurisHubChatVisual />
    </div>
  );
}

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const href = project.links.demo || project.links.github || "#";
  return (
    <article className="grid grid-cols-1 items-start gap-6 border-t border-border py-10 lg:grid-cols-12 lg:gap-8">
      {/* Left column (5 cols): always text first, never zig-zagged (layout-v4 rule) */}
      <div className="flex flex-col justify-between lg:col-span-5">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[13px] text-muted-foreground tabular-nums">
            <span>
              CASE 04.{index + 1} · {project.period}
            </span>
            <span>
              {project.role}
              {project.team ? ` · ${project.team}` : ""}
            </span>
          </div>

          <h3 className="mt-2.5 text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-foreground md:text-[28px]">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-[13px] font-medium text-primary">
            {project.subtitle}
          </p>

          <p className="mt-3.5 text-[16px] leading-[1.6] text-foreground/90">
            {project.summary}
          </p>

          {project.bullets && (
            <ul className="mt-4 space-y-2">
              {project.bullets.map((b, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[16px_1fr] items-baseline text-[15px] leading-[1.6] text-muted-foreground"
                >
                  <span aria-hidden className="font-mono text-[13px] text-primary">
                    —
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-5 border-t border-border pt-4">
          <p className="font-mono text-[13px] text-muted-foreground">
            <span className="font-medium text-foreground">Stack: </span>
            {project.tech.join(" · ")}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="m-btn inline-flex h-11 items-center gap-2 rounded-[4px] bg-primary px-5 text-[15px] font-medium text-primary-foreground"
              >
                Live demo <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="m-btn inline-flex h-11 items-center gap-2 rounded-[4px] border border-border bg-muted/60 px-4 text-[15px] font-medium text-foreground hover:border-primary/50"
              >
                <Github className="h-4 w-4" /> Source
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Right column (7 cols): screenshot or live UI fragment */}
      <div className="lg:col-span-7">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          aria-label={`Open ${project.title}`}
        >
          <ProjectCover project={project} />
        </a>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const [hoveredSlug, setHoveredSlug] = useState<string>(
    others[0]?.slug ?? ""
  );

  const previewProject =
    others.find((p) => p.slug === hoveredSlug) ?? others[0];

  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Selected work"
      specMeta="3 case studies · 3 archive builds"
      title={
        <>
          Side projects where I explore new architectures.{" "}
          <span className="text-muted-foreground">
            From a RAG legal assistant to a Kafka-driven emergency rescue dispatcher.
          </span>
        </>
      }
    >
      <div>
        {featured.map((p, i) => (
          <FeaturedProject key={p.slug} project={p} index={i} />
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-10 border-t border-border pt-10">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 font-mono text-[13px] text-muted-foreground">
            <span className="font-medium text-foreground">
              §04.4 · Archive & earlier engineering builds
            </span>
            <span>Hover or select a row to inspect</span>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* Ruled archive index table */}
            <div className="divide-y divide-border border-y border-border lg:col-span-8">
              {others.map((p) => {
                const isSelected = previewProject?.slug === p.slug;
                return (
                  <div
                    key={p.slug}
                    onMouseEnter={() => setHoveredSlug(p.slug)}
                    className={`m-lift py-5 transition-colors ${
                      isSelected ? "bg-muted/40 px-3 -mx-3 rounded-[4px]" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="flex flex-wrap items-baseline gap-2.5">
                        <h4 className="text-[19px] font-medium text-foreground">
                          {p.title}
                        </h4>
                        <span className="font-mono text-[13px] text-primary">
                          {p.subtitle}
                        </span>
                      </div>
                      <span className="font-mono text-[13px] text-muted-foreground tabular-nums">
                        {p.period} · {p.role}
                      </span>
                    </div>

                    <p className="mt-2 text-[15px] leading-[1.6] text-muted-foreground">
                      {p.summary}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-[13px] text-foreground/80">
                        {p.tech.join(" · ")}
                      </span>

                      <div className="flex items-center gap-3 font-mono text-[13px]">
                        {p.links.demo && (
                          <a
                            href={p.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 items-center gap-1 rounded-[4px] bg-primary/10 px-3 font-medium text-primary hover:bg-primary/18"
                          >
                            Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {p.links.github && (
                          <a
                            href={p.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 items-center gap-1 rounded-[4px] border border-border px-3 font-medium text-foreground hover:border-primary/50"
                          >
                            <Github className="h-3.5 w-3.5" /> Source
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Thumbnail preview panel on desktop */}
            {previewProject && previewProject.image && (
              <div className="hidden lg:col-span-4 lg:block">
                <div className="overflow-hidden rounded-[6px] border border-border bg-muted">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={previewProject.image}
                      alt={`${previewProject.title} preview`}
                      fill
                      className="object-cover object-top"
                      sizes="380px"
                    />
                  </div>
                  <div className="border-t border-border bg-background px-3.5 py-2.5 font-mono text-[13px]">
                    <div className="font-medium text-foreground">
                      {previewProject.title}
                    </div>
                    <div className="text-muted-foreground">
                      {previewProject.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}
