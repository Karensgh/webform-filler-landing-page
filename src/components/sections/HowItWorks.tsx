"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "1",
        title: "Fill out a form like normal",
        description: "No setup needed. The first time you fill a form, AuFill quietly remembers your answers."
    },
    {
        number: "2",
        title: "AuFill learns what you mean",
        description: "It understands that \u2018Work History\u2019 and \u2018Employment Background\u2019 are asking the same thing."
    },
    {
        number: "3",
        title: "One click, done",
        description: "Next time you hit a form, click once. Every field fills in automatically."
    }
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
                        Three steps. Zero effort.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-100 via-indigo-500 to-violet-100 opacity-30 z-0" />

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className="text-center group"
                            >
                                <div className="w-20 h-20 mx-auto rounded-full bg-white border-4 border-slate-50 shadow-xl shadow-indigo-900/5 flex items-center justify-center mb-8 relative">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="text-2xl font-bold text-indigo-600 group-hover:text-white relative z-10 transition-colors duration-300">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
