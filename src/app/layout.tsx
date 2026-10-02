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

const title = "Rahul Anand Wali | Python Engineer · Data & GenAI Engineer";
const description =
  "Portfolio of Rahul Anand Wali — Python Engineer focused on Data Engineering, RAG pipelines, vector search, machine learning and GenAI.";

export const metadata: Metadata = {
  title,
  description,
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
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title,
    description,
    siteName: "Rahul Anand Wali",
  },
  twitter: {
    card: "summary",
    title,
    description,
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
