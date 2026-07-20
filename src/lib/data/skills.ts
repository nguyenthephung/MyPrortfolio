import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "SQL", "Python", "C++", "C#"],
  },
  {
    label: "Java / Backend",
    items: [
      "Spring Boot 3",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Spring Kafka",
      "Spring WebFlux (WebClient)",
      "Spring AOP",
      "REST",
      "JWT",
      "OpenAPI / Swagger",
      "JUnit",
      "Maven",
    ],
  },
  {
    label: "Front-end",
    items: [
      "Angular 21",
      "Nx",
      "Module Federation",
      "@ngrx/signals",
      "RxJS",
      "Angular Reactive Forms",
      "React",
      "Next.js",
      "TailwindCSS",
      "Redux",
    ],
  },
  {
    label: "Data & Caching",
    items: [
      "Oracle",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis (Lettuce, Redisson)",
      "HikariCP",
    ],
  },
  {
    label: "Messaging & Real-time",
    items: ["Apache Kafka", "WebSocket"],
  },
  {
    label: "DevOps & Cloud",
    items: [
      "Docker",
      "Git",
      "GitLab CI/CD",
      "GitHub Actions",
      "Nginx",
      "Firebase",
      "Vercel",
      "Render",
      "Google Cloud",
    ],
  },
  {
    label: "Concepts",
    items: [
      "Microservices",
      "Layered Architecture",
      "DTO / Mapper (MapStruct + Lombok)",
      "Repository / Service pattern",
      "Dependency Injection",
      "Maker-Checker approval workflow",
      "OOP & Design Patterns",
    ],
  },
];
