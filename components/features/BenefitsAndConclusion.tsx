"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  BellRing,
  Target,
  Layers,
  ArrowRight,
  CheckCircle2,
  Users,
  Lightbulb,
  Award,
} from "lucide-react";

export default function BenefitsAndConclusion() {
  const { t } = useLanguage();

  const benefits = [
    {
      num: "1",
      title: t("benefit_1_title"),
      desc: t("benefit_1_desc"),
      icon: Sparkles,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    {
      num: "2",
      title: t("benefit_2_title"),
      desc: t("benefit_2_desc"),
      icon: BellRing,
      color: "bg-blue-50 text-blue-800 border-blue-200",
    },
    {
      num: "3",
      title: t("benefit_3_title"),
      desc: t("benefit_3_desc"),
      icon: Target,
      color: "bg-amber-50 text-amber-800 border-amber-200",
    },
    {
      num: "4",
      title: t("benefit_4_title"),
      desc: t("benefit_4_desc"),
      icon: Layers,
      color: "bg-purple-50 text-purple-800 border-purple-200",
    },
  ];

  const teamMembers = [
    "Karunesh Kumar Sharma",
    "Ilma Islam",
    "Kishan Srivastava",
    "Kunal Singh",
    "Khushhal Tahalani",
  ];

  return (
    <div className="space-y-8 my-8">
      {/* Slide 9: Key Benefits for Farmers */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
        <div className="max-w-2xl mb-8">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
            Slide 9
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
            {t("benefits_title")}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Why AgriMind is designed to be accessible, intuitive, and valuable for every farmer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.num}
                className={`p-6 rounded-2xl border transition-all hover:shadow-md ${b.color}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-base">{b.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Slide 9 Easy Explanation */}
        <div className="mt-6 p-4 rounded-2xl bg-emerald-950 text-emerald-100 border border-emerald-800 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm leading-relaxed">
            Easy Explanation: AgriMind turns complicated scientific data into straightforward guidance that saves time, cuts farm expenditures, and increases overall crop production.
          </p>
        </div>
      </div>

      {/* Slide 10: Conclusion: Empowering Farmers */}
      <div className="bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800/80 shadow-2xl relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-800/80 text-emerald-300 border border-emerald-600/40">
            Slide 10: Conclusion
          </span>

          <h3 className="text-2xl sm:text-4xl font-black text-white">
            Conclusion: Empowering Farmers
          </h3>

          <div className="text-lg sm:text-xl font-serif italic text-amber-300">
            &ldquo;AI should support the farmer, not replace the farmer.&rdquo;
          </div>

          <p className="text-xs sm:text-sm text-emerald-200/80 uppercase tracking-widest font-mono">
            The AgriMind Decision Support Loop
          </p>

          {/* Decision Support Loop Flow (Slide 10) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="p-4 rounded-2xl bg-emerald-900/60 border border-emerald-700/60 text-center">
              <span className="text-sm font-black text-white">{t("loop_step1")}</span>
              <p className="text-[11px] text-emerald-300 mt-0.5">Soil, Weather & Symptoms</p>
            </div>
            <div className="p-4 rounded-2xl bg-teal-900/60 border border-teal-700/60 text-center">
              <span className="text-sm font-black text-emerald-300">{t("loop_step2")}</span>
              <p className="text-[11px] text-teal-200 mt-0.5">Vision AI & Machine Learning</p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-900/50 border border-amber-600/60 text-center">
              <span className="text-sm font-black text-amber-300">{t("loop_step3")}</span>
              <p className="text-[11px] text-amber-200 mt-0.5">Final Action with Local Wisdom</p>
            </div>
          </div>

          <div className="pt-2 text-xs sm:text-sm text-emerald-300 font-bold tracking-wide">
            {t("loop_outcome")}
          </div>

          {/* Academic Attribution Footer from Slide 1 & Slide 10 */}
          <div className="mt-8 pt-6 border-t border-emerald-800/60 text-center space-y-2">
            <div className="text-xs font-mono text-emerald-400">
              Designed by Team B8 • Session 2026 – 2027
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-white font-semibold">
              {teamMembers.map((name, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-emerald-900/80 border border-emerald-700/40"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-emerald-400/80 pt-1">
              Babu Banarasi Das Institute of Technology Management (College Code: 054)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
