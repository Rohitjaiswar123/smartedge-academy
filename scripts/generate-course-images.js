const fs = require('fs');
const path = require('path');

const courses = [
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    subtitle: 'Neural Networks • LLMs • GenAI',
    color1: '#3b82f6',
    color2: '#8b5cf6',
    symbol: 'AI'
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics & BI',
    subtitle: 'Power BI • SQL • Business Insights',
    color1: '#06b6d4',
    color2: '#3b82f6',
    symbol: 'DATA'
  },
  {
    slug: 'data-science',
    title: 'Data Science & ML',
    subtitle: 'Predictive Modeling • Python • Algorithms',
    color1: '#6366f1',
    color2: '#a855f7',
    symbol: 'ML'
  },
  {
    slug: 'power-bi',
    title: 'Power BI & DAX',
    subtitle: 'Interactive Dashboards • Analytics',
    color1: '#f59e0b',
    color2: '#ef4444',
    symbol: 'BI'
  },
  {
    slug: 'sql-developer',
    title: 'SQL & Database Engineering',
    subtitle: 'PostgreSQL • MySQL • Queries',
    color1: '#0284c7',
    color2: '#0d9488',
    symbol: 'SQL'
  },
  {
    slug: 'full-stack-developer',
    title: 'Full Stack Web Developer',
    subtitle: 'Next.js • React • Node • Cloud',
    color1: '#2563eb',
    color2: '#38bdf8',
    symbol: 'FULLSTACK'
  },
  {
    slug: 'mern-stack',
    title: 'MERN Stack Developer',
    subtitle: 'MongoDB • Express • React • Node',
    color1: '#10b981',
    color2: '#06b6d4',
    symbol: 'MERN'
  },
  {
    slug: 'python-developer',
    title: 'Python Developer',
    subtitle: 'Django • FastAPI • Backend',
    color1: '#3b82f6',
    color2: '#f59e0b',
    symbol: 'PYTHON'
  },
  {
    slug: 'java-developer',
    title: 'Java Enterprise Developer',
    subtitle: 'Spring Boot • Microservices • JPA',
    color1: '#ea580c',
    color2: '#dc2626',
    symbol: 'JAVA'
  },
  {
    slug: 'frontend-developer',
    title: 'Front End Developer',
    subtitle: 'React • Tailwind • Modern Web UI',
    color1: '#06b6d4',
    color2: '#6366f1',
    symbol: 'FRONTEND'
  },
  {
    slug: 'mobile-app-developer',
    title: 'Mobile App Developer',
    subtitle: 'Flutter • React Native • iOS & Android',
    color1: '#8b5cf6',
    color2: '#ec4899',
    symbol: 'APP'
  },
  {
    slug: 'digital-marketing-ai',
    title: 'Digital Marketing with AI',
    subtitle: 'Meta Ads • Google Ads • SEO & Growth',
    color1: '#ec4899',
    color2: '#f43f5e',
    symbol: 'MARKETING'
  },
  {
    slug: 'business-automation',
    title: 'Business Automation',
    subtitle: 'Make • Zapier • n8n • AI Workflows',
    color1: '#14b8a6',
    color2: '#3b82f6',
    symbol: 'AUTOMATION'
  },
  {
    slug: 'rpa-developer',
    title: 'RPA Developer',
    subtitle: 'UiPath • Software Robotics • Bots',
    color1: '#f97316',
    color2: '#eab308',
    symbol: 'ROBOTICS'
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps Engineer',
    subtitle: 'AWS • Docker • Kubernetes • CI/CD',
    color1: '#f59e0b',
    color2: '#10b981',
    symbol: 'CLOUD'
  },
  {
    slug: 'graphic-designing',
    title: 'Graphic Designing & UI',
    subtitle: 'Photoshop • Illustrator • Figma',
    color1: '#a855f7',
    color2: '#f43f5e',
    symbol: 'DESIGN'
  }
];

const services = [
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Engineering',
    subtitle: 'iOS & Android • Cross-Platform Apps',
    color1: '#8b5cf6',
    color2: '#3b82f6',
    symbol: 'MOBILE'
  },
  {
    slug: 'custom-web-development',
    title: 'Custom Web & SaaS Solutions',
    subtitle: 'Next.js • High-Performance Web Apps',
    color1: '#2563eb',
    color2: '#06b6d4',
    symbol: 'WEB'
  },
  {
    slug: 'ai-automation-agents',
    title: 'AI Automation & Agents',
    subtitle: 'Autonomous LLM Agents • Workflows',
    color1: '#06b6d4',
    color2: '#a855f7',
    symbol: 'AGENTS'
  },
  {
    slug: 'enterprise-business-automation',
    title: 'Enterprise Workflow & RPA',
    subtitle: 'Automated CRM & Operations',
    color1: '#10b981',
    color2: '#3b82f6',
    symbol: 'RPA'
  },
  {
    slug: 'cloud-devops-consulting',
    title: 'Cloud & DevOps Architecture',
    subtitle: 'AWS • Cloud Architecture & CI/CD',
    color1: '#f59e0b',
    color2: '#0284c7',
    symbol: 'DEVOPS'
  },
  {
    slug: 'ui-ux-design-branding',
    title: 'UI/UX Design Systems',
    subtitle: 'Figma • User Journey & Brand Identity',
    color1: '#ec4899',
    color2: '#8b5cf6',
    symbol: 'UI/UX'
  }
];

function escapeXML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateSVG(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${item.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1329" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="glow-${item.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${item.color1}" stop-opacity="0.8" />
      <stop offset="100%" stop-color="${item.color2}" stop-opacity="0.8" />
    </linearGradient>
    <radialGradient id="centerGlow-${item.slug}" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="${item.color1}" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid-${item.slug}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="800" height="450" fill="url(#bg-${item.slug})" />
  <rect width="800" height="450" fill="url(#centerGlow-${item.slug})" />
  <rect width="800" height="450" fill="url(#grid-${item.slug})" />

  <!-- Geometric Tech Circles -->
  <circle cx="400" cy="180" r="140" fill="none" stroke="${item.color1}" stroke-opacity="0.15" stroke-width="2" stroke-dasharray="6,8"/>
  <circle cx="400" cy="180" r="100" fill="none" stroke="${item.color2}" stroke-opacity="0.25" stroke-width="2"/>
  <circle cx="400" cy="180" r="60" fill="rgba(15, 23, 42, 0.85)" stroke="url(#glow-${item.slug})" stroke-width="2"/>

  <!-- Glowing Center Badge -->
  <text x="400" y="188" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">
    ${escapeXML(item.symbol)}
  </text>

  <!-- Tech Dots / Nodes -->
  <circle cx="260" cy="180" r="4" fill="${item.color1}" opacity="0.8"/>
  <line x1="264" y1="180" x2="340" y2="180" stroke="${item.color1}" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="3,3"/>
  
  <circle cx="540" cy="180" r="4" fill="${item.color2}" opacity="0.8"/>
  <line x1="460" y1="180" x2="536" y2="180" stroke="${item.color2}" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="3,3"/>

  <circle cx="400" cy="80" r="4" fill="${item.color1}" opacity="0.8"/>
  <line x1="400" y1="84" x2="400" y2="120" stroke="${item.color1}" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="3,3"/>

  <!-- Card Info Container -->
  <rect x="80" y="310" width="640" height="95" rx="16" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1"/>
  
  <!-- Title & Subtitle -->
  <text x="400" y="348" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="800" fill="#ffffff" text-anchor="middle">
    ${escapeXML(item.title)}
  </text>
  <text x="400" y="380" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="#94a3b8" text-anchor="middle" letter-spacing="1">
    ${escapeXML(item.subtitle)}
  </text>

  <!-- SmartEdge Watermark Top Left -->
  <text x="40" y="45" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#64748b" letter-spacing="1.5">
    SMARTEDGE ACADEMY
  </text>

  <!-- AI Integrated Tag Top Right -->
  <rect x="630" y="28" width="130" height="26" rx="13" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.4)" stroke-width="1"/>
  <text x="695" y="45" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#38bdf8" text-anchor="middle" letter-spacing="1">
    AI POWERED
  </text>
</svg>`;
}

// Generate for all courses
courses.forEach(c => {
  const filePath = path.join(__dirname, '../public/images/courses', `${c.slug}.svg`);
  fs.writeFileSync(filePath, generateSVG(c));
  console.log(`Created ${filePath}`);
});

// Generate for all services
services.forEach(s => {
  const filePath = path.join(__dirname, '../public/images/services', `${s.slug}.svg`);
  fs.writeFileSync(filePath, generateSVG(s));
  console.log(`Created ${filePath}`);
});

// Generate Campus Lab SVG
const campusSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="campus-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1329" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <radialGradient id="campus-glow" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <pattern id="campus-grid" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="800" fill="url(#campus-bg)" />
  <rect width="1200" height="800" fill="url(#campus-glow)" />
  <rect width="1200" height="800" fill="url(#campus-grid)" />

  <!-- Lab Workstation Desks Representation -->
  <g opacity="0.85">
    <!-- Monitor 1 -->
    <rect x="250" y="240" width="200" height="130" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect x="260" y="250" width="180" height="110" rx="4" fill="#090d16" />
    <path d="M 280 280 L 320 280 M 280 300 L 370 300 M 280 320 L 340 320" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
    <rect x="335" y="370" width="30" height="50" fill="#334155" />
    <rect x="310" y="420" width="80" height="12" rx="4" fill="#475569" />

    <!-- Monitor 2 (Center) -->
    <rect x="500" y="200" width="240" height="160" rx="10" fill="#1e293b" stroke="#818cf8" stroke-width="2"/>
    <rect x="510" y="210" width="220" height="140" rx="6" fill="#090d16" />
    <text x="620" y="275" font-family="sans-serif" font-size="20" font-weight="bold" fill="#60a5fa" text-anchor="middle">&lt;SmartEdge /&gt;</text>
    <text x="620" y="310" font-family="sans-serif" font-size="14" fill="#10b981" text-anchor="middle">AI &amp; IT LAB • BHIWANDI</text>
    <rect x="605" y="360" width="30" height="60" fill="#334155" />
    <rect x="580" y="420" width="80" height="12" rx="4" fill="#475569" />

    <!-- Monitor 3 -->
    <rect x="780" y="240" width="200" height="130" rx="8" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
    <rect x="790" y="250" width="180" height="110" rx="4" fill="#090d16" />
    <path d="M 810 280 L 890 280 M 810 300 L 860 300 M 810 320 L 930 320" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
    <rect x="865" y="370" width="30" height="50" fill="#334155" />
    <rect x="840" y="420" width="80" height="12" rx="4" fill="#475569" />
  </g>

  <!-- Large Desk Surface -->
  <polygon points="120,440 1080,440 1140,580 60,580" fill="rgba(30, 41, 59, 0.7)" stroke="#475569" stroke-width="2"/>
  <rect x="60" y="580" width="1080" height="25" fill="#0f172a" />

  <!-- Keyboards -->
  <rect x="540" y="480" width="160" height="40" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <rect x="720" y="490" width="30" height="25" rx="10" fill="#334155" />

  <!-- Center Watermark Overlay -->
  <text x="600" y="680" font-family="sans-serif" font-size="28" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">
    SMARTEDGE ACADEMY CAMPUS
  </text>
  <text x="600" y="720" font-family="sans-serif" font-size="16" font-weight="500" fill="#94a3b8" text-anchor="middle">
    1st Floor, Laxmi Ajit Complex, Mubeen Master Rd, Bhiwandi
  </text>
</svg>`;

fs.writeFileSync(path.join(__dirname, '../public/images/campus.svg'), campusSVG);
console.log('Created public/images/campus.svg');
