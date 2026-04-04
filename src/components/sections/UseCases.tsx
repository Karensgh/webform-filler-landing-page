"use client";

import { motion } from "framer-motion";
import { LearnAndFill } from "@/components/ui/LearnAndFill";

const useCases = [
    {
        title: "Job seekers",
        description: "Applying to 30 jobs this week? Stop copy-pasting your work history into Workday, Lever, and Greenhouse. Let Learn & Fill handle it.",
        gradient: "from-blue-100 to-indigo-100"
    },
    {
        title: "Students",
        description: "Another scholarship portal asking for your address, GPA, and essay — again? Fill it once, reuse it everywhere.",
        gradient: "from-fuchsia-100 to-purple-100"
    },
    {
        title: "Founders",
        description: "Accelerator applications, grant portals, investor forms. Your team bios and traction numbers shouldn\u0027t need to be retyped every time.",
        gradient: "from-emerald-100 to-teal-100"
    }
];

export function UseCases() {
    return (
        <section id="use-cases" className="py-24 bg-white">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 mb-6 tracking-tight">
                        Built for you
                    </h2>
                    <p className="text-lg text-slate-600">
                        If you&apos;ve ever thought &quot;I&apos;ve already typed this somewhere,&quot; <LearnAndFill /> is for you.
                    </p>
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
