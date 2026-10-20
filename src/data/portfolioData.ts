import type { ProjectItem, ServiceItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Madiha Asif",
  role: "Web Developer & Graphic Designer",
  headline: "Web Developer | Creative Designer | Digital Creator",
  greeting: "HELLO, I'M",
  bio: "I build beautiful, responsive, and user-friendly websites that help businesses establish a strong online presence. I combine modern web development with creative design to turn ideas into engaging digital experiences.",
  aboutParagraph1: "I'm Madiha Asif, a creative web developer passionate about building modern, responsive, and visually engaging digital experiences. I enjoy transforming ideas into functional websites with clean layouts, smooth interactions, and thoughtful user experiences.",
  aboutParagraph2: "Alongside web development, I also explore graphic design and logo creation, allowing me to combine creativity with technical skills. My goal is to help individuals, startups, and businesses establish a professional online presence through beautiful and effective digital solutions.",
  availabilityBadge: "Available for Freelance Projects",
  email: "madihaasif1119@gmail.com",
  whatsappNumber: "+92 309 2274332",
  whatsappClean: "923092274332",
  githubUrl: "https://github.com/MadihaAsif66",
  instagramGraphicDesign: {
    url: "https://www.instagram.com/logostudios_official/",
    label: "Graphic Design & Logo Studio",
    handle: "@logostudios_official"
  },
  instagramWebDesign: {
    url: "https://www.instagram.com/web_designer2.1/",
    label: "Web Design & Development",
    handle: "@web_designer2.1"
  },
  tagline: "Designed with creativity and built with passion by Madiha Asif."
};

export const HIGHLIGHT_CARDS = [
  {
    title: "Responsive Web Design",
    description: "Fluid, mobile-first architectures engineered to adapt seamlessly across smartphones, tablets, laptops, and ultra-wide desktop monitors.",
    icon: "Smartphone"
  },
  {
    title: "Creative UI/UX",
    description: "Thoughtful visual hierarchies, subtle motion choreography, and high-conversion layouts combining aesthetic grace with intuitive usability.",
    icon: "Palette"
  },
  {
    title: "Modern Web Development",
    description: "Clean, component-driven codebases built with semantic HTML5, modern CSS/Tailwind, TypeScript, and reactive state management.",
    icon: "Code2"
  }
];

export const FACTUAL_STATS = [
  { value: "8", label: "Featured Projects Displayed", helper: "All live & publicly deployed" },
  { value: "2", label: "Core Creative Disciplines", helper: "Web Development & Graphic Design" },
  { value: "100%", label: "Responsive Layouts", helper: "Tested across 320px to 1440px+" },
  { value: "Direct", label: "Client Collaboration", helper: "Fast WhatsApp & Email response" }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Modern, responsive, and functional websites tailored to business needs with clean architecture and fast load performance.",
    iconName: "Globe",
    tags: ["Custom Build", "Modern Stack", "SEO Ready"],
    waMessage: "Hi Madiha, I am interested in your Website Development service. Let's discuss a project for my business."
  },
  {
    id: "responsive-design",
    title: "Responsive Web Design",
    description: "Websites that adapt beautifully to mobile phones, tablets, laptops, and desktop screens with zero broken layouts.",
    iconName: "MonitorSmartphone",
    tags: ["Mobile-First", "Fluid Typography", "Cross-Device"],
    waMessage: "Hi Madiha, I would like to build a fully responsive website that looks stunning on phones and desktops."
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description: "Interactive and engaging interfaces using modern frontend technologies like React, TypeScript, and utility-first styling.",
    iconName: "Code",
    tags: ["React & TS", "Tailwind CSS", "Interactive UI"],
    waMessage: "Hi Madiha, I need a modern Frontend Developer for an interactive web interface. Can we talk?"
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description: "Improve the layout, usability, visual quality, and responsiveness of existing websites to boost engagement and trust.",
    iconName: "Sparkles",
    tags: ["UI Modernization", "UX Optimization", "Speed Boost"],
    waMessage: "Hi Madiha, I want to redesign my existing website to give it a fresh, modern, and high-end look."
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Creative visual designs that communicate a brand's identity across digital banners, marketing assets, and social media.",
    iconName: "PenTool",
    tags: ["Visual Assets", "Social Media", "Brand Aesthetics"],
    waMessage: "Hi Madiha, I saw your graphic design work on @logostudios_official and would love to collaborate."
  },
  {
    id: "logo-branding",
    title: "Logo Design & Branding",
    description: "Memorable logo concepts and visual branding systems for businesses, entrepreneurs, and creators seeking a distinct identity.",
    iconName: "Award",
    tags: ["Vector Logos", "Brand Palette", "Identity Systems"],
    waMessage: "Hi Madiha, I need a distinctive logo and visual branding for my business. What is your process and timeline?"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "zaviyar-interior-design",
    title: "Zaviyar Interior Design",
    subtitle: "Luxury Furniture & Turnkey Interiors Studio",
    description: "A luxury bespoke furniture and turnkey interior architecture showcase based in Karachi. Features curated living room suites, custom marble dining sets, bespoke interior consultation bookings, and direct WhatsApp shopping integration.",
    category: "Full Platforms",
    tags: ["React / Next.js", "Tailwind CSS", "Lucide Icons", "Responsive UI", "WhatsApp E-Commerce"],
    liveUrl: "https://zaviyar-interior-design-frontend.vercel.app/",
    githubUrl: "https://github.com/MadihaAsif66",
    featured: true,
    accentColor: "from-amber-500/20 via-purple-500/20 to-pink-500/20",
    badgeText: "Flagship Client Platform",
    previewType: "interior"
  },
  {
    id: "student-attendance-tracker",
    title: "Student Attendance Tracker",
    subtitle: "Real-Time Classroom Management Application",
    description: "A high-contrast, accessible classroom attendance management tool built with controlled React state, dynamic document title synchronization with useEffect, DOM focusing with useRef, non-negative counter floor, and shadcn-inspired components.",
    category: "Interactive Apps",
    tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"],
    liveUrl: "https://student-attendance-tracker-xi.vercel.app/",
    githubUrl: "https://github.com/MadihaAsif66/student-attendance-tracker",
    featured: true,
    accentColor: "from-purple-500/20 via-indigo-500/20 to-blue-500/20",
    badgeText: "React & TypeScript App",
    previewType: "attendance"
  },
  {
    id: "earnest-genie-calculator",
    title: "Modern Web Calculator",
    subtitle: "Responsive JavaScript Arithmetic Engine",
    description: "A clean, responsive web calculator built with modular CSS and vanilla JavaScript. Handles real-time arithmetic operations, floating-point decimals, negation toggle, clear functions, and an ergonomic touch-friendly keypad.",
    category: "Interactive Apps",
    tags: ["HTML5", "CSS3", "JavaScript", "DOM Architecture", "Grid Layout"],
    liveUrl: "https://earnest-genie-8b5b6b.netlify.app/",
    githubUrl: "https://github.com/MadihaAsif66",
    accentColor: "from-fuchsia-500/20 via-pink-500/20 to-rose-500/20",
    badgeText: "JavaScript Utility",
    previewType: "calculator"
  },
  {
    id: "astounding-frangipane-optp",
    title: "OPTP Pakistan Restaurant",
    subtitle: "Fast-Food Brand Digital Showcase",
    description: "A vibrant restaurant web showcase for OPTP Pakistan ('One Potato Two Potato - We Only Fry Fire'). Highlights signature smash burgers, iconic hand-cut fries, brand storytelling, online menu browsing, and interactive order buttons.",
    category: "Frontend Clones",
    tags: ["HTML5", "CSS3", "Responsive Web Design", "Brand Identity"],
    liveUrl: "https://astounding-frangipane-dc78fe.netlify.app/",
    githubUrl: "https://github.com/MadihaAsif66",
    accentColor: "from-red-500/20 via-orange-500/20 to-amber-500/20",
    badgeText: "Food & Beverage UI",
    previewType: "optp"
  },
  {
    id: "preeminent-shortbread-apple",
    title: "Apple Flagship Experience",
    subtitle: "High-Fidelity Storefront Recreation",
    description: "A sleek frontend recreation of Apple's flagship digital showcase featuring iPhone 17 Pro, Apple Vision, AirPods Pro, and Apple Watch series with cinematic dark aesthetics, refined typography, and product feature highlights.",
    category: "Frontend Clones",
    tags: ["HTML5", "CSS3", "FontAwesome", "Product Showcase"],
    liveUrl: "https://preeminent-shortbread-a6845d.netlify.app/",
    githubUrl: "https://github.com/MadihaAsif66",
    accentColor: "from-slate-500/20 via-purple-500/20 to-zinc-500/20",
    badgeText: "Tech Storefront UI",
    previewType: "apple"
  },
  {
    id: "stalwart-seahorse-amazon",
    title: "Amazon Pakistan Marketplace",
    subtitle: "E-Commerce Homepage Portal Clone",
    description: "A comprehensive frontend recreation of the Amazon marketplace homepage with a localized delivery banner for Pakistan, multi-department category headers, promotional shopping deals, account shortcuts, and responsive grid layouts.",
    category: "Frontend Clones",
    tags: ["HTML5", "CSS3", "FontAwesome", "E-Commerce Grid"],
    liveUrl: "https://stalwart-seahorse-7aa4b3.netlify.app/",
    githubUrl: "https://github.com/MadihaAsif66",
    accentColor: "from-amber-500/20 via-yellow-500/20 to-orange-500/20",
    badgeText: "Marketplace UI",
    previewType: "amazon"
  },
  {
    id: "glowing-cactus-cv",
    title: "Interactive Digital Resume & CV",
    subtitle: "Structured Web-Based Profile Showcase",
    description: "A semantic, structured web curriculum vitae highlighting Madiha Asif's background in graphic design and web development, qualifications, education from Pak Grammar School, and commerce studies at Karachi University.",
    category: "Personal & Docs",
    tags: ["Semantic HTML5", "CSS3", "Web Typography", "Accessibility"],
    liveUrl: "https://glowing-cactus-77f9b4.netlify.app/",
    githubUrl: "https://github.com/MadihaAsif66",
    accentColor: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    badgeText: "Digital Curriculum Vitae",
    previewType: "cv"
  },
  {
    id: "iridescent-tanuki-sections",
    title: "Multi-Section Anchor Navigation",
    subtitle: "Document Hierarchy & In-Page Routing",
    description: "An architectural web demonstration showcasing in-page jump navigation, semantic section indexing, persistent top header references, and structured document hierarchy transitions.",
    category: "Personal & Docs",
    tags: ["HTML5", "CSS3", "Anchor Links", "Document Hierarchy"],
    liveUrl: "https://iridescent-tanuki-80aec8.netlify.app/",
    githubUrl: "https://github.com/MadihaAsif66",
    accentColor: "from-indigo-500/20 via-violet-500/20 to-purple-500/20",
    badgeText: "Navigation Architecture",
    previewType: "sections"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Core web standards and modern libraries used to craft responsive, accessible interfaces.",
    skills: [
      { name: "HTML5", level: "Semantic Markup", icon: "FileCode", verifiedContext: "Semantic structure across all 8 live web projects" },
      { name: "CSS3", level: "Modern Layouts", icon: "Layers", verifiedContext: "Flexbox, CSS Grid, media queries, animations" },
      { name: "JavaScript", level: "ES6+ Standards", icon: "Terminal", verifiedContext: "Dynamic logic, calculator engine, DOM events" },
      { name: "TypeScript", level: "Type-Safe Code", icon: "ShieldCheck", verifiedContext: "Verified in Student Attendance Tracker codebase" },
      { name: "React", level: "Component Architecture", icon: "Atom", verifiedContext: "Hooks (useState, useEffect, useRef), shadcn/ui" },
      { name: "Responsive Web Design", level: "Mobile-First", icon: "Smartphone", verifiedContext: "Flawless scaling from 320px mobile to 1440px desktop" }
    ]
  },
  {
    title: "Design & Creative Identity",
    description: "Visual aesthetics, typography, logo systems, and brand communication.",
    skills: [
      { name: "UI Design", level: "User Interface", icon: "Layout", verifiedContext: "Glassmorphism, color harmony, typography hierarchy" },
      { name: "Graphic Design", level: "Visual Assets", icon: "PenTool", verifiedContext: "Active studio profile at @logostudios_official" },
      { name: "Logo Design", level: "Identity & Branding", icon: "Sparkles", verifiedContext: "Vector marks, typography pairings, brand assets" }
    ]
  },
  {
    title: "Workflow & Engineering Tools",
    description: "Version control, build pipelines, and production deployment environments.",
    skills: [
      { name: "Git & GitHub", level: "Version Control", icon: "GitBranch", verifiedContext: "Active repositories under @MadihaAsif66" },
      { name: "Vite & Modern Tooling", level: "Fast Bundling", icon: "Zap", verifiedContext: "Lightning-fast HMR and optimized production builds" },
      { name: "Netlify & Vercel", level: "Cloud Hosting", icon: "CloudUpload", verifiedContext: "All 8 portfolio projects deployed live to CDN edges" }
    ]
  }
];
