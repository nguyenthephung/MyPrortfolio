import Image from "next/image";
import { Section } from "@/components/ui/section";
import { site } from "@/lib/data/site";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      specMeta="Profile · VNUHCM × Lyon 1 · FPT Information System"
      title={
        <>
          Backend-first engineer who{" "}
          <span className="text-muted-foreground">
            owns features from the Oracle schema to the UI.
          </span>
        </>
      }
    >
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Left column: bio paragraphs + numbered focus list */}
        <div className="space-y-8 lg:col-span-7">
          <div className="space-y-5 text-[16px] leading-[1.65] text-foreground/90 md:text-[18px]">
            {site.about.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-normal text-foreground"
                    : "text-muted-foreground"
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* Current focus as a numbered specification list */}
          <div className="border-t border-border pt-6">
            <div className="mb-3 flex items-baseline justify-between font-mono text-[13px] text-muted-foreground">
              <span className="font-medium text-foreground">
                Current engineering focus
              </span>
              <span>SPEC 01.1 — 01.4</span>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {site.focus.map((f, idx) => (
                <li
                  key={f}
                  className="grid grid-cols-[44px_1fr] items-baseline py-3.5 text-[16px]"
                >
                  <span className="font-mono text-[13px] font-medium text-primary tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right column: real portrait + single canonical spec table for stats */}
        <div className="space-y-6 lg:col-span-5">
          <div className="overflow-hidden rounded-[6px] border border-border bg-muted">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={site.avatarSrc}
                alt={`${site.name} — portrait`}
                fill
                className="m-zoom object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
            <div className="flex items-baseline justify-between border-t border-border bg-background px-4 py-3 font-mono text-[13px]">
              <span className="font-medium text-foreground">
                {site.displayName}
              </span>
              <span className="text-muted-foreground">{site.role} @ FPT IS</span>
            </div>
          </div>

          {/* Two-column spec ledger for the 4 stats (single location on page) */}
          <div className="rounded-[6px] border border-border bg-background">
            <div className="border-b border-border bg-muted/60 px-4 py-2.5 font-mono text-[13px] font-medium text-foreground">
              Production banking record
            </div>
            <dl className="divide-y divide-border">
              {site.stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline justify-between gap-4 px-4 py-3"
                >
                  <dt className="text-[15px] text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="font-mono text-[20px] font-medium tracking-tight text-foreground tabular-nums">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
