"use client";

import React from "react";
import Link from "next/link";
import { MessageSquareText, FileText, Users, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

export default function JobAssistanceSection() {
  const steps = [
    {
      icon: MessageSquareText,
      title: "Interview Preparation",
      description:
        "Comprehensive training on core data structures, algorithms, system design, HR rounds, and behavioural questions to boost your interview confidence.",
      color: "from-blue-600 to-cyan-500",
      bulletPoints: ["Technical Q&A Drilling", "Live Problem Solving", "Soft Skills & Communication"]
    },
    {
      icon: FileText,
      title: "Resume Building",
      description:
        "Craft ATS-optimized, high-impact resumes that highlight your live projects, technical stack, GitHub repositories, and AI tool proficiencies.",
      color: "from-indigo-600 to-blue-500",
      bulletPoints: ["ATS Score Optimization", "GitHub & LinkedIn Review", "Portfolio Website Setup"]
    },
    {
      icon: Users,
      title: "Mock Interviews",
      description:
        "Simulate real tech interview rounds with senior engineers and hiring managers from top MNCs with actionable 1-on-1 feedback.",
      color: "from-cyan-600 to-teal-500",
      bulletPoints: ["1-on-1 Coding Screenings", "Live Feedback & Scores", "Weakness Elimination"]
    },
    {
      icon: Briefcase,
      title: "Placement Support",
      description:
        "Dedicated placement coordinators schedule direct interviews with corporate partners, startups, and IT firms until you receive your offer letter.",
      color: "from-emerald-600 to-green-500",
      bulletPoints: ["Direct Hiring Drives", "Salary Negotiation Support", "Ongoing Career Mentorship"]
    }
  ];

  return (
    <section className="py-20 bg-slate-900/50 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            ⭐ The SmartEdge Career Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Our <span className="gradient-text">100% Job Assistance</span> Works
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We don&apos;t leave your career to chance. From day one, you are guided through our battle-tested 4-step job readiness framework.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/10 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Step 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  {step.bulletPoints.map((bp, bidx) => (
                    <li key={bidx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-cyan-900/40 border border-blue-800/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Not Sure Which Career Path Is Right For You?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Get a 1-on-1 profile evaluation and free skill assessment at our Bhiwandi campus.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact?intent=assessment"
              className="px-5 py-2.5 text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition flex items-center gap-2"
            >
              <span>Book Free Skill Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
