import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data/experiences";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Where I've worked"
      title="Experience"
      description="Enterprise banking software delivery — from a 6-month rotational internship to production feature ownership."
    >
      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.company}>
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                {exp.company}
              </h3>
              <span className="font-mono text-xs text-primary md:text-sm">
                {exp.totalPeriod}
              </span>
            </div>

            <ol className="relative space-y-8 border-l border-border pl-6 md:pl-8">
              {exp.positions.map((pos) => (
                <li
                  key={pos.title + pos.period}
                  className="relative"
                >
                  <span
                    className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-primary md:-left-[calc(2rem+5px)]"
                    aria-hidden="true"
                  />

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-base font-semibold md:text-lg">
                      {pos.title}
                    </h4>
                    <span className="font-mono text-xs text-muted-foreground">
                      {pos.period}
                    </span>
                  </div>

                  {pos.summary && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {pos.summary}
                    </p>
                  )}

                  {pos.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {pos.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="relative pl-4 text-sm leading-relaxed text-foreground/85 md:text-[15px]"
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

                  {pos.tech.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {pos.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
