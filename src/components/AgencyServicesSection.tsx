"use client";

import React from "react";
import Link from "next/link";
import { 
  Smartphone, 
  Globe, 
  Cpu, 
  Workflow, 
  Cloud, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap
} from "lucide-react";
import { AGENCY_SERVICES, AgencyService } from "@/data/services";

export default function AgencyServicesSection() {
  const iconMap: Record<string, React.ElementType> = {
    Smartphone,
    Globe,
    Cpu,
    Workflow,
    Cloud,
    Palette
  };

  return (
    <section id="services" className="py-24 bg-slate-900 border-t border-b border-slate-800 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            Engineering & Software Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            We Build Scalable <span className="gradient-text">Apps & AI Automation</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Beyond education, SmartEdge is a full-cycle software studio. We design, engineer, and deploy mission-critical iOS/Android apps, SaaS web portals, and autonomous AI agents for growing businesses and enterprises.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AGENCY_SERVICES.map((service: AgencyService) => {
            const Icon = iconMap[service.iconName] || Cpu;
            return (
              <div
                key={service.slug}
                className="bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    {service.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition mb-2">
                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      What We Deliver
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.deliverables.slice(0, 3).map((item, iidx) => (
                        <li key={iidx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.techStack.slice(0, 4).map((tech, tidx) => (
                      <span
                        key={tidx}
                        className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-cyan-600 hover:text-white text-slate-200 border border-slate-700 hover:border-cyan-500 transition flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>Explore Solution & Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Agency CTA Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-blue-950/60 border border-cyan-800/40 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Have an App Idea or Need AI Automation For Your Business?
            </h3>
            <p className="text-sm text-slate-300">
              Speak directly with our technical lead. We provide clear architecture blueprints, fixed-cost estimates, and rapid MVP delivery timelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="tel:+919820624436"
              className="px-6 py-3.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition"
            >
              📞 Call +91 9820624436
            </a>
            <Link
              href="/contact?intent=project"
              className="px-6 py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/20 transition flex items-center gap-2"
            >
              <span>Get Free Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
