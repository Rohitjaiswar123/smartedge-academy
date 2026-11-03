import React from "react";
import ContactForm from "@/components/ContactForm";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  HelpCircle 
} from "lucide-react";

export const metadata = {
  title: "Contact SmartEdge Group | Bhiwandi Academy & Software Studio",
  description: "Get in touch with SmartEdge Academy in Bhiwandi. Call +91 9820624436, visit our Laxmi Ajit Complex campus, or request custom software development."
};

export default function ContactPage() {
  const faqs = [
    {
      q: "Where is SmartEdge Academy located in Bhiwandi?",
      a: "We are located at 1st Floor, Laxmi Ajit Complex, near Shiv Mandir, Mubeen Master Rd, Opp Curewell Pharmacy, Gauripada, Bhiwandi, Maharashtra 421305. Walk-ins are welcome from 10 AM to 6 PM."
    },
    {
      q: "How does the 100% Job Placement Assistance work?",
      a: "Our placement cell conducts dedicated resume screening, mock technical interviews, LinkedIn/GitHub profile optimization, and schedules direct interview drives with 100+ partner tech firms until you secure an offer letter."
    },
    {
      q: "Are the courses suitable for non-IT and fresh graduates?",
      a: "Absolutely. All programs begin from absolute zero fundamentals, teaching programming concepts with practical hands-on labs and AI-assisted workflows suitable for students from any academic background."
    },
    {
      q: "Do you also develop custom apps and AI solutions for businesses?",
      a: "Yes, our engineering team builds custom mobile apps (iOS & Android), Next.js SaaS platforms, and automated AI agents for startups, SMEs, and enterprises."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors">
      {/* Header Banner */}
      <div className="relative border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Get in Touch With SmartEdge Group
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Let&apos;s Build Your Career or <span className="gradient-text">Your Next Big App</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about courses, 100% job placement, or need custom app and AI automation development? We are ready to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Bhiwandi Center & Contact Info</h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Feel free to call, WhatsApp, or walk in directly during office hours for immediate guidance.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Direct Telephone & WhatsApp</div>
                  <a
                    href="tel:+919820624436"
                    className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    +91 9820624436
                  </a>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Available Mon - Sat, 9:00 AM - 8:00 PM IST
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Admissions & Business Inquiries</div>
                  <a
                    href="mailto:contact@smartedgegroup.in"
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                  >
                    contact@smartedgegroup.in
                  </a>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Fast response within 24 business hours
                  </p>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-500 shrink-0 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Bhiwandi Campus Address</div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5 leading-snug">
                    1st Floor, Laxmi Ajit Complex, Mubeen Master Rd, Opp Curewell Pharmacy, Gauripada, Bhiwandi, MH 421305
                  </p>
                  <a
                    href="https://maps.google.com/?q=Laxmi+Ajit+Complex+Bhiwandi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-blue-600 dark:text-blue-400 hover:underline mt-2 font-semibold"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* FAQs Section */}
        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Common Questions Answered
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Need more clarification? Here are the most common questions our admissions and solutions team receive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, fidx) => (
              <div
                key={fidx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
              >
                <div className="text-sm font-bold text-slate-900 dark:text-white flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
