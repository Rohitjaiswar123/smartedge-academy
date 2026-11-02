export interface Testimonial {
  name: string;
  role: string;
  company: string;
  courseOrService: string;
  rating: number;
  image: string;
  quote: string;
  salaryPackage?: string;
  type: "student" | "client";
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Faizan Ansari",
    role: "Full Stack Engineer",
    company: "TechNova Solutions",
    courseOrService: "MERN Stack Development",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    quote: "I had completed my B.Sc IT from Bhiwandi and was struggling to clear technical interviews. SmartEdge Academy transformed my skills. The mock interviews and live portfolio projects gave me the confidence to crack a ₹6.2 LPA job in Mumbai within 3 weeks of course completion!",
    salaryPackage: "₹6.2 LPA",
    type: "student"
  },
  {
    name: "Sneha Patil",
    role: "Data Analyst",
    company: "Apex Analytics Corp",
    courseOrService: "Data Analytics & Power BI",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    quote: "Coming from a non-coding commerce background, I was intimidated by data roles. The mentors at SmartEdge patiently guided me through Excel, SQL, and Power BI dashboards. Today I am managing executive business reports independently!",
    salaryPackage: "₹5.5 LPA",
    type: "student"
  },
  {
    name: "Rohan Kulkarni",
    role: "Founder & CEO",
    company: "LogixMove Logistics",
    courseOrService: "Custom Web App & AI Automation",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote: "SmartEdge Group built our multi-tenant warehouse tracking web app and automated WhatsApp dispatches with AI. They completed the project two weeks ahead of schedule with flawless reliability.",
    type: "client"
  },
  {
    name: "Mohammad Danish",
    role: "Python & AI Developer",
    company: "CognitiveEdge Labs",
    courseOrService: "Artificial Intelligence Master Program",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote: "SmartEdge is hands down the best tech institute in Thane & Bhiwandi. Learning how to integrate LangChain, vector databases, and real LLMs set me apart from other fresh graduates.",
    salaryPackage: "₹8.4 LPA",
    type: "student"
  },
  {
    name: "Pooja Sharma",
    role: "Digital Marketing Specialist",
    company: "GrowthPulse Media",
    courseOrService: "Digital Marketing with AI",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    quote: "Running real ad campaigns in class with mentor guidance made all the difference. Within two months I had 3 freelance clients and now work full time as a performance marketer.",
    salaryPackage: "₹4.8 LPA",
    type: "student"
  }
];

export const HIRING_PARTNERS = [
  { name: "Tata Consultancy Services (TCS)", logo: "TCS" },
  { name: "Infosys", logo: "Infosys" },
  { name: "Wipro", logo: "Wipro" },
  { name: "Capgemini", logo: "Capgemini" },
  { name: "LTIMindtree", logo: "LTI" },
  { name: "Jio Platforms", logo: "Jio" },
  { name: "Cognizant", logo: "Cognizant" },
  { name: "Accenture", logo: "Accenture" },
  { name: "Tech Mahindra", logo: "Tech Mahindra" },
  { name: "HCLTech", logo: "HCLTech" }
];
