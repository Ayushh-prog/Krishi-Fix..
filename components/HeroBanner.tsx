"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sprout,
  Scan,
  TrendingUp,
  CloudSun,
  Bot,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Sparkles,
  Users,
} from "lucide-react";

interface HeroBannerProps {
  onSelectFeature: (featureId: string) => void;
}

export default function HeroBanner({ onSelectFeature }: HeroBannerProps) {
  const { t } = useLanguage();

  const journeySteps = [
    { num: 1, title: "1. Crop Selection", sub: "Recommend best crop", tab: "crop_rec", color: "from-emerald-500 to-green-600" },
    { num: 2, title: "2. Yield Predict", sub: "Estimate harvest size", tab: "yield", color: "from-blue-500 to-cyan-600" },
    { num: 3, title: "3. Leaf Scan", sub: "Catch disease early", tab: "disease", color: "from-amber-500 to-orange-600" },
    { num: 4, title: "4. Weather Alert", sub: "Plan daily operations", tab: "weather", color: "from-indigo-500 to-blue-600" },
    { num: 5, title: "5. AI Assistant", sub: "Answer farm queries", tab: "assistant", color: "from-purple-500 to-pink-600" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-emerald-700/40 my-4">
      {/* Background radial glows & grid texture */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top institution & project tag */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-emerald-800/60 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/50 text-emerald-200 text-xs font-mono font-medium">
          <Sprout className="w-3.5 h-3.5 text-emerald-400" />
          <span>Babu Banarasi Das Institute of Technology Management (Code: 054)</span>
        </div>
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-300">
          <Users className="w-3.5 h-3.5" />
          <span>Team B8 • Session 2026 – 2027</span>
        </div>
      </div>

      {/* Main hero center */}
      <div className="py-8 text-center max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>{t("hero_pill")}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 leading-tight">
          AI Smart Farming : <span className="text-emerald-400">AgriMind</span>
        </h1>

        <p className="text-lg sm:text-xl text-emerald-100/90 font-medium mb-3">
          {t("app_subtitle")}
        </p>

        {/* The golden quote from Slide 10 */}
        <div className="inline-block my-2 px-5 py-2 rounded-2xl bg-emerald-800/40 border border-emerald-600/30 text-amber-300 text-sm sm:text-base font-serif italic shadow-inner">
          &ldquo;{t("app_quote")}&rdquo;
        </div>

        <p className="text-sm sm:text-base text-emerald-200/80 max-w-2xl mx-auto mt-3 mb-8">
          {t("hero_desc")}
        </p>

        {/* Quick action triggers */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onSelectFeature("disease")}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/30 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer active:scale-95"
          >
            <Scan className="w-5 h-5 text-amber-300" />
            <span>{t("action_scan")}</span>
          </button>

          <button
            onClick={() => onSelectFeature("crop_rec")}
            className="px-6 py-3.5 rounded-2xl bg-emerald-800/80 hover:bg-emerald-700/80 text-white font-bold text-sm sm:text-base border border-emerald-600/60 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer active:scale-95"
          >
            <Sprout className="w-5 h-5 text-emerald-300" />
            <span>{t("action_recommend")}</span>
          </button>

          <button
            onClick={() => onSelectFeature("integrated")}
            className="px-6 py-3.5 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold text-sm sm:text-base border border-amber-400/40 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer active:scale-95"
          >
            <Cpu className="w-5 h-5 text-amber-400" />
            <span>{t("action_demo")}</span>
          </button>
        </div>
      </div>

      {/* Slide 7: Integrated System: All 5 Features Banner */}
      <div className="mt-6 pt-6 border-t border-emerald-800/80 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{t("eco_title")}</span>
          </div>
          <p className="text-xs text-emerald-300/80 font-mono">
            {t("eco_banner")}
          </p>
        </div>

        {/* 5-Step Connected Flow (From Page 7) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {journeySteps.map((step) => (
            <button
              key={step.num}
              onClick={() => onSelectFeature(step.tab)}
              className="group p-3.5 rounded-2xl bg-emerald-950/70 hover:bg-emerald-800/70 border border-emerald-700/40 hover:border-emerald-400/60 transition-all text-left flex flex-col justify-between cursor-pointer hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-700 text-white text-xs font-bold flex items-center justify-center group-hover:scale-110 transition-transform">
                  {step.num}
                </span>
                <ArrowRight className="w-4 h-4 text-emerald-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <h4 className="font-bold text-white text-xs sm:text-sm group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h4>
                <p className="text-[11px] text-emerald-300/80 leading-tight mt-0.5">
                  {step.sub}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
