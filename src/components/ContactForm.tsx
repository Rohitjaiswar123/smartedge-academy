"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  MapPin, 
  MessageSquare,
  ArrowRight 
} from "lucide-react";
import { COURSES } from "@/data/courses";
import { AGENCY_SERVICES } from "@/data/services";

interface ContactFormProps {
  defaultInterest?: string;
  defaultCategory?: "academy" | "agency";
  isCompact?: boolean;
}

export default function ContactForm({
  defaultInterest,
  defaultCategory = "academy",
  isCompact = false
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: defaultInterest || COURSES[0].title,
    categoryType: defaultCategory,
    mode: "Classroom (Bhiwandi)",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello SmartEdge Team! My name is ${formData.name || "Student/Client"}. I am interested in: ${formData.interest} (${formData.categoryType === "academy" ? "Course" : "Agency Service"}). Learning Mode: ${formData.mode}. Phone: ${formData.phone || "Not specified"}. Please share full details and brochure.`
    );
    window.open(`https://wa.me/919820624436?text=${text}`, "_blank");
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-emerald-500/40 text-center space-y-4 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Inquiry Received Successfully!</h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
          Thank you <span className="font-semibold text-blue-600 dark:text-blue-400">{formData.name}</span>. Our senior career mentor / technical lead will contact you at <span className="font-semibold text-slate-900 dark:text-white">{formData.phone}</span> within 15 minutes.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleWhatsAppDirect}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp Directly</span>
          </button>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
          >
            Submit Another Query
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl relative backdrop-blur-xl transition-colors"
    >
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          Quick Response Within 15 Minutes
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Book Free Counseling / Get a Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Visit our Bhiwandi center or get course details & syllabus PDF sent directly to your WhatsApp.
        </p>
      </div>

      {/* Segment Selector: Academy vs Agency */}
      <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-950/80 rounded-xl mb-4 border border-slate-200 dark:border-slate-800">
        <button
          type="button"
          onClick={() => setFormData({ ...formData, categoryType: "academy", interest: COURSES[0].title })}
          className={`py-2 text-xs font-semibold rounded-lg transition ${
            formData.categoryType === "academy"
              ? "bg-blue-600 text-white shadow-sm font-bold"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          🎓 Career Courses
        </button>
        <button
          type="button"
          onClick={() => setFormData({ ...formData, categoryType: "agency", interest: AGENCY_SERVICES[0].title })}
          className={`py-2 text-xs font-semibold rounded-lg transition ${
            formData.categoryType === "agency"
              ? "bg-cyan-600 text-white shadow-sm font-bold"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          ⚡ Apps & AI Automation
        </button>
      </div>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 transition"
          />
        </div>

        {/* Phone & Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              WhatsApp / Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="+91 9820624436"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 transition"
            />
          </div>
        </div>

        {/* Preferred Course / Service Dropdown */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            {formData.categoryType === "academy" ? "Select Course of Interest *" : "Select Service Needed *"}
          </label>
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 transition"
          >
            {formData.categoryType === "academy" ? (
              <>
                <optgroup label="AI & Data Science">
                  {COURSES.filter((c) => c.category === "ai-data").map((c) => (
                    <option key={c.slug} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Software Development">
                  {COURSES.filter((c) => c.category === "software-development").map((c) => (
                    <option key={c.slug} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Digital & Automation">
                  {COURSES.filter((c) => c.category === "digital-automation").map((c) => (
                    <option key={c.slug} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </optgroup>
              </>
            ) : (
              AGENCY_SERVICES.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Learning Mode */}
        {formData.categoryType === "academy" ? (
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Preferred Learning Mode
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, mode: "Classroom (Bhiwandi)" })}
                className={`py-2 text-xs rounded-xl border text-center transition ${
                  formData.mode === "Classroom (Bhiwandi)"
                    ? "border-blue-600 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-500/20 dark:text-blue-300 font-bold shadow-xs"
                    : "border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                🏫 Classroom (Bhiwandi Center)
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, mode: "Live Online + Hybrid" })}
                className={`py-2 text-xs rounded-xl border text-center transition ${
                  formData.mode === "Live Online + Hybrid"
                    ? "border-blue-600 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-500/20 dark:text-blue-300 font-bold shadow-xs"
                    : "border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                💻 Live Online / Hybrid
              </button>
            </div>
          </div>
        ) : null}

        {/* Optional Message */}
        {!isCompact && (
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Additional Details / Questions (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="Tell us about your educational background or project requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 transition"
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-2 space-y-2.5">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 transition transform active:scale-98 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>Submitting...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit & Get Syllabus + Fee Structure</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 border border-emerald-300 dark:bg-emerald-600/20 dark:hover:bg-emerald-600/30 dark:text-emerald-300 dark:border-emerald-500/40 transition flex items-center justify-center gap-2 shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            <span>Connect Instantly on WhatsApp (+91 9820624436)</span>
          </button>
        </div>
      </div>
    </form>
  );
}
