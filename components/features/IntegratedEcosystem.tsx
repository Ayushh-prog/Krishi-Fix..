"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { REAL_EXAMPLE_PRESET } from "@/data/agriData";
import {
  Layers,
  Sprout,
  TrendingUp,
  CloudSun,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Award,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function IntegratedEcosystemFeature() {
  const { t } = useLanguage();
  const [activeSoil, setActiveSoil] = useState("Loamy Soil");
  const [activeWater, setActiveWater] = useState("Medium Irrigation");
  const [activeSeason, setActiveSeason] = useState("Kharif Season");

  const runSimulation = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
            Slide 7 & 8
          </span>
          <span className="text-xs font-mono text-gray-500">
            Connected Ecosystem Simulation
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 flex items-center gap-3">
          <Award className="w-8 h-8 text-emerald-600" />
          <span>{t("real_example_title")}</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-1 font-medium">
          {t("real_example_sub")}
        </p>

        {/* Slide 7: Integrated Journey Bar */}
        <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-green-950 text-white flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Integrated Farmer Journey:</span>
          </div>
          <div className="text-xs sm:text-sm font-mono text-emerald-200 tracking-wide text-center">
            Raw Field Data → AI Insights → Confident Decisions
          </div>
          <button
            onClick={runSimulation}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-sm cursor-pointer"
          >
            Re-run Pipeline
          </button>
        </div>
      </div>

      {/* Slide 8: Real Example Two-Column Interactive Layout */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Column: Farmer's Inputs (Slide 8) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
            <Layers className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-gray-900 text-lg">Farmer&apos;s Inputs (Slide 8)</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-2xl bg-gray-50 border border-gray-200">
              <span className="font-bold text-gray-500 block uppercase text-[10px]">🌱 Soil Type</span>
              <span className="font-bold text-gray-900 text-sm">{REAL_EXAMPLE_PRESET.inputs.soilType} ({REAL_EXAMPLE_PRESET.inputs.soilHindi})</span>
            </div>

            <div className="p-3 rounded-2xl bg-gray-50 border border-gray-200">
              <span className="font-bold text-gray-500 block uppercase text-[10px]">💧 Watering</span>
              <span className="font-bold text-gray-900 text-sm">{REAL_EXAMPLE_PRESET.inputs.watering}</span>
            </div>

            <div className="p-3 rounded-2xl bg-gray-50 border border-gray-200">
              <span className="font-bold text-gray-500 block uppercase text-[10px]">📅 Season</span>
              <span className="font-bold text-gray-900 text-sm">{REAL_EXAMPLE_PRESET.inputs.season}</span>
            </div>

            <div className="p-3 rounded-2xl bg-gray-50 border border-gray-200">
              <span className="font-bold text-gray-500 block uppercase text-[10px]">📸 Leaf Status</span>
              <span className="font-bold text-gray-900 text-sm">{REAL_EXAMPLE_PRESET.inputs.leafStatus}</span>
            </div>

            <div className="p-3 rounded-2xl bg-gray-50 border border-gray-200">
              <span className="font-bold text-gray-500 block uppercase text-[10px]">📐 Total Field Area</span>
              <span className="font-bold text-gray-900 text-sm">{REAL_EXAMPLE_PRESET.inputs.area}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Unified AI Pipeline Output (Slide 8) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-4">
            <h3 className="font-bold text-gray-900 text-lg flex items-center justify-between pb-3 border-b border-gray-100">
              <span>Connected AI Outputs (Slide 8)</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-green-100 text-green-800">
                All 5 Modules Synced
              </span>
            </h3>

            {/* 1. Crop Output */}
            <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Crop Output (Feature 1)</span>
                <h4 className="font-black text-gray-900 text-sm sm:text-base">
                  {REAL_EXAMPLE_PRESET.outputs.crop.recommendation}
                </h4>
                <p className="text-xs text-gray-600 mt-0.5">{REAL_EXAMPLE_PRESET.outputs.crop.reason}</p>
              </div>
            </div>

            {/* 2. Yield Output */}
            <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/50 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider">Yield Output (Feature 2)</span>
                <h4 className="font-black text-gray-900 text-sm sm:text-base">
                  Forecasts {REAL_EXAMPLE_PRESET.outputs.yield.forecast}
                </h4>
                <p className="text-xs text-gray-600 mt-0.5">
                  Total Output: {REAL_EXAMPLE_PRESET.outputs.yield.totalProduction} • {REAL_EXAMPLE_PRESET.outputs.yield.estRevenue}
                </p>
              </div>
            </div>

            {/* 3. Weather Output */}
            <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/50 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
                <CloudSun className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Weather Output (Feature 4)</span>
                <h4 className="font-black text-gray-900 text-sm sm:text-base">
                  {REAL_EXAMPLE_PRESET.outputs.weather.alert}
                </h4>
                <p className="text-xs text-gray-600 mt-0.5">{REAL_EXAMPLE_PRESET.outputs.weather.impact}</p>
              </div>
            </div>

            {/* 4. Health Advice */}
            <div className="p-4 rounded-2xl border border-purple-200 bg-purple-50/50 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-purple-800 uppercase tracking-wider">Health Advice (Feature 3 & 5)</span>
                <h4 className="font-black text-gray-900 text-sm sm:text-base">
                  {REAL_EXAMPLE_PRESET.outputs.health.diagnosis}
                </h4>
                <p className="text-xs text-gray-600 mt-0.5">{REAL_EXAMPLE_PRESET.outputs.health.advice}</p>
              </div>
            </div>
          </div>

          {/* Slide 8: Key Insight Callout */}
          <div className="p-4 rounded-2xl bg-emerald-950 text-emerald-100 border border-emerald-800 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed font-medium">
              {t("real_insight")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
