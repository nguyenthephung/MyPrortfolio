import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    company: "FPT Information System",
    companyHref: "https://fpt-is.com",
    totalPeriod: "Jan 2025 — Now",
    positions: [
      {
        title: "Full Stack Software Engineer",
        period: "Jul 2025 — Now",
        location: "Ho Chi Minh City, Vietnam",
        summary:
          "Delivering features end-to-end on the Teller Platform for Eximbank — a 14-service Spring Boot 3 / Java 17 backend and an Angular 21 Nx micro-frontend architecture.",
        bullets: [
          "Build and extend REST APIs for teller, customer, admin, and approval workflows using Spring MVC, Spring Data JPA, Oracle, MapStruct + Lombok, centralized @RestControllerAdvice error handling, and a shared ApiResult<T> response envelope.",
          "Implement platform-level backend features including JWT authentication, custom @CheckPermission RBAC with Spring AOP, Redis-backed session and permission caching, Kafka notification events, and Redisson distributed locks.",
          "Integrate services with an internal ESB (Spring WebClient + Basic Auth) fronting the core-banking adapter; implement maker-checker approval flows on both backend state machine and front-end action bar.",
          "Develop Angular features with standalone components, Reactive Forms, RxJS, and @ngrx/signals, contributing reusable modules to shared internal libraries.",
          "Extended the Kafka-driven notification pipeline supporting email (SMTP / SendGrid), SMS (Twilio), push (Firebase FCM), and in-app WebSocket channels.",
        ],
        tech: [
          "Java 17",
          "Spring Boot 3",
          "Spring Security",
          "Spring Data JPA",
          "Oracle",
          "Kafka",
          "Redis",
          "Redisson",
          "Angular 21",
          "Nx",
          "Module Federation",
          "@ngrx/signals",
          "RxJS",
          "Docker",
        ],
      },
      {
        title: "Software Engineer Intern",
        period: "Jan 2025 — Jun 2025",
        location: "Ho Chi Minh City, Vietnam",
        summary:
          "Rotated across several enterprise-banking projects during a 6-month internship, with small, well-scoped contributions under senior supervision.",
        bullets: [
          "InternHub — helped build an internal Spring Boot + Angular web application, contributing to both Java REST endpoints and Angular UI.",
          "BVBank — implemented feature slices on a Spring Boot + Angular banking-agent template designed to be re-configured and re-sold to different bank clients.",
          "HDBank — worked on UI / UX fixes on the Angular front end of the delivery project.",
          "Supported client-bank security remediation, applying defensive fixes in authentication, input handling, and data-access code across Spring Boot and Angular codebases.",
          "Converted from Software Engineer Intern to Full Stack Software Engineer at the end of the internship.",
        ],
        tech: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Spring Data JPA",
          "Angular",
          "TypeScript",
        ],
      },
    ],
  },
  {
    company: "BrainLife Link JSC",
    totalPeriod: "May 2025 — Sep 2025",
    positions: [
      {
        title: "Software Research & Engineer Intern",
        period: "May 2025 — Sep 2025",
        location: "Ho Chi Minh City, Vietnam",
        summary:
          "Concurrent part-time internship on brain-computer interface (BCI) technology, bridging signal processing, ML, and app delivery.",
        bullets: [
          "Built a real-time EEG signal processing pipeline with FastAPI + Python, reducing end-to-end latency by ~40%.",
          "Integrated ML emotion detection models with Unity games to enable brain-controlled gaming interactions.",
          "Developed mobile app features with authentication and API integration using React Native + Firebase.",
        ],
        tech: [
          "Python",
          "FastAPI",
          "Unity",
          "C#",
          "React Native",
          "Firebase",
          "Machine Learning",
        ],
      },
    ],
  },
];
