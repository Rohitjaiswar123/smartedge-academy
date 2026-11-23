import React from "react";
import Hero from "@/components/Hero";
import JobAssistanceSection from "@/components/JobAssistanceSection";
import CourseExplorer from "@/components/CourseExplorer";
import AgencyServicesSection from "@/components/AgencyServicesSection";
import WhySmartEdge from "@/components/WhySmartEdge";
import BhiwandiCampusSection from "@/components/BhiwandiCampusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { getFaqSchema } from "@/lib/jsonld";

export const metadata = {
  title: "AI Academy with 100% Job Assistance & Software Studio | SmartEdge Group",
  description:
    "SmartEdge Group in Bhiwandi provides job-ready IT courses in AI, Data Science, Full Stack, and Cloud with guaranteed 100% placement assistance, plus enterprise mobile app & AI agent engineering.",
  alternates: {
    canonical: "/",
  },
};

const homeFaqs = [
  {
    question: "Where is SmartEdge Academy located in Bhiwandi?",
    answer:
      "SmartEdge Academy is located at 1st Floor, Laxmi Ajit Complex, near Shiv Mandir, Mubeen Master Rd, Opp Curewell Pharmacy, Gauripada, Bhiwandi, Maharashtra 421305. We offer hands-on offline classroom learning with high-speed development labs, as well as hybrid online modes.",
  },
  {
    question: "What courses does SmartEdge Academy offer?",
    answer:
      "We offer 16+ job-oriented programs across AI & Data Science (Generative AI, Data Analytics, Python, Power BI), Software Development (Full Stack MERN, Next.js, Frontend, Mobile App Development with Flutter, Java Spring Boot), and Digital & Business Automation (Cloud DevOps, RPA, Digital Marketing).",
  },
  {
    question: "How does the 100% Job Placement Assistance guarantee work?",
    answer:
      "Our placement department partners with 100+ hiring tech companies. We provide dedicated resume curation, GitHub portfolio building, 1-on-1 mock technical interviews, and direct corporate interview drives until each student receives an official offer letter.",
  },
  {
    question: "Does SmartEdge Group offer custom software development services?",
    answer:
      "Yes. Our engineering studio (SmartEdge Tech Solutions) develops custom cross-platform mobile apps (iOS & Android), Next.js enterprise SaaS platforms, autonomous AI agents, and robotic business automations.",
  },
  {
    question: "Can beginners and non-IT students join SmartEdge Academy?",
    answer:
      "Yes. All programs start from fundamental programming and logic building with personalized 1-on-1 mentor guidance, making them accessible to students from any academic background (B.Com, B.A, B.Sc, BCA, Engineering, or freshers).",
  },
];

export default function HomePage() {
  const faqSchema = getFaqSchema(homeFaqs);

  return (
    <div className="flex flex-col">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
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
