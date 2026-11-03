import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Target, 
  Cpu 
} from "lucide-react";
import BhiwandiCampusSection from "@/components/BhiwandiCampusSection";
import WhySmartEdge from "@/components/WhySmartEdge";

export const metadata = {
  title: "About SmartEdge Group | AI Academy & Software Studio Bhiwandi",
  description: "Learn about SmartEdge Academy in Bhiwandi, our mission to make students job-ready with AI, and our tech solutions arm building apps and automations."
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header */}
      <div className="relative border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Better Skills, Brighter Careers
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Empowering Careers & <span className="gradient-text">Engineering Tomorrow</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            SmartEdge Group was founded in Bhiwandi to solve a critical problem: degrees alone no longer guarantee jobs. We prepare youth with AI-powered practical skills while building production software for global businesses.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To bridge the massive divide between conventional university syllabi and modern high-paying tech jobs. By embedding AI coding tools, live enterprise capstones, and rigorous 1-on-1 interview simulations into our training, we ensure every student becomes genuinely job-ready.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-600/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Dual Advantage</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              SmartEdge operates both as a training institute and an active software engineering studio. Our students don&apos;t just study from textbooks—they observe, interact with, and contribute to actual production apps and AI automation systems built for real-world clients.
            </p>
          </div>
        </div>
      </div>

      <WhySmartEdge />
      <BhiwandiCampusSection />

      {/* Bottom CTA */}
      <div className="py-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
          Ready to Upgrade Your Future?
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">
          Visit our Bhiwandi campus or speak with our mentors directly to discover which IT program matches your background.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition"
          >
            Visit Campus & Book Counseling
          </Link>
          <a
            href="tel:+919820624436"
            className="px-6 py-3 rounded-xl font-semibold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-slate-700 transition"
          >
            Call Us: +91 9820624436
          </a>
        </div>
      </div>
    </div>
  );
}
