"use client";

import { motion } from "framer-motion";
import { LearnAndFill } from "@/components/ui/LearnAndFill";
import { Briefcase, GraduationCap, Rocket, Settings2, Home, RefreshCw } from "lucide-react";

const useCases = [
  {
    title: "Job seekers",
    description: null,
    richDescription: (
      <div className="text-sm text-slate-600 leading-relaxed">
        Stop re-entering your <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">work history</span>, <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">education</span>, and <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">repeated answers</span> into <span className="font-bold text-blue-700">Workday</span>, <span className="font-bold text-blue-700">Lever</span>, and <span className="font-bold text-blue-700">Greenhouse</span> every time you apply.
      </div>
    ),
    gradient: "from-blue-100 to-indigo-100",
    icon: <Briefcase className="w-6 h-6 text-indigo-600" />
  },
  {
    title: "Students & scholarship applicants",
    description: null,
    richDescription: (
      <div className="text-sm text-slate-600 leading-relaxed">
        Reuse your <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">GPA</span>, <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">extracurriculars</span>, <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">essays</span>, and <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">recommendation details</span> across every application instead of starting from scratch.
      </div>
    ),
    gradient: "from-fuchsia-100 to-purple-100",
    icon: <GraduationCap className="w-6 h-6 text-fuchsia-600" />
  },
  {
    title: "Founders & grant applicants",
    description: null,
    richDescription: (
      <div className="text-sm text-slate-600 leading-relaxed">
        Keep your <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">team bios</span>, <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">traction metrics</span>, and <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">company story</span> ready for every <span className="font-bold text-emerald-700">accelerator</span>, <span className="font-bold text-emerald-700">grant</span>, and <span className="font-bold text-emerald-700">funding application</span>.
      </div>
    ),
    gradient: "from-emerald-100 to-teal-100",
    icon: <Rocket className="w-6 h-6 text-teal-600" />
  },
  {
    title: "Admin & operations teams",
    description: null,
    richDescription: (
      <div className="text-sm text-slate-600 leading-relaxed">
        <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">Onboard clients</span>, <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">submit vendor forms</span>, and <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">handle repetitive paperwork</span> without retyping the same information over and over.
      </div>
    ),
    gradient: "from-amber-100 to-orange-100",
    icon: <Settings2 className="w-6 h-6 text-amber-600" />
  },
  {
    title: "Personal applications",
    description: null,
    richDescription: (
      <div className="text-sm text-slate-600 leading-relaxed">
        From <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">insurance quotes</span> to <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">rental applications</span> and <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60">loan forms</span>, reuse your information instead of filling in the same details every time.
      </div>
    ),
    gradient: "from-rose-100 to-pink-100",
    icon: <Home className="w-6 h-6 text-rose-600" />
  },
  {
    title: "Always up to date",
    description: null,
    richDescription: (
      <div className="text-sm text-slate-600 leading-relaxed">
        <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60 mb-2">Changed jobs</span> <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60 mb-2">moved cities</span> or <span className="font-medium text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-md leading-6 inline-block mx-0.5 border border-slate-200/60 mb-2">updated certifications</span>?
        <br />
        <span className="font-semibold text-slate-800"><LearnAndFill /></span> keeps your profile current so future forms use your latest information.
      </div>
    ),
    gradient: "from-cyan-100 to-sky-100",
    icon: <RefreshCw className="w-6 h-6 text-cyan-600" />
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

        <div className="max-w-[70rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="rounded-[2rem] border border-slate-200/60 bg-white p-6 md:p-8 flex flex-col group hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 h-full relative overflow-hidden"
            >
              {/* subtle background glow */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${useCase.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-duration-500 rounded-full -mr-16 -mt-16 pointer-events-none`} />

              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${useCase.gradient} mb-6 shadow-sm`}>
                {useCase.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{useCase.title}</h4>
              <div className="relative z-10 flex-1">
                {useCase.richDescription || <p className="text-sm text-slate-600 leading-relaxed">{useCase.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
