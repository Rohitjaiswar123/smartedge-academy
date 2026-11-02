import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  HelpCircle,
  Clock,
  Zap,
  Phone
} from "lucide-react";
import { AGENCY_SERVICES, AgencyService } from "@/data/services";
import ContactForm from "@/components/ContactForm";

export async function generateStaticParams() {
  return AGENCY_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = AGENCY_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Breadcrumb Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition">Engineering Services</Link>
          <span>/</span>
          <span className="text-cyan-400 font-medium truncate">{service.title}</span>
        </div>
      </div>

      {/* Service Hero */}
      <div className="relative border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>SmartEdge Tech Solutions • Enterprise Engineering</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {service.tagline}
              </p>

              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                {service.shortDesc}
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Production SLA & Code Ownership</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Rapid MVP Deployment</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative bg-slate-900">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="p-4 bg-slate-900/90 text-center">
                  <div className="text-xs text-cyan-400 font-semibold">Ready to start?</div>
                  <div className="text-sm font-bold text-white mt-0.5">Free Architecture Consultation</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content & Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Deliverables Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                What We Deliver
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {service.deliverables.map((del, didx) => (
                  <div
                    key={didx}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm font-medium text-slate-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Features */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Architectural Highlights</h3>
              <div className="grid grid-cols-1 gap-4">
                {service.features.map((feat, fidx) => (
                  <div
                    key={fidx}
                    className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-1.5"
                  >
                    <h4 className="text-base font-bold text-white">{feat.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Technologies & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, tidx) => (
                  <span
                    key={tidx}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Process */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Our 4-Step Agile Delivery Process</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.processSteps.map((step, sidx) => (
                  <div key={sidx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-xs font-bold text-cyan-400">Phase 0{sidx + 1}</div>
                    <div className="text-sm font-bold text-white">{step.title}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-400" />
                  Client FAQs
                </h3>
                <div className="space-y-3">
                  {service.faqs.map((faq, fidx) => (
                    <div key={fidx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <div className="text-sm font-bold text-white">{faq.question}</div>
                      <p className="text-xs sm:text-sm text-slate-400">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sticky Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <ContactForm defaultInterest={service.title} />

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Direct Technical Project Discussion
                </div>
                <div className="text-xl font-extrabold text-white">
                  +91 9820624436
                </div>
                <p className="text-xs text-slate-400">
                  NDA signed before any proprietary discovery discussions.
                </p>
                <div className="flex gap-2 justify-center pt-1">
                  <a
                    href="tel:+919820624436"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white"
                  >
                    Call Technical Lead
                  </a>
                  <a
                    href={`https://wa.me/919820624436?text=Hi,%20I%20want%20to%20discuss%20a%20project%20for%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white"
                  >
                    WhatsApp Chat
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
