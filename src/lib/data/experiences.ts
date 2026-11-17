import type { Experience, Highlight } from "@/lib/types";

/** Engineering highlights — the problems I'm proudest of solving. */
export const highlights: Highlight[] = [
  {
    title: "Idempotent fund transfers",
    description:
      "Duplicate submissions are neutralised with idempotency keys; ambiguous core-banking timeouts move to a pending-verify state and get reconciled — never blindly retried.",
    tags: ["Idempotency", "Reconciliation", "Oracle"],
  },
  {
    title: "Race-safe maker-checker",
    description:
      "Approval workflow enforcing maker ≠ checker separation with concurrency control, so simultaneous approvals always resolve to exactly one outcome.",
    tags: ["Concurrency", "State machine", "RBAC"],
  },
  {
    title: "Event-driven notifications",
    description:
      "Kafka pipeline fanning out to email, SMS, push and WebSocket with an independent consumer per channel, plus a trace-ID-linked audit trail.",
    tags: ["Kafka", "WebSocket", "Audit trail"],
  },
  {
    title: "Micro-frontend migration",
    description:
      "Moved legacy Liferay/JSP screens to Angular Module Federation and contributed to a shared UI library reused across 11 micro-frontends.",
    tags: ["Angular Nx", "Module Federation", "PII masking"],
  },
];

export const experiences: Experience[] = [
  {
    company: "FPT Information System",
    companyHref: "https://fpt-is.com",
    totalPeriod: "Mar 2025 – Sep 2026",
    type: "Full-time",
    positions: [
      {
        title: "Full Stack Software Engineer",
        project: "Teller Platform · Eximbank",
        period: "Dec 2025 – Sep 2026",
        location: "Ho Chi Minh City",
        summary:
          "Developer in an 11-person dev team (7 engineers, 4 leads) alongside PM, BA, QC and design — owning features end to end with lead-reviewed merges across a 14-service Spring Boot 3 platform and Angular Nx micro-frontends.",
        bullets: [
          {
            label: "Secure APIs",
            text: "Built REST APIs with Spring MVC, Spring Data JPA and Oracle, secured by ES256 JWT and RBAC; integrated with core banking via an internal ESB that keeps core-specific payloads out of business logic.",
          },
          {
            label: "Approval workflows",
            text: "Developed the maker-checker flow enforcing maker ≠ checker role separation and concurrency control so simultaneous approvals resolve to a single outcome.",
          },
          {
            label: "Fund transfer",
            text: "Co-owned the transfer module across multiple transfer types — idempotency keys for duplicate submissions, a pending-verify state and reconciliation for core-banking timeouts.",
          },
          {
            label: "Notification & audit",
            text: "Worked on the Kafka notification pipeline (email, SMS, push, WebSocket) with an independent consumer per channel, and an audit trail recording who / what / when / where, linked by trace ID.",
          },
          {
            label: "Micro-frontends",
            text: "Contributed to the Liferay/JSP → Angular Module Federation migration and a shared UI library reused across 11 micro-frontends; implemented PII log masking for data-privacy compliance.",
          },
        ],
        tech: [
          "Java 17",
          "Spring Boot 3",
          "Spring Security",
          "Oracle",
          "Kafka",
          "Redis",
          "Angular Nx",
          "Module Federation",
          "Docker",
        ],
      },
      {
        title: "Full Stack Software Engineer",
        project: "Corporate Internet Banking · Eximbank",
        period: "Aug 2025 – Nov 2025",
        location: "Ho Chi Minh City",
        summary:
          "Supported the final phase of a corporate banking platform ahead of go-live.",
        bullets: [
          {
            text: "Fixed defects assigned by business analysts and delivered small enhancements such as data export.",
          },
          {
            label: "Security",
            text: "Remediated 100+ static-analysis findings — resource leaks, SQL injection, XSS, log forging and more — re-scanning until clean.",
          },
        ],
        tech: ["Java", "Spring Boot", "Angular", "OWASP", "Static analysis"],
      },
      {
        title: "Software Engineer Intern",
        period: "Mar 2025 – Aug 2025",
        location: "Ho Chi Minh City",
        bullets: [
          {
            text: "Rotated across 3 Java projects under senior mentorship, fixing defects and shipping small enhancements in large existing codebases.",
          },
          {
            text: "Followed the team's code-review and merge process; converted to full-time after 6 months.",
          },
        ],
        tech: ["Java", "Spring Boot", "Angular", "Git"],
      },
    ],
  },
  {
    company: "Brain-Life Link JSC",
    totalPeriod: "Feb 2024 – May 2024",
    type: "Part-time",
    positions: [
      {
        title: "Software Research & Engineer Intern",
        period: "Feb 2024 – May 2024",
        location: "Ho Chi Minh City",
        summary:
          "Brain-computer interface (BCI) research, bridging signal processing, ML and app delivery.",
        bullets: [
          {
            text: "Built a real-time EEG signal-processing pipeline with FastAPI + Python, reducing end-to-end latency by ~40%.",
          },
          {
            text: "Integrated ML emotion-detection models with Unity games to enable brain-controlled interactions.",
          },
          {
            text: "Developed mobile app features with authentication and API integration using React Native & Firebase.",
          },
        ],
        tech: ["Python", "FastAPI", "Unity", "C#", "React Native", "Firebase"],
      },
    ],
  },
];
