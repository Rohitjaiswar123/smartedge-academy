import React from "react";
import AgencyServicesSection from "@/components/AgencyServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import { Zap } from "lucide-react";

export const metadata = {
  title: "Custom App Development & AI Automation Services | SmartEdge Group",
  description: "Enterprise software solutions: iOS & Android apps, Next.js web applications, autonomous AI agents, and business workflow automation."
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors">
      {/* Header */}
      <div className="relative border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            Full-Cycle Software Studio
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            We Engineer <span className="gradient-text">Apps & AI Automations</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From modern mobile apps and high-performance SaaS to custom autonomous AI agents, we build the digital infrastructure that scales your business.
          </p>
        </div>
      </div>

      <AgencyServicesSection />

      {/* Quick Quote Section */}
      <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Request a Technical Project Quote</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Get an NDA, architecture recommendation, and milestone estimates within 24 hours.</p>
        </div>
        <ContactForm defaultInterest="Mobile App Development" />
      </div>

      <TestimonialsSection />
    </div>
  );
}
