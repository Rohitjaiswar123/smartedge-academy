import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { ThemeProvider } from "@/context/ThemeContext";
import { getOrganizationSchema } from "@/lib/jsonld";

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://academy.smartedgegroup.in"),
  title: {
    default: "SmartEdge Group | AI Academy & Custom App Development & AI Automation",
    template: "%s | SmartEdge Group",
  },
  description:
    "SmartEdge Group in Bhiwandi: AI-Powered Career Academy with 100% Job Assistance, plus Enterprise Web/Mobile App Development & AI Automation Solutions.",
  applicationName: "SmartEdge Group",
  authors: [{ name: "SmartEdge Group", url: "https://academy.smartedgegroup.in" }],
  generator: "Next.js",
  keywords: [
    "SmartEdge Academy Bhiwandi",
    "SmartEdge Group",
    "IT Training Institute Bhiwandi",
    "Best Computer Institute in Bhiwandi",
    "AI and Data Science Courses Bhiwandi",
    "Full Stack Web Development Course",
    "Software Development Training Thane",
    "Mobile App Development Agency",
    "Autonomous AI Agents & Automation",
    "100% Job Assistance Placement",
    "Python Developer Course",
    "MERN Stack Training",
    "Cloud Computing DevOps Course",
    "Coding Classes in Bhiwandi",
  ],
  referrer: "origin-when-cross-origin",
  creator: "SmartEdge Group",
  publisher: "SmartEdge Group",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/images/smartedge-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/smartedge-icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/smartedge-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SmartEdge Group | AI Academy & Digital Solutions",
    description:
      "Don't just get a degree. Get job-ready with AI. 100% Placement Assistance in Bhiwandi, plus Custom Web/App Development & AI Automations.",
    url: "https://academy.smartedgegroup.in",
    siteName: "SmartEdge Group",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/smartedge-logo.png",
        width: 1200,
        height: 630,
        alt: "SmartEdge Group - AI Academy & Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartEdge Group | AI Academy & Digital Solutions",
    description:
      "AI-Powered Career Academy with 100% Job Assistance in Bhiwandi + Enterprise App & AI Automation Development.",
    images: ["/images/smartedge-logo.png"],
    creator: "@smartedgegroup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Education & Technology",
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Bhiwandi, Maharashtra",
    "geo.position": "19.3002;73.0635",
    ICBM: "19.3002, 73.0635",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();

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
        {/* Global Organization, EducationalOrganization, LocalBusiness & WebSite Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema),
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
