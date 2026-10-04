"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  SOIL_TYPES,
  SEASONS,
  IRRIGATION_LEVELS,
  CROPS_DB,
  DEFAULT_CROPS,
  CropRecommendation as CropType,
} from "@/data/agriData";
import {
  Sprout,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Droplets,
  Calendar,
  Layers,
  HelpCircle,
  Lightbulb,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function CropRecommendationFeature() {
  const { t } = useLanguage();
  const [selectedSoil, setSelectedSoil] = useState("loam");
  const [selectedSeason, setSelectedSeason] = useState("kharif");
  const [selectedWater, setSelectedWater] = useState("medium");
  const [selectedState, setSelectedState] = useState("Uttar Pradesh");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<CropType[]>(CROPS_DB["loam-kharif-medium"] || DEFAULT_CROPS);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      const key = `${selectedSoil}-${selectedSeason}-${selectedWater}`;
      const found = CROPS_DB[key] || DEFAULT_CROPS;
      setResults(found);
      setIsAnalyzing(false);
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch (e) {
        // ignore
      }
    }, 800);
  };

  return (
    <div className="space-y-6">
      {/* Feature Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
            Feature 1
          </span>
          <span className="text-xs font-mono text-gray-500">
            Decision Support Loop: Step 1
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 flex items-center gap-3">
          <Sprout className="w-8 h-8 text-emerald-600" />
          <span>{t("f1_title")}</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-1 font-medium">
          {t("f1_sub")}
        </p>

        {/* 4-Step Pipeline Flow from Slide 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-6 border-t border-gray-100">
          <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-left">
            <span className="text-xs font-bold text-emerald-800">1. Farmer Inputs</span>
            <p className="text-xs text-gray-600 mt-1">Soil type, Season, Water level & Location</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100 text-left">
            <span className="text-xs font-bold text-teal-800">2. AI Engine</span>
            <p className="text-xs text-gray-600 mt-1">Analyses soil nutrients & climate data</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-green-50/70 border border-green-100 text-left">
            <span className="text-xs font-bold text-green-800">3. Suitable Crops</span>
            <p className="text-xs text-gray-600 mt-1">Wheat, Maize, Pulses or Vegetables</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100 text-left">
            <span className="text-xs font-bold text-amber-800">4. Decision</span>
            <p className="text-xs text-gray-600 mt-1">Farmer compares options before sowing</p>
          </div>
        </div>
      </div>

      {/* Main Interactive Form & Results Grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Column: Input Parameters Form (Slide 2) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-100">
            <Layers className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-gray-900 text-lg">{t("f1_input_heading")}</h3>
          </div>

          <div className="space-y-4">
            {/* Soil Type */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                {t("f1_soil_type")}
              </label>
              <select
                value={selectedSoil}
                onChange={(e) => setSelectedSoil(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 text-gray-800 font-semibold text-sm transition-all"
              >
                {SOIL_TYPES.map((soil) => (
                  <option key={soil.id} value={soil.id}>
                    {soil.label} (pH: {soil.ph})
                  </option>
                ))}
              </select>
            </div>

            {/* Season */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                {t("f1_season")}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {SEASONS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedSeason(s.id)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                      selectedSeason === s.id
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-emerald-50"
                    }`}
                  >
                    {s.id.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Water / Irrigation Level */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                {t("f1_water_level")}
              </label>
              <select
                value={selectedWater}
                onChange={(e) => setSelectedWater(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 text-gray-800 font-semibold text-sm transition-all"
              >
                {IRRIGATION_LEVELS.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.label}
                  </option>
                ))}
              </select>
            </div>

            {/* State/Location */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                {t("f1_location")}
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 text-gray-800 font-semibold text-sm transition-all"
              >
                <option value="Uttar Pradesh">Uttar Pradesh (उत्तर प्रदेश)</option>
                <option value="Punjab">Punjab (ਪੰਜਾਬ)</option>
                <option value="Maharashtra">Maharashtra (महाराष्ट्र)</option>
                <option value="Karnataka">Karnataka (ಕರ್ನಾಟಕ)</option>
                <option value="Madhya Pradesh">Madhya Pradesh (मध्य प्रदेश)</option>
                <option value="Haryana">Haryana (हरियाणा)</option>
                <option value="Gujarat">Gujarat (गुजरात)</option>
              </select>
            </div>

            {/* Action Button */}
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-bold text-base shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 disabled:opacity-70 mt-4"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Evaluating Soil Nutrients & Climate...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  <span>{t("f1_btn_analyze")}</span>
                </>
              )}
            </button>
          </div>

          {/* Slide 2: Farmer Benefit Note */}
          <div className="mt-6 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t("f1_benefit_title")}</span>
            </div>
            <p className="text-xs text-emerald-800 leading-relaxed">
              {t("f1_benefit_desc")}
            </p>
          </div>
        </div>

        {/* Right Column: AI Recommended Crops Output (Slide 2) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <div>
                <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                  <span>{t("f1_output_heading")}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200">
                    {results.length} Matches Found
                  </span>
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{t("f1_output_desc")}</p>
              </div>
            </div>

            {/* List of Recommended Crops */}
            <div className="space-y-4">
              {results.map((crop, idx) => (
                <div
                  key={crop.id}
                  className="p-5 rounded-2xl border border-gray-200 hover:border-emerald-300 bg-gradient-to-r from-white to-emerald-50/30 transition-all hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl p-2 rounded-2xl bg-emerald-50 border border-emerald-100">
                        {crop.icon}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-extrabold text-lg text-gray-900">{crop.name}</h4>
                          <span className="text-xs px-2 py-0.5 rounded-md font-semibold bg-gray-100 text-gray-600">
                            {crop.category}
                          </span>
                        </div>
                        <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                          {crop.soilSuitability}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black bg-emerald-600 text-white shadow-xs">
                        {crop.matchScore}% Match
                      </div>
                      <p className="text-[11px] text-gray-400 mt-1 font-mono">Rank #{idx + 1}</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-700 my-3 bg-white/80 p-2.5 rounded-xl border border-gray-100">
                    💡 <span className="font-semibold text-gray-900">Why this crop:</span> {crop.keyReason}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 text-center">
                    <div className="bg-gray-50 p-2 rounded-xl">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase">Growth Cycle</span>
                      <span className="text-xs font-bold text-gray-800">{crop.durationDays}</span>
                    </div>
                    <div className="bg-emerald-50/70 p-2 rounded-xl">
                      <span className="block text-[10px] font-bold text-emerald-700 uppercase">Profit / Ha</span>
                      <span className="text-xs font-bold text-emerald-900">{crop.expectedProfitPerHa}</span>
                    </div>
                    <div className="bg-blue-50/70 p-2 rounded-xl">
                      <span className="block text-[10px] font-bold text-blue-700 uppercase">Water / NPK</span>
                      <span className="text-xs font-bold text-blue-900">{crop.waterNeed} • {crop.npkRatio}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 2: Easy Explanation Callout */}
          <div className="p-4 rounded-2xl bg-emerald-900 text-emerald-100 border border-emerald-700/60 shadow-xs flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed">
              {t("f1_easy_exp")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
