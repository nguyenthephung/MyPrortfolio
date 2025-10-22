import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyen The Phung | Software Developer & Computer Science Student",
  description: "Computer Science student with expertise in EEG-based applications, AI integration, and scalable web platforms. Building innovative software solutions with React, Next.js, Java, Python, and modern cloud technologies.",
  keywords: [
    "Nguyen The Phung", 
    "Software Developer", 
    "Computer Science Student", 
    "Full-Stack Developer",
    "React", 
    "Next.js", 
    "Java", 
    "Python", 
    "TypeScript",
    "Spring Boot",
    "Node.js",
    "EEG signal processing",
    "AI integration",
    "Machine Learning",
    "Ho Chi Minh City",
    "Vietnam"
  ],
  authors: [{ name: "Nguyen The Phung", url: "https://github.com/nguyenthephung" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nguyenthephung-portfolio.vercel.app",
    title: "Nguyen The Phung | Software Developer Portfolio",
    description: "Computer Science student specializing in EEG-based applications, AI integration, and scalable web development. View my projects and experience.",
    siteName: "Nguyen The Phung Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen The Phung | Software Developer Portfolio",
    description: "Computer Science student specializing in EEG-based applications, AI integration, and scalable web development.",
  },
  // Use avatar image from public/images as favicon / icons
  icons: {
    // prefer an SVG favicon (generated) for crispness, fallback to the avatar JPG
    icon: [
      { url: "/favicon.jpg", sizes: "any", type: "image/jpg+xml" },
      { url: "/images/myAvatart.jpg", sizes: "any" },
    ],
    shortcut: "/favicon.jpg",
    apple: "/images/myAvatart.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
