"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sprout,
  Scan,
  TrendingUp,
  CloudSun,
  Bot,
  Layers,
  PhoneCall,
  Menu,
  X,
  Globe,
  Award,
} from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenExpertModal: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onOpenExpertModal }: NavbarProps) {
  const { language, setLanguage, t, languages } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navItems = [
    { id: "overview", label: t("nav_overview"), icon: Layers },
    { id: "crop_rec", label: t("nav_crop_rec"), icon: Sprout },
    { id: "yield", label: t("nav_yield"), icon: TrendingUp },
    { id: "disease", label: t("nav_disease"), icon: Scan },
    { id: "weather", label: t("nav_weather"), icon: CloudSun },
    { id: "assistant", label: t("nav_assistant"), icon: Bot },
    { id: "integrated", label: t("nav_integrated"), icon: Award },
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      {/* Top micro banner */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-1 px-4 text-center flex items-center justify-between">
        <span className="hidden sm:inline font-mono tracking-wide text-emerald-300">
          🌱 BBDITM (Code: 054) • Team B8 • AI Smart Farming Decision Support System
        </span>
        <span className="sm:hidden font-mono text-[11px] text-emerald-300">
          AgriMind Decision Support
        </span>
        <button
          onClick={onOpenExpertModal}
          className="flex items-center gap-1.5 text-xs text-amber-300 hover:text-white font-medium transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
          <span>{t("emergency_call")}</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab("overview")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-gray-900 group-hover:text-emerald-700 transition-colors">
                  AgriMind
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Krishi Fix
                </span>
              </div>
              <p className="text-[11px] text-gray-500 hidden sm:block">
                AI Smart Farming Decision System
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30"
                      : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-emerald-600"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Language Picker & CTA */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-emerald-50 text-gray-800 text-xs font-bold transition-all shadow-2xs hover:border-emerald-300"
                aria-label="Select Language"
              >
                <Globe className="w-4 h-4 text-emerald-600" />
                <span className="text-base leading-none">{currentLangObj.flag}</span>
                <span className="hidden sm:inline font-semibold">{currentLangObj.native}</span>
              </button>

              {langDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-100"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                    Select Language / भाषा चुनें
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-left transition-colors ${
                        language === lang.code
                          ? "bg-emerald-50 text-emerald-800 font-bold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.native}</span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-normal">({lang.label})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-emerald-700 hover:bg-emerald-50"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-600 text-white"
                    : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-emerald-600"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
