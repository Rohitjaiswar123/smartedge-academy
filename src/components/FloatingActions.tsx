"use client";

import React from "react";
import { MessageSquare, Phone } from "lucide-react";

export default function FloatingActions() {
  const whatsappUrl =
    "https://wa.me/919820624436?text=Hello%20SmartEdge%20Team,%20I%20want%20to%20know%20more%20about%20your%20courses%20and%20tech%20services.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Phone Call Quick Action */}
      <a
        href="tel:+919820624436"
        aria-label="Call SmartEdge Academy"
        className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-600/40 hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Quick Action with Glow and Label */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group flex items-center"
      >
        <span className="hidden group-hover:block mr-2 px-3 py-1 text-xs font-semibold text-white bg-slate-900 border border-slate-700 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in duration-150">
          Chat on WhatsApp
        </span>
        <div className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-200">
          <MessageSquare className="w-6 h-6 fill-white" />
        </div>
      </a>
    </div>
  );
}
