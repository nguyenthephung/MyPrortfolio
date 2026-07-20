import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "rescuenet",
    title: "RescueNet — Emergency Rescue Coordination Platform",
    period: "Sep 2025 — Now",
    role: "Full Stack Engineer",
    team: "Team of 3",
    summary:
      "Microservice-based emergency rescue platform with real-time SOS intake, responder coordination, and live dispatch tracking.",
    bullets: [
      "Designed a Spring Boot 3 microservice backend with Apache Kafka as the event bus so SOS submissions and status updates propagate asynchronously without direct service coupling.",
      "Modeled the road network and implemented priority classification and shortest-path routing to select the fastest available team.",
      "Used Redis Geo for continuous responder location indexing and WebSocket to stream live positions and mission status to citizen and dispatcher dashboards.",
      "Containerized every service with Docker and set up GitLab CI/CD pipelines; front end delivered with Next.js, TypeScript, TailwindCSS, and Redux on Vercel.",
    ],
    tech: [
      "Java",
      "Spring Boot 3",
      "Kafka",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "WebSocket",
      "Docker",
      "GitLab CI/CD",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Redux",
    ],
    image: "/images/RescueNet_Project.png",
    links: {
      github: "https://github.com/nguyenthephung/RescueNet",
      demo: "https://rescue-net-tan.vercel.app/",
    },
    featured: true,
  },
  {
    slug: "greenmart",
    title: "GreenMart — Full-Stack E-commerce Platform",
    period: "May 2025 — Aug 2025",
    role: "Solo Project",
    summary:
      "Modern e-commerce platform for fresh and organic products with JWT authentication, product management, order tracking, and an admin dashboard.",
    bullets: [
      "Built a full-stack e-commerce application with JWT authentication, product / order management, image upload, and sales analytics.",
      "Delivered a responsive UI with dark / light mode, advanced search & filtering, and mobile-first optimization; Cloudinary for image management.",
      "Deployed front end on Firebase Hosting and backend on Render.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Firebase Hosting",
      "Render",
    ],
    image: "/images/GreenMart_Project.png",
    links: {
      github: "https://github.com/nguyenthephung/Green-Mart",
      demo: "https://greenmart-web-4385e.web.app/home",
    },
    featured: true,
  },
  {
    slug: "tubeanalytics",
    title: "TubeAnalytics — AI-Powered YouTube Comment Analysis",
    period: "Aug 2025 — Sep 2025",
    role: "Solo Project",
    summary:
      "AI-powered YouTube comment analysis using Hume AI, detecting 50+ emotional states to surface audience sentiment and engagement insight.",
    bullets: [
      "Built a web app that extracts YouTube comments and analyzes audience sentiment using Hume AI emotion models (50+ emotional states).",
      "Designed an interactive dashboard with emotion-distribution charts and summary statistics; integrated the YouTube Data API for automated extraction (50–200 comments per analysis).",
      "Delivered a fully localized Vietnamese UI; front end on Vercel, backend on Google Cloud.",
    ],
    tech: [
      "Next.js",
      "TailwindCSS",
      "FastAPI",
      "Python",
      "Hume AI",
      "YouTube Data API",
      "Vercel",
      "Google Cloud",
    ],
    image: "/images/TubeAnalytics_Project.png",
    links: {
      github: "https://github.com/nguyenthephung/TubeAnalytics",
      demo: "https://tube-analytics-w5pb.vercel.app/",
    },
    featured: true,
  },
  {
    slug: "expense-tracker-api",
    title: "Expense Tracker API",
    period: "2024",
    role: "Solo Project",
    summary:
      "RESTful API for personal finance management with dual authentication (JWT + Google OAuth2), Firebase Firestore integration, and analytics endpoints.",
    bullets: [
      "Implemented JWT + Google OAuth2 authentication and role-based endpoints in Spring Boot.",
      "Backed by Firebase Firestore for transactional data; analytics endpoints for spending trends.",
      "Documented all endpoints with Swagger / OpenAPI.",
    ],
    tech: ["Java 17", "Spring Boot", "Spring Security", "JWT", "OAuth2", "Firebase", "Swagger"],
    image: "/images/ExpenseTrackerAPI_Project.png",
    links: {
      github: "https://github.com/nguyenthephung/ExpenseTrackerAPI",
    },
  },
  {
    slug: "mario-game",
    title: "Mario Bros Game — C++ & SFML",
    period: "2023",
    role: "University Project",
    summary:
      "A Mario Bros-style 2D platformer built with C++ and SFML — classic platforming, camera tracking, collision detection, and enemy interactions.",
    bullets: [
      "Implemented tile-based level rendering, side-scrolling camera, and pixel-perfect collision.",
      "Designed enemy AI, power-ups, and scoring loop with an entity-component style architecture.",
    ],
    tech: ["C++17", "SFML 2.5+", "Visual Studio", "2D Graphics"],
    image: "/images/MarioGame_Project.jpg",
    links: {
      github: "https://github.com/trngnneee/MarioGame",
    },
  },
];
