import { Award, Cloud, Database, GraduationCap, Languages, Layout, Server } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { certifications, education, languages, skills } from "@/lib/data/skills";

const iconMap = { server: Server, database: Database, layout: Layout, cloud: Cloud } as const;

export function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Toolkit"
      title={
        <>
          Skills, education & <span className="text-gradient">credentials.</span>
        </>
      }
      description="Backend-first with solid front-end reach — tools I've used in production or in real projects, not just tutorials."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group, i) => {
          const Icon = iconMap[group.icon];
          return (
            <Reveal
              key={group.label}
              delay={i * 80}
              className="glow-card group rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold tracking-tight">{group.label}</h3>
                  <p className="text-xs text-muted-foreground">{group.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Badge key={item} className="hover:border-primary/50 hover:text-foreground">
                    {item}
                  </Badge>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {/* Education */}
        <Reveal className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-6 lg:col-span-2">
          <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <GraduationCap className="h-4 w-4" /> Education
          </p>
          <h3 className="text-xl font-semibold tracking-tight">{education.program}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{education.school}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{education.period}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {education.degrees.map((d) => (
              <div key={d.title} className="rounded-xl border border-border bg-background/60 p-4">
                <p className="font-medium">{d.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{d.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4">
          <Reveal delay={80} className="rounded-2xl border border-border bg-card p-6">
            <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <Award className="h-4 w-4" /> Certifications
            </p>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c.name}>
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={160} className="rounded-2xl border border-border bg-card p-6">
            <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <Languages className="h-4 w-4" /> Languages
            </p>
            <ul className="space-y-2">
              {languages.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-medium">{l.name}</span>
                  <span className="text-xs text-muted-foreground">{l.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
