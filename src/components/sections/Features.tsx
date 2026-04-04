"use client";

import { motion } from "framer-motion";
import { Brain, Users, Zap } from "lucide-react";

const features = [
    {
        icon: <Brain className="w-6 h-6 text-indigo-600" />,
        title: "More than basic autofill",
        description:
            'Chrome autofill handles basics. Learn &amp; Fill helps with work history, school details, essays, and repeated application answers because it knows you.',
    },
    {
        icon: <Users className="w-6 h-6 text-indigo-600" />,
        title: "Multiple profiles for different contexts",
        description:
            "Create separate profiles for job searches, school applications, grants, or personal admin so the right information is always ready when you need it.",
    },
    {
        icon: <Zap className="w-6 h-6 text-indigo-600" />,
        title: "Learns as you go",
        description:
            "Two simple modes: Learn builds your profile as you fill forms the normal way. Fill instantly completes new forms using everything it knows about you. The more you use it, the more accurate and complete it becomes.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent pointer-events-none" />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 mb-4">
                        More than autofill.
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Chrome fills in your name. Learn &amp; Fill learns and fills in your story.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}