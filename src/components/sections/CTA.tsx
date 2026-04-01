"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export function CTA() {
    return (
        <section id="waitlist" className="py-24 bg-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden p-12 md:p-20 text-center border border-slate-800"
                >
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 tracking-tight">
                            Stop filling out the same forms over and over.
                        </h2>
                        <p className="text-xl text-slate-300 mb-10">
                            Let AI turn your past forms into a reusable profile.
                        </p>

                        <form
                            onSubmit={(e) => { e.preventDefault(); alert("Thanks for joining the waitlist!"); }}
                            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
                        >
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                required
                                className="h-14 bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus-visible:ring-indigo-500 focus-visible:ring-offset-slate-900 rounded-full px-6 flex-1 text-base"
                            />
                            <Button type="submit" size="lg" className="h-14 rounded-full px-8 bg-indigo-600 hover:bg-indigo-500 text-white font-medium group">
                                Get early access
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>
                        <p className="text-sm text-slate-400">
                            We&apos;re looking for our first 100 beta users. Early access is free.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
