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
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 mb-6 tracking-tight">
                        How it works
                    </h2>
                    <p className="text-lg text-slate-600">
                        It's simple.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto flex flex-col gap-16">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                        >
                            <div className="flex items-start gap-5 mb-6">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                    <span className="text-lg font-bold text-white">{step.number}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                </div>
                            </div>

                            {step.demo === "learn" && <LearnModeDemo />}
                            {step.demo === "fill" && <FillModeDemo />}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}