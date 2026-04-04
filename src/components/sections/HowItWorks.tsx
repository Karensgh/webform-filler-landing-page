"use client";

import { motion } from "framer-motion";
import { LearnModeDemo } from "@/components/demos/LearnModeDemo";
import { FillModeDemo } from "@/components/demos/FillModeDemo";

const steps = [
    {
        number: "1",
        title: "Install the browser extension",
        description: "One click to add Learn & Fill to Chrome. It works on any website with forms.",
    },
    {
        number: "2",
        title: "Learn mode",
        description: "Fill out any form like normal. Learn & Fill watches and saves your answers to your profile.",
        demo: "learn",
    },
    {
        number: "3",
        title: "Fill mode",
        description: "Open a new form and click Fill. Learn & Fill detects the fields and populates them from your profile. Review, tweak, submit.",
        demo: "fill",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 mb-6 tracking-tight">
                        How it works
                    </h2>
                    <p className="text-lg text-slate-600">
                        It learns and fills.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto relative">



                    {/* Step 1: Compact banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 bg-white border border-slate-200/60 rounded-2xl px-6 py-5 flex items-center gap-4 shadow-sm max-w-lg mx-auto"
                    >
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
                            <span className="text-lg font-bold text-white">1</span>
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-slate-900">{steps[0].title}</h3>
                            <p className="text-slate-600 text-sm">{steps[0].description}</p>
                        </div>
                    </motion.div>

                    {/* Elegant Curved CSS Connector */}
                    <div className="hidden md:flex flex-col w-full relative z-0 -mt-3 mb-10 pointer-events-none" aria-hidden="true">
                        {/* Center Trunk */}
                        <div className="flex justify-center">
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "2.5rem" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-[3px] bg-gradient-to-b from-indigo-200 to-indigo-300 rounded-full"
                            />
                        </div>
                        {/* Curved Branches */}
                        <div className="grid grid-cols-2 w-full">
                            {/* Left Branch */}
                            <div className="flex justify-end pr-[-1px]">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "50%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
                                    className="h-16 border-t-[3px] border-l-[3px] border-indigo-300 rounded-tl-[2rem] origin-right relative"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.9 }}
                                        className="absolute -bottom-1 -left-[4.5px] w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.8)] ring-4 ring-white"
                                    />
                                </motion.div>
                            </div>
                            {/* Right Branch */}
                            <div className="flex justify-start pl-[-1px]">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "50%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
                                    className="h-16 border-t-[3px] border-r-[3px] border-indigo-300 rounded-tr-[2rem] origin-left relative"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.9 }}
                                        className="absolute -bottom-1 -right-[4.5px] w-2 h-2 rounded-full bg-violet-600 shadow-[0_0_10px_rgba(139,92,246,0.8)] ring-4 ring-white"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 & 3: Side by side */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-8">
                        {[steps[1], steps[2]].map((step, idx) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="flex flex-col"
                            >
                                <div className="flex items-start gap-3 mb-5">
                                    <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
                                        <span className="text-lg font-bold text-white">{step.number}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>

                                <div className="flex-1 flex items-start">
                                    {step.demo === "learn" && <LearnModeDemo />}
                                    {step.demo === "fill" && <FillModeDemo />}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}