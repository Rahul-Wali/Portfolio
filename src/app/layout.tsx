import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Rahul Anand Wali | Full Stack Web Developer · React, TypeScript, Go & AI";
const description =
  "Portfolio of Rahul Anand Wali — Full Stack Web Developer building multi-tenant platforms and AI-enabled applications with React, TypeScript, Go, Python and PostgreSQL.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Go",
    "Python",
    "PostgreSQL",
    "OIDC",
    "Docker",
    "AI Applications",
    "RAG",
    "Portfolio",
  ],
  authors: [{ name: "Rahul Anand Wali" }],
  creator: "Rahul Anand Wali",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title,
    description,
    siteName: "Rahul Anand Wali",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahul Anand Wali — Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh flex flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
