import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Nguyen The Phung",
  displayName: "Nguyễn Thế Phụng",
  role: "Full Stack Software Engineer",
  tagline: "Java · Spring Boot · Fintech",
  location: "District 7, Ho Chi Minh City, Vietnam",
  email: "nguyenthephung61@gmail.com",
  phone: "+84 867 951 141",
  avatarSrc: "/images/myAvatart.jpeg",
  portfolioUrl: "https://thephung.vercel.app",
  resumeUrl: "/Nguyen_The_Phung_Resume.pdf",
  bio: "I build reliable, high-concurrency banking systems. 1.5+ years shipping production features on Eximbank's Teller Platform at FPT Information System, with Java, Spring Boot 3, Kafka, Redis and Angular micro-frontends.",
  about: [
    "I'm a Full Stack Software Engineer at FPT Information System, where I went from intern to full-time engineer delivering production banking software for Eximbank. Day to day I work across a 14-service Spring Boot 3 platform and Angular Nx micro-frontends, owning features end to end — from the Oracle schema to the UI.",
    "The problems I enjoy most sit where money moves: idempotent fund transfers, maker-checker approvals that stay correct under concurrent clicks, and event-driven notification pipelines that don't lose messages. I care about systems that fail safely and are easy to reason about.",
    "My foundation comes from a Vietnam–France dual degree in Computer Science (VNUHCM – University of Science) and System Engineering (Université Claude Bernard Lyon 1).",
  ],
  focus: [
    "Transaction safety — idempotency, concurrency control, reconciliation",
    "Event-driven architecture with Kafka & RabbitMQ",
    "Secure APIs — ES256 JWT, RBAC, OWASP remediation",
    "Micro-frontends with Angular Nx & Module Federation",
  ],
  stats: [
    { value: "1.5+", label: "Years in production banking" },
    { value: "14", label: "Microservices platform" },
    { value: "11", label: "Micro-frontends sharing one UI lib" },
    { value: "100+", label: "Security findings remediated" },
  ],
  socials: [
    {
      label: "Email",
      href: "mailto:nguyenthephung61@gmail.com",
      handle: "nguyenthephung61@gmail.com",
      icon: "mail",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/th%E1%BB%83-ph%E1%BB%A5ng-nguy%E1%BB%85n-285107385/",
      handle: "Nguyen The Phung",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/nguyenthephung",
      handle: "@nguyenthephung",
      icon: "github",
    },
    {
      label: "Phone",
      href: "tel:+84867951141",
      handle: "+84 867 951 141",
      icon: "phone",
    },
    {
      label: "Zalo",
      href: "https://zalo.me/0867951141",
      handle: "0867951141",
      icon: "message-circle",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/nguyenthe.phung.961",
      handle: "Nguyen The Phung",
      icon: "facebook",
    },
  ],
};
