import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
  title: "Learn & Fill — Your AI memory for every form.",
  description: "Learn & Fill is a browser extension that learns who you are and fills forms for you intelligently — adapting to each question's context and requirements.",
  openGraph: {
    title: "Learn & Fill — Your AI memory for every form.",
    description: "Stop retyping the same answers. Learn & Fill learns who you are and fills any form intelligently — adapting to each question's context and requirements.",
    url: "https://learnfill.reveliolabs.app",
    siteName: "Learn & Fill",
    images: [
      {
        url: "https://learnfill.reveliolabs.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Learn & Fill — Your AI memory for every form",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn & Fill — Your AI memory for every form.",
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
        <Script id="reddit-pixel" strategy="afterInteractive">
          {`
            !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);
            rdt('init','a2_i1b23l3l344i');
            rdt('track', 'PageVisit');
          `}
        </Script>
      </body>
    </html>
  );
}
