import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "Modern portfolio website built with Next.js 15, React 19, TypeScript, and TailwindCSS",
  keywords: ["portfolio", "developer", "web development", "react", "nextjs"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Portfolio | Your Name",
    description: "Modern portfolio website showcasing my work and skills",
    siteName: "Your Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Your Name",
    description: "Modern portfolio website showcasing my work and skills",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
