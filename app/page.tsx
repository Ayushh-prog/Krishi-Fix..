"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import CropRecommendationFeature from "@/components/features/CropRecommendation";
import YieldPredictionFeature from "@/components/features/YieldPrediction";
import DiseaseDetectionFeature from "@/components/features/DiseaseDetection";
import WeatherSmartFarmingFeature from "@/components/features/WeatherSmartFarming";
import AIAssistantFeature from "@/components/features/AIAssistant";
import IntegratedEcosystemFeature from "@/components/features/IntegratedEcosystem";
import BenefitsAndConclusion from "@/components/features/BenefitsAndConclusion";
import ExpertConnectModal from "@/components/ExpertConnectModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sprout,
  Scan,
  TrendingUp,
  CloudSun,
  Bot,
  Layers,
  Award,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");
  const [expertModalOpen, setExpertModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-gray-900">
      {/* Sticky Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenExpertModal={() => setExpertModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Top Hero Banner */}
        <HeroBanner onSelectFeature={(featureTab) => setActiveTab(featureTab)} />

        {/* Feature Navigation Pill Selector */}
        <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-2xs overflow-x-auto flex items-center space-x-1 sm:space-x-2">
          {[
            { id: "overview", label: t("nav_overview"), icon: Layers },
            { id: "crop_rec", label: t("nav_crop_rec"), icon: Sprout },
            { id: "yield", label: t("nav_yield"), icon: TrendingUp },
            { id: "disease", label: t("nav_disease"), icon: Scan },
            { id: "weather", label: t("nav_weather"), icon: CloudSun },
            { id: "assistant", label: t("nav_assistant"), icon: Bot },
            { id: "integrated", label: t("nav_integrated"), icon: Award },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30"
                    : "text-gray-600 hover:text-emerald-700 hover:bg-emerald-50/70"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-emerald-600"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Tab Contents */}
        <div className="pt-2">
          {activeTab === "overview" && (
            <div className="space-y-10">
              {/* Feature 1 preview */}
              <CropRecommendationFeature />
              {/* Feature 2 preview */}
              <YieldPredictionFeature />
              {/* Feature 3 preview */}
              <DiseaseDetectionFeature onOpenExpertModal={() => setExpertModalOpen(true)} />
              {/* Feature 4 preview */}
              <WeatherSmartFarmingFeature />
              {/* Feature 5 preview */}
              <AIAssistantFeature onOpenExpertModal={() => setExpertModalOpen(true)} />
              {/* Integrated Ecosystem simulation */}
              <IntegratedEcosystemFeature />
              {/* Benefits & Conclusion */}
              <BenefitsAndConclusion />
            </div>
          )}

          {activeTab === "crop_rec" && (
            <div className="space-y-8">
              <CropRecommendationFeature />
            </div>
          )}

          {activeTab === "yield" && (
            <div className="space-y-8">
              <YieldPredictionFeature />
            </div>
          )}

          {activeTab === "disease" && (
            <div className="space-y-8">
              <DiseaseDetectionFeature onOpenExpertModal={() => setExpertModalOpen(true)} />
            </div>
          )}

          {activeTab === "weather" && (
            <div className="space-y-8">
              <WeatherSmartFarmingFeature />
            </div>
          )}

          {activeTab === "assistant" && (
            <div className="space-y-8">
              <AIAssistantFeature onOpenExpertModal={() => setExpertModalOpen(true)} />
            </div>
          )}

          {activeTab === "integrated" && (
            <div className="space-y-8">
              <IntegratedEcosystemFeature />
              <BenefitsAndConclusion />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900 mt-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-bold">
            <Sprout className="w-4 h-4 text-emerald-400" />
            <span>AI Smart Farming : AgriMind (Krishi Fix)</span>
          </div>
          <p className="text-center sm:text-right text-slate-500">
            Babu Banarasi Das Institute of Technology Management (Code: 054) • Team B8 • 2026–2027
          </p>
        </div>
      </footer>

      {/* Expert Hotline Modal */}
      <ExpertConnectModal
        isOpen={expertModalOpen}
        onClose={() => setExpertModalOpen(false)}
      />
    </div>
  );
}
