"use client";

import React from "react";
import { 
  Sparkles, 
  Terminal, 
  Briefcase, 
  Award, 
  Compass, 
  Code2, 
  CheckCircle2, 
  Cpu 
} from "lucide-react";

export default function WhySmartEdge() {
  const pillars = [
    {
      icon: Terminal,
      title: "Practical Training",
      subtitle: "Hands-on First",
      desc: "80% practical coding and real problem-solving. No dry slides or outdated theoretical memorization."
    },
    {
      icon: Cpu,
      title: "Live Projects (Industry-Based)",
      subtitle: "Real Production Work",
      desc: "Build scalable e-commerce systems, AI chatbots, and full-stack SaaS apps that you can showcase to hiring managers."
    },
    {
      icon: Award,
      title: "Certified Courses",
      subtitle: "Recognized Credential",
      desc: "Receive industry-recognized certificates with verifiable digital credentials upon capstone project defense."
    },
    {
      icon: Compass,
      title: "Career Guidance",
      subtitle: "1-on-1 Roadmap",
      desc: "Get personalized tech path counseling based on your strengths, academic stream, and target salary bracket."
    },
    {
      icon: Briefcase,
      title: "Expert Mentors",
      subtitle: "Active Tech Leads",
      desc: "Learn directly from practitioners who actively build mobile apps, enterprise cloud backends, and AI automations."
    },
    {
      icon: Code2,
      title: "Real-World Skills",
      subtitle: "Modern Toolchain",
      desc: "Master modern developer tools: Git, GitHub, Docker, Cursor, Copilot, APIs, and agile sprint workflows."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Better Skills, Brighter Careers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Students & Professionals Choose <span className="gradient-text">SmartEdge</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Everything you need to go from beginner to confident, hired IT professional under one roof in Bhiwandi.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {item.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
