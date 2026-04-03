"use client";

import { motion } from "framer-motion";

const useCases = [
    {
        title: "Job and internship applications",
        description: "Upload your resume, then re-enter your work history, education, links, and personal details across every application portal. OneEntry keeps those answers ready.",
        gradient: "from-blue-100 to-indigo-100"
    },
    {
        title: "School and scholarship applications",
        description: "Reuse your GPA, school history, demographic info, essays, and recommendation details instead of rewriting them for each new portal.",
        gradient: "from-fuchsia-100 to-purple-100"
    },
    {
        title: "Accelerator applications",
        description: "Keep your team bios, traction, market, and company story ready for each new accelerator form instead of reshaping the basics from scratch.",
        gradient: "from-emerald-100 to-teal-100"
    },
    {
        title: "Grant applications",
        description: "Reuse your organization background, programs, outcomes, budgets, and boilerplate answers even when each funder asks for them differently.",
        gradient: "from-amber-100 to-orange-100"
    }
];

export function Problem() {
    return (
        <section id="problem" className="py-24 bg-slate-50 relative">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Best for repetitive applications.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        It's simple. When every portal asks for the same information in a different format, OneEntry helps you reuse what you&apos;ve already written.
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                    {useCases.map((useCase, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            className="rounded-3xl border border-slate-200/60 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 bg-white flex flex-row items-stretch group h-full hover:-translate-y-1"
                        >
                            <div className={`w-2 shrink-0 bg-gradient-to-b ${useCase.gradient}`} />
                            <div className="p-6 flex-1">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{useCase.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{useCase.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
