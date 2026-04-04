"use client";

import { motion } from "framer-motion";
import { LearnAndFill } from "@/components/ui/LearnAndFill";

const useCases = [
  {
    title: "Job seekers",
    description:
      "Stop re-entering your work history, education, and repeated answers into Workday, Lever, and Greenhouse every time you apply.",
    gradient: "from-blue-100 to-indigo-100"
  },
  {
    title: "Students & scholarship applicants",
    description:
      "Reuse your GPA, extracurriculars, essays, and recommendation details across every application instead of starting from scratch.",
    gradient: "from-fuchsia-100 to-purple-100"
  },
  {
    title: "Founders & grant applicants",
    description:
      "Keep your team bios, traction metrics, and company story ready for every accelerator, grant, and funding application.",
    gradient: "from-emerald-100 to-teal-100"
  },
  {
    title: "Admin & operations teams",
    description:
      "Onboard clients, submit vendor forms, and handle repetitive paperwork without retyping the same information over and over.",
    gradient: "from-amber-100 to-orange-100"
  },
  {
    title: "Personal applications",
    description:
      "From insurance quotes to rental applications and loan forms, reuse your information instead of filling in the same details every time.",
    gradient: "from-rose-100 to-pink-100"
  },
  {
    title: "Always up to date",
    description:
      "Changed jobs, moved cities, or updated your certifications? Learn & Fill keeps your profile current so future forms use your latest information.",
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
                        Whether it&apos;s for yourself or for others — if you&apos;ve typed the same answers twice, <LearnAndFill /> is for you.
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
