"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Laptop, 
  Cpu, 
  Briefcase,
  Star
} from "lucide-react";
import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800">
      {/* Background Glow & Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>SmartEdge Academy in Bhiwandi • AI-Powered Job Skills</span>
            </div>

            {/* Main Headline from User Flyer */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Don&apos;t Just Get A Degree. <br />
              <span className="gradient-text">Get Job-Ready With AI.</span>
            </h1>

            {/* Flyer Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Completed your degree but still struggling to land an IT job? Upgrade your skills, build real production projects, master modern AI tools, and prepare for interviews with industry mentors.
            </p>

            {/* 100% Job Assistance Highlight Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-emerald-950/30 border border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-emerald-500/5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-extrabold text-lg sm:text-xl flex items-center gap-2">
                    100% JOB ASSISTANCE*
                    <span className="text-[10px] bg-emerald-500 text-slate-950 font-bold px-2 py-0.5 rounded-full">
                      Guaranteed
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Interview Preparation • Resume Building • Mock Interviews • Placement Support
                  </p>
                </div>
              </div>

              <a
                href="tel:+919820624436"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow transition"
              >
                <Phone className="w-3.5 h-3.5" />
                Call +91 9820624436
              </a>
            </div>

            {/* Dual CTAs & Secondary Info */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/courses"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-500/25 transition transform active:scale-95 flex items-center gap-2"
              >
                <span>Explore All 16+ Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500 transition flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Build Apps & AI (Agency)</span>
              </Link>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div>
                <div className="text-2xl font-black text-white">16+</div>
                <div className="text-xs text-slate-400">Career-Focused Courses</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-400">100%</div>
                <div className="text-xs text-slate-400">Placement Support</div>
              </div>
              <div>
                <div className="text-2xl font-black text-cyan-400">₹4.5 - 16L</div>
                <div className="text-xs text-slate-400">Average Salary Band</div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Direct Lead Form */}
          <div className="lg:col-span-5 relative">
            {/* Decorative background glow for form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-3xl blur-xl opacity-70" />
            <div className="relative">
              <ContactForm defaultInterest="Artificial Intelligence Master Program" isCompact={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
