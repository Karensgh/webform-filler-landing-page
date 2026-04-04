import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <Hero />
        <Features />
        <Problem />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
