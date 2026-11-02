import React from "react";
import CourseExplorer from "@/components/CourseExplorer";
import JobAssistanceSection from "@/components/JobAssistanceSection";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "All IT & Career Courses in Bhiwandi | SmartEdge Academy",
  description: "Explore 16+ career-focused courses in AI, Data Science, Full Stack, Python, Java, Digital Marketing, and Cloud with 100% Job Assistance."
};

export default function CoursesPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="relative border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Bhiwandi&apos;s #1 Career Academy
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Industry-Approved <span className="gradient-text">IT & AI Courses</span>
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Gain job-ready skills with hands-on labs, AI-assisted development, live project capstones, and dedicated interview preparation.
          </p>
        </div>
      </div>

      <CourseExplorer />
      <JobAssistanceSection />
    </div>
  );
}
