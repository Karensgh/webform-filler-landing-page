"use client";

import { motion } from "framer-motion";

const useCases = [
    {
        title: "Job seekers",
        description: "Applying to 100+ roles a week? Stop re-entering your work history into Workday, Lever, and Greenhouse every time.",
        gradient: "from-blue-100 to-indigo-100"
    },
    {
        title: "Students & scholarship applicants",
        description: "GPA, extracurriculars, essays, recommendation details — reuse them across every portal instead of starting from scratch.",
        gradient: "from-fuchsia-100 to-purple-100"
    },
    {
        title: "Founders & grant applicants",
        description: "Keep your team bios, traction numbers, and company story ready for every accelerator and grant form.",
        gradient: "from-emerald-100 to-teal-100"
    },
    {
        title: "Admin & operations staff",
        description: "Onboarding clients, filing paperwork, submitting vendor forms — fill the same templates for different people without retyping from scratch.",
        gradient: "from-amber-100 to-orange-100"
    },
    {
        title: "Anyone doing life admin",
        description: "Insurance quotes, rental applications, loan pre-approvals, government forms — your personal details shouldn't need to be retyped every time.",
        gradient: "from-rose-100 to-pink-100"
    },
    {
        title: "Your personal information, always up to date",
        description: "New job title? Moved to a new city? Updated your certifications? Your info is always changing — Learn & Fill grows with you so you never fill out stale details again.",
        gradient: "from-cyan-100 to-sky-100"
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
                        Built for anyone who fills forms repeatedly.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        Whether it's for yourself or for others — if you've typed the same answers twice, Learn & Fill is for you.
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
