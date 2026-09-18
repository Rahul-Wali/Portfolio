import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Rahul Anand Wali | Python Engineer · Data & GenAI Engineer",
  description: "Portfolio of Rahul Anand Wali — Python Engineer focused on Data Engineering, RAG pipelines, vector search, machine learning and GenAI.",
  keywords: [
    "Python Engineer",
    "Data Engineering",
    "GenAI",
    "RAG Pipelines",
    "Vector Databases",
    "FAISS",
    "Machine Learning",
    "NLP",
    "Data Analytics",
    "Portfolio",
  ],
  authors: [{ name: "Rahul Anand Wali" }],
  creator: "Rahul Anand Wali",
  publisher: "Rahul Anand Wali",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahul-wali.dev",
    title: "Rahul Anand Wali | Python Engineer · Data & GenAI Engineer",
    description: "Portfolio of Rahul Anand Wali — Python Engineer focused on Data Engineering, RAG pipelines, vector search, machine learning and GenAI.",
    siteName: "Rahul Anand Wali",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahul Anand Wali - Python Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Anand Wali | Python Engineer · Data & GenAI Engineer",
    description: "Portfolio of Rahul Anand Wali — Python Engineer focused on Data Engineering, RAG pipelines, vector search, machine learning and GenAI.",
    images: ["/og-image.png"],
    creator: "@rahul_wali",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-white">
        {children}
      </body>
    </html>
  );
}