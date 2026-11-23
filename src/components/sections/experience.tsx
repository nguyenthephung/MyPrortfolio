import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { experiences } from "@/lib/data/experiences";

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow="Experience"
      specMeta="FPT Information System · Eximbank · 2024–2026"
      title={
        <>
          From intern to engineer on Eximbank&apos;s core platforms.{" "}
          <span className="text-muted-foreground">
            Production banking software delivered with PMs, BAs, QC and lead-reviewed merges.
          </span>
        </>
      }
    >
      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.company} className="border-t border-border pt-6">
            {/* Company header bar */}
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-[22px] font-medium tracking-[-0.02em] text-foreground md:text-[24px]">
                  {exp.companyHref ? (
                    <a
                      href={exp.companyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-link inline-flex items-center gap-1 hover:text-primary"
                    >
                      {exp.company}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                {exp.type && (
                  <span className="font-mono text-[13px] text-muted-foreground">
                    · {exp.type}
                  </span>
                )}
              </div>
              <span className="font-mono text-[13px] font-medium text-foreground tabular-nums">
                {exp.totalPeriod}
              </span>
            </div>

            {/* Positions as statement-style ledger rows */}
            <ol className="divide-y divide-border border-y border-border">
              {exp.positions.map((pos) => (
                <li
                  key={pos.title + pos.period}
                  className="grid grid-cols-1 gap-4 py-7 lg:grid-cols-12 lg:gap-6"
                >
                  {/* Left column: period & location */}
                  <div className="font-mono text-[13px] tabular-nums lg:col-span-3">
                    <div className="font-medium text-foreground">{pos.period}</div>
                    {pos.location && (
                      <div className="mt-1 text-muted-foreground">
                        {pos.location}
                      </div>
                    )}
                    {pos.project && (
                      <div className="mt-2 inline-block rounded-[4px] border border-primary/30 bg-primary/8 px-2 py-0.5 text-[13px] font-medium text-primary">
                        {pos.project}
                      </div>
                    )}
                  </div>

                  {/* Middle & right column: role title, summary, bullets, mono stack */}
                  <div className="lg:col-span-9">
                    <h4 className="text-[20px] font-medium leading-[1.25] tracking-[-0.015em] text-foreground md:text-[22px]">
                      {pos.title}
                    </h4>

                    {pos.summary && (
                      <p className="mt-2.5 max-w-[68ch] text-[16px] leading-[1.6] text-foreground/90">
                        {pos.summary}
                      </p>
                    )}

                    <ul className="mt-4 space-y-2.5">
                      {pos.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="grid grid-cols-[16px_1fr] items-baseline text-[16px] leading-[1.6] text-muted-foreground"
                        >
                          <span
                            aria-hidden
                            className="font-mono text-[13px] text-primary"
                          >
                            —
                          </span>
                          <span>
                            {b.label && (
                              <strong className="font-medium text-foreground">
                                {b.label}.{" "}
                              </strong>
                            )}
                            {b.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 border-t border-border/70 pt-3 font-mono text-[13px] text-muted-foreground">
                      <span className="font-medium text-foreground">Stack: </span>
                      {pos.tech.join(" · ")}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
