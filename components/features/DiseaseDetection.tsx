"use client";

import React, { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SAMPLE_LEAF_DISEASES, DiseaseInfo } from "@/data/agriData";
import {
  Scan,
  Camera,
  Upload,
  AlertTriangle,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  FlaskConical,
  Sprout,
  Lightbulb,
  X,
  ExternalLink,
} from "lucide-react";
import confetti from "canvas-confetti";

interface DiseaseDetectionProps {
  onOpenExpertModal: () => void;
}

export default function DiseaseDetectionFeature({ onOpenExpertModal }: DiseaseDetectionProps) {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedDisease, setSelectedDisease] = useState<DiseaseInfo>(SAMPLE_LEAF_DISEASES[0]);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(true);

  const triggerScan = (disease: DiseaseInfo, customImgSrc?: string) => {
    setIsScanning(true);
    setScanComplete(false);
    if (customImgSrc) {
      setCustomImage(customImgSrc);
    }
    setSelectedDisease(disease);

    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      try {
        confetti({
          particleCount: 35,
          spread: 55,
          origin: { y: 0.65 },
        });
      } catch (e) {
        // ignore
      }
    }, 1200);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const src = uploadEvent.target?.result as string;
        // Default to tomato early blight diagnosis for custom uploads with high confidence
        triggerScan(SAMPLE_LEAF_DISEASES[0], src);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Feature Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800">
            Feature 3
          </span>
          <span className="text-xs font-mono text-gray-500">
            Decision Support Loop: Step 3
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 flex items-center gap-3">
          <Scan className="w-8 h-8 text-amber-600" />
          <span>{t("f3_title")}</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-1 font-medium">
          {t("f3_sub")}
        </p>

        {/* 3-Step Process Flow from Slide 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100">
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
              <Camera className="w-4 h-4 text-amber-600" />
              <span>{t("f3_step1")}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">{t("f3_step1_desc")}</p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
              <Scan className="w-4 h-4 text-blue-600" />
              <span>{t("f3_step2")}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">{t("f3_step2_desc")}</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t("f3_step3")}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">{t("f3_step3_desc")}</p>
          </div>
        </div>
      </div>

      {/* Main Interactive Scanner Grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left: Leaf Capture & Sample Presets */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 text-base mb-3 flex items-center justify-between">
              <span>{t("f3_step1")}</span>
              {customImage && (
                <button
                  onClick={() => setCustomImage(null)}
                  className="text-xs text-red-600 hover:underline flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset photo</span>
                </button>
              )}
            </h3>

            {/* Upload Zone */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="group cursor-pointer rounded-2xl border-2 border-dashed border-gray-300 hover:border-emerald-500 bg-gray-50 hover:bg-emerald-50/40 p-6 text-center transition-all"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
                <Camera className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-sm text-gray-800 group-hover:text-emerald-700">
                {t("f3_upload_cta")}
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                Supports camera capture & JPEG / PNG gallery upload
              </p>
            </div>

            {/* Instant Sample Presets for easy demo */}
            <div className="mt-5 pt-4 border-t border-gray-100">
              <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                {t("f3_sample_cta")}
              </span>
              <div className="grid grid-cols-2 gap-2">
                {SAMPLE_LEAF_DISEASES.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => {
                      setCustomImage(null);
                      triggerScan(d);
                    }}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedDisease.id === d.id && !customImage
                        ? "border-emerald-500 bg-emerald-50/80 shadow-xs ring-1 ring-emerald-500"
                        : "border-gray-200 hover:bg-gray-50 bg-white"
                    }`}
                  >
                    <span className="text-[11px] font-bold text-gray-900 block truncate">
                      {d.crop}
                    </span>
                    <span
                      className={`text-[10px] font-semibold block truncate ${
                        d.severity === "High"
                          ? "text-red-600"
                          : d.severity === "Moderate"
                          ? "text-amber-600"
                          : "text-emerald-600"
                      }`}
                    >
                      {d.diseaseName.split("(")[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Leaf Visualizer with Laser Scan Effect */}
          <div className="bg-slate-900 rounded-3xl p-5 text-white border border-slate-800 shadow-md relative overflow-hidden">
            <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
              <span className="font-mono">CV Scanner Viewport</span>
              <span className="text-emerald-400 font-bold">
                {isScanning ? "Scanning Active..." : "Target Locked"}
              </span>
            </div>

            {/* Visual Leaf Container */}
            <div className="relative w-full h-56 rounded-2xl bg-slate-950 flex items-center justify-center overflow-hidden border border-slate-800">
              {customImage ? (
                <img
                  src={customImage}
                  alt="Custom Leaf"
                  className="w-full h-full object-cover"
                />
              ) : (
                /* Dynamic SVG Leaf Visualization based on sample */
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Leaf Body */}
                    <path
                      d="M100,20 C160,20 180,90 150,150 C120,190 100,190 100,190 C100,190 80,190 50,150 C20,90 40,20 100,20 Z"
                      fill={
                        selectedDisease.id === "healthy-leaf"
                          ? "#15803d"
                          : selectedDisease.id === "wheat-rust"
                          ? "#a16207"
                          : selectedDisease.id === "corn-leaf-blight"
                          ? "#4d7c0f"
                          : "#166534"
                      }
                      stroke="#14532d"
                      strokeWidth="3"
                    />
                    {/* Leaf Midrib / Vein */}
                    <path
                      d="M100,20 L100,190"
                      stroke="#86efac"
                      strokeWidth="2.5"
                      strokeDasharray="4 2"
                    />
                    {/* Simulated Spots based on disease */}
                    {selectedDisease.id === "tomato-blight" && (
                      <>
                        <circle cx="80" cy="80" r="14" fill="#78350f" opacity="0.9" />
                        <circle cx="80" cy="80" r="8" fill="#451a03" />
                        <circle cx="120" cy="110" r="18" fill="#78350f" opacity="0.9" />
                        <circle cx="120" cy="110" r="11" fill="#451a03" />
                        <circle cx="70" cy="130" r="10" fill="#eab308" opacity="0.8" />
                      </>
                    )}
                    {selectedDisease.id === "corn-leaf-blight" && (
                      <>
                        <ellipse cx="100" cy="90" rx="35" ry="10" fill="#713f12" opacity="0.85" />
                        <ellipse cx="95" cy="130" rx="28" ry="8" fill="#713f12" opacity="0.85" />
                      </>
                    )}
                    {selectedDisease.id === "wheat-rust" && (
                      <>
                        <line x1="88" y1="40" x2="88" y2="160" stroke="#facc15" strokeWidth="4" />
                        <line x1="112" y1="50" x2="112" y2="150" stroke="#eab308" strokeWidth="4" />
                      </>
                    )}
                  </svg>
                </div>
              )}

              {/* Laser Line Scanning Effect */}
              {isScanning && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#34d399] animate-pulse" />
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-xs font-mono text-emerald-400 bg-slate-900/80 py-1 font-bold">
                    Analyzing Pattern Matrix...
                  </div>
                </div>
              )}

              {/* Bounding box targeting HUD */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-400" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-emerald-400" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-400" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-400" />
            </div>

            <button
              onClick={() => triggerScan(selectedDisease)}
              disabled={isScanning}
              className="w-full mt-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Scan className="w-4 h-4" />
              <span>{isScanning ? t("f3_scanning") : t("f3_btn_scan")}</span>
            </button>
          </div>
        </div>

        {/* Right: Diagnosis Result, Treatment & Expert Escalation (Slide 4) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm">
            {/* Diagnosis Banner */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-gray-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {selectedDisease.crop}
                  </span>
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      selectedDisease.severity === "High"
                        ? "bg-red-100 text-red-800 border border-red-200"
                        : selectedDisease.severity === "Moderate"
                        ? "bg-amber-100 text-amber-800 border border-amber-200"
                        : "bg-green-100 text-green-800 border border-green-200"
                    }`}
                  >
                    Severity: {selectedDisease.severity}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mt-1">
                  {selectedDisease.diseaseName}
                </h3>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Pathogen: {selectedDisease.pathogen}
                </p>
              </div>

              <div className="text-right">
                <div className="text-3xl font-black text-emerald-600">
                  {selectedDisease.confidence}%
                </div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  AI Confidence
                </span>
              </div>
            </div>

            {/* Identified Symptoms */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                <span>Identified Symptoms (Slide 4)</span>
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {selectedDisease.symptoms.map((symptom, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-gray-700 bg-amber-50/50 border border-amber-100/70 p-2.5 rounded-xl flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment & Remedies */}
            <div className="mt-5 space-y-3">
              {/* Chemical Remedy */}
              <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100">
                <div className="flex items-center gap-2 text-rose-900 font-bold text-xs mb-1">
                  <FlaskConical className="w-4 h-4 text-rose-600" />
                  <span>Chemical Remedy (Recommended Dosage)</span>
                </div>
                <p className="text-xs text-rose-950 font-medium leading-relaxed">
                  {selectedDisease.chemicalRemedy}
                </p>
              </div>

              {/* Organic Remedy */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs mb-1">
                  <Sprout className="w-4 h-4 text-emerald-600" />
                  <span>Organic / Bio-Control Method (Safe for Soil)</span>
                </div>
                <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                  {selectedDisease.organicRemedy}
                </p>
              </div>

              {/* Prevention for next season */}
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs mb-1">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Prevention for Next Season</span>
                </div>
                <ul className="text-xs text-blue-950 space-y-1 mt-1">
                  {selectedDisease.prevention.map((prev, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-500 rounded-full" />
                      <span>{prev}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Slide 4: Recommends consulting local expert */}
            <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-gray-500">
                Need immediate field verification? Official Agri-Experts are online.
              </div>
              <button
                onClick={onOpenExpertModal}
                className="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span>Consult Agri-Expert Now</span>
              </button>
            </div>
          </div>

          {/* Slide 4: Easy Explanation */}
          <div className="p-4 rounded-2xl bg-amber-950 text-amber-100 border border-amber-800 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed">
              {t("f3_easy_exp")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
