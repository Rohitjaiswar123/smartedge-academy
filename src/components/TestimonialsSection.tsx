"use client";

import React from "react";
import { Star, Quote, CheckCircle, TrendingUp, Building2 } from "lucide-react";
import { TESTIMONIALS, HIRING_PARTNERS } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            ⭐ Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Success Stories from Our <span className="gradient-text">Graduates & Clients</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            See how SmartEdge helped students transform their careers and empowered businesses with custom software & AI automation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group"
            >
              <div>
                {/* Rating & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {t.salaryPackage ? (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      Placed: {t.salaryPackage}
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                      Enterprise Client
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-400 transition">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.role} • <span className="text-slate-300 font-medium">{t.company}</span>
                  </div>
                  <div className="text-[10px] text-blue-400 font-medium mt-0.5">
                    {t.courseOrService}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Partners Bar */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800/80 p-8 text-center space-y-6">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Building2 className="w-4 h-4 text-blue-400" />
            <span>Where Our Students Work & Placement Partners</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {HIRING_PARTNERS.map((partner, pidx) => (
              <div
                key={pidx}
                className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 text-xs font-semibold tracking-wide transition"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
