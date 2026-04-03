"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "1",
        title: "Fill one application like normal",
        description: "Start with a job, scholarship, accelerator, or grant application. OneEntry learns and remembers the answers you already type."
    },
    {
        number: "2",
        title: "OneEntry saves and organizes your answers",
        description: "Your work history, school info, essays, personal details, and other application answers stay ready for the next form."
    },
    {
        number: "3",
        title: "It adapts them to the next application",
        description: "When a new form asks for similar information in a different way, OneEntry matches the right answers for you to review before submitting."
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
                        Three simple steps for repetitive applications.
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
                                <div className="w-20 h-20 mx-auto rounded-full bg-white ring-8 ring-slate-50 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-300">
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
