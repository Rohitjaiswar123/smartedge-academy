import { Course } from "@/data/courses";
import { AgencyService } from "@/data/services";

export const SITE_URL = "https://academy.smartedgegroup.in";
export const BRAND_NAME = "SmartEdge Group";
export const ACADEMY_NAME = "SmartEdge Academy";
export const PHONE_NUMBER = "+919820624436";
export const EMAIL_ADDRESS = "contact@smartedgegroup.in";

export const PHYSICAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "1st Floor, Laxmi Ajit Complex, near Shiv Mandir, Mubeen Master Rd, Opp Curewell Pharmacy, Gauripada",
  addressLocality: "Bhiwandi",
  addressRegion: "Maharashtra",
  postalCode: "421305",
  addressCountry: "IN",
};

export const GEO_COORDINATES = {
  "@type": "GeoCoordinates",
  latitude: 19.3002,
  longitude: 73.0635,
};

/**
 * Combined EducationalOrganization and LocalBusiness Schema for Google Knowledge Graph,
 * Local SEO (Bhiwandi / Thane / Mumbai MMR), and Generative Search Engines (AEO/GEO).
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}/#academy`,
        name: ACADEMY_NAME,
        legalName: "SmartEdge Group",
        alternateName: ["SmartEdge IT Training", "SmartEdge Coding Institute Bhiwandi"],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/smartedge-logo.png`,
          width: "512",
          height: "512",
        },
        image: `${SITE_URL}/images/smartedge-logo.png`,
        description:
          "Premier AI-powered IT training institute in Bhiwandi offering 100% job placement assistance, practical industry capstones, and modern tech courses in AI, Data Science, Full Stack, Mobile App Development, and Cloud.",
        telephone: PHONE_NUMBER,
        email: EMAIL_ADDRESS,
        address: PHYSICAL_ADDRESS,
        geo: GEO_COORDINATES,
        hasMap: "https://maps.google.com/?q=19.3002,73.0635",
        priceRange: "₹₹",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Bhiwandi" },
          { "@type": "City", name: "Thane" },
          { "@type": "City", name: "Kalyan" },
          { "@type": "City", name: "Dombivli" },
          { "@type": "City", name: "Mumbai" },
          { "@type": "State", name: "Maharashtra" },
          { "@type": "Country", name: "India" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "250",
          bestRating: "5",
          worstRating: "1",
        },
        sameAs: [
          "https://www.linkedin.com/company/smartedge-group",
          "https://www.instagram.com/smartedgegroup",
          "https://twitter.com/smartedgegroup",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#studio`,
        name: `${BRAND_NAME} Tech Solutions`,
        url: `${SITE_URL}/services`,
        telephone: PHONE_NUMBER,
        email: EMAIL_ADDRESS,
        address: PHYSICAL_ADDRESS,
        geo: GEO_COORDINATES,
        description:
          "Full-cycle software engineering and AI automation agency building mobile applications, Next.js web applications, SaaS platforms, and enterprise AI agents.",
        areaServed: ["Global", "India", "United States", "United Kingdom", "United Arab Emirates"],
        parentOrganization: {
          "@id": `${SITE_URL}/#academy`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND_NAME,
        description:
          "SmartEdge Group - AI-Powered Career Academy in Bhiwandi & Custom Software Development Studio.",
        publisher: {
          "@id": `${SITE_URL}/#academy`,
        },
        inLanguage: "en-IN",
      },
    ],
  };
}

/**
 * Course Schema for Answer Engine Optimization (Google Courses Rich Snippet, Perplexity, ChatGPT).
 */
export function getCourseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: ACADEMY_NAME,
      url: SITE_URL,
      address: PHYSICAL_ADDRESS,
    },
    educationalCredentialAwarded: "Industry-Recognized Certificate of Completion & Capstone Defense",
    timeRequired: course.duration,
    courseCode: course.slug,
    educationalLevel: course.level,
    inLanguage: "en-IN",
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: [course.mode, "Blended", "Onsite in Bhiwandi"],
        courseWorkload: `${course.duration} comprehensive with real projects and interview drills`,
        location: {
          "@type": "Place",
          name: "SmartEdge Academy Bhiwandi Campus",
          address: PHYSICAL_ADDRESS,
          geo: GEO_COORDINATES,
        },
        instructor: {
          "@type": "Organization",
          name: "SmartEdge Senior Engineering Mentors",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.rating.toString(),
      reviewCount: course.reviewsCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    offers: {
      "@type": "Offer",
      category: "Paid Training with 100% Placement Assistance",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: `${SITE_URL}/courses/${course.slug}`,
      validFrom: "2026-01-01",
    },
    syllabusSections: course.modules.map((mod, idx) => ({
      "@type": "Syllabus",
      name: mod.title,
      position: idx + 1,
      description: mod.topics.join(", "),
    })),
  };
}

/**
 * Service Schema for Agency & Software Development Offerings
 */
export function getServiceSchema(service: AgencyService) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.shortDesc,
    provider: {
      "@type": "ProfessionalService",
      name: `${BRAND_NAME} Tech Solutions`,
      url: `${SITE_URL}/services/${service.slug}`,
      telephone: PHONE_NUMBER,
      email: EMAIL_ADDRESS,
      address: PHYSICAL_ADDRESS,
      geo: GEO_COORDINATES,
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Deliverables`,
      itemListElement: service.deliverables.map((item, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item,
        },
        position: idx + 1,
      })),
    },
  };
}

/**
 * FAQPage Schema for Direct Answer Engines (Perplexity, ChatGPT, Google AI Overviews)
 */
export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList Schema for Google Search Hierarchy
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
