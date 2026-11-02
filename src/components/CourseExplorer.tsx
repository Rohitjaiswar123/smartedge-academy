"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  Clock, 
  TrendingUp, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Database, 
  Code, 
  Cpu 
} from "lucide-react";
import { COURSES, Course } from "@/data/courses";

export default function CourseExplorer() {
  const [activeTab, setActiveTab] = useState<"all" | "ai-data" | "software-development" | "digital-automation">("all");

  const filteredCourses = activeTab === "all" 
    ? COURSES 
    : COURSES.filter((c) => c.category === activeTab);

  return (
    <section id="courses" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Learn Today&apos;s Most In-Demand Skills
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore Our <span className="gradient-text">AI-Integrated Programs</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Every course is engineered with live hands-on projects, industry mentors, and 100% placement support at our Bhiwandi training center.
            </p>
          </div>

          {/* Tab Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl shrink-0">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Courses ({COURSES.length})
            </button>
            <button
              onClick={() => setActiveTab("ai-data")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTab === "ai-data"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Database className="w-3 h-3" />
              AI & Data (5)
            </button>
            <button
              onClick={() => setActiveTab("software-development")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTab === "software-development"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Code className="w-3 h-3" />
              Software Dev (6)
            </button>
            <button
              onClick={() => setActiveTab("digital-automation")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTab === "digital-automation"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Cpu className="w-3 h-3" />
              Digital & Automation (5)
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course: Course) => (
            <div
              key={course.slug}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Badges on Image */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                      {course.categoryLabel}
                    </span>
                    {course.highlightBadge && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500 text-slate-950">
                        {course.highlightBadge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-emerald-400">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Avg: {course.avgSalary}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-500">({course.reviewsCount} reviews)</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{course.mode}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition leading-snug">
                    <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {course.tagline}
                  </p>

                  {/* AI Integration Highlight */}
                  <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-900/50 text-[11px] text-cyan-300 flex items-start gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">
                      <strong className="text-white">AI Edge:</strong> {course.aiIntegration}
                    </span>
                  </div>

                  {/* Tools list */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                      Key Tools Covered
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {course.tools.slice(0, 4).map((tool, tidx) => (
                        <span
                          key={tidx}
                          className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px] font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                      {course.tools.length > 4 && (
                        <span className="px-1.5 py-0.5 text-slate-500 text-[10px]">
                          +{course.tools.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-3">
                <Link
                  href={`/courses/${course.slug}`}
                  className="flex-1 text-center py-2.5 rounded-xl text-xs font-semibold border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition"
                >
                  View Syllabus
                </Link>

                <Link
                  href={`/contact?course=${encodeURIComponent(course.title)}`}
                  className="flex-1 text-center py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow transition flex items-center justify-center gap-1"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
