"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-indigo-50/50 blur-3xl opacity-50" />
                <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-violet-50/50 blur-3xl opacity-50" />
            </div>

            <div className="container max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <p className="text-xl md:text-2xl text-slate-600 mb-4">
                        Tired of retyping the same answers on every form?
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Fill once.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                            Reuse everywhere.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
                        A browser extension that remembers what you&apos;ve typed on forms and intelligently fills them in next time — on any website.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a href="#waitlist">
                            <Button size="lg" className="rounded-full h-14 px-8 text-base bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20 group">
                                Get early access - It's free!
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <a href="#how-it-works">
                            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-slate-200 hover:bg-slate-50 text-slate-700">
                                See how it works
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
