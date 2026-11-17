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
        "inline-flex items-center rounded-full border border-border bg-muted/50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-muted-foreground transition-colors",
        className
      )}
    >
      {children}
    </span>
  );
}
