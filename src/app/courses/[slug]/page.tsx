import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Sparkles, 
  Clock, 
  MapPin, 
  TrendingUp, 
  CheckCircle2, 
  Layers, 
  HelpCircle,
  Briefcase,
  Star,
  ShieldCheck
} from "lucide-react";
import { COURSES, Course } from "@/data/courses";
import ContactForm from "@/components/ContactForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.title} in Bhiwandi | SmartEdge Academy`,
    description: `${course.tagline} - Learn with live projects, AI-powered developer workflows, and 100% job placement assistance.`
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors">
      {/* Hero Header */}
      <div className="relative border-b border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/60 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Course Intro */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-500/30">
                  {course.categoryLabel}
                </span>
                {course.highlightBadge && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white dark:text-slate-950">
                    {course.highlightBadge}
                  </span>
                )}
                <div className="flex items-center gap-1 text-xs text-amber-500 dark:text-amber-400 font-semibold ml-2">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{course.rating}</span>
                  <span className="text-slate-500 dark:text-slate-400">({course.reviewsCount} verified student reviews)</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {course.tagline}
              </p>

              {/* Course Meta Pills */}
              <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-xl shadow-xs">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Duration: <strong>{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-xl shadow-xs">
                  <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Mode: <strong>{course.mode}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 px-3 py-1.5 rounded-xl shadow-xs">
                  <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Salary Potential: <strong>{course.avgSalary}</strong></span>
                </div>
              </div>

              {/* 100% Job Guarantee Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Includes 100% Job Placement Assistance at our Bhiwandi Center</span>
              </div>
            </div>

            {/* Right Course Visual */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative bg-white dark:bg-slate-900">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
                <div className="p-4 bg-white/95 dark:bg-slate-900/90 text-center border-t border-slate-200 dark:border-transparent">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Next Offline Batch in Bhiwandi:</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Upcoming Monday (Limited Seats)</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Body: Details & Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Details Column */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Course Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* AI Advantage Box */}
            <div className="p-6 rounded-2xl bg-blue-50 dark:bg-gradient-to-r dark:from-blue-950/60 dark:to-cyan-950/60 border border-blue-200 dark:border-blue-800/40 space-y-2">
              <div className="flex items-center gap-2 text-blue-700 dark:text-cyan-300 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                The SmartEdge AI Edge
              </div>
              <p className="text-xs sm:text-sm text-blue-950 dark:text-slate-300 leading-relaxed">
                {course.aiIntegration}
              </p>
            </div>

            {/* Tools Covered */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Tools & Technologies You Will Master</h3>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold shadow-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Detailed Curriculum Syllabus */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Curriculum & Modules</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Step-by-step learning journey from fundamentals to production projects.</p>
                </div>
              </div>

              <div className="space-y-4">
                {course.modules.map((mod, midx) => (
                  <div
                    key={midx}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden shadow-xs"
                  >
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
                      <span>{mod.title}</span>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Module {midx + 1}</span>
                    </div>
                    <ul className="p-4 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {mod.topics.map((topic, tidx) => (
                        <li key={tidx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Target Job Roles & Career Profiles
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {course.careerRoles.map((role, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {course.faqs && course.faqs.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {course.faqs.map((faq, fidx) => (
                    <div key={fidx} className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{faq.question}</div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sticky Form Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <ContactForm defaultInterest={course.title} />

              {/* Direct Call / WhatsApp Box */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-3">
                <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  Speak Directly with Course Instructor
                </div>
                <div className="text-xl font-extrabold text-slate-900 dark:text-white">
                  +91 9820624436
                </div>
                <div className="flex gap-2 justify-center">
                  <a
                    href="tel:+919820624436"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white"
                  >
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/919820624436?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(course.title)}%20at%20SmartEdge%20Academy`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
