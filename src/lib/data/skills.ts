import type { Certification, Education, Language, SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  {
    label: "Backend",
    description: "Where I spend most of my time.",
    icon: "server",
    items: [
      "Java",
      "Spring Boot 3",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA / Hibernate",
      "RESTful API",
      "JWT (ES256)",
      "RBAC",
      "Maven / Gradle",
      "JUnit",
      "Mockito",
    ],
  },
  {
    label: "Messaging, Caching & Data",
    description: "Moving and storing data safely.",
    icon: "database",
    items: [
      "Apache Kafka",
      "RabbitMQ",
      "WebSocket",
      "Redis (Cache & Distributed Locks)",
      "Oracle",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    label: "Frontend",
    description: "Shipping the UI end to end.",
    icon: "layout",
    items: [
      "Angular",
      "Nx",
      "Module Federation",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Ant Design",
      "HTML5 / CSS3",
    ],
  },
  {
    label: "Architecture & DevOps",
    description: "Building systems that hold up.",
    icon: "cloud",
    items: [
      "Microservices",
      "Event-Driven Architecture",
      "Idempotency & Concurrency Control",
      "Docker",
      "Kubernetes",
      "GitLab CI/CD",
      "Secure Coding (OWASP)",
      "Agile / Scrum",
      "Jira",
      "Figma",
    ],
  },
];

export const education: Education = {
  school: "VNUHCM – University of Science × Université Claude Bernard Lyon 1",
  program: "Vietnam–France Dual-Degree Program",
  period: "Sep 2021 – Sep 2025",
  degrees: [
    {
      title: "B.S. in Computer Science",
      detail: "VNUHCM – University of Science · Sep 2021 – Mar 2025",
    },
    {
      title: "B.Eng. in System Engineering",
      detail: "Université Claude Bernard Lyon 1 · Sep 2021 – Sep 2025",
    },
  ],
};

export const certifications: Certification[] = [
  { name: "IBM Full Stack Software Developer", issuer: "IBM · Professional Certificate" },
  { name: "Google Cloud: Cloud Engineer", issuer: "Google Cloud · Coursera" },
];

export const languages: Language[] = [
  { name: "Vietnamese", level: "Native" },
  { name: "English", level: "Intermediate" },
  { name: "French", level: "Intermediate · DELF B1" },
];
