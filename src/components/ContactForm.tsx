"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, PhoneCall, Sparkles } from "lucide-react";
import { COURSES } from "@/data/courses";
import { AGENCY_SERVICES } from "@/data/services";

interface ContactFormProps {
  defaultInterest?: string;
  isCompact?: boolean;
}

export default function ContactForm({ defaultInterest = "", isCompact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: defaultInterest || "Artificial Intelligence Master Program",
    categoryType: "academy", // 'academy' or 'agency'
    mode: "Classroom (Bhiwandi)",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate quick submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello SmartEdge Team! 👋\n` +
      `My Name: ${formData.name || "Inquirer"}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Interested In: ${formData.interest}\n` +
      `Type: ${formData.categoryType === "academy" ? "Academy Course" : "App / AI Automation Project"}\n` +
      `Message: ${formData.message || "I would like more information and free counseling."}`
    );
    window.open(`https://wa.me/919820624436?text=${text}`, "_blank");
  };

  if (submitted) {
    return (
      <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4">
        <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white">Inquiry Received Successfully!</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto">
          Thank you, <span className="text-white font-medium">{formData.name}</span>. Our Senior Career / Tech Consultant will call you shortly on{" "}
          <span className="text-emerald-400 font-medium">{formData.phone}</span>.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-blue-400 hover:underline"
          >
            Submit another query
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Quick Response within 15 Minutes</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Book Free Counseling / Get a Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Visit our Bhiwandi center or get course details & syllabus PDF sent directly to your WhatsApp.
        </p>
      </div>

      {/* Segment Selector: Academy vs Agency */}
      <div className="grid grid-cols-2 gap-2 p-1 bg-slate-950/80 rounded-xl mb-4 border border-slate-800">
        <button
          type="button"
          onClick={() => setFormData({ ...formData, categoryType: "academy", interest: COURSES[0].title })}
          className={`py-2 text-xs font-semibold rounded-lg transition ${
            formData.categoryType === "academy"
              ? "bg-blue-600 text-white shadow"
              : "text-slate-400 hover:text-white"
          }`}
        >
          🎓 Career Courses
        </button>
        <button
          type="button"
          onClick={() => setFormData({ ...formData, categoryType: "agency", interest: AGENCY_SERVICES[0].title })}
          className={`py-2 text-xs font-semibold rounded-lg transition ${
            formData.categoryType === "agency"
              ? "bg-cyan-600 text-white shadow"
              : "text-slate-400 hover:text-white"
          }`}
        >
          ⚡ Apps & AI Automation
        </button>
      </div>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Phone & Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              WhatsApp / Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="+91 9820624436"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Preferred Course / Service Dropdown */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            {formData.categoryType === "academy" ? "Select Course of Interest *" : "Select Service Needed *"}
          </label>
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition"
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

        {/* Learning Mode or Timeline */}
        {formData.categoryType === "academy" ? (
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Preferred Learning Mode
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, mode: "Classroom (Bhiwandi)" })}
                className={`py-2 text-xs rounded-xl border text-center transition ${
                  formData.mode === "Classroom (Bhiwandi)"
                    ? "border-blue-500 bg-blue-500/10 text-blue-300 font-semibold"
                    : "border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                🏫 Classroom (Bhiwandi Center)
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, mode: "Live Online + Hybrid" })}
                className={`py-2 text-xs rounded-xl border text-center transition ${
                  formData.mode === "Live Online + Hybrid"
                    ? "border-blue-500 bg-blue-500/10 text-blue-300 font-semibold"
                    : "border-slate-800 text-slate-400 hover:text-slate-200"
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
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Additional Details / Questions (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="Tell us about your educational background or project requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-2 space-y-2.5">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/30 transition transform active:scale-98 flex items-center justify-center gap-2"
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
            className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 transition flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Connect Instantly on WhatsApp (+91 9820624436)</span>
          </button>
        </div>
      </div>
    </form>
  );
}
