import { cn } from "@/lib/utils";

export function Section({
  id,
  index,
  eyebrow,
  specMeta,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  index?: string;
  eyebrow?: string;
  specMeta?: string;
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative border-t border-border py-16 md:py-24",
        className
      )}
    >
      <div className="wrap">
        {(eyebrow || index || specMeta) && (
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-3 font-mono text-[13px] text-muted-foreground tabular-nums">
            <div className="flex items-center gap-3">
              {index && <span className="font-medium text-foreground">§{index}</span>}
              {eyebrow && <span className="text-foreground">{eyebrow}</span>}
            </div>
            {specMeta && <span>{specMeta}</span>}
          </div>
        )}

        <div className="mb-10 md:mb-12">
          <h2 className="max-w-4xl text-[30px] font-normal leading-[1.08] tracking-[-0.03em] text-foreground md:text-[44px]">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.6] text-muted-foreground md:text-[18px]">
              {description}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
