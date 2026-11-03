import React from "react";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle
} from "lucide-react";
import { COURSES } from "@/data/courses";
import { AGENCY_SERVICES } from "@/data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs transition-colors">
      {/* Upper Footer: Highlights */}
      <div className="border-b border-slate-200 dark:border-slate-800/80 bg-slate-200/50 dark:bg-slate-900/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-slate-900 dark:text-white font-semibold text-sm">100% Job Assistance Guarantee</div>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                Resume building, mock technical interviews, and direct placement drives until you get hired.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <div className="text-slate-900 dark:text-white font-semibold text-sm">Practical & AI-Integrated</div>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                Hands-on coding, live enterprise capstones, and generative AI tool workflows embedded in all courses.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <div className="text-slate-900 dark:text-white font-semibold text-sm">App & AI Automation Agency</div>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                We build custom mobile apps, SaaS web platforms, and automated AI agents for global clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-slate-900 dark:text-white">SmartEdge <span className="text-blue-600 dark:text-blue-400">Group</span></span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Bhiwandi Academy & Software Studio</p>
            </div>
          </Link>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed pr-4">
            SmartEdge Academy in Bhiwandi is a premier career-focused IT and non-IT training institute offering AI-integrated job skills, live projects, and 100% placement support. Our engineering division builds custom mobile apps, web solutions, and AI automations.
          </p>

          <div className="space-y-2.5 pt-2">
            <div className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>
                1st Floor, Laxmi Ajit Complex, Near Shiv Mandir, Mubeen Master Rd, Opp Curewell Pharmacy, Gauripada , Bhiwandi, Maharashtra 421305
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <a href="tel:+919820624436" className="hover:text-blue-600 dark:hover:text-white transition font-semibold">
                +91 9820624436
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
              <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <a href="mailto:info@smartedgegroup.in" className="hover:text-cyan-600 dark:hover:text-white transition">
                info@smartedgegroup.in
              </a>
            </div>
          </div>
        </div>

        {/* AI & Data Courses */}
        <div>
          <h4 className="text-slate-900 dark:text-white font-semibold text-sm mb-3">AI & Data Science</h4>
          <ul className="space-y-2">
            {COURSES.filter((c) => c.category === "ai-data").map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Software Development */}
        <div>
          <h4 className="text-slate-900 dark:text-white font-semibold text-sm mb-3">Software Dev</h4>
          <ul className="space-y-2">
            {COURSES.filter((c) => c.category === "software-development").slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Agency Services & Company */}
        <div>
          <h4 className="text-slate-900 dark:text-white font-semibold text-sm mb-3">Apps & AI Services</h4>
          <ul className="space-y-2">
            {AGENCY_SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition">
                  {s.title}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <Link href="/placements" className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition font-medium">
                Placement Records & Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition font-medium">
                Book Free Skill Assessment
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal / Copyright */}
      <div className="border-t border-slate-200 dark:border-slate-800/80 py-6 px-4 sm:px-6 lg:px-8 text-slate-500 dark:text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {currentYear} SmartEdge Group (Academy & Digital Solutions). All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-slate-800 dark:hover:text-slate-300 transition">About Us</Link>
            <Link href="/placements" className="hover:text-slate-800 dark:hover:text-slate-300 transition">Placements</Link>
            <Link href="/contact" className="hover:text-slate-800 dark:hover:text-slate-300 transition">Contact Bhiwandi Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
