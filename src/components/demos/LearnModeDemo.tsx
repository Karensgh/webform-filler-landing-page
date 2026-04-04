"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Wand2, CheckCircle2, Plus } from "lucide-react";

const formFields = [
    { label: "Full Name", value: "Alex Chen" },
    { label: "Email Address", value: "alex.chen@gmail.com" },
    { label: "Phone Number", value: "(415) 555-0182" },
    { label: "LinkedIn URL", value: "linkedin.com/in/alexchen" },
    { label: "Years of Experience", value: "5" },
    { label: "Current Job Title", value: "Senior Software Engineer" },
    { label: "Why are you interested in this role?", value: "I want to lead a product-focused engineering team at a company solving real user pain points. Your mission to simplify workflows resonates with my experience building developer tools.", multiline: true },
    { label: "Describe a technical challenge you solved", value: "I redesigned our real-time data pipeline to handle 10x throughput by migrating from REST polling to WebSocket streaming, cutting latency from 8s to under 200ms.", multiline: true },
];

const profiles = [
    { name: "Software Engineer" },
    { name: "AI Engineer" },
    { name: "Data Scientist" },
    { name: "ML Engineer" },
];

export function LearnModeDemo() {
    const [phase, setPhase] = useState<
        "typing" | "hover-icon" | "show-menu" | "click-learn" | "show-profiles" | "scanning" | "saved" | "idle"
    >("idle");
    const [typedFields, setTypedFields] = useState<string[]>(formFields.map(() => ""));
    const [currentField, setCurrentField] = useState(0);
    const [scanningField, setScanningField] = useState(-1);
    const [selectedProfile, setSelectedProfile] = useState(-1);

    const resetAndStart = useCallback(() => {
        setTypedFields(formFields.map(() => ""));
        setCurrentField(0);
        setScanningField(-1);
        setSelectedProfile(-1);
        setPhase("typing");
    }, []);

    useEffect(() => {
        const timeout = setTimeout(resetAndStart, 500);
        return () => clearTimeout(timeout);
    }, [resetAndStart]);

    // Typing effect — fast
    useEffect(() => {
        if (phase !== "typing") return;
        const field = formFields[currentField];
        if (!field) return;
        const typed = typedFields[currentField];
        if (typed.length < field.value.length) {
            const timeout = setTimeout(() => {
                setTypedFields((prev) => {
                    const next = [...prev];
                    // Type 2-3 chars at a time for speed
                    const step = field.multiline ? 3 : 2;
                    next[currentField] = field.value.slice(0, typed.length + step);
                    return next;
                });
            }, 15);
            return () => clearTimeout(timeout);
        } else if (currentField < formFields.length - 1) {
            const timeout = setTimeout(() => setCurrentField((c) => c + 1), 150);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => setPhase("hover-icon"), 500);
            return () => clearTimeout(timeout);
        }
    }, [phase, currentField, typedFields]);

    // Phase transitions
    useEffect(() => {
        if (phase !== "hover-icon") return;
        const timeout = setTimeout(() => setPhase("show-menu"), 600);
        return () => clearTimeout(timeout);
    }, [phase]);

    useEffect(() => {
        if (phase !== "show-menu") return;
        const timeout = setTimeout(() => setPhase("click-learn"), 600);
        return () => clearTimeout(timeout);
    }, [phase]);

    useEffect(() => {
        if (phase !== "click-learn") return;
        const timeout = setTimeout(() => setPhase("show-profiles"), 500);
        return () => clearTimeout(timeout);
    }, [phase]);

    useEffect(() => {
        if (phase !== "show-profiles") return;
        const timeout = setTimeout(() => {
            setSelectedProfile(0);
            setTimeout(() => setPhase("scanning"), 500);
        }, 700);
        return () => clearTimeout(timeout);
    }, [phase]);

    // Scanning effect
    useEffect(() => {
        if (phase !== "scanning") return;
        if (scanningField < formFields.length - 1) {
            const timeout = setTimeout(() => setScanningField((s) => s + 1), 300);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => setPhase("saved"), 600);
            return () => clearTimeout(timeout);
        }
    }, [phase, scanningField]);

    // Restart loop
    useEffect(() => {
        if (phase !== "saved") return;
        const timeout = setTimeout(resetAndStart, 3000);
        return () => clearTimeout(timeout);
    }, [phase, resetAndStart]);

    const showMenu = ["show-menu", "click-learn", "show-profiles", "scanning", "saved"].includes(phase);
    const showProfiles = ["show-profiles", "scanning", "saved"].includes(phase);

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden relative">
                {/* Browser header */}
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 border border-slate-200 ml-2">
                        jobs.example.com/apply
                    </div>
                </div>

                {/* Floating LF extension icon — top right */}
                <div className="absolute top-14 right-4 z-20">
                    {/* The floating icon */}
                    <motion.div
                        animate={
                            phase === "hover-icon"
                                ? { scale: 1.15 }
                                : phase === "saved"
                                    ? { scale: [1, 1.1, 1] }
                                    : { scale: 1 }
                        }
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg cursor-pointer transition-colors duration-300 ${phase === "saved"
                                ? "bg-emerald-500 shadow-emerald-500/30"
                                : "bg-gradient-to-br from-indigo-600 to-violet-600 shadow-indigo-500/30"
                            }`}
                    >
                        {phase === "saved" ? (
                            <CheckCircle2 className="w-4 h-4" />
                        ) : (
                            "LF"
                        )}
                    </motion.div>

                    {/* Dropdown menu */}
                    <AnimatePresence>
                        {showMenu && (
                            <motion.div
                                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-12 right-0 bg-white rounded-xl border border-slate-200 shadow-xl p-2 w-52"
                            >
                                <button
                                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${phase === "click-learn" || showProfiles
                                            ? "bg-indigo-50 text-indigo-700"
                                            : "text-slate-700 hover:bg-slate-50"
                                        }`}
                                >
                                    <BookOpen className="w-4 h-4" />
                                    Learn
                                </button>
                                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                                    <Wand2 className="w-4 h-4" />
                                    Fill
                                </button>

                                <AnimatePresence>
                                    {showProfiles && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="border-t border-slate-100 mt-1 pt-2">
                                                <p className="text-[10px] font-medium text-slate-400 px-3 mb-1 uppercase tracking-wider">Save to profile</p>
                                                {profiles.map((profile, i) => (
                                                    <div
                                                        key={profile.name}
                                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all ${selectedProfile === i
                                                                ? "bg-indigo-600 text-white font-medium"
                                                                : "text-slate-600"
                                                            }`}
                                                    >
                                                        <div className={`w-2 h-2 rounded-full ${selectedProfile === i ? "bg-white" : "bg-indigo-400"}`} />
                                                        {profile.name}
                                                    </div>
                                                ))}
                                                <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-400">
                                                    <Plus className="w-3 h-3" />
                                                    Create new profile
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Form */}
                <div className="p-6 space-y-3 max-h-[420px] overflow-y-auto">
                    <p className="text-sm font-semibold text-slate-800 mb-3">Software Engineer — Application</p>

                    {formFields.map((field, i) => (
                        <div key={field.label} className="relative">
                            <label className="text-xs font-medium text-slate-500 mb-1 block">
                                {field.label}
                            </label>
                            <div
                                className={`relative rounded-lg border px-3 py-2 text-sm transition-all duration-300 ${currentField === i && phase === "typing"
                                        ? "border-indigo-400 ring-2 ring-indigo-100"
                                        : phase === "scanning" && scanningField === i
                                            ? "border-indigo-400 ring-2 ring-indigo-100 bg-indigo-50/30"
                                            : "border-slate-200"
                                    } ${field.multiline ? "min-h-[60px]" : "h-9"}`}
                            >
                                <span className="text-slate-800 text-xs">{typedFields[i]}</span>
                                {currentField === i && phase === "typing" && typedFields[i].length < field.value.length && (
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.5 }}
                                        className="inline-block w-0.5 h-3.5 bg-indigo-500 ml-0.5 align-middle"
                                    />
                                )}
                            </div>

                            <AnimatePresence>
                                {((phase === "scanning" && scanningField > i) || phase === "saved") && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="absolute top-5 right-2 mt-1.5"
                                    >
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {phase === "saved" && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 flex items-center justify-center gap-2 text-sm text-emerald-600 font-medium"
                    >
                        <CheckCircle2 className="w-4 h-4" />
                        {formFields.length}{" "}answers saved to &quot;Software Engineer&quot; profile
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}