"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  Briefcase, 
  Code, 
  Cpu, 
  Database, 
  Smartphone, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { COURSES } from "@/data/courses";
import { AGENCY_SERVICES } from "@/data/services";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aiCourses = COURSES.filter((c) => c.category === "ai-data");
  const softwareCourses = COURSES.filter((c) => c.category === "software-development");
  const digitalCourses = COURSES.filter((c) => c.category === "digital-automation");

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar - High conversion contact line */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-blue-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              1st Floor, Laxmi Ajit Complex, Mubeen Master Rd, Gauripada, Bhiwandi
            </span>
            <span className="hidden lg:inline text-slate-400">|</span>
            <span className="hidden lg:inline text-emerald-400 font-medium">
              ⭐ 100% Job Assistance & Live Industry Projects
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a 
              href="tel:+919820624436" 
              className="flex items-center gap-1 text-slate-200 hover:text-white transition font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              +91 9820624436
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="https://wa.me/919820624436?text=Hi%20SmartEdge%20Team,%20I%20am%20interested%20in%20courses%20and%20tech%20services"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-200 ${
          scrolled 
            ? "bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3" 
            : "bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                SmartEdge <span className="text-blue-400">Group</span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                AI Academy & Tech Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link 
              href="/" 
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 rounded-lg transition"
            >
              Home
            </Link>

            {/* Courses Mega Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button 
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-blue-400 rounded-lg transition"
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              >
                <span>Academy Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCoursesOpen ? "rotate-180 text-blue-400" : ""}`} />
              </button>

              {/* Mega Dropdown Panel */}
              {isCoursesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[900px] bg-slate-900/98 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-150">
                  {/* Column 1: AI & Data */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-cyan-400 font-semibold text-sm">
                      <Database className="w-4 h-4" />
                      <span>AI & Data Science</span>
                    </div>
                    <ul className="space-y-1.5">
                      {aiCourses.map((course) => (
                        <li key={course.slug}>
                          <Link 
                            href={`/courses/${course.slug}`}
                            className="block px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 transition"
                          >
                            <div className="font-medium">{course.title}</div>
                            <div className="text-[11px] text-slate-400 line-clamp-1">{course.tagline}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Software Development */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-blue-400 font-semibold text-sm">
                      <Code className="w-4 h-4" />
                      <span>Software Development</span>
                    </div>
                    <ul className="space-y-1.5">
                      {softwareCourses.slice(0, 5).map((course) => (
                        <li key={course.slug}>
                          <Link 
                            href={`/courses/${course.slug}`}
                            className="block px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 transition"
                          >
                            <div className="font-medium">{course.title}</div>
                            <div className="text-[11px] text-slate-400 line-clamp-1">{course.tagline}</div>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link 
                          href="/courses" 
                          className="text-xs text-blue-400 hover:underline px-2.5 pt-1 block font-medium"
                        >
                          View all software courses →
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3: Digital & Automation */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-emerald-400 font-semibold text-sm">
                      <Cpu className="w-4 h-4" />
                      <span>Digital & Automation</span>
                    </div>
                    <ul className="space-y-1.5">
                      {digitalCourses.map((course) => (
                        <li key={course.slug}>
                          <Link 
                            href={`/courses/${course.slug}`}
                            className="block px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 transition"
                          >
                            <div className="font-medium">{course.title}</div>
                            <div className="text-[11px] text-slate-400 line-clamp-1">{course.tagline}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Promo Box in Mega Menu */}
                    <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-blue-950/60 to-cyan-950/60 border border-blue-800/40">
                      <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        100% Job Placement Assistance
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Resume building, mock interviews, and direct referrals to top tech companies.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services / Tech Agency Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 rounded-lg transition"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>We Build: Apps & AI</span>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-semibold">
                  Agency
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-cyan-400" : ""}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-slate-900/98 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl p-4 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800">
                    Client Engineering Services
                  </div>
                  {AGENCY_SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-3 py-2.5 rounded-xl hover:bg-slate-800/90 text-slate-300 hover:text-white transition group"
                    >
                      <div className="text-xs font-semibold group-hover:text-cyan-300 transition flex items-center justify-between">
                        {service.title}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {service.shortDesc}
                      </div>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-800">
                    <Link 
                      href="/services" 
                      className="block text-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 py-1"
                    >
                      Explore All Agency Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/placements" 
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 rounded-lg transition flex items-center gap-1.5"
            >
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              Placements
            </Link>

            <Link 
              href="/about" 
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 rounded-lg transition"
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 rounded-lg transition"
            >
              Contact
            </Link>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:+919820624436"
              className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white bg-slate-900/60 transition flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              Call Now
            </a>

            <Link
              href="/contact?intent=counseling"
              className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 transition transform active:scale-95 flex items-center gap-1.5"
            >
              <span>Free Counseling</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-200"
            >
              Home
            </Link>

            {/* Mobile Courses Section */}
            <div className="border-t border-slate-800 pt-3">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" />
                Academy Courses (Bhiwandi Campus)
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {COURSES.slice(0, 8).map((course) => (
                  <Link
                    key={course.slug}
                    href={`/courses/${course.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="py-1.5 text-xs text-slate-300 hover:text-white flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-500" />
                    {course.title}
                  </Link>
                ))}
                <Link
                  href="/courses"
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-xs font-semibold text-cyan-400"
                >
                  View All 16+ Courses →
                </Link>
              </div>
            </div>

            {/* Mobile Services Section */}
            <div className="border-t border-slate-800 pt-3">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                App Development & AI Automation
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {AGENCY_SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="py-1.5 text-xs text-slate-300 hover:text-white flex items-center gap-2"
                  >
                    <Smartphone className="w-3 h-3 text-cyan-400" />
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800 pt-3 space-y-2">
              <Link 
                href="/placements" 
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-sm font-medium text-slate-200"
              >
                100% Job Assistance & Placements
              </Link>
              <Link 
                href="/about" 
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-sm font-medium text-slate-200"
              >
                About SmartEdge Group
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-sm font-medium text-slate-200"
              >
                Contact Us & Bhiwandi Center
              </Link>
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href="tel:+919820624436"
                className="w-full py-2.5 text-center text-xs font-semibold rounded-xl bg-slate-800 text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                Call +91 9820624436
              </a>
              <Link
                href="/contact?intent=counseling"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
              >
                Book Free Career Counseling
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
