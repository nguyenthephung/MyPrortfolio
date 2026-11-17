import { ArrowUpRight, Briefcase } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { experiences } from "@/lib/data/experiences";

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title={
        <>
          From intern to engineer on <span className="text-gradient">Eximbank&apos;s core platforms.</span>
        </>
      }
      description="Production banking software, delivered in a real team with real stakes — PMs, BAs, QC and lead-reviewed merges."
    >
      <div className="space-y-16">
        {experiences.map((exp) => (
          <div key={exp.company} className="grid gap-8 lg:grid-cols-[260px_1fr]">
            {/* Company column */}
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  {exp.companyHref ? (
                    <a
                      href={exp.companyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 font-semibold tracking-tight hover:text-primary"
                    >
                      {exp.company}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <p className="font-semibold tracking-tight">{exp.company}</p>
                  )}
                  <p className="font-mono text-xs text-muted-foreground">
                    {exp.totalPeriod}
                    {exp.type ? ` · ${exp.type}` : ""}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Positions */}
            <ol className="relative space-y-6 border-l border-border pl-6 md:pl-8">
              {exp.positions.map((pos, i) => (
                <Reveal as="li" key={pos.title + pos.period} delay={i * 60} className="relative">
                  <span
                    aria-hidden
                    className="absolute top-7 -left-[calc(1.5rem+6px)] h-3 w-3 rounded-full border-2 border-background bg-gradient-to-br from-primary to-accent ring-4 ring-primary/15 md:-left-[calc(2rem+6px)]"
                  />
                  <div className="glow-card rounded-2xl border border-border bg-card p-6 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight md:text-xl">{pos.title}</h3>
                        {pos.project && (
                          <p className="mt-0.5 text-sm font-medium text-primary">{pos.project}</p>
                        )}
                      </div>
                      <span className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
                        {pos.period}
                      </span>
                    </div>

                    {pos.summary && (
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                        {pos.summary}
                      </p>
                    )}

                    <ul className="mt-4 space-y-2.5">
                      {pos.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-foreground/85 md:text-[15px]">
                          <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span>
                            {b.label && <span className="font-semibold text-foreground">{b.label}: </span>}
                            {b.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {pos.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
