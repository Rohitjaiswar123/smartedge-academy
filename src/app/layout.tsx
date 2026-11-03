import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "SmartEdge Group | AI Academy & Custom App Development & AI Automation",
  description:
    "SmartEdge Group in Bhiwandi: AI-Powered Career Academy with 100% Job Assistance, plus Enterprise Web/Mobile App Development & AI Automation Solutions.",
  keywords: [
    "SmartEdge Academy Bhiwandi",
    "IT Training Institute Bhiwandi",
    "AI and Data Science Courses",
    "Software Development Training",
    "Mobile App Development",
    "AI Automation Services",
    "Job Placement Bhiwandi",
    "100% Job Assistance"
  ],
  authors: [{ name: "SmartEdge Group" }],
  openGraph: {
    title: "SmartEdge Group | AI Academy & Digital Solutions",
    description: "Don't just get a degree. Get job-ready with AI. Custom Web/App Development and AI Automations.",
    url: "https://academy.smartedgegroup.in",
    siteName: "SmartEdge Group",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('smartedge_theme');
                  if (stored === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
