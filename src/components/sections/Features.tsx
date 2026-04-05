"use client";

import { motion } from "framer-motion";
import { BookOpen, Wand2 } from "lucide-react";
import { LearnAndFill } from "@/components/ui/LearnAndFill";
import { useState, useEffect, useCallback } from "react";

// Card 1: strikethrough + highlight — loops
function AutofillCard() {
    const [cycle, setCycle] = useState(0);

    useEffect(() => {
        const t = setTimeout(() => setCycle(c => c + 1), 4000);
        return () => clearTimeout(t);
    }, [cycle]);

    return (
        <div className="space-y-4 relative z-10">
            <div className="relative inline-block mt-1">
                <p className="text-slate-400 text-sm font-medium">Chrome autofill handles basics.</p>
                <motion.div
                    key={`strike-${cycle}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="absolute top-1/2 left-0 h-[1.5px] bg-slate-400"
                />
            </div>
            <div className="pt-2">
                <div className="text-slate-700 font-medium leading-relaxed">
                    <LearnAndFill /> helps with work history, insurance quotes, rental applications, and repeated application answers
                    <span className="relative inline-block font-bold text-indigo-700 px-1 ml-1 overflow-hidden rounded">
                        <motion.span
                            key={`highlight-${cycle}`}
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                            className="absolute inset-0 bg-indigo-100 z-[-1]"
                        />
                        because it knows you.
                    </span>
                </div>
            </div>
        </div>
    );
}

// Card 3: scanner beam + typing — loops
function LearnsCard() {
    const fullText = "instantly completes new forms using everything it knows about you.";
    const [typed, setTyped] = useState("");
    const [cycle, setCycle] = useState(0);

    const runCycle = useCallback(() => {
        setTyped("");
        // Start typing after scanner finishes (~2.3s)
        let i = 0;
        const interval = setInterval(() => {
            i += 2;
            if (i >= fullText.length) {
                setTyped(fullText);
                clearInterval(interval);
                // Restart after pause
                setTimeout(() => setCycle(c => c + 1), 2500);
            } else {
                setTyped(fullText.slice(0, i));
            }
        }, 20);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const t = setTimeout(runCycle, 2300);
        return () => clearTimeout(t);
    }, [cycle, runCycle]);

    return (
        <div className="space-y-3 relative z-10">
            <p className="text-slate-700 font-medium">Two simple modes:</p>

            {/* Learn box — scanner loops */}
            <motion.div
                key={`learn-box-${cycle}`}
                initial={{ backgroundColor: "rgba(238, 242, 255, 0)", borderColor: "rgba(224, 231, 255, 0)" }}
                animate={{ backgroundColor: "rgba(238, 242, 255, 1)", borderColor: "rgba(224, 231, 255, 1)" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="rounded-xl p-3 border relative overflow-hidden"
            >
                <motion.div
                    key={`beam-${cycle}`}
                    initial={{ top: "-20%", opacity: 0 }}
                    animate={{ top: "120%", opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "linear" }}
                    className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-indigo-400/20 to-indigo-400/60 border-b-2 border-indigo-400 z-0 pointer-events-none"
                />
                <div className="relative z-10 text-slate-600 text-sm leading-relaxed">
                    <div className="font-bold text-indigo-600 flex items-center gap-1.5 mb-1">
                        <motion.span
                            key={`book-${cycle}`}
                            animate={{ rotate: [0, -15, 15, -15, 0] }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            className="inline-flex"
                        >
                            <BookOpen className="w-3.5 h-3.5" />
                        </motion.span>
                        Learn
                    </div>
                    builds your profile as you fill forms the normal way.
                </div>
            </motion.div>

            {/* Fill box — typing loops */}
            <motion.div
                key={`fill-box-${cycle}`}
                initial={{ backgroundColor: "rgba(245, 243, 255, 0)", borderColor: "rgba(237, 233, 254, 0)" }}
                animate={{ backgroundColor: "rgba(245, 243, 255, 1)", borderColor: "rgba(237, 233, 254, 1)" }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="rounded-xl p-3 border"
            >
                <div className="text-slate-600 text-sm leading-relaxed">
                    <div className="font-bold flex items-center gap-1.5 mb-1">
                        <motion.span
                            key={`wand-${cycle}`}
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 0.4, delay: 2.4 }}
                            className="inline-flex text-violet-600"
                        >
                            <Wand2 className="w-3.5 h-3.5" />
                        </motion.span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Fill</span>
                    </div>
                    <div className="min-h-[40px]">
                        <span>{typed}</span>
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-[2px] h-3.5 bg-violet-500 align-middle ml-[2px]"
                        />
                    </div>
                </div>
            </motion.div>

            <p className="text-slate-600 font-medium text-xs mt-2 uppercase tracking-wider">The more you use it, the more accurate and complete it becomes.</p>
        </div>
    );
}

const features = [
    {
        title: "More than basic autofill",
        content: <AutofillCard />,
    },
    {
        title: "Profiles for different contexts",
        content: (
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
        content: <LearnsCard />,
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-gradient-to-b from-white to-indigo-100/60 relative overflow-hidden">
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

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-[70rem] mx-auto px-4">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-[2rem] p-6 lg:p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200/60 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                        >
                            <div className="absolute top-4 right-6 text-[80px] font-black font-display text-slate-50 group-hover:text-indigo-50/50 transition-colors duration-500 pointer-events-none select-none z-0">
                                {String(idx + 1).padStart(2, '0')}
                            </div>
                            <div className="relative z-10 flex-1">
                                <h3 className="text-lg lg:text-[1.35rem] font-bold text-slate-900 mb-5 leading-tight">{feature.title}</h3>
                                {feature.content}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}