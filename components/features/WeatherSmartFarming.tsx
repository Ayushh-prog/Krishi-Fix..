"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SMART_WEATHER_DATA } from "@/data/agriData";
import {
  CloudSun,
  CloudRain,
  Wind,
  Droplets,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Sparkles,
  Lightbulb,
  Ban,
  Sun,
  Timer,
} from "lucide-react";

export default function WeatherSmartFarmingFeature() {
  const { t } = useLanguage();
  const [activeAlertFilter, setActiveAlertFilter] = useState("all");

  const { current, forecast, smartAlerts } = SMART_WEATHER_DATA;

  return (
    <div className="space-y-6">
      {/* Feature Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800">
            Feature 4
          </span>
          <span className="text-xs font-mono text-gray-500">
            Decision Support Loop: Step 4
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 flex items-center gap-3">
          <CloudSun className="w-8 h-8 text-sky-600" />
          <span>{t("f4_title")}</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-1 font-medium">
          {t("f4_sub")}
        </p>

        {/* 3-Step Flow Diagram from Slide 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100">
          <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100">
            <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
              <CloudRain className="w-4 h-4 text-sky-600" />
              <span>{t("f4_stream_title")}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">Live rain, wind & temperature forecasts</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{t("f4_alert_engine")}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">Evaluates upcoming farm operations</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>{t("f4_actionable_notification")}</span>
            </div>
            <p className="text-xs text-amber-900 font-semibold mt-1">&ldquo;Rain tomorrow - hold pesticide spray!&rdquo;</p>
          </div>
        </div>
      </div>

      {/* Weather Stream & 3 Core Operational Decisions (Slide 5) */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Column: Live Weather Stream & 4-Day Forecast */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-sky-800/60">
            <div className="flex items-center justify-between pb-3 border-b border-sky-800">
              <span className="text-xs font-mono text-sky-300 uppercase tracking-wider">
                Live Farm Telemetry
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Feed
              </span>
            </div>

            <div className="py-4 flex items-center justify-between">
              <div>
                <div className="text-5xl font-black text-white">{current.temp}°C</div>
                <p className="text-sm text-sky-200 mt-1">{current.condition}</p>
              </div>
              <div className="text-6xl">⛈️</div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-sky-800/80 text-xs">
              <div className="bg-sky-950/60 p-2.5 rounded-xl border border-sky-800/40">
                <span className="text-sky-300 block text-[10px]">Humidity</span>
                <span className="font-bold text-white text-sm">{current.humidity}%</span>
              </div>
              <div className="bg-sky-950/60 p-2.5 rounded-xl border border-sky-800/40">
                <span className="text-sky-300 block text-[10px]">Wind</span>
                <span className="font-bold text-white text-sm">{current.windSpeed}</span>
              </div>
              <div className="col-span-2 bg-amber-500/20 p-2.5 rounded-xl border border-amber-400/40 text-amber-200 flex items-center justify-between">
                <span>Rain Chance (Next 24h):</span>
                <span className="font-black text-amber-300 text-sm">{current.rainChanceNext24h}% ({current.rainfallExpected})</span>
              </div>
            </div>

            {/* 4-Day Forecast Cards */}
            <div className="mt-4 pt-3 border-t border-sky-800/80">
              <span className="block text-[11px] font-bold text-sky-300 uppercase tracking-wider mb-2">
                4-Day Outlook for Field Work
              </span>
              <div className="grid grid-cols-4 gap-1.5 text-center">
                {forecast.map((f, i) => (
                  <div key={i} className="bg-sky-950/50 p-2 rounded-xl border border-sky-800/30">
                    <span className="text-[10px] font-bold text-sky-200 block">{f.day}</span>
                    <span className="text-xl my-1 block">{f.icon}</span>
                    <span className="text-[10px] font-bold text-white block">{f.rain}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: The 3 Core Operations from Slide 5 */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-4">
            <h3 className="font-bold text-gray-900 text-lg flex items-center justify-between pb-3 border-b border-gray-100">
              <span>Operational Recommendations (Slide 5)</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800 border border-amber-200">
                Action Required
              </span>
            </h3>

            {/* 1. Spraying Decisions */}
            <div className="p-4 rounded-2xl border-2 border-red-200 bg-red-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-red-900 font-extrabold text-sm">
                  <Ban className="w-4 h-4 text-red-600" />
                  <span>{t("f4_spraying_title")}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">
                  DO NOT SPRAY
                </span>
              </div>
              <p className="text-xs text-red-900 font-medium">
                {t("f4_spraying_desc")} High rain probability (85%) tomorrow will cause instant chemical wash-off.
              </p>
              <div className="p-2.5 rounded-xl bg-white border border-red-200 text-xs text-gray-700 font-semibold flex items-center gap-2">
                <span>⏱️ Recommended Action:</span>
                <span className="text-emerald-700">Postpone all insecticide/fertilizer spray to Day 4 morning.</span>
              </div>
            </div>

            {/* 2. Irrigation Management */}
            <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-900 font-extrabold text-sm">
                  <Droplets className="w-4 h-4 text-blue-600" />
                  <span>{t("f4_irrigation_title")}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">
                  POWER OFF PUMP
                </span>
              </div>
              <p className="text-xs text-blue-900 font-medium">
                {t("f4_irrigation_desc")} 35mm natural rain expected tomorrow provides sufficient root moisture.
              </p>
              <div className="p-2.5 rounded-xl bg-white border border-blue-200 text-xs text-gray-700 font-semibold flex items-center gap-2">
                <span>⚡ Cost Savings:</span>
                <span className="text-blue-700">Saves ~₹450 in tube-well electricity & preserves aquifer.</span>
              </div>
            </div>

            {/* 3. Sowing & Harvesting */}
            <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-sm">
                  <Sun className="w-4 h-4 text-emerald-600" />
                  <span>{t("f4_harvesting_title")}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-600 text-white">
                  DRY WINDOW: DAY 3-4
                </span>
              </div>
              <p className="text-xs text-emerald-900 font-medium">
                {t("f4_harvesting_desc")} Ground will dry out completely by Day 3 afternoon for heavy harvester entry.
              </p>
              <div className="p-2.5 rounded-xl bg-white border border-emerald-200 text-xs text-gray-700 font-semibold flex items-center gap-2">
                <span>🚜 Machinery Schedule:</span>
                <span className="text-emerald-700">Book threshers and transport tractors for Friday morning.</span>
              </div>
            </div>
          </div>

          {/* Slide 5: Easy Explanation */}
          <div className="p-4 rounded-2xl bg-sky-950 text-sky-100 border border-sky-800 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed">
              {t("f4_easy_exp")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
