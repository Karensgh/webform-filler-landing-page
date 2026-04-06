import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClarityInit } from "@/components/ClarityInit";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn & Fill — Your AI profile for every form.",
  description: "Learn & Fill is a browser extension that learns who you are and fills forms for you — job apps, scholarships, grants, insurance, and more. The more you use it, the smarter it gets.",
  openGraph: {
    title: "Learn & Fill — Your AI profile for every form.",
    description: "Stop retyping the same answers. Learn & Fill learns who you are and fills any form for you — job apps, scholarships, grants, insurance, and more.",
    url: "https://learnfill.reveliolabs.app",
    siteName: "Learn & Fill",
    images: [
      {
        url: "https://learnfill.reveliolabs.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Learn & Fill — Your AI profile for every form",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn & Fill — Your AI profile for every form.",
    description: "Stop retyping the same answers. Learn & Fill learns who you are and fills any form for you.",
    images: ["https://learnfill.reveliolabs.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans bg-white text-slate-600`}
      >
        <ClarityInit />
        {children}
      </body>
    </html>
  );
}
