import { Code2, Server, Database, Sparkles, Wrench, ShieldCheck } from "lucide-react";

export interface SkillCategory {
  title: string;
  categoryIcon: typeof Code2;
  skills: {
    name: string;
    level: string;
    description: string;
    highlight?: boolean;
  }[];
}

export const skillsCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    categoryIcon: Code2,
    skills: [
      {
        name: "React.js (React 19)",
        level: "Core Strength",
        description: "Modular components, custom hooks, Context API state flow, optimized rendering.",
        highlight: true
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        description: "Responsive layouts, mobile-first design tokens, dark mode systems, custom utilities.",
        highlight: true
      },
      {
        name: "JavaScript (ES6+)",
        level: "Advanced",
        description: "Async/await, DOM APIs, event loop, functional programming, Web Speech API.",
        highlight: true
      },
      {
        name: "HTML5 & Semantic Web",
        level: "Expert",
        description: "Accessible ARIA standards, SEO structure, semantic layout hierarchy."
      },
      {
        name: "CSS3 & Flex / Grid",
        level: "Advanced",
        description: "Complex responsive grid layouts, custom properties, print stylesheets (@media print)."
      },
      {
        name: "Bootstrap",
        level: "Proficient",
        description: "Rapid responsive UI scaffolding and grid alignment."
      }
    ]
  },
  {
    title: "Backend & API Architecture",
    categoryIcon: Server,
    skills: [
      {
        name: "Node.js & Express 5",
        level: "Core Strength",
        description: "RESTful API services, async controller architecture, centralized error handling.",
        highlight: true
      },
      {
        name: "Zod Schema Validation",
        level: "Advanced",
        description: "Strict runtime request body & query validation across all endpoints.",
        highlight: true
      },
      {
        name: "Helmet & Web Security",
        level: "Proficient",
        description: "HTTP security headers, CORS policies, XSS and rate limiting protections."
      },
      {
        name: "Automated Backend Tests",
        level: "Proficient",
        description: "Integration testing (90+ automated tests across auth, inventory, and checkout)."
      }
    ]
  },
  {
    title: "Database, Auth & Cloud",
    categoryIcon: Database,
    skills: [
      {
        name: "MongoDB Atlas & Mongoose",
        level: "Core Strength",
        description: "Atomic transactions, stock locking ($inc), indexed queries, data modeling.",
        highlight: true
      },
      {
        name: "JWT & bcrypt Authentication",
        level: "Advanced",
        description: "Cookie-based sessions, password hashing, role-based route guards (RBAC).",
        highlight: true
      },
      {
        name: "Cloudinary SDK",
        level: "Advanced",
        description: "Direct multi-image uploads, on-the-fly transformations, automatic WebP delivery.",
        highlight: true
      },
      {
        name: "Firebase (Firestore & Auth)",
        level: "Proficient",
        description: "Cloud Firestore real-time snapshot listeners, social logins, security rules."
      }
    ]
  },
  {
    title: "Animation & 3D Interactive",
    categoryIcon: Sparkles,
    skills: [
      {
        name: "GSAP (ScrollTrigger)",
        level: "Advanced",
        description: "Hardware-accelerated scroll reveals, timeline choreography, micro-interactions.",
        highlight: true
      },
      {
        name: "Framer Motion",
        level: "Advanced",
        description: "Declarative spring physics, page transitions, responsive modal animations."
      },
      {
        name: "Three.js / React Three Fiber",
        level: "Intermediate",
        description: "Interactive brand loaders, particle mesh viewports, WebGL canvas integration."
      }
    ]
  },
  {
    title: "Developer Tools & DevOps",
    categoryIcon: Wrench,
    skills: [
      {
        name: "Git & GitHub",
        level: "Proficient",
        description: "Version control, branching workflows, clean commit history, repo management."
      },
      {
        name: "Vite & Modern Tooling",
        level: "Advanced",
        description: "Fast HMR, rollup chunk splitting, optimized production builds."
      },
      {
        name: "Postman & API Testing",
        level: "Proficient",
        description: "Comprehensive API endpoint debugging and collection documentation."
      },
      {
        name: "Vercel / Netlify / Render",
        level: "Proficient",
        description: "Production CI/CD deployments for frontend SPAs and backend web services."
      }
    ]
  }
];
