export type SiteConfig = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  avatarSrc: string;
  bio: string;
  shortTerm: string;
  longTerm: string;
  resumeUrl?: string;
  socials: SocialLink[];
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "facebook" | "message-circle";
};

export type Position = {
  title: string;
  period: string;
  location?: string;
  summary?: string;
  bullets: string[];
  tech: string[];
};

export type Experience = {
  company: string;
  companyHref?: string;
  totalPeriod: string;
  positions: Position[];
};

export type Project = {
  slug: string;
  title: string;
  period: string;
  role: string;
  team?: string;
  summary: string;
  bullets?: string[];
  tech: string[];
  image: string;
  links: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
};

export type SkillGroup = {
  label: string;
  items: string[];
};
