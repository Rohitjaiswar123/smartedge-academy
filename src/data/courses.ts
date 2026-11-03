export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  slug: string;
  title: string;
  category: "ai-data" | "software-development" | "digital-automation";
  categoryLabel: string;
  tagline: string;
  duration: string;
  level: string;
  mode: string;
  avgSalary: string;
  rating: number;
  reviewsCount: number;
  highlightBadge?: string;
  description: string;
  aiIntegration: string;
  tools: string[];
  careerRoles: string[];
  modules: CourseModule[];
  faqs: { question: string; answer: string }[];
  image: string;
}

export const COURSES: Course[] = [
  // AI & DATA
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence Master Program",
    category: "ai-data",
    categoryLabel: "AI & Data",
    tagline: "Master LLMs, Generative AI, Neural Networks, and Autonomous AI Agents",
    duration: "6 Months",
    level: "Beginner to Advanced",
    mode: "Classroom (Bhiwandi) + Live Online",
    avgSalary: "₹6.5 - ₹16 LPA",
    rating: 4.9,
    reviewsCount: 142,
    highlightBadge: "Trending & High Placement",
    description: "Dive deep into modern Artificial Intelligence. Learn prompt engineering, generative models, transformer architectures, reinforcement learning, and build autonomous enterprise AI agents using Python and LangChain.",
    aiIntegration: "Build real production agents, fine-tune open-source models, and integrate OpenAI/Claude/Gemini APIs into real software.",
    tools: ["Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI API", "HuggingFace", "Vector DBs"],
    careerRoles: ["AI Engineer", "Machine Learning Specialist", "Prompt Engineer", "AI Solutions Architect"],
    modules: [
      {
        title: "Module 1: Foundations of Python & Mathematics for AI",
        topics: ["Python Programming for Data Science", "Linear Algebra & Statistics", "NumPy & Pandas Mastery", "Data Exploration"]
      },
      {
        title: "Module 2: Machine Learning Algorithms",
        topics: ["Supervised & Unsupervised Learning", "Scikit-Learn Implementation", "Feature Engineering", "Model Evaluation & Tuning"]
      },
      {
        title: "Module 3: Deep Learning & Neural Networks",
        topics: ["ANN, CNN, RNN Architectures", "PyTorch & TensorFlow Workflows", "Computer Vision Basics", "Natural Language Processing"]
      },
      {
        title: "Module 4: Generative AI, LLMs & Multi-Agent Systems",
        topics: ["Transformers & Attention Mechanisms", "LangChain & LlamaIndex", "Vector Databases (Pinecone/Chroma)", "Building Autonomous AI Agents"]
      },
      {
        title: "Module 5: Capstone Live Industry Projects & Deployment",
        topics: ["Deploying AI Models on AWS/FastAPI", "Full-Stack AI SaaS Integration", "Interview Prep & AI Portfolio Defense"]
      }
    ],
    faqs: [
      {
        question: "Do I need coding experience to join this course?",
        answer: "No previous coding background is needed. We start from ground zero with fundamental Python programming and logic building."
      },
      {
        question: "Are classes conducted offline in Bhiwandi?",
        answer: "Yes, we provide hands-on classroom training at our Bhiwandi center with dedicated lab infrastructure, as well as hybrid online access."
      }
    ],
    image: "/images/courses/artificial-intelligence.svg"
  },
  {
    slug: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    category: "ai-data",
    categoryLabel: "AI & Data",
    tagline: "Turn Raw Data into Actionable Business Decisions with Power BI, SQL & Python",
    duration: "4 Months",
    level: "Beginner Friendly",
    mode: "Classroom (Bhiwandi) + Live Online",
    avgSalary: "₹4.5 - ₹10 LPA",
    rating: 4.8,
    reviewsCount: 118,
    highlightBadge: "Top In-Demand Career",
    description: "Learn how to extract, clean, analyze, and visualize corporate datasets. Master Advanced Excel, SQL queries, interactive Power BI dashboards, and exploratory data analysis with Python.",
    aiIntegration: "Leverage AI-assisted SQL query generators and Copilot in Power BI to speed up analytics workflows.",
    tools: ["Advanced Excel", "SQL", "Power BI", "Tableau", "Python", "Pandas", "DAX"],
    careerRoles: ["Data Analyst", "Business Analyst", "BI Developer", "Operations Analyst"],
    modules: [
      {
        title: "Module 1: Advanced Excel & Business Metrics",
        topics: ["VLOOKUP, XLOOKUP, Index-Match", "Pivot Tables & Slicers", "Financial Modeling Basics", "Data Cleaning"]
      },
      {
        title: "Module 2: Relational Databases & SQL for Analytics",
        topics: ["SQL Fundamentals & Joins", "Aggregations & Group By", "Window Functions & Subqueries", "Live Case Studies"]
      },
      {
        title: "Module 3: Power BI & Interactive Dashboarding",
        topics: ["Data Modeling & Relationships", "DAX Formulas & Measures", "Custom Visuals & KPIs", "Power BI Service Publishing"]
      },
      {
        title: "Module 4: Python for Exploratory Data Analysis",
        topics: ["NumPy & Pandas Analysis", "Matplotlib & Seaborn Visuals", "Automating Reports with AI", "Capstone Analytics Project"]
      }
    ],
    faqs: [
      {
        question: "Is this course suitable for non-IT or Commerce graduates?",
        answer: "Absolutely! Many of our successful students come from B.Com, BBA, and Arts backgrounds."
      }
    ],
    image: "/images/courses/data-analytics.svg"
  },
  {
    slug: "data-science",
    title: "Data Science & Machine Learning Pro",
    category: "ai-data",
    categoryLabel: "AI & Data",
    tagline: "Predictive Analytics, Statistical Modeling & Production Machine Learning",
    duration: "6 Months",
    level: "Intermediate",
    mode: "Classroom (Bhiwandi) + Live Online",
    avgSalary: "₹6 - ₹14 LPA",
    rating: 4.9,
    reviewsCount: 96,
    highlightBadge: "High Career Growth",
    description: "Combine statistical modeling, machine learning algorithms, and big data techniques to solve real business challenges. Build end-to-end predictive pipelines and deploy them.",
    aiIntegration: "Use modern AutoML, Hugging Face models, and LLM-assisted feature engineering to stay at the cutting edge.",
    tools: ["Python", "R", "Scikit-Learn", "SQL", "Pandas", "Docker", "Streamlit"],
    careerRoles: ["Data Scientist", "ML Engineer", "Quantitative Analyst", "Research Associate"],
    modules: [
      {
        title: "Module 1: Applied Statistics & Probability",
        topics: ["Hypothesis Testing", "Probability Distributions", "A/B Testing", "Regression Analysis"]
      },
      {
        title: "Module 2: Machine Learning Core",
        topics: ["Classification & Regression", "Clustering & Dimensionality Reduction", "Ensemble Methods (XGBoost, Random Forest)", "Model Validation"]
      },
      {
        title: "Module 3: Natural Language Processing & Time Series",
        topics: ["Text Preprocessing & TF-IDF", "Time Series Forecasting (ARIMA/Prophet)", "Sentiment Analysis", "Feature Extraction"]
      },
      {
        title: "Module 4: Deployment & Cloud MLOps",
        topics: ["Building Streamlit / FastAPI Apps", "Containerizing with Docker", "Cloud Model Serving", "Industry Portfolio Capstone"]
      }
    ],
    faqs: [
      {
        question: "Do you help with internships and job placement?",
        answer: "Yes, our dedicated placement cell provides 100% placement assistance, resume polishing, and mock technical rounds."
      }
    ],
    image: "/images/courses/data-science.svg"
  },
  {
    slug: "power-bi",
    title: "Power BI & Dashboard Visualization",
    category: "ai-data",
    categoryLabel: "AI & Data",
    tagline: "Create Stunning Executive Dashboards & Master DAX Data Modeling",
    duration: "2 Months",
    level: "All Levels",
    mode: "Classroom + Hands-on Lab",
    avgSalary: "₹4 - ₹8.5 LPA",
    rating: 4.8,
    reviewsCount: 84,
    description: "Fast-track your data career with Microsoft Power BI. Learn Power Query transformations, star schemas, advanced DAX calculations, and automated report scheduling.",
    aiIntegration: "Integrate Microsoft Copilot in Power BI to generate instant insights and automated report commentary.",
    tools: ["Microsoft Power BI", "Power Query", "DAX", "Excel", "SQL Server"],
    careerRoles: ["Power BI Developer", "BI Specialist", "Reporting Analyst", "MIS Executive"],
    modules: [
      {
        title: "Module 1: Power Query ETL",
        topics: ["Connecting to Diverse Data Sources", "Transforming & Cleaning Data", "Merging & Appending Queries", "M Language Basics"]
      },
      {
        title: "Module 2: Data Modeling & Relationships",
        topics: ["Star Schema vs Snowflake Schema", "Relationship Cardinality", "Handling Many-to-Many Relationships", "Role-Playing Dimensions"]
      },
      {
        title: "Module 3: Advanced DAX Expressions",
        topics: ["CALCULATE & Filter Context", "Time Intelligence Functions", "Iterators (SUMX, AVERAGEX)", "Dynamic Formatting"]
      },
      {
        title: "Module 4: UI Design & Power BI Service",
        topics: ["Design Best Practices & UX", "Row-Level Security (RLS)", "Publishing, Gateways & Scheduled Refresh", "Live Capstone Project"]
      }
    ],
    faqs: [
      {
        question: "Will I get official certification guidance?",
        answer: "Yes! We prepare you directly for the Microsoft PL-300: Power BI Data Analyst certification."
      }
    ],
    image: "/images/courses/power-bi.svg"
  },
  {
    slug: "sql-developer",
    title: "SQL Developer & Database Engineering",
    category: "ai-data",
    categoryLabel: "AI & Data",
    tagline: "Master Complex Queries, Database Architecture, Stored Procedures & Indexing",
    duration: "2.5 Months",
    level: "Beginner to Intermediate",
    mode: "Classroom + Live Lab",
    avgSalary: "₹4 - ₹9 LPA",
    rating: 4.7,
    reviewsCount: 79,
    description: "Database querying is the core skill behind all IT, data, and software jobs. Master MySQL, PostgreSQL, subqueries, stored procedures, transactions, and indexing optimization.",
    aiIntegration: "Learn to use AI code assistants for query profiling, optimization, and synthetic test data generation.",
    tools: ["PostgreSQL", "MySQL", "SQL Server", "DBeaver", "Git"],
    careerRoles: ["SQL Developer", "Database Administrator", "Backend Data Specialist", "ETL Developer"],
    modules: [
      {
        title: "Module 1: Relational Database Fundamentals",
        topics: ["DDL, DML, DCL Commands", "Primary, Foreign & Unique Keys", "Normalization (1NF to 3NF)", "Table Constraints"]
      },
      {
        title: "Module 2: Advanced Data Manipulation & Joins",
        topics: ["Inner, Left, Right & Full Outer Joins", "Self Joins & Cross Joins", "Aggregations with HAVING", "Complex Subqueries & CTEs"]
      },
      {
        title: "Module 3: Programmability & Automation",
        topics: ["Stored Procedures & Functions", "Triggers & Views", "Transactions & ACID Properties", "Error Handling"]
      },
      {
        title: "Module 4: Query Optimization & Performance Tuning",
        topics: ["Index Architecture & B-Trees", "EXPLAIN ANALYZE Execution Plans", "Partitioning", "Real Enterprise E-commerce Case Study"]
      }
    ],
    faqs: [
      {
        question: "Is SQL required for software and data careers?",
        answer: "Yes, SQL is tested in almost 90% of technical interviews for IT, backend, and data roles."
      }
    ],
    image: "/images/courses/sql-developer.svg"
  },

  // SOFTWARE DEVELOPMENT
  {
    slug: "full-stack-developer",
    title: "Full Stack Web Developer (Next.js & Node.js)",
    category: "software-development",
    categoryLabel: "Software Development",
    tagline: "Build Scalable Cloud Applications from Interactive Frontends to Robust Microservices",
    duration: "6 Months",
    level: "Beginner to Pro",
    mode: "Classroom (Bhiwandi) + Live Online",
    avgSalary: "₹5.5 - ₹13 LPA",
    rating: 4.9,
    reviewsCount: 165,
    highlightBadge: "Most Popular",
    description: "Become an industry-ready full stack engineer. Build enterprise-grade web applications using HTML5/CSS3, modern JavaScript/TypeScript, React, Next.js, Node.js, Express, and PostgreSQL/MongoDB.",
    aiIntegration: "AI-first developer workflow: Utilize GitHub Copilot, Cursor, v0, and Claude for accelerated coding and testing.",
    tools: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker"],
    careerRoles: ["Full Stack Developer", "Software Engineer", "Frontend Specialist", "Backend Engineer"],
    modules: [
      {
        title: "Module 1: Modern Web Foundations",
        topics: ["HTML5 Semantic Architecture", "Tailwind CSS & Responsive Layouts", "Modern JavaScript (ES6+)", "Asynchronous Programming & Fetch API"]
      },
      {
        title: "Module 2: Frontend Mastery with React & Next.js",
        topics: ["Component Driven Architecture", "Hooks, State Management & Context API", "Next.js App Router & Server Components", "Authentication & Client Routing"]
      },
      {
        title: "Module 3: Backend & API Engineering",
        topics: ["Node.js Architecture", "RESTful API Design with Express", "PostgreSQL with Prisma ORM", "JWT Authentication & Role-Based Access"]
      },
      {
        title: "Module 4: Full Stack Deployment & DevOps",
        topics: ["Dockerizing Web Apps", "CI/CD Pipelines with GitHub Actions", "Deploying to Vercel & AWS", "Live SaaS Capstone Project"]
      }
    ],
    faqs: [
      {
        question: "Will I build real projects during this course?",
        answer: "Yes, you will build 4 production projects including a multi-vendor marketplace, a SaaS platform with payments, and an AI chat tool."
      }
    ],
    image: "/images/courses/full-stack-developer.svg"
  },
  {
    slug: "mern-stack",
    title: "MERN Stack Development",
    category: "software-development",
    categoryLabel: "Software Development",
    tagline: "Master MongoDB, Express.js, React.js, and Node.js for Modern Web Apps",
    duration: "5 Months",
    level: "Beginner to Advanced",
    mode: "Classroom + Lab Sessions",
    avgSalary: "₹5 - ₹12 LPA",
    rating: 4.8,
    reviewsCount: 130,
    highlightBadge: "High Demand",
    description: "Specialize in the JavaScript ecosystem. Learn how to write lightning-fast full-stack applications with MongoDB, Express, React, and Node.js with real-time WebSockets.",
    aiIntegration: "Learn AI-driven API testing, schema generation, and code refactoring.",
    tools: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Socket.io", "Postman"],
    careerRoles: ["MERN Stack Developer", "React Developer", "Node.js Developer", "Web Application Developer"],
    modules: [
      {
        title: "Module 1: JavaScript Deep Dive & React",
        topics: ["Closures, Event Loop, Promises", "React Functional Components", "Redux Toolkit & Global State", "API Integration"]
      },
      {
        title: "Module 2: Server-Side with Node & Express",
        topics: ["Node Runtime Internals", "Express Routing & Middleware", "File Uploads & Security Best Practices", "Unit Testing APIs"]
      },
      {
        title: "Module 3: NoSQL Database with MongoDB",
        topics: ["Mongoose Schema Modeling", "Aggregation Pipelines", "Indexing & Sharding Basics", "Data Validation"]
      },
      {
        title: "Module 4: Real-Time & Live Deployment",
        topics: ["Real-time Chat with WebSockets", "Payment Gateway (Razorpay/Stripe)", "AWS EC2 / Render Deployment", "Final Portfolio Review"]
      }
    ],
    faqs: [
      {
        question: "Is MERN stack still relevant in 2026?",
        answer: "Yes, thousands of startups and tech companies in Mumbai and India actively hire MERN developers daily."
      }
    ],
    image: "/images/courses/mern-stack.svg"
  },
  {
    slug: "python-developer",
    title: "Python Developer & Backend Engineering",
    category: "software-development",
    categoryLabel: "Software Development",
    tagline: "Learn Python from Basics to Advanced Django, FastAPI & Automation Scripts",
    duration: "4.5 Months",
    level: "Beginner Friendly",
    mode: "Classroom + Online",
    avgSalary: "₹4.8 - ₹11 LPA",
    rating: 4.9,
    reviewsCount: 112,
    description: "Python is the most versatile programming language in the world. Master OOP concepts, backend frameworks (Django/FastAPI), database ORMs, web scraping, and automation scripts.",
    aiIntegration: "Build AI-powered backend endpoints with integrated LLMs and vector search.",
    tools: ["Python 3", "Django", "FastAPI", "PostgreSQL", "Celery", "Redis", "Git"],
    careerRoles: ["Python Developer", "Backend Engineer", "Software Developer", "Automation Engineer"],
    modules: [
      {
        title: "Module 1: Python Core & Object Oriented Programming",
        topics: ["Data Types, Loops, Control Flow", "Functions, Lambdas, Decorators", "OOP: Classes, Inheritance, Polymorphism", "Exception Handling & File I/O"]
      },
      {
        title: "Module 2: Web Scraping & Scripting",
        topics: ["BeautifulSoup & Selenium", "Automating Browser Actions", "Handling APIs & JSON Data", "Scheduling Cron Jobs"]
      },
      {
        title: "Module 3: Backend Engineering with Django & FastAPI",
        topics: ["Django Architecture (MVT)", "Django REST Framework (DRF)", "High Performance APIs with FastAPI & Pydantic", "Database Migrations"]
      },
      {
        title: "Module 4: Asynchronous Tasks & Cloud Deployment",
        topics: ["Background Jobs with Celery & Redis", "PostgreSQL Integration", "Docker Containerization", "Live Cloud Deployment"]
      }
    ],
    faqs: [
      {
        question: "Can I transition from non-tech to Python developer?",
        answer: "Yes, Python is the friendliest language for beginners, and our mentors provide one-on-one doubt clearing sessions."
      }
    ],
    image: "/images/courses/python-developer.svg"
  },
  {
    slug: "java-developer",
    title: "Java Enterprise Developer (Spring Boot)",
    category: "software-development",
    categoryLabel: "Software Development",
    tagline: "Enterprise Grade Java, Core OOP, Spring Boot, Microservices & Hibernate",
    duration: "5 Months",
    level: "Beginner to Advanced",
    mode: "Classroom + Live Online",
    avgSalary: "₹5.5 - ₹12.5 LPA",
    rating: 4.8,
    reviewsCount: 104,
    description: "Java powers banking, fintech, and multinational corporations worldwide. Master Core Java, Collections Framework, Spring Boot, Hibernate ORM, Microservices architecture, and JUnit testing.",
    aiIntegration: "Use AI tools for unit test generation, code coverage analysis, and legacy refactoring.",
    tools: ["Java 21", "Spring Boot", "Hibernate / JPA", "MySQL", "Maven", "Docker", "Postman"],
    careerRoles: ["Java Developer", "Spring Boot Specialist", "Enterprise Software Engineer", "Backend Developer"],
    modules: [
      {
        title: "Module 1: Core Java & OOP Mastery",
        topics: ["JVM, JRE & Memory Management", "Deep OOPs Concepts", "Collections Framework (List, Set, Map)", "Multithreading & Concurrency"]
      },
      {
        title: "Module 2: Relational Databases & JDBC / Hibernate",
        topics: ["SQL Queries for Enterprise", "JDBC Architecture", "ORM with Hibernate & JPA", "Transaction Management"]
      },
      {
        title: "Module 3: Spring Framework & Spring Boot",
        topics: ["Dependency Injection & Inversion of Control", "Building REST APIs with Spring Boot", "Spring Data JPA & Security", "JWT Authentication"]
      },
      {
        title: "Module 4: Microservices & Real-Time Projects",
        topics: ["Microservice Design Patterns", "Service Discovery (Eureka) & API Gateway", "Banking/FinTech Live Project", "Interview Preparation"]
      }
    ],
    faqs: [
      {
        question: "Do big MNCs still hire Java developers?",
        answer: "Yes! Top MNCs like TCS, Infosys, Accenture, Cognizant, and JP Morgan have enormous ongoing demand for Java Spring Boot engineers."
      }
    ],
    image: "/images/courses/java-developer.svg"
  },
  {
    slug: "frontend-developer",
    title: "Modern Front End Developer",
    category: "software-development",
    categoryLabel: "Software Development",
    tagline: "Create Stunning, High-Performance Web Interfaces with React & Modern CSS",
    duration: "3.5 Months",
    level: "Beginner Friendly",
    mode: "Classroom + Hands-on Lab",
    avgSalary: "₹4 - ₹8.5 LPA",
    rating: 4.7,
    reviewsCount: 88,
    description: "Craft pixel-perfect, responsive user experiences. Master HTML5 semantic layouts, modern CSS3/Tailwind, JavaScript, React components, state management, and modern animations.",
    aiIntegration: "Utilize AI design-to-code generators and AI accessibility validators.",
    tools: ["HTML5", "CSS3 / Tailwind", "JavaScript (ES6+)", "React.js", "Figma to Code", "Git", "Vite"],
    careerRoles: ["Frontend Developer", "UI Developer", "React Developer", "Web Designer"],
    modules: [
      {
        title: "Module 1: Responsive Layouts & Tailwind CSS",
        topics: ["Flexbox, CSS Grid & Media Queries", "Tailwind CSS Utility-First Framework", "Modern UI Components", "Mobile-First Design"]
      },
      {
        title: "Module 2: JavaScript Mastery for the DOM",
        topics: ["DOM Manipulation & Events", "Async JS, Promises & Fetch", "Modular JavaScript", "Form Validation & Local Storage"]
      },
      {
        title: "Module 3: React.js Fundamentals to Advanced",
        topics: ["JSX & Component Architecture", "useState, useEffect, useMemo", "Component Libraries & UI Kits", "State Management with Zustand"]
      },
      {
        title: "Module 4: Performance, Animations & Portfolio",
        topics: ["Framer Motion Animations", "Core Web Vitals Optimization", "Building 5 Showcase Portfolio Projects", "Live Hosting on Vercel"]
      }
    ],
    faqs: [
      {
        question: "Do I need a technical degree to become a Frontend Developer?",
        answer: "No, frontend development evaluates your portfolio and code demos, not your college degree."
      }
    ],
    image: "/images/courses/frontend-developer.svg"
  },
  {
    slug: "mobile-app-developer",
    title: "Mobile App Developer (Flutter & React Native)",
    category: "software-development",
    categoryLabel: "Software Development",
    tagline: "Build & Publish Cross-Platform iOS and Android Apps from a Single Codebase",
    duration: "5 Months",
    level: "Intermediate",
    mode: "Classroom + Hands-on Lab",
    avgSalary: "₹5 - ₹12 LPA",
    rating: 4.8,
    reviewsCount: 92,
    description: "Build sleek, native-performance iOS and Android mobile apps using Flutter (Dart) and React Native. Learn mobile state management, device hardware APIs (Camera, GPS), push notifications, and App Store / Play Store deployment.",
    aiIntegration: "Integrate on-device AI models and AI-assisted mobile UI testing.",
    tools: ["Flutter", "Dart", "React Native", "Firebase", "REST APIs", "Play Store / App Store", "Android Studio"],
    careerRoles: ["Mobile App Developer", "Flutter Developer", "React Native Engineer", "Android/iOS Developer"],
    modules: [
      {
        title: "Module 1: Cross-Platform Fundamentals",
        topics: ["Dart & Modern JavaScript", "Widget & Component Architecture", "Layouts & Responsive Mobile Screens", "Navigation & Routing"]
      },
      {
        title: "Module 2: State Management & Hardware APIs",
        topics: ["State Management (Bloc / Redux)", "Camera, Geolocation & Local Storage", "Offline Data Persistence (SQLite/Hive)", "Permissions Handling"]
      },
      {
        title: "Module 3: Cloud Backend Integration with Firebase",
        topics: ["Authentication (Phone, Google, Email)", "Firestore Realtime Database", "Push Notifications with FCM", "Cloud Storage & Media Uploads"]
      },
      {
        title: "Module 4: Production App Publishing",
        topics: ["Building APKs and App Bundles", "Google Play Store & Apple App Store Guidelines", "In-App Purchases & Ads", "Live E-Commerce App Project"]
      }
    ],
    faqs: [
      {
        question: "Can I test apps on my own phone?",
        answer: "Yes, you will test and run apps directly on your physical Android or iPhone device during class."
      }
    ],
    image: "/images/courses/mobile-app-developer.svg"
  },

  // DIGITAL & AUTOMATION
  {
    slug: "digital-marketing-ai",
    title: "Digital Marketing with AI & Growth Hacking",
    category: "digital-automation",
    categoryLabel: "Digital & Automation",
    tagline: "Scale Businesses with AI-Driven SEO, Meta Ads, Google Ads & Content Automation",
    duration: "3.5 Months",
    level: "All Levels",
    mode: "Classroom (Bhiwandi) + Live Campaigns",
    avgSalary: "₹3.8 - ₹9 LPA",
    rating: 4.9,
    reviewsCount: 154,
    highlightBadge: "High Freelance & Job Potential",
    description: "Master modern digital marketing supercharged with AI. Learn Search Engine Optimization (SEO), high-ROI Google & Meta ads campaigns, social media growth, email marketing automation, and AI content generation.",
    aiIntegration: "Leverage ChatGPT, Midjourney, and AI analytics tools to generate ad copy, high-converting creatives, and automate lead nurturing.",
    tools: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "SEMrush", "ChatGPT", "Canva Pro", "HubSpot"],
    careerRoles: ["Digital Marketing Executive", "Performance Marketer", "SEO Specialist", "Social Media Strategist", "Growth Hacker"],
    modules: [
      {
        title: "Module 1: Search Engine Optimization (SEO) & AI Content",
        topics: ["Keyword Research with AI Tools", "On-Page, Off-Page & Technical SEO", "Local SEO for Google My Business", "AI Content Strategy"]
      },
      {
        title: "Module 2: Performance Marketing (Meta & Google Ads)",
        topics: ["Facebook & Instagram Ad Funnels", "Search, Display & YouTube Ads", "Audience Targeting & Retargeting", "Live Budget Campaign Execution"]
      },
      {
        title: "Module 3: Social Media & Influencer Marketing",
        topics: ["Instagram Reels & Viral Strategies", "LinkedIn B2B Lead Generation", "Brand Positioning & Engagement", "Content Calendars"]
      },
      {
        title: "Module 4: Analytics, Conversion Optimization & Freelancing",
        topics: ["Google Analytics 4 & Tag Manager", "Landing Page CRO", "Client Acquisition & Freelancing Masterclass", "Live Brand Audit Capstone"]
      }
    ],
    faqs: [
      {
        question: "Do students get to run live ad budgets?",
        answer: "Yes! We run real ad campaigns in class so you gain authentic experience managing live ad spends."
      }
    ],
    image: "/images/courses/digital-marketing-ai.svg"
  },
  {
    slug: "business-automation",
    title: "Business Automation & No-Code AI",
    category: "digital-automation",
    categoryLabel: "Digital & Automation",
    tagline: "Automate Repetitive Business Workflows with Make, Zapier, n8n and AI Bots",
    duration: "3 Months",
    level: "Beginner Friendly",
    mode: "Classroom + Project Labs",
    avgSalary: "₹4.5 - ₹10 LPA",
    rating: 4.8,
    reviewsCount: 86,
    description: "Every modern business needs automation to cut costs and speed up operations. Learn how to connect CRMs, emails, WhatsApp APIs, payment processors, and AI agents without writing heavy code.",
    aiIntegration: "Connect OpenAI/Gemini directly into webhook automation pipelines for auto-replying, lead qualification, and reporting.",
    tools: ["Make.com (Integromat)", "Zapier", "n8n", "Airtable", "WhatsApp Business API", "OpenAI API"],
    careerRoles: ["Automation Specialist", "Operations Manager", "No-Code Consultant", "CRM Specialist"],
    modules: [
      {
        title: "Module 1: Workflow Automation Principles",
        topics: ["Webhooks & API Fundamentals", "Triggers, Actions & Routers", "Data Transformation & JSON Parsing", "Error Handling Strategies"]
      },
      {
        title: "Module 2: Make.com & n8n Deep Dive",
        topics: ["Complex Multi-Step Scenarios", "Self-Hosted n8n Workflows", "Connecting Google Sheets, CRMs & Slack", "Scheduled Operations"]
      },
      {
        title: "Module 3: AI Agents & WhatsApp Chatbot Automation",
        topics: ["WhatsApp Business API Integration", "AI-Powered Customer Support Bots", "Automated Invoice & Document Generation", "Lead Scoring Workflows"]
      },
      {
        title: "Module 4: Enterprise Consulting & Case Studies",
        topics: ["Automating Real Estate & E-Commerce Workflows", "Client Proposals & Pricing Your Automation Services", "Final Capstone Project"]
      }
    ],
    faqs: [
      {
        question: "Can I use this skill to start an automation agency?",
        answer: "Yes, many graduates launch their own AI automation agencies (AAA) serving local and international businesses."
      }
    ],
    image: "/images/courses/business-automation.svg"
  },
  {
    slug: "rpa-developer",
    title: "Robotic Process Automation (RPA) Developer",
    category: "digital-automation",
    categoryLabel: "Digital & Automation",
    tagline: "Build Intelligent Software Bots with UiPath & Automation Anywhere",
    duration: "4 Months",
    level: "Intermediate",
    mode: "Classroom + Lab Sessions",
    avgSalary: "₹5 - ₹11 LPA",
    rating: 4.7,
    reviewsCount: 74,
    description: "Enter the world of Enterprise Robotics. Master UiPath Studio, Orchestrator, unattended robots, screen scraping, PDF data extraction, and cognitive AI-driven automation.",
    aiIntegration: "Document Understanding and generative AI validation inside UiPath robots.",
    tools: ["UiPath Studio", "UiPath Orchestrator", "Automation Anywhere", "VBA / Python", "OCR Engines"],
    careerRoles: ["RPA Developer", "UiPath Engineer", "Automation Architect", "Process Consultant"],
    modules: [
      {
        title: "Module 1: RPA Architecture & UiPath Basics",
        topics: ["Variables, Data Types & Control Flow", "Recording & Selectors", "Data Scraping & UI Interactions", "Debugging Workflows"]
      },
      {
        title: "Module 2: Advanced UiPath Capabilities",
        topics: ["Excel & Database Automation", "PDF Data Extraction & OCR", "Email Automation (Outlook / IMAP)", "Exception Handling & REFramework"]
      },
      {
        title: "Module 3: Orchestrator & Deployment",
        topics: ["Managing Assets & Queues", "Publishing & Scheduling Bots", "Attended vs Unattended Automation", "Security & Governance"]
      },
      {
        title: "Module 4: Cognitive RPA & Live Projects",
        topics: ["Document Understanding with AI", "Invoice Processing Bot Capstone", "Certification Prep (UiPath Certified Associate)"]
      }
    ],
    faqs: [
      {
        question: "Do IT companies in India hire RPA developers?",
        answer: "Yes, banking, insurance, healthcare, and IT service providers hire RPA specialists for process automation."
      }
    ],
    image: "/images/courses/rpa-developer.svg"
  },
  {
    slug: "cloud-devops",
    title: "Cloud Computing & DevOps Engineer",
    category: "digital-automation",
    categoryLabel: "Digital & Automation",
    tagline: "Master AWS Cloud, Linux, Docker, Kubernetes, CI/CD & Infrastructure as Code",
    duration: "5 Months",
    level: "Intermediate to Pro",
    mode: "Classroom + Live Cloud Labs",
    avgSalary: "₹6 - ₹14 LPA",
    rating: 4.9,
    reviewsCount: 110,
    highlightBadge: "Top High-Paying Tech Career",
    description: "Learn how modern tech enterprises deploy, scale, and secure high-availability systems. Master Linux administration, AWS core services, Docker containers, Kubernetes orchestration, and GitHub Actions CI/CD.",
    aiIntegration: "Utilize AI-driven infrastructure monitoring, log anomaly detection, and automated Terraform generation.",
    tools: ["AWS", "Linux", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Prometheus"],
    careerRoles: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer (SRE)", "Infrastructure Specialist"],
    modules: [
      {
        title: "Module 1: Linux Administration & Shell Scripting",
        topics: ["Command Line Mastery", "Permissions, Users & Networking", "Bash Automation Scripting", "System Monitoring"]
      },
      {
        title: "Module 2: AWS Cloud Solutions Architecture",
        topics: ["EC2, VPC, Subnets & Security Groups", "S3 Storage & CloudFront CDN", "RDS & DynamoDB", "IAM Security & Load Balancers"]
      },
      {
        title: "Module 3: Containers & Kubernetes",
        topics: ["Dockerfiles & Multi-Stage Builds", "Docker Compose", "Kubernetes Pods, Services, Deployments", "Helm Charts & Ingress Controllers"]
      },
      {
        title: "Module 4: CI/CD Pipelines & Terraform (IaC)",
        topics: ["Automated Testing with GitHub Actions", "Infrastructure as Code with Terraform", "Prometheus & Grafana Monitoring", "Live Production Deployment"]
      }
    ],
    faqs: [
      {
        question: "Will I get hands-on cloud account access?",
        answer: "Yes, you practice with real AWS cloud consoles and deploy live production containers during every practical module."
      }
    ],
    image: "/images/courses/cloud-devops.svg"
  },
  {
    slug: "graphic-designing",
    title: "Graphic Designing & UI Visuals",
    category: "digital-automation",
    categoryLabel: "Digital & Automation",
    tagline: "Master Adobe Photoshop, Illustrator, Figma, and AI Visual Generation",
    duration: "3 Months",
    level: "Beginner Friendly",
    mode: "Classroom + Creative Lab",
    avgSalary: "₹3.5 - ₹7.5 LPA",
    rating: 4.8,
    reviewsCount: 98,
    description: "Turn your creativity into high-paying design work. Learn design theory, typography, color psychology, social media branding, packaging design, and modern UI mockups in Figma.",
    aiIntegration: "Use AI image generation tools (Midjourney, DALL-E, Adobe Firefly) to create custom visual assets in seconds.",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva Pro", "Adobe Firefly", "Midjourney"],
    careerRoles: ["Graphic Designer", "Visual Designer", "Brand Identity Specialist", "UI Designer", "Social Media Creative Artist"],
    modules: [
      {
        title: "Module 1: Fundamentals of Design & Visual Composition",
        topics: ["Color Theory & Contrast", "Typography & Hierarchy", "Layout Grids & Alignment", "Logo Design Principles"]
      },
      {
        title: "Module 2: Adobe Photoshop & Image Manipulation",
        topics: ["Layers, Masks & Selection Tools", "Photo Retouching & Color Correction", "Creating Social Media Ad Creatives", "Generative Fill with AI"]
      },
      {
        title: "Module 3: Adobe Illustrator & Vector Graphics",
        topics: ["Pen Tool Mastery", "Vector Illustrations & Icons", "Corporate Branding & Business Cards", "Packaging & Print Design"]
      },
      {
        title: "Module 4: UI Design in Figma & Portfolio Launch",
        topics: ["Wireframing & Mobile App UI", "Interactive Prototyping", "Design System Basics", "Behance & Dribbble Portfolio Creation"]
      }
    ],
    faqs: [
      {
        question: "Do I need drawing skills to become a graphic designer?",
        answer: "No drawing skills required! Graphic design is about problem solving, layout, typography, and software proficiency."
      }
    ],
    image: "/images/courses/graphic-designing.svg"
  }
];
