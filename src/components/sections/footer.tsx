import { ArrowUp } from "lucide-react";
import { site } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#111111] py-12 text-[#f1f1ef]">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-8 border-b border-white/15 pb-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-[24px] font-medium tracking-[-0.02em] text-white">
              {site.displayName}
            </p>
            <p className="mt-1.5 font-mono text-[13px] text-[#a3a3a0]">
              {site.role} · {site.tagline}
            </p>
            <p className="mt-2 font-mono text-[13px] text-[#a3a3a0]">
              {site.location}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 font-mono text-[13px] md:col-span-6 sm:grid-cols-3">
            <div>
              <h3 className="mb-2.5 text-[13px] font-medium text-white">
                Sections
              </h3>
              <ul className="space-y-2 text-[#a3a3a0]">
                <li>
                  <a href="#about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#problems" className="hover:text-white">
                    Architecture
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-white">
                    Experience
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2.5 text-[13px] font-medium text-white">
                Work
              </h3>
              <ul className="space-y-2 text-[#a3a3a0]">
                <li>
                  <a href="#projects" className="hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-white">
                    Toolkit
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2.5 text-[13px] font-medium text-white">
                Profiles
              </h3>
              <ul className="space-y-2 text-[#a3a3a0]">
                <li>
                  <a
                    href="https://github.com/nguyenthephung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={
                      site.socials.find((s) => s.icon === "linkedin")?.href ??
                      "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
                {site.resumeUrl && (
                  <li>
                    <a
                      href={site.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      Resume PDF
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[13px] text-[#a3a3a0]">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <a
            href="#top"
            className="inline-flex h-11 items-center gap-1.5 text-white hover:underline"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
