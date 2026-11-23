import React from "react";
import Link from "next/link";
import { 
  ShieldCheck
} from "lucide-react";
import JobAssistanceSection from "@/components/JobAssistanceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import { getBreadcrumbSchema, getFaqSchema, SITE_URL } from "@/lib/jsonld";

export const metadata = {
  title: "100% Job Assistance & Placement Records | SmartEdge Academy Bhiwandi",
  description:
    "Learn how SmartEdge Academy guarantees 100% placement support with resume building, mock technical interviews, and corporate hiring drives with 100+ partner tech companies.",
  alternates: {
    canonical: "/placements",
  },
  openGraph: {
    title: "100% Job Assistance & Placement Records | SmartEdge Academy Bhiwandi",
    description:
      "Learn how SmartEdge Academy guarantees 100% placement support with resume building, mock interviews, and partner recruitment drives.",
    url: `${SITE_URL}/placements`,
  },
};

export default function PlacementsPage() {
  const stats = [
    { label: "Placement Success Rate", value: "100%*", color: "text-emerald-600 dark:text-emerald-400" },
    { label: "Highest Package Offered", value: "₹16 LPA", color: "text-blue-600 dark:text-blue-400" },
    { label: "Average Starting Salary", value: "₹5.8 LPA", color: "text-cyan-600 dark:text-cyan-400" },
    { label: "Hiring Corporate Partners", value: "100+", color: "text-indigo-600 dark:text-indigo-400" }
  ];

  const placementFaqs = [
    {
      question: "What does the 100% Job Assistance guarantee include?",
      answer: "Every enrolled student receives resume curation, LinkedIn/GitHub profile optimization, 1-on-1 technical mock interviews, behavioral coaching, and unlimited interview opportunities with 100+ hiring partners until an offer letter is secured.",
    },
    {
      question: "What is the average starting salary for SmartEdge graduates?",
      answer: "The average starting salary for fresh graduates and career switchers is ₹5.8 LPA, with top performers securing packages up to ₹16 LPA.",
    },
    {
      question: "Are placements restricted to Bhiwandi or across India?",
      answer: "Our hiring partners are based across Mumbai, Thane, Navi Mumbai, Pune, Bangalore, Hyderabad, and remote-first technology startups.",
    },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "100% Job Assistance & Placements", url: "/placements" },
  ]);

  const faqSchema = getFaqSchema(placementFaqs);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* Breadcrumb Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/50 py-3 px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Placements & Job Assistance</span>
        </nav>
      </div>

      {/* Hero Banner */}
      <div className="relative border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% Job Assistance Commitment
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            We Don&apos;t Stop Until <span className="gradient-text">You Get Hired</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From your very first line of code to receiving your official offer letter, our dedicated placement department coaches you every step of the way.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-4xl mx-auto">
            {stats.map((stat, sidx) => (
              <div key={sidx} className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                <div className={`text-2xl sm:text-3xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <JobAssistanceSection />
      <TestimonialsSection />

      {/* Free Assessment Action */}
      <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Book Free Career Counseling & Assessment</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Get an honest evaluation of your current skill level and a tailored learning plan.</p>
        </div>
        <ContactForm defaultInterest="Full Stack Web Developer (Next.js & Node.js)" />
      </div>
    </div>
  );
}
