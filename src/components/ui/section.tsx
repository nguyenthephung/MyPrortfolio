import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 border-t border-border py-20 md:py-24",
        className
      )}
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-10 md:mb-14">
          {eyebrow && (
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
