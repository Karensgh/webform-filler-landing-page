"use client";

import { motion } from "framer-motion";
import { BookOpen, Wand2 } from "lucide-react";
import { LearnAndFill } from "@/components/ui/LearnAndFill";

const features = [
    {
        title: "More than basic autofill",
        description: null,
        richDescription: (
            <div className="space-y-4 relative z-10">
                <p className="text-slate-400 line-through text-sm font-medium">Chrome autofill handles basics.</p>
                <div className="pt-2">
                    <p className="text-slate-700 font-medium leading-relaxed">
                        <LearnAndFill /> helps with work history, insurance quotes, rental applications, and repeated application answers <span className="font-bold text-indigo-600 bg-indigo-50 px-1 rounded">because it knows you.</span>
                    </p>
                </div>
            </div>
        ),
    },
    {
        title: "Profiles for different contexts",
        description: null,
        richDescription: (
            <div className="space-y-4 relative z-10">
                <p className="text-slate-700 leading-relaxed font-medium">
                    Create separate profiles for:
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex items-center gap-2 text-xs font-semibold text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Job searches</div>
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex items-center gap-2 text-xs font-semibold text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-violet-500" /> School apps</div>
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex items-center gap-2 text-xs font-semibold text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Grants</div>
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex items-center gap-2 text-xs font-semibold text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Personal admin</div>
                </div>
                <p className="text-slate-600 text-sm italic">
                    ...so the right information is always ready when you need it.
                </p>
            </div>
        ),
    },
    {
        title: "Learns as you go",
        description: null,
        richDescription: (
            <div className="space-y-3 relative z-10">
                <p className="text-slate-700 font-medium">Two simple modes:</p>
                <div className="bg-indigo-50/50 rounded-xl p-3 border border-indigo-100/50">
                    <p className="text-slate-600 text-sm leading-relaxed"><span className="font-bold text-indigo-600 flex items-center gap-1.5 mb-1"><BookOpen className="w-3.5 h-3.5" /> Learn</span> builds your profile as you fill forms the normal way.</p>
                </div>
                <div className="bg-violet-50/50 rounded-xl p-3 border border-violet-100/50">
                    <p className="text-slate-600 text-sm leading-relaxed"><span className="font-bold text-violet-600 flex items-center gap-1.5 mb-1"><Wand2 className="w-3.5 h-3.5" /> Fill</span> instantly completes new forms using everything it knows about you.</p>
                </div>
                <p className="text-slate-600 font-medium text-xs mt-2 uppercase tracking-wider">The more you use it, the more accurate and complete it becomes.</p>
            </div>
        ),
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
                        More than autofill
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Chrome fills in your name. <LearnAndFill /> learns and fills in your story.
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
                            className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200/60 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Watermark Number */}
                            <div className="absolute top-4 right-6 text-[80px] font-black font-display text-slate-50 group-hover:text-indigo-50/50 transition-colors duration-500 pointer-events-none select-none z-0">
                                {String(idx + 1).padStart(2, '0')}
                            </div>

                            <div className="relative z-10 flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">{feature.title}</h3>
                                {feature.richDescription || <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}