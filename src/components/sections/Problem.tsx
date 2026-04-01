"use client";

import { motion } from "framer-motion";

const useCases = [
    {
        title: "Job seekers",
        description: "Applying to 30 jobs this week? Stop copy-pasting your work history into Workday, Lever, and Greenhouse. Let AuFill handle it.",
        gradient: "from-blue-100 to-indigo-100"
    },
    {
        title: "Students",
        description: "Another scholarship portal asking for your address, GPA, and essay — again? Fill it once, reuse it everywhere.",
        gradient: "from-fuchsia-100 to-purple-100"
    },
    {
        title: "Founders",
        description: "Accelerator applications, grant portals, investor forms. Your team bios and traction numbers shouldn't need to be retyped every time.",
        gradient: "from-emerald-100 to-teal-100"
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
                        The internet keeps asking for the same information.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        It&apos;s a straightforward problem but has existed for so many years. You upload, re-type, copy, paste, and repeat.
                    </motion.p>
                </div>

                <div className="max-w-2xl mx-auto flex flex-col gap-6">
                    {useCases.map((useCase, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white flex flex-row items-stretch group"
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
