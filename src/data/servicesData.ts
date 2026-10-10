import { Code2, ShoppingBag, Server, Layout, Sparkles, Clock, ShieldCheck, Layers, CheckCircle2 } from "lucide-react";

export interface FreelanceService {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  icon: typeof Code2;
  techStack: string[];
  deliverables: string[];
  popular?: boolean;
}

export const servicesData: FreelanceService[] = [
  {
    id: "mern-web-apps",
    title: "Custom MERN Web Applications",
    badge: "Full-Stack Core",
    shortDesc: "End-to-end web applications built from scratch with React 19, Node.js/Express, MongoDB, and scalable state architecture.",
    fullDesc: "I build complete, production-ready full-stack applications from scratch. Perfect for SaaS products, internal tools, customer dashboards, and interactive platforms requiring secure data handling and responsive frontends.",
    icon: Code2,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT Auth"],
    deliverables: [
      "Modular, maintainable React 19 / TypeScript component structure",
      "Robust Node.js & Express REST API with async error handling",
      "MongoDB Atlas schemas with Mongoose data validation",
      "Role-based authentication & route protection",
      "Deployment to Vercel (Frontend) and Render/Cloud (Backend)"
    ],
    popular: true
  },
  {
    id: "ecommerce-store-admin",
    title: "E-Commerce Stores with Custom Admin ERP",
    badge: "High Conversion",
    shortDesc: "Modern digital storefronts with dynamic shopping carts, COD / WhatsApp checkout, and full administrative sales dashboards.",
    fullDesc: "Custom e-commerce platforms tailored for high conversion. Includes Cash on Delivery (COD) or payment checkout, instant WhatsApp order summaries, and an admin panel with 14-day sales sparklines, stock audit logs, and Cloudinary image uploads.",
    icon: ShoppingBag,
    techStack: ["React.js", "Express 5", "MongoDB (Atomic Locks)", "Cloudinary", "Zod"],
    deliverables: [
      "Dynamic customer shopping cart with atomic stock reservation",
      "Cash on Delivery checkout & prefilled WhatsApp order routing",
      "Full Admin Dashboard: sales sparklines, orders, inventory logs",
      "Multi-image product upload via Cloudinary SDK",
      "PKR / custom currency formatting and delivery fee thresholds"
    ],
    popular: true
  },
  {
    id: "rest-api-mongodb",
    title: "REST API & MongoDB Backend with JWT Auth",
    badge: "Backend Engineering",
    shortDesc: "Scalable backend architectures, secure JWT authentication with cookie sessions, input validation, and database modeling.",
    fullDesc: "Need a high-performance, secure backend for your web or mobile app? I design RESTful API services with Express, clean controller-service architecture, Zod validation, Helmet security headers, and MongoDB Atlas database pipelines.",
    icon: Server,
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Zod", "Helmet"],
    deliverables: [
      "Secure user authentication (JWT + bcrypt + HTTP-only cookies)",
      "Strict request validation using Zod schemas",
      "Mongoose data modeling with indexed query performance",
      "Automated unit & integration tests (Jest / Supertest)",
      "Clear Postman collection & API documentation"
    ]
  },
  {
    id: "figma-to-react",
    title: "Figma to Pixel-Perfect React & Tailwind",
    badge: "Design Fidelity",
    shortDesc: "Transforming Figma, Adobe XD, or Sketch designs into clean, responsive, high-performance frontend components.",
    fullDesc: "Got a Figma design ready? I convert UI/UX designs into 100% pixel-perfect, accessible React and Tailwind CSS components with fluid responsiveness across mobile, tablet, and ultra-wide screens.",
    icon: Layout,
    techStack: ["React 19", "Tailwind CSS", "Lucide Icons", "Semantic HTML5"],
    deliverables: [
      "100% design fidelity matched to the exact typography and spacing",
      "Fluid responsive layout for mobile, tablet, & desktop (44px tap targets)",
      "Clean, componentized code with reusable design tokens",
      "Interactive hover, focus, and micro-animation states",
      "Cross-browser testing (Chrome, Safari, Firefox, Edge)"
    ]
  },
  {
    id: "cinematic-landing-pages",
    title: "Animated, Cinematic Landing Pages",
    badge: "Motion & 3D",
    shortDesc: "High-impact SaaS and product landing pages powered by GSAP ScrollTrigger, Framer Motion, and Three.js.",
    fullDesc: "Engage your visitors from the first second with buttery 60fps animations, 3D brand elements, and scroll-driven storytelling designed to drive user action and elevate brand credibility.",
    icon: Sparkles,
    techStack: ["GSAP (ScrollTrigger)", "Framer Motion", "Three.js", "Tailwind CSS"],
    deliverables: [
      "Scroll-driven visual reveals and timeline animations",
      "Restrained Three.js interactive 3D hero elements",
      "Strict performance optimization (Lighthouse 90+ target)",
      "Full respect for prefers-reduced-motion accessibility",
      "Integrated contact forms with EmailJS and validation"
    ]
  }
];

export const freelanceGuarantees = [
  {
    icon: ShieldCheck,
    title: "Secure Platform Escrow",
    desc: "Hire me securely via Fiverr or Upwork with milestone-based payment protection."
  },
  {
    icon: Clock,
    title: "Clear Communication & Deadlines",
    desc: "Proactive daily/weekly updates with transparent milestone timelines."
  },
  {
    icon: Layers,
    title: "Clean, Documented Code",
    desc: "Well-structured repository with setup guides and zero spaghetti code."
  },
  {
    icon: CheckCircle2,
    title: "100% Code Ownership",
    desc: "Full source code and deployment rights transferred directly to you upon delivery."
  }
];
