"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FAQ_CHAT_KNOWLEDGE } from "@/data/agriData";
import {
  Bot,
  Mic,
  Send,
  Volume2,
  Sparkles,
  ShieldAlert,
  Lightbulb,
  PhoneCall,
  User,
  Clock,
  HelpCircle,
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  time: string;
  isEscalation?: boolean;
}

interface AIAssistantProps {
  onOpenExpertModal: () => void;
}

export default function AIAssistantFeature({ onOpenExpertModal }: AIAssistantProps) {
  const { t, language } = useLanguage();
  const [inputVal, setInputVal] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "assistant",
      text: "Namaste! I am AgriMind, your 24/7 AI Farming Assistant. You can ask me anything about crop seasons, fertilizer dosage, leaf pests, or PM schemes in your own language. How can I help your farm today?",
      time: "Just now",
    },
    {
      id: "2",
      sender: "user",
      text: "When is the best time to sow wheat in loam soil?",
      time: "Just now",
    },
    {
      id: "3",
      sender: "assistant",
      text: "Sow wheat when temperature drops around 20°-22°C, usually between late October and mid-November. For loamy soil, ensure 1-2 pre-sowing irrigations (Rauni) for optimal seedbed germination.",
      time: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");

    // Look for matching knowledge
    setTimeout(() => {
      const qLower = query.toLowerCase();
      let matched = FAQ_CHAT_KNOWLEDGE.find((faq) =>
        faq.keywords.some((kw) => qLower.includes(kw.toLowerCase()))
      );

      let reply = matched
        ? matched.answer
        : `Regarding "${query}": For best results in your soil, apply balanced NPK nutrients based on a Soil Health Card. If pest infestation is severe, refrain from indiscriminate spraying and consult your local block agricultural extension officer.`;

      const isSevere = qLower.includes("severe") || qLower.includes("emergency") || qLower.includes("dying") || qLower.includes("poison");

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isEscalation: isSevere,
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 700);
  };

  const handleSpeechInput = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Speech recognition is supported in Google Chrome, Edge, and Android browsers.");
      return;
    }

    try {
      // @ts-ignore
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = language === "hi" ? "hi-IN" : language === "mr" ? "mr-IN" : language === "kn" ? "kn-IN" : language === "pa" ? "pa-IN" : "en-IN";
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = () => setIsListening(false);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputVal(transcript);
        handleSend(transcript);
      };

      recognition.start();
    } catch (err) {
      setIsListening(false);
    }
  };

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.lang = language === "hi" ? "hi-IN" : language === "mr" ? "mr-IN" : "en-IN";
      window.speechSynthesis.speak(utterance);
    }
  };

  const suggestedQuestions = [
    "When is the best time to sow wheat in loam soil?",
    "How much urea for paddy field?",
    "Rain alert for my area tomorrow?",
    "Organic pesticide for aphids & whiteflies",
    "PM-Kisan and crop insurance scheme details",
  ];

  return (
    <div className="space-y-6">
      {/* Feature Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-800">
            Feature 5
          </span>
          <span className="text-xs font-mono text-gray-500">
            Decision Support Loop: Step 5
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 flex items-center gap-3">
          <Bot className="w-8 h-8 text-purple-600" />
          <span>{t("f5_title")}</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-1 font-medium">
          {t("f5_sub")}
        </p>

        {/* 3 Core Pillars from Slide 6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100">
          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
            <h4 className="font-bold text-xs text-purple-900">Natural Input</h4>
            <p className="text-xs text-gray-600 mt-1">
              Farmers can type or speak questions naturally without technical jargon.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
            <h4 className="font-bold text-xs text-emerald-900">Multi-Topic Knowledge</h4>
            <p className="text-xs text-gray-600 mt-1">
              Covers crop seasons, fertilizer dosages, soil care, and government schemes.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
            <h4 className="font-bold text-xs text-amber-900">Safety First</h4>
            <p className="text-xs text-gray-600 mt-1">
              For severe outbreaks or critical issues, it directs the farmer to official agricultural experts.
            </p>
          </div>
        </div>
      </div>

      {/* Main Interactive Chat Interface */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Column: Chat Window */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[520px]">
          {/* Chat Header */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-xs">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{t("f5_assistant_name")}</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online • Voice & Text Active</span>
                </div>
              </div>
            </div>
            <button
              onClick={onOpenExpertModal}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Agri-Expert</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "assistant" && (
                  <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                    m.sender === "user"
                      ? "bg-emerald-600 text-white rounded-tr-none font-medium"
                      : "bg-white text-gray-800 border border-gray-200 rounded-tl-none"
                  }`}
                >
                  <p>{m.text}</p>
                  <div className="flex items-center justify-between gap-4 mt-2 pt-1 border-t border-black/5 text-[10px] opacity-75">
                    <span>{m.time}</span>
                    {m.sender === "assistant" && (
                      <button
                        onClick={() => speakText(m.text)}
                        className="hover:text-purple-600 flex items-center gap-1 cursor-pointer font-bold"
                        title="Listen to answer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Listen</span>
                      </button>
                    )}
                  </div>
                  {m.isEscalation && (
                    <div className="mt-2 p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between">
                      <span>⚠️ Safety alert: Official consultation advised.</span>
                      <button
                        onClick={onOpenExpertModal}
                        className="underline font-bold text-amber-800"
                      >
                        Connect
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <button
              onClick={handleSpeechInput}
              className={`p-3 rounded-2xl transition-all cursor-pointer ${
                isListening
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
              title="Speak query"
            >
              <Mic className="w-5 h-5" />
            </button>

            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={t("f5_input_placeholder")}
              className="flex-1 px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm bg-gray-50"
            />

            <button
              onClick={() => handleSend()}
              className="px-5 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md shadow-purple-500/20 cursor-pointer"
            >
              <span>{t("f5_btn_send")}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Quick Suggestions & Slide 6 Callout */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Tap to Ask Instantly:</span>
            </h4>
            <div className="space-y-2">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="w-full text-left p-2.5 rounded-xl border border-purple-100 bg-purple-50/40 hover:bg-purple-100/60 text-xs font-semibold text-purple-950 transition-all cursor-pointer flex items-center justify-between"
                >
                  <span className="line-clamp-2">{q}</span>
                  <Send className="w-3 h-3 text-purple-500 shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Slide 6: Easy Explanation */}
          <div className="p-4 rounded-2xl bg-purple-950 text-purple-100 border border-purple-800 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed">
              {t("f5_easy_exp")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
