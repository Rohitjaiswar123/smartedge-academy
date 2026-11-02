import React from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Navigation, 
  Sparkles,
  HelpCircle
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const faqs = [
    {
      q: "Where is SmartEdge Academy located in Bhiwandi?",
      a: "We are situated at 1st Floor, Laxmi Ajit Complex, Near Shiv Mandir, Mubeen Master Rd, Opp Curewell Pharmacy, Gauripada Samad Nagar, Bhiwandi 421305. The center is easily accessible by auto and public transport."
    },
    {
      q: "How does the 100% Job Assistance work?",
      a: "Every student who finishes their coursework and capstone project undergoes our 4-pillar placement prep: resume audit, technical drilling, mock interviews, and direct interviews scheduled with our 100+ partner companies until placed."
    },
    {
      q: "Do you offer demo classes before enrollment?",
      a: "Yes! You can book a free demo session and a 1-on-1 career counseling meeting with our senior instructors before deciding."
    },
    {
      q: "Do you also develop custom apps and AI solutions for businesses?",
      a: "Yes, our engineering team builds custom mobile apps (iOS & Android), Next.js SaaS platforms, and automated AI agents for startups, SMEs, and enterprises."
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Header Banner */}
      <div className="relative border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Get in Touch With SmartEdge Group
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let&apos;s Build Your Career or <span className="gradient-text">Your Next Big App</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about courses, 100% job placement, or need custom app and AI automation development? We are ready to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Bhiwandi Center & Contact Info</h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Feel free to call, WhatsApp, or walk in directly during office hours for immediate guidance.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Telephone & WhatsApp</div>
                  <a
                    href="tel:+919820624436"
                    className="text-lg font-bold text-white hover:text-blue-400 transition"
                  >
                    +91 9820624436
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Available Mon - Sat, 9:00 AM - 8:00 PM IST
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email Inquiries</div>
                  <a
                    href="mailto:info@smartedgegroup.in"
                    className="text-base font-bold text-white hover:text-cyan-400 transition"
                  >
                    info@smartedgegroup.in
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Admissions, partnerships, and client project proposals
                  </p>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Physical Address</div>
                  <div className="text-sm font-bold text-white leading-snug mt-0.5">
                    SmartEdge Academy
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    1st Floor, Laxmi Ajit Complex, Near Shiv Mandir, Mubeen Master Rd, Opp Curewell Pharmacy, Gauripada Samad Nagar, Bhiwandi, Maharashtra 421305
                  </p>
                  <a
                    href="https://maps.google.com/?q=Laxmi+Ajit+Complex+Bhiwandi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:underline font-semibold mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Connect Button */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 space-y-3">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                Prefer Instant Chat?
              </div>
              <p className="text-xs text-slate-300">
                Message our counseling team directly on WhatsApp for instant brochure downloads and batch timings.
              </p>
              <a
                href="https://wa.me/919820624436?text=Hello%20SmartEdge%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20tech%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center justify-center gap-2"
              >
                Start WhatsApp Chat (+91 9820624436)
              </a>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* FAQs Section */}
        <div className="mt-24 pt-12 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Common Questions Answered
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Need more clarification? Here are the most common questions our admissions and solutions team receive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, fidx) => (
              <div
                key={fidx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2"
              >
                <div className="text-sm font-bold text-white flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
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
