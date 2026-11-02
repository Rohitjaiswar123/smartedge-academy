import React from "react";
import Hero from "@/components/Hero";
import JobAssistanceSection from "@/components/JobAssistanceSection";
import CourseExplorer from "@/components/CourseExplorer";
import AgencyServicesSection from "@/components/AgencyServicesSection";
import WhySmartEdge from "@/components/WhySmartEdge";
import BhiwandiCampusSection from "@/components/BhiwandiCampusSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <JobAssistanceSection />
      <CourseExplorer />
      <AgencyServicesSection />
      <WhySmartEdge />
      <BhiwandiCampusSection />
      <TestimonialsSection />
    </div>
  );
}
