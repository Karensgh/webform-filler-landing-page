"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSckg45ajp10TbxpAjNjbjDu57LmXwy8l7y6_QhezgyTNaXztg/formResponse";
const EMAIL_ENTRY = "entry.1319085089";
const USE_CASE_ENTRY = "entry.252676032";

export function CTA() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const useCase = formData.get("useCase") as string;

        // Submit via hidden iframe to avoid CORS issues
        const iframe = document.createElement("iframe");
        iframe.name = "hidden_iframe";
        iframe.style.display = "none";
        document.body.appendChild(iframe);

        const form = document.createElement("form");
        form.method = "POST";
        form.action = GOOGLE_FORM_URL;
        form.target = "hidden_iframe";

        const emailInput = document.createElement("input");
        emailInput.name = EMAIL_ENTRY;
        emailInput.value = email;
        form.appendChild(emailInput);

        if (useCase) {
            const useCaseInput = document.createElement("input");
            useCaseInput.name = USE_CASE_ENTRY;
            useCaseInput.value = useCase;
            form.appendChild(useCaseInput);
        }

        document.body.appendChild(form);
        form.submit();

        // Clean up and show success after a short delay
        setTimeout(() => {
            document.body.removeChild(form);
            document.body.removeChild(iframe);
            setSubmitting(false);
            setSubmitted(true);
        }, 1000);
    }

    return (
        <section id="waitlist" className="py-24 bg-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-[#0B1121] rounded-[3rem] overflow-hidden p-12 md:p-20 text-center border border-slate-800/60 shadow-2xl shadow-indigo-900/20"
                >
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 tracking-tight">
                            Your life story, ready when you are.
                        </h2>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center gap-3"
                            >
                                <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                                <p className="text-xl font-semibold text-white">
                                    You&apos;re on the list!
                                </p>
                                <p className="text-slate-400">
                                    We&apos;ll email you shortly.
                                </p>
                            </motion.div>
                        ) : (
                            <>
                                <form
                                    onSubmit={handleSubmit}
                                    className="max-w-md mx-auto mb-6"
                                >
                                    <div className="flex flex-col sm:flex-row gap-3 mb-3">
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email address"
                                            required
                                            className="h-14 bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus-visible:ring-indigo-500 focus-visible:ring-offset-[#0B1121] rounded-full px-6 flex-1 text-base transition-colors hover:bg-white/10"
                                        />
                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={submitting}
                                            className="h-14 rounded-full px-8 bg-indigo-600 hover:bg-indigo-500 text-white font-medium group disabled:opacity-50 transition-all shadow-lg hover:shadow-xl hover:shadow-indigo-500/25"
                                        >
                                            {submitting ? "Sending..." : "Get early access"}
                                            {!submitting && (
                                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            )}
                                        </Button>
                                    </div>
                                    <select
                                        name="useCase"
                                        className="w-full h-14 rounded-full px-6 bg-white/5 border border-white/10 text-slate-300 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#0B1121] transition-colors hover:bg-white/10"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>What brings you here? (optional)</option>
                                        <option value="Job applications">Job applications</option>
                                        <option value="University / Scholarships">University / Scholarships</option>
                                        <option value="Accelerator / Grant applications">Accelerator / Grant applications</option>
                                        <option value="Vendor onboarding">Vendor onboarding</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </form>
                                <p className="text-sm text-slate-400">
                                    We&apos;re looking for our first 100 beta users. Early access is free.
                                </p>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}