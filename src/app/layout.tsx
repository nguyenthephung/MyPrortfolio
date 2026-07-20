import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nguyenthephung-portfolio.vercel.app"),
  title: {
    default: `${site.name} — ${site.role}`,
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
    url: "https://nguyenthephung-portfolio.vercel.app",
    title: `${site.name} — ${site.role}`,
    description: site.bio,
    siteName: `${site.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.bio,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/myAvatart.jpg", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/images/myAvatart.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
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
