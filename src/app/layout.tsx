import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/data/site";
import "./globals.css";

const familjen = Familjen_Grotesk({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-familjen",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thephung.vercel.app"),
  title: {
    default: `${site.name}: ${site.role} (${site.tagline})`,
    template: `%s · ${site.name}`,
  },
  description: site.bio,
  alternates: {
    canonical: "https://thephung.vercel.app",
  },
  keywords: [
    "Nguyen The Phung",
    "Full Stack Software Engineer",
    "Java Backend Engineer",
    "Spring Boot",
    "Spring Security",
    "Java 17",
    "Oracle",
    "Kafka",
    "Redis",
    "Angular",
    "Nx Module Federation",
    "RabbitMQ",
    "Microservices",
    "Event-Driven Architecture",
    "Eximbank",
    "FPT Information System",
    "Distributed Systems",
    "Fintech",
    "Enterprise Banking",
    "Ho Chi Minh City",
    "Vietnam",
  ],
  authors: [{ name: site.name, url: "https://github.com/nguyenthephung" }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thephung.vercel.app",
    title: `${site.name}: ${site.role} (${site.tagline})`,
    description: site.bio,
    siteName: `${site.name} · Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}: ${site.role} (${site.tagline})`,
    description: site.bio,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  other: {
    "site-kind": "software",
    "page-type": "software",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.displayName,
  jobTitle: site.role,
  description: site.bio,
  url: site.portfolioUrl,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ho Chi Minh City",
    addressCountry: "VN",
  },
  worksFor: {
    "@type": "Organization",
    name: "FPT Information System",
    url: "https://fpt-is.com",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "VNUHCM - University of Science",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Université Claude Bernard Lyon 1",
    },
  ],
  sameAs: [
    "https://github.com/nguyenthephung",
    "https://www.linkedin.com/in/th%E1%BB%83-ph%E1%BB%A5ng-nguy%E1%BB%85n-285107385/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-type="software"
      data-radius="sharp"
      data-ground="sage"
      data-buttons="tonal"
      data-motion=""
      suppressHydrationWarning
      className={`${familjen.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
