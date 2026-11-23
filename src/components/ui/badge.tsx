import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[4px] border border-border bg-muted px-2 py-0.5 font-mono text-[13px] font-normal text-foreground tabular-nums",
        className
      )}
    >
      {children}
    </span>
  );
}
