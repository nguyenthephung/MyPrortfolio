import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TransferConsole } from "@/components/transfer-console";
import { site } from "@/lib/data/site";

export function Hero() {
  const linkedinHref =
    site.socials.find((s) => s.icon === "linkedin")?.href ??
    "https://www.linkedin.com";

  return (
    <section
      id="top"
      data-enter=""
      aria-labelledby="hero-h"
      className="relative flex min-h-[100svh] items-start pt-[72px] pb-6 md:items-center md:pt-[112px] md:pb-14"
    >
      <div className="wrap w-full">
        {/* Spec header bar */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5 font-mono text-[13px] text-muted-foreground tabular-nums md:mb-6 md:pb-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-primary" />
            <span className="font-medium text-foreground">
              Open to backend & full-stack roles in fintech
            </span>
          </div>
          <span className="hidden items-center gap-1.5 sm:inline-flex">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Ho Chi Minh City, VN · {site.tagline}
          </span>
        </div>

        {/* Dealt hero-collage grid: text span-5, visual span-6 start-7 */}
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-12 lg:gap-6">
          <div className="hero-enter-copy flex flex-col justify-between lg:col-span-5">
            <div>
              <h1
                id="hero-h"
                className="text-[34px] font-medium leading-[1.03] tracking-[-0.04em] text-foreground sm:text-[52px] xl:text-[62px]"
              >
                {site.name} builds Java systems where money moves safely.
              </h1>

              <p className="mt-3.5 max-w-[58ch] text-[15px] leading-[1.55] text-foreground/85 md:mt-5 md:text-[18px] md:leading-[1.6]">
                {site.bio}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
                <Button asChild size="lg" variant="default" className="w-full sm:w-auto">
                  <a href={`mailto:${site.email}`}>
                    Email me <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                {site.resumeUrl && (
                  <Button asChild size="lg" variant="tonal" className="w-full sm:w-auto">
                    <a
                      href={site.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download CV <Download className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Ruled quick-links & proof line */}
            <div className="mt-5 hidden border-t border-border pt-4 sm:block lg:mt-8">
              <p className="font-mono text-[13px] text-muted-foreground">
                Production experience: Eximbank Teller Platform · FPT Information System
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {[
                  {
                    href: "https://github.com/nguyenthephung",
                    icon: Github,
                    label: "GitHub",
                  },
                  {
                    href: linkedinHref,
                    icon: Linkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: `mailto:${site.email}`,
                    icon: Mail,
                    label: "Email",
                  },
                  {
                    href: "/images/zalo.png",
                    icon: MessageCircle,
                    label: "Zalo QR",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={
                      href.startsWith("http") || href.endsWith(".png")
                        ? "_blank"
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className="m-btn inline-flex h-11 items-center gap-2 rounded-[4px] border border-border bg-muted/60 px-3.5 font-mono text-[13px] text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-enter-art lg:col-span-7">
            <TransferConsole />
          </div>
        </div>
      </div>
    </section>
  );
}
