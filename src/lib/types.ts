export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "facebook" | "message-circle";
};

export type Stat = {
  value: string;
  label: string;
};

export type SiteConfig = {
  name: string;
  displayName: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  avatarSrc: string;
  bio: string;
  about: string[];
  focus: string[];
  stats: Stat[];
  resumeUrl?: string;
  portfolioUrl: string;
  socials: SocialLink[];
};

export type Highlight = {
  title: string;
  description: string;
  tags: string[];
};

export type Position = {
  title: string;
  project?: string;
  period: string;
  location?: string;
  summary?: string;
  bullets: { label?: string; text: string }[];
  tech: string[];
};

export type Experience = {
  company: string;
  companyHref?: string;
  totalPeriod: string;
  type?: string;
  positions: Position[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  team?: string;
  summary: string;
  bullets?: string[];
  tech: string[];
  image?: string;
  accent?: "violet" | "blue" | "emerald" | "amber";
  links: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
};

export type SkillGroup = {
  label: string;
  description: string;
  icon: "server" | "database" | "layout" | "cloud";
  items: string[];
};

export type Education = {
  school: string;
  program: string;
  period: string;
  degrees: { title: string; detail: string }[];
};

export type Certification = {
  name: string;
  issuer: string;
};

export type Language = {
  name: string;
  level: string;
};
