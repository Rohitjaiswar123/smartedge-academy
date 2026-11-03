"use client";

import React from "react";
import { Star, Building2 } from "lucide-react";
import { TESTIMONIALS, HIRING_PARTNERS } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-100/60 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            ⭐ Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Success Stories from Our <span className="gradient-text">Graduates & Clients</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            See how SmartEdge helped students transform their careers and empowered businesses with custom software & AI automation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 group"
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
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
                      Placed: {t.salaryPackage}
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-cyan-50 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-500/30">
                      Enterprise Client
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 object-cover"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{t.role}</div>
                  <div className="text-[10px] text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                    {t.courseOrService}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Partners Bar */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 p-8 text-center space-y-6 shadow-sm">
          <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Where Our Students Work & Placement Partners</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {HIRING_PARTNERS.map((partner, pidx) => (
              <div
                key={pidx}
                className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 dark:hover:border-slate-600 text-xs font-semibold tracking-wide transition shadow-xs"
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
