import React from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  HelpCircle 
} from "lucide-react";
import { 
  getFaqSchema, 
  getBreadcrumbSchema, 
  PHYSICAL_ADDRESS, 
  GEO_COORDINATES, 
  PHONE_NUMBER, 
  EMAIL_ADDRESS, 
  SITE_URL 
} from "@/lib/jsonld";

export const metadata = {
  title: "Contact SmartEdge Group | Bhiwandi Academy & Software Studio",
  description:
    "Get in touch with SmartEdge Academy in Bhiwandi. Call +91 9820624436, visit our Laxmi Ajit Complex campus, or request custom software development.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact SmartEdge Group | Bhiwandi Academy & Software Studio",
    description:
      "Get in touch with SmartEdge Academy in Bhiwandi. Call +91 9820624436, visit our Laxmi Ajit Complex campus, or request custom software development.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  const faqs = [
    {
      question: "Where is SmartEdge Academy located in Bhiwandi?",
      answer: "We are located at 1st Floor, Laxmi Ajit Complex, near Shiv Mandir, Mubeen Master Rd, Opp Curewell Pharmacy, Gauripada, Bhiwandi, Maharashtra 421305. Walk-ins are welcome from 10 AM to 6 PM.",
    },
    {
      question: "How does the 100% Job Placement Assistance work?",
      answer: "Our placement cell conducts dedicated resume screening, mock technical interviews, LinkedIn/GitHub profile optimization, and schedules direct interview drives with 100+ partner tech firms until you secure an offer letter.",
    },
    {
      question: "Are the courses suitable for non-IT and fresh graduates?",
      answer: "Absolutely. All programs begin from absolute zero fundamentals, teaching programming concepts with practical hands-on labs and AI-assisted workflows suitable for students from any academic background.",
    },
    {
      question: "Do you also develop custom apps and AI solutions for businesses?",
      answer: "Yes, our engineering team builds custom mobile apps (iOS & Android), Next.js SaaS platforms, and automated AI agents for startups, SMEs, and enterprises.",
    },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  const faqSchema = getFaqSchema(faqs);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact SmartEdge Group",
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "SmartEdge Academy",
      telephone: PHONE_NUMBER,
      email: EMAIL_ADDRESS,
      address: PHYSICAL_ADDRESS,
      geo: GEO_COORDINATES,
    },
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
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
          <span className="text-blue-600 dark:text-blue-400 font-medium">Contact Us</span>
        </nav>
      </div>

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Direct Contacts</h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Connect with our academic counselors, career advisors, or technical solutions team. We reply within a few hours.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Phone & WhatsApp</div>
                  <a href="tel:+919820624436" className="text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 transition block">
                    +91 9820624436
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Available Mon-Sat from 10:00 AM to 7:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-600/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Inquiry</div>
                  <a 
                    href="mailto:contact@smartedgegroup.in" 
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-cyan-600 transition block"
                  >
                    contact@smartedgegroup.in
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-400">For course admissions & technical proposal RFPs</p>
                </div>
              </div>

              {/* Campus Address */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-600/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bhiwandi Center</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                    1st Floor, Laxmi Ajit Complex, near Shiv Mandir, Mubeen Master Rd, Opp Curewell Pharmacy, Gauripada, Bhiwandi, Maharashtra 421305
                  </div>
                  <a
                    href="https://maps.google.com/?q=SmartEdge+Academy+Bhiwandi"
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
                  <span>{faq.question}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
