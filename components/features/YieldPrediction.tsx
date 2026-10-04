"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Scale,
  CloudRain,
  Layers,
  Sparkles,
  DollarSign,
  Warehouse,
  FileText,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function YieldPredictionFeature() {
  const { t } = useLanguage();

  const [fieldArea, setFieldArea] = useState(2.5); // Hectares
  const [selectedCrop, setSelectedCrop] = useState("maize");
  const [seedDensity, setSeedDensity] = useState("optimal"); // sparse, optimal, dense
  const [rainProb, setRainProb] = useState(65);
  const [soilHealth, setSoilHealth] = useState(82);
  const [isCalculating, setIsCalculating] = useState(false);

  // Crop base yields in Tons / Hectare and MSP per Quintal (100kg)
  const cropStats: Record<string, { name: string; baseYield: number; mspPerQ: number; unit: string }> = {
    maize: { name: "Maize (मक्का)", baseYield: 3.8, mspPerQ: 2225, unit: "Tons/Ha" },
    wheat: { name: "Wheat (गेहूं)", baseYield: 4.5, mspPerQ: 2275, unit: "Tons/Ha" },
    paddy: { name: "Paddy / Rice (धान)", baseYield: 4.1, mspPerQ: 2300, unit: "Tons/Ha" },
    pulses: { name: "Pulses / Arhar (दाल)", baseYield: 1.8, mspPerQ: 7550, unit: "Tons/Ha" },
    soybean: { name: "Soybean (सोयाबीन)", baseYield: 2.2, mspPerQ: 4892, unit: "Tons/Ha" },
    mustard: { name: "Mustard (सरसों)", baseYield: 2.0, mspPerQ: 5650, unit: "Tons/Ha" },
  };

  const currentCrop = cropStats[selectedCrop] || cropStats["maize"];

  // ML simulated calculation formula
  const densityMultiplier = seedDensity === "dense" ? 1.08 : seedDensity === "sparse" ? 0.85 : 1.0;
  const rainModifier = rainProb > 80 ? 0.95 : rainProb > 40 ? 1.05 : 0.88;
  const soilModifier = soilHealth / 80;

  const predictedYieldPerHa = +(
    currentCrop.baseYield *
    densityMultiplier *
    rainModifier *
    soilModifier
  ).toFixed(2);

  const totalProductionTons = +(predictedYieldPerHa * fieldArea).toFixed(2);
  const totalProductionQuintals = +(totalProductionTons * 10).toFixed(1);
  const estimatedRevenue = Math.round(totalProductionQuintals * currentCrop.mspPerQ);

  const handleRecalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      try {
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // ignore
      }
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Feature Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800">
            Feature 2
          </span>
          <span className="text-xs font-mono text-gray-500">
            Decision Support Loop: Step 2
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-blue-600" />
          <span>{t("f2_title")}</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-1 font-medium">
          {t("f2_sub")}
        </p>

        {/* Formula Diagram from Slide 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 pt-6 border-t border-gray-100 text-center">
          <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200">
            <span className="text-xs font-bold text-gray-800 block">Historical Data</span>
            <p className="text-xs text-gray-500 mt-1">Past yield records & regional trends</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-100">
            <span className="text-xs font-bold text-blue-800 block">+ Field Variables</span>
            <p className="text-xs text-gray-500 mt-1">Area (ha), Weather forecast & Soil quality</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100">
            <span className="text-xs font-bold text-indigo-800 block">= ML Prediction Model</span>
            <p className="text-xs text-gray-500 mt-1">Calculates expected output range</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="text-xs font-bold text-emerald-800 block">→ Estimated Yield</span>
            <p className="text-xs text-emerald-700 font-bold mt-1">e.g., ~{predictedYieldPerHa} Tons/Hectare</p>
          </div>
        </div>
      </div>

      {/* Main Interactive Predictor Form & ML Output */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-5">
          <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2 pb-3 border-b border-gray-100">
            <Scale className="w-5 h-5 text-blue-600" />
            <span>Key Factors Analyzed (Slide 3)</span>
          </h3>

          {/* Crop Selector */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              {t("f2_crop_select")}
            </label>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-800 font-semibold text-sm transition-all"
            >
              {Object.entries(cropStats).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.name} (MSP: ₹{item.mspPerQ}/Q)
                </option>
              ))}
            </select>
          </div>

          {/* Field Area Slider */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                {t("f2_field_size")}
              </label>
              <span className="px-2.5 py-0.5 rounded-md font-mono text-xs font-bold bg-blue-100 text-blue-800">
                {fieldArea} Hectares (~{(fieldArea * 2.47).toFixed(1)} Acres)
              </span>
            </div>
            <input
              type="range"
              min="0.5"
              max="20"
              step="0.5"
              value={fieldArea}
              onChange={(e) => setFieldArea(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-gray-400 mt-1">
              <span>0.5 Ha (Small)</span>
              <span>10 Ha</span>
              <span>20 Ha (Large)</span>
            </div>
          </div>

          {/* Seed Density */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              {t("f2_seed_density")}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "sparse", label: "Sparse (-15%)" },
                { id: "optimal", label: "Optimal (100%)" },
                { id: "dense", label: "High (+8%)" },
              ].map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setSeedDensity(d.id)}
                  className={`py-2 px-1 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                    seedDensity === d.id
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rain Probability */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                <CloudRain className="w-3.5 h-3.5 text-blue-500" />
                <span>{t("f2_rain_prob")}</span>
              </label>
              <span className="font-mono text-xs font-bold text-blue-700">
                {rainProb}%
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={rainProb}
              onChange={(e) => setRainProb(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          {/* Soil Health Index */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                <span>{t("f2_soil_quality")}</span>
              </label>
              <span className="font-mono text-xs font-bold text-emerald-700">
                {soilHealth} / 100
              </span>
            </div>
            <input
              type="range"
              min="40"
              max="100"
              step="2"
              value={soilHealth}
              onChange={(e) => setSoilHealth(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          <button
            onClick={handleRecalculate}
            disabled={isCalculating}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
          >
            {isCalculating ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{t("f2_btn_predict")}</span>
              </>
            )}
          </button>
        </div>

        {/* Right Column: ML Estimated Output & Strategic Farmer Value */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-800/60">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-blue-800/80">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-300">
                  ML Prediction Model Output
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {currentCrop.name}
                </h3>
              </div>
              <div className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                Confidence: ~91%
              </div>
            </div>

            {/* Big Stat Display */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-800/50">
                <span className="text-xs font-medium text-blue-300 block">Estimated Yield</span>
                <div className="text-3xl font-black text-white mt-1">
                  ~{predictedYieldPerHa}
                </div>
                <span className="text-[11px] text-blue-300/80 font-mono">Tons / Hectare</span>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-800/50">
                <span className="text-xs font-medium text-indigo-300 block">Total Field Output</span>
                <div className="text-3xl font-black text-emerald-400 mt-1">
                  {totalProductionTons}
                </div>
                <span className="text-[11px] text-indigo-300/80 font-mono">
                  Tons ({totalProductionQuintals} Quintals)
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/50">
                <span className="text-xs font-medium text-emerald-300 block">Est. Market Value</span>
                <div className="text-3xl font-black text-amber-300 mt-1">
                  ₹{estimatedRevenue.toLocaleString("en-IN")}
                </div>
                <span className="text-[11px] text-emerald-300/80 font-mono">
                  At MSP ₹{currentCrop.mspPerQ}/Q
                </span>
              </div>
            </div>

            {/* Strategic Utility for Farmer (From Slide 3) */}
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-700/40 flex items-start gap-2.5">
                <Warehouse className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Storage Planning</h4>
                  <p className="text-[11px] text-blue-200/80">Need space for {totalProductionQuintals} sacks</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-700/40 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Loan Application</h4>
                  <p className="text-[11px] text-emerald-200/80">KCC collateral justification</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-700/40 flex items-start gap-2.5">
                <DollarSign className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Market Budgeting</h4>
                  <p className="text-[11px] text-amber-200/80">Advance contract pricing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3: Important Note Callout */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
              {t("f2_important_note")}
            </p>
          </div>

          {/* Slide 3: Easy Explanation */}
          <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 border border-slate-700 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed">
              {t("f2_easy_exp")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
