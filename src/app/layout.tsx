import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thephung.vercel.app"),
  title: {
    default: `${site.name} — ${site.role} (${site.tagline})`,
    template: `%s — ${site.name}`,
  },
  description: site.bio,
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
    title: `${site.name} — ${site.role} (${site.tagline})`,
    description: site.bio,
    siteName: `${site.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role} (${site.tagline})`,
    description: site.bio,
  },
 icons: {
  icon: [
    { url: "/favicon.png", type: "image/png" },
  ],
  shortcut: "/favicon.png",
  apple: "/favicon.png",
},
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090f" },
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
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
