import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="What I use"
      title="Skills"
      description="Backend-first, with a solid front-end reach. Tools I've used in production or in real projects — not just tutorials."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
