"use client";

import { motion } from "framer-motion";
import { BrainCircuit, FileText, SearchCode, ShieldCheck } from "lucide-react";

const features = [
    {
        icon: <BrainCircuit className="w-6 h-6 text-indigo-600" />,
        title: "Remembers everything you\u2019ve entered",
        description: "Your work history, education, essays, and personal details — all saved and organized automatically."
    },
    {
        icon: <SearchCode className="w-6 h-6 text-indigo-600" />,
        title: "Works even when forms look different",
        description: "AuFill reads forms the way you do. Different labels, different layouts — same smart answers."
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
        title: "You always review before submitting",
        description: "Nothing gets submitted without your say-so. Review every field before you hit send."
    },
    {
        icon: <FileText className="w-6 h-6 text-indigo-600" />,
        title: "Works on web forms and PDFs",
        description: "Job portals, scholarship sites, government forms, applications — all supported."
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent pointer-events-none" />

            <div className="container relative z-10">
                <div className="mb-16 md:flex items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6 tracking-tight leading-tight"
                        >
                            Everything you need<br />to apply faster.
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-slate-600 max-w-md pb-2"
                    >
                        More than just basic browser autofill. Contextual semantic intelligence natively in your browser.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-indigo-100 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <div className="group-hover:text-white transition-colors">{feature.icon}</div>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
