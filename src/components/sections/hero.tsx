import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/data/site";

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
          <div className="order-2 md:order-1">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to new opportunities
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              {site.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground md:text-xl">
              {site.role}
            </p>

            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {site.location}
            </p>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
              {site.bio}
            </p>

            <div className="mt-6 grid gap-3 border-l-2 border-primary/60 pl-4 text-sm text-muted-foreground md:text-base">
              <p>
                <span className="font-medium text-foreground">Short-term.</span>{" "}
                {site.shortTerm}
              </p>
              <p>
                <span className="font-medium text-foreground">Long-term.</span>{" "}
                {site.longTerm}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="#projects">
                  View projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">
                  Get in touch <ArrowDown className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border border-border md:h-56 md:w-56">
              <Image
                src={site.avatarSrc}
                alt={`${site.name} — profile photo`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 160px, 224px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
