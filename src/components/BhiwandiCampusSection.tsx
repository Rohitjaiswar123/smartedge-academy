"use client";

import React from "react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  CheckCircle2, 
  Laptop, 
  Wifi, 
  Users, 
  Coffee 
} from "lucide-react";

export default function BhiwandiCampusSection() {
  const facilities = [
    { icon: Laptop, title: "Modern High-Speed Lab", desc: "Dedicated workstations with multi-monitor setups and latest dev environments." },
    { icon: Users, title: "1-on-1 Mentorship Stations", desc: "Private discussion zones for live code debugging and profile reviews." },
    { icon: Wifi, title: "Gigabit Fiber Internet", desc: "High-bandwidth connectivity for seamless cloud and AI model development." },
    { icon: Coffee, title: "Student Collaboration Lounge", desc: "Brainstorming and hackathon space for teamwork and peer learning." }
  ];

  return (
    <section id="campus" className="py-20 bg-slate-900/40 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              Visit Our Bhiwandi Academy
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              State-of-the-Art <span className="gradient-text">Learning Campus</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Located conveniently in the heart of Bhiwandi, our training facility provides students with immersive, distraction-free environment equipped with enterprise-grade development tools.
            </p>

            {/* Address Box */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm">Center Address:</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">
                    1st Floor, Laxmi Ajit Complex, Near Shiv Mandir, Mubeen Master Rd, Opp Curewell Pharmacy, Gauripada Samad Nagar, Bhiwandi, Maharashtra 421305
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <a href="tel:+919820624436" className="hover:text-white font-semibold">
                    +91 9820624436
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Campus Facilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {facilities.map((fac, fidx) => {
                const Icon = fac.icon;
                return (
                  <div key={fidx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{fac.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{fac.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Directions Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://maps.google.com/?q=Laxmi+Ajit+Complex+Bhiwandi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href="tel:+919820624436"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              >
                Call Front Desk
              </a>
            </div>

          </div>

          {/* Right Image / Interactive Map Preview */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="SmartEdge Academy Bhiwandi Campus Lab"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Free Walk-In Counseling Available Today
                </div>
                <p className="text-xs text-slate-300">
                  Walk in between 10:00 AM and 6:00 PM for free career guidance and course counseling with our lead mentors.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
