"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { LearnAndFill } from "@/components/ui/LearnAndFill";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-indigo-50/80 via-white to-white">
            {/* Abstract animated background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <motion.div
                    animate={{
                        transform: ["translate(0px, 0px) scale(1)", "translate(30px, -30px) scale(1.1)", "translate(0px, 0px) scale(1)"]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-indigo-400 to-violet-400 blur-3xl opacity-[0.15]"
                />
                <motion.div
                    animate={{
                        transform: ["translate(0px, 0px) scale(1)", "translate(-30px, 30px) scale(1.1)", "translate(0px, 0px) scale(1)"]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-violet-400 to-fuchsia-400 blur-3xl opacity-[0.15]"
                />
                <motion.div
                    animate={{
                        transform: ["translate(0px, 0px) scale(1)", "translate(0px, 40px) scale(1.2)", "translate(0px, 0px) scale(1)"]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[0%] left-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-3xl opacity-[0.15]"
                />
            </div>

            <div className="container max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 mb-6 leading-[1.1] relative inline-block">
                        Your information, ready for{" "}
                        <span className="relative whitespace-nowrap">
                            <motion.span
                                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 bg-[length:200%_auto]"
                            >
                                any form
                            </motion.span>
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Stop retyping the same answers. <LearnAndFill /> learns who you are and fills any form for you — job apps, scholarships, grants, insurance, and more.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                >
                    <a href="#waitlist">
                        <Button size="lg" className="relative group overflow-hidden rounded-full h-14 px-8 text-base bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30 transition-all hover:-translate-y-0.5 border-0">
                            <span className="relative z-10 flex items-center">
                                Get early access - It's free!
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </span>
                            {/* Animated Button Shimmer */}
                            <motion.div
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                                className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                            />
                        </Button>
                    </a>
                    <a href="#how-it-works">
                        <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-slate-200 hover:bg-slate-50 text-slate-700 hover:-translate-y-0.5 transition-all">
                            See how it works
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
