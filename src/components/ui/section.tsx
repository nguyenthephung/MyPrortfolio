import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-20 py-24 md:py-32", className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="mb-12 md:mb-16">
          {eyebrow && (
            <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {index && <span className="text-muted-foreground">{index}</span>}
              <span className="h-px w-8 bg-primary/60" />
              {eyebrow}
            </p>
          )}
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
