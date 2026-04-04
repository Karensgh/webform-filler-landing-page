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
                        It&apos;s simple.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Step 1: Compact banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 border border-slate-200/60 rounded-2xl px-6 py-5 mb-10 flex items-center gap-4 shadow-sm max-w-lg mx-auto"
                    >
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
                            <span className="text-lg font-bold text-white">1</span>
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-slate-900">{steps[0].title}</h3>
                            <p className="text-slate-600 text-sm">{steps[0].description}</p>
                        </div>
                    </motion.div>

                    {/* Step 2 & 3: Side by side, equal height */}
                    <div className="grid md:grid-cols-2 gap-8">
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