"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  MessageCircle,
  X,
  CheckCircle2,
  UserCheck,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

interface ExpertConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExpertConnectModal({ isOpen, onClose }: ExpertConnectModalProps) {
  const [called, setCalled] = useState(false);

  if (!isOpen) return null;

  const experts = [
    {
      name: "Dr. Rajesh Kumar Verma",
      role: "Senior Plant Pathologist",
      org: "ICAR - Krishi Vigyan Kendra (KVK)",
      location: "Lucknow, Uttar Pradesh",
      phone: "1800-180-1551",
      timing: "9:00 AM - 6:00 PM (Toll Free)",
      languages: "Hindi, English, Awadhi",
      status: "Available Now",
    },
    {
      name: "Dr. Prabhjot Singh Sandhu",
      role: "Agronomy & Soil Specialist",
      org: "Punjab Agricultural University (PAU)",
      location: "Ludhiana, Punjab",
      phone: "1800-180-1551",
      timing: "9:00 AM - 6:00 PM",
      languages: "Punjabi, Hindi, English",
      status: "Available Now",
    },
    {
      name: "Prof. S. R. Patil",
      role: "Horticulture & Pest Management",
      org: "MPKV Rahuri Agricultural Extension",
      location: "Pune / Nashik, Maharashtra",
      phone: "1800-180-1551",
      timing: "9:00 AM - 6:00 PM",
      languages: "Marathi, Hindi, English",
      status: "Available Now",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-gray-100 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shadow-xs">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-gray-900">
              National Kisan Call Center (KCC)
            </h3>
            <p className="text-xs text-gray-500">
              Govt. of India Ministry of Agriculture 24/7 Farmer Support
            </p>
          </div>
        </div>

        {/* Toll-Free Big Card */}
        <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-500/40 text-emerald-950 flex items-center justify-between mb-6">
          <div>
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
              Toll-Free Nationwide Farmer Hotline
            </span>
            <div className="text-2xl font-black text-emerald-900">1800-180-1551</div>
            <p className="text-[11px] text-emerald-700 mt-0.5">
              Available 22 Indian regional languages including Hindi, Marathi, Punjabi & Kannada.
            </p>
          </div>
          <a
            href="tel:18001801551"
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Free</span>
          </a>
        </div>

        <h4 className="font-bold text-sm text-gray-900 mb-3 flex items-center gap-2">
          <UserCheck className="w-4 h-4 text-emerald-600" />
          <span>Assigned Block Extension Officers (Safety First Protocol)</span>
        </h4>

        <div className="space-y-3">
          {experts.map((exp, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl border border-gray-200 hover:border-emerald-300 bg-gray-50/50 transition-all text-xs"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">{exp.name}</h5>
                  <p className="text-emerald-700 font-semibold">{exp.role} • {exp.org}</p>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800">
                  {exp.status}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-500 text-[11px]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gray-400" /> {exp.location}
                </span>
                <span>🗣️ {exp.languages}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1 text-emerald-700 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            Official ICAR & KVK Verified Specialists
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
