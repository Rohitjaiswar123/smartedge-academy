import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Building2
} from "lucide-react";
import JobAssistanceSection from "@/components/JobAssistanceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "100% Job Assistance & Placement Records | SmartEdge Academy Bhiwandi",
  description: "Learn how SmartEdge Academy guarantees 100% placement support with resume building, mock interviews, and partner recruitment drives."
};

export default function PlacementsPage() {
  const stats = [
    { label: "Placement Success Rate", value: "100%*", color: "text-emerald-400" },
    { label: "Highest Package Offered", value: "₹16 LPA", color: "text-blue-400" },
    { label: "Average Starting Salary", value: "₹5.8 LPA", color: "text-cyan-400" },
    { label: "Hiring Corporate Partners", value: "100+", color: "text-indigo-400" }
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero Banner */}
      <div className="relative border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% Job Assistance Commitment
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            We Don&apos;t Stop Until <span className="gradient-text">You Get Hired</span>
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From your very first line of code to receiving your official offer letter, our dedicated placement department coaches you every step of the way.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-4xl mx-auto">
            {stats.map((stat, sidx) => (
              <div key={sidx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <div className={`text-2xl sm:text-3xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <JobAssistanceSection />
      <TestimonialsSection />

      {/* Free Assessment Action */}
      <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Book Free Career Counseling & Assessment</h2>
          <p className="text-sm text-slate-400 mt-1">Get an honest evaluation of your current skill level and a tailored learning plan.</p>
        </div>
        <ContactForm defaultInterest="Full Stack Web Developer (Next.js & Node.js)" />
      </div>
    </div>
  );
}
