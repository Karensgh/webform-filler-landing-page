import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
