import { Section } from "@/components/ui/section";
import {
  certifications,
  education,
  languages,
  skills,
} from "@/lib/data/skills";

const brandIconMap: Record<string, { src: string; adaptDark?: boolean }> = {
  Java: { src: "/icons/java.svg" },
  "Spring Boot 3": { src: "/icons/spring.svg" },
  "Spring MVC": { src: "/icons/spring.svg" },
  "Spring Security": { src: "/icons/spring.svg" },
  "Spring Data JPA / Hibernate": { src: "/icons/spring.svg" },
  "Apache Kafka": { src: "/icons/kafka.svg", adaptDark: true },
  RabbitMQ: { src: "/icons/rabbitmq.svg" },
  "Redis (Cache & Distributed Locks)": { src: "/icons/redis.svg" },
  Oracle: { src: "/icons/oracle.svg" },
  PostgreSQL: { src: "/icons/postgres.svg" },
  MongoDB: { src: "/icons/mongodb.svg" },
  Angular: { src: "/icons/angular.svg" },
  Nx: { src: "/icons/nx.svg", adaptDark: true },
  React: { src: "/icons/react.svg" },
  "Next.js": { src: "/icons/nextjs.svg", adaptDark: true },
  TypeScript: { src: "/icons/typescript.svg" },
  JavaScript: { src: "/icons/javascript.svg" },
  "Tailwind CSS": { src: "/icons/tailwindcss.svg" },
  Docker: { src: "/icons/docker.svg" },
  Kubernetes: { src: "/icons/kubernetes.svg" },
  "GitLab CI/CD": { src: "/icons/gitlab.svg" },
  Jira: { src: "/icons/jira.svg" },
  Figma: { src: "/icons/figma.svg" },
};

const groupHeaderIcons: Record<string, string[]> = {
  Backend: ["/icons/java.svg", "/icons/spring.svg"],
  "Messaging, Caching & Data": [
    "/icons/kafka.svg",
    "/icons/redis.svg",
    "/icons/oracle.svg",
    "/icons/postgres.svg",
  ],
  Frontend: [
    "/icons/angular.svg",
    "/icons/nx.svg",
    "/icons/react.svg",
    "/icons/typescript.svg",
  ],
  "Architecture & DevOps": [
    "/icons/docker.svg",
    "/icons/kubernetes.svg",
    "/icons/gitlab.svg",
  ],
};

export function Skills() {
  return (
    <Section
      id="skills"
      index="05"
      eyebrow="Toolkit & credentials"
      specMeta="Java 17 · Spring Boot 3 · Dual B.S./B.Eng."
      title={
        <>
          Skills, education & credentials.{" "}
          <span className="text-muted-foreground">
            Backend-first with solid front-end reach, applied in production banking and distributed builds.
          </span>
        </>
      }
    >
      {/* 4-column specification grid for toolkit */}
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[6px] border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, idx) => {
          const headerIcons = groupHeaderIcons[group.label] ?? [];
          return (
            <div
              key={group.label}
              className="flex flex-col justify-between bg-background p-5"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-mono text-[13px] font-medium text-primary tabular-nums">
                    05.{idx + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    {headerIcons.map((src) => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        key={src}
                        src={src}
                        alt=""
                        width={18}
                        height={18}
                        className={`h-[18px] w-[18px] object-contain ${
                          src.includes("kafka") ||
                          src.includes("nx") ||
                          src.includes("nextjs")
                            ? "icon-adapt-dark"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="mt-3 text-[19px] font-medium tracking-[-0.015em] text-foreground">
                  {group.label}
                </h3>
                <p className="mt-1 text-[14px] text-muted-foreground">
                  {group.description}
                </p>

                <ul className="mt-4 divide-y divide-border border-t border-border">
                  {group.items.map((item) => {
                    const icon = brandIconMap[item];
                    return (
                      <li
                        key={item}
                        className="flex items-center justify-between gap-2 py-2 text-[15px] text-foreground"
                      >
                        <span>{item}</span>
                        {icon ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={icon.src}
                            alt=""
                            width={16}
                            height={16}
                            className={`h-4 w-4 shrink-0 object-contain ${
                              icon.adaptDark ? "icon-adapt-dark" : ""
                            }`}
                          />
                        ) : (
                          <span className="font-mono text-[13px] text-muted-foreground">
                            ·
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Education, certifications, languages as ruled editorial footnote rows */}
      <div className="mt-10 grid grid-cols-1 gap-8 border-t border-border pt-8 lg:grid-cols-12">
        {/* Education (7 cols) */}
        <div className="lg:col-span-7">
          <div className="mb-3 flex items-baseline justify-between font-mono text-[13px] text-muted-foreground">
            <span className="font-medium text-foreground">
              §05.5 · Education
            </span>
            <span>{education.period}</span>
          </div>

          <div className="rounded-[6px] border border-border bg-muted/35 p-5">
            <h3 className="text-[20px] font-medium tracking-[-0.015em] text-foreground md:text-[22px]">
              {education.program}
            </h3>
            <p className="mt-1 text-[15px] text-muted-foreground">
              {education.school}
            </p>

            <div className="mt-4 grid grid-cols-1 gap-3 border-t border-border pt-4 sm:grid-cols-2">
              {education.degrees.map((d) => (
                <div
                  key={d.title}
                  className="rounded-[4px] border border-border bg-background p-3.5"
                >
                  <p className="text-[16px] font-medium text-foreground">
                    {d.title}
                  </p>
                  <p className="mt-1 font-mono text-[13px] text-muted-foreground">
                    {d.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Languages (5 cols) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          <div>
            <div className="mb-3 flex items-baseline justify-between font-mono text-[13px] text-muted-foreground">
              <span className="font-medium text-foreground">
                §05.6 · Certifications
              </span>
              <span>Verified</span>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="flex flex-col justify-between py-3 sm:flex-row sm:items-baseline"
                >
                  <span className="text-[15px] font-medium text-foreground">
                    {c.name}
                  </span>
                  <span className="font-mono text-[13px] text-muted-foreground">
                    {c.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-3 flex items-baseline justify-between font-mono text-[13px] text-muted-foreground">
              <span className="font-medium text-foreground">
                §05.7 · Languages
              </span>
              <span>VN · EN · FR</span>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {languages.map((l) => (
                <li
                  key={l.name}
                  className="flex items-baseline justify-between gap-3 py-2.5 text-[15px]"
                >
                  <span className="font-medium text-foreground">{l.name}</span>
                  <span className="font-mono text-[13px] text-muted-foreground">
                    {l.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
