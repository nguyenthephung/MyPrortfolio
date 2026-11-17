import { ShieldCheck, GitMerge, Radio, Boxes, Target } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/data/site";
import { highlights } from "@/lib/data/experiences";

const highlightIcons = [ShieldCheck, GitMerge, Radio, Boxes];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          Backend-first engineer who <span className="text-gradient">owns features end to end.</span>
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {site.about.map((p, i) => (
            <p key={i} className={i === 0 ? "text-foreground/90" : undefined}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120} className="rounded-2xl border border-border bg-card p-6">
          <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <Target className="h-4 w-4" /> Current focus
          </p>
          <ul className="space-y-3">
            {site.focus.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent" />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {site.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="bg-card p-6 md:p-8">
            <p className="text-gradient text-4xl font-semibold tracking-tight md:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>

      {/* Highlights */}
      <div className="mt-20">
        <Reveal>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Problems I&apos;ve solved in production
          </h3>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((h, i) => {
            const Icon = highlightIcons[i % highlightIcons.length];
            return (
              <Reveal
                key={h.title}
                delay={i * 80}
                className="glow-card group rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-semibold tracking-tight">{h.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {h.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
