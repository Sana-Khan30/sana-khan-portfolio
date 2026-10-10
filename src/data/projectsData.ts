export interface Project {
  id: string;
  title: string;
  badge: string;
  projectType: "Production Client Project" | "Hackathon Project (FemHack 2025/2026)" | "Personal Full-Stack Project" | "Personal Project" | "Showcase Project";
  tagline: string;
  description: string;
  category: "MERN & Full-Stack" | "E-Commerce" | "React & Cloud" | "UI & Animation";
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  featured: boolean;
  image: string;
  caseStudy: {
    clientNeed: string;
    whatIBuilt: string;
    challengesSolved: string[];
    customerFeatures?: string[];
    adminFeatures?: string[];
    technicalHighlights: string[];
    stackBreakdown: {
      frontend: string[];
      backend: string[];
      databaseAndAuth: string[];
      devopsAndQuality: string[];
    };
    impact: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "clenora-store",
    title: "CLENORA – Modern Cleaning Products E-Commerce",
    badge: "Flagship Client Project",
    projectType: "Production Client Project",
    tagline: "Full-stack commercial MERN e-commerce store with Cash on Delivery atomic checkout, WhatsApp order dispatch, and custom Admin ERP Dashboard.",
    description: "A production cleaning supplies e-commerce platform built for a commercial client, hosted on Hostinger (clenorastore.com). Features server-side price recalculation, atomic stock locking, WhatsApp order summary dispatch, and an administrative sales & inventory dashboard with 90+ backend automated tests.",
    category: "MERN & Full-Stack",
    tags: ["React 19", "Node.js (Express 5)", "MongoDB Atlas", "JWT Auth", "Cloudinary", "Zod", "Three.js Loader", "90+ Tests"],
    liveUrl: "https://clenorastore.com",
    codeUrl: "https://github.com/Sana-Khan30/Clenora-Store",
    featured: true,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      clientNeed: "The client needed a modern, trustworthy digital storefront for their cleaning supplies brand with Cash on Delivery (COD) and WhatsApp order routing for the Pakistani market, avoiding third-party payment gateway fees while providing full administrative control over catalog, pricing, and stock.",
      whatIBuilt: "Architected an end-to-end MERN stack application from scratch: a high-performance customer-facing store with Three.js brand loader, dynamic cart, and atomic checkout, coupled with a full-featured admin management portal.",
      challengesSolved: [
        "Preventing Stock Race Conditions: Implemented atomic MongoDB transactions ($inc with conditional stock checks) during checkout to prevent overselling during high concurrent traffic.",
        "Price Tampering Prevention: Re-calculated all item subtotals, active discounts, delivery thresholds, and totals purely on the Express backend before order persistence.",
        "Secure Admin Access & Instant Revocation: Engineered JWT + bcrypt authentication with cookie-based tokens, Helmet security headers, and instant session invalidation upon credential changes.",
        "Zero-Friction WhatsApp Flow: Generated instant prefilled WhatsApp order summaries with order ID, itemized quantities, and delivery details upon checkout confirmation."
      ],
      customerFeatures: [
        "Category and search browsing with instant client-side filtering",
        "Responsive shopping cart with dynamic subtotal calculations",
        "Cash on Delivery checkout with server-side price verification and atomic stock locking",
        "WhatsApp click-to-chat integration with prefilled order summaries after checkout",
        "Customer account management and order tracking"
      ],
      adminFeatures: [
        "Executive sales dashboard with 14-day revenue sparkline and low-stock indicators",
        "Complete product CRUD with multi-image Cloudinary upload and optimization",
        "Category hierarchy management and store taxonomy controls",
        "Inventory control system with immutable stock change audit logs",
        "Order status pipeline workflow (Pending -> Confirmed -> Shipped -> Delivered)",
        "Customer management with role validation and instant session invalidation",
        "Global store settings (PKR currency formatting, delivery fees, free-delivery threshold, WhatsApp routing number)"
      ],
      technicalHighlights: [
        "90+ automated backend tests covering auth, catalog, concurrent checkout, inventory locks, and admin authorization",
        "Strict input validation with Zod schemas across all API endpoints",
        "Express 5 async error handling and centralized middleware",
        "Restrained Three.js brand asset preloader for premium visual identity"
      ],
      stackBreakdown: {
        frontend: ["React 19", "Vite", "Tailwind CSS", "Lucide React", "Three.js"],
        backend: ["Node.js", "Express 5", "Zod", "Helmet", "bcrypt"],
        databaseAndAuth: ["MongoDB Atlas", "Mongoose (Atomic Transactions)", "JWT", "Cloudinary SDK"],
        devopsAndQuality: ["90+ Automated Tests", "Hostinger Cloud Hosting", "Custom Domain (clenorastore.com)"]
      },
      impact: "Delivered a production-ready, fully tested e-commerce ecosystem hosted on Hostinger with custom domain that eliminated payment gateway transaction overhead and gave the client full inventory autonomy."
    }
  },
  {
    id: "blogverse",
    title: "BlogVerse – Full-Stack MERN Editorial Platform",
    badge: "FemHack 2025/2026 Project",
    projectType: "Hackathon Project (FemHack 2025/2026)",
    tagline: "Modern publishing platform featuring JWT authentication, Cloudinary media pipeline, GSAP cinematic UI, and theme customizer.",
    description: "Full-stack MERN editorial platform engineered for the FemHack 2025/2026 hackathon. Features rich markdown writing, Cloudinary image hosting, secure JWT authentication, and interactive GSAP animations.",
    category: "MERN & Full-Stack",
    tags: ["React.js", "Node.js", "Express", "MongoDB Atlas", "Cloudinary", "JWT Auth", "GSAP UI"],
    liveUrl: "https://blog-verse-xslt.vercel.app/",
    codeUrl: "https://blog-verse-xslt.vercel.app/",
    featured: true,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      clientNeed: "Content creators need a lightweight, ultra-fast editorial engine with rich media uploads, reader engagement, and smooth navigation.",
      whatIBuilt: "Engineered a full-stack MERN blogging application for the FemHack 2025/2026 hackathon with decoupled REST API architecture, Cloudinary image upload workflows, and dynamic GSAP UI animations.",
      challengesSolved: [
        "Secure Token Management: Implemented secure JWT tokens with refresh cycles and protected API middleware.",
        "Media Optimization: Integrated Cloudinary on-the-fly transformations and automatic WebP image compression.",
        "State & Animation Sync: Coordinated GSAP ScrollTrigger reveals with React state without causing DOM reconciliation lag."
      ],
      technicalHighlights: [
        "Full CRUD for articles, categories, and author profiles",
        "Cloudinary direct upload pipeline with auto thumbnail generation",
        "GSAP smooth micro-interactions and dark/light visual modes",
        "RESTful API design with clean controller-service separation"
      ],
      stackBreakdown: {
        frontend: ["React.js", "Tailwind CSS", "GSAP", "Lucide Icons"],
        backend: ["Node.js", "Express.js", "JWT", "bcrypt"],
        databaseAndAuth: ["MongoDB Atlas", "Mongoose ODM", "Cloudinary"],
        devopsAndQuality: ["Vercel Deployment", "REST API architecture"]
      },
      impact: "Demonstrates complete full-stack MERN mastery, from database modeling and auth security to cinematic frontend animation."
    }
  },
  {
    id: "supportflow",
    title: "SupportFlow – AI-Assisted Customer Support Hub",
    badge: "FemHack 2025/2026 Project",
    projectType: "Hackathon Project (FemHack 2025/2026)",
    tagline: "Role-based ticket lifecycle system with smart priority tagging, real-time status updates, and agent queues.",
    description: "Full-stack AI-assisted customer support desk built for FemHack 2025/2026. Manages customer inquiries, automated ticket categorization, priority SLAs, agent triage queues, and status transitions.",
    category: "MERN & Full-Stack",
    tags: ["React 19", "Node.js", "Express", "MongoDB", "Role-Based Auth", "REST APIs"],
    liveUrl: "https://supportflow-frontend-ikxu.onrender.com",
    codeUrl: "https://supportflow-frontend-ikxu.onrender.com",
    featured: true,
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      clientNeed: "Startups need an affordable, structured ticket management system to handle customer inquiries without expensive SaaS licensing fees.",
      whatIBuilt: "Developed a full-stack ticket management desk for FemHack 2025/2026 with customer portal, agent triage queues, and role-based permissions (Customer vs Agent vs Admin).",
      challengesSolved: [
        "Role-Based Access Control (RBAC): Built granular route guards preventing unauthorized access to customer ticket logs.",
        "Ticket State Machine: Designed strict validation rules ensuring tickets transition smoothly from New -> In-Progress -> Resolved -> Closed."
      ],
      technicalHighlights: [
        "Priority categorization (Critical, High, Medium, Low) and SLA timelines",
        "Agent assignment queue and internal notes support",
        "Customer submission portal with real-time ticket tracking"
      ],
      stackBreakdown: {
        frontend: ["React.js", "Tailwind CSS", "Vite"],
        backend: ["Node.js", "Express.js", "JWT"],
        databaseAndAuth: ["MongoDB Atlas", "Mongoose"],
        devopsAndQuality: ["Render Deployment", "Clean REST API structure", "Strict Schema Validation"]
      },
      impact: "Provides a scalable support operations architecture ready for growing SaaS products."
    }
  },
  {
    id: "cv-master",
    title: "CV Master – Interactive Resume Builder",
    badge: "FemHack 2025/2026 Project",
    projectType: "Hackathon Project (FemHack 2025/2026)",
    tagline: "Dynamic, real-time resume editor with ATS-ready exports and Firebase cloud sync.",
    description: "An interactive ATS-compliant resume builder built for the FemHack 2025/2026 hackathon. Allows job seekers to create, edit, and export tailored resumes with real-time live preview and modular section management.",
    category: "React & Cloud",
    tags: ["React.js", "Tailwind CSS", "Firebase", "PDF Generator", "State Management"],
    liveUrl: "https://cv-master-kappa.vercel.app/",
    codeUrl: "https://cv-master-kappa.vercel.app/",
    featured: true,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      clientNeed: "Job seekers need an accessible tool to build clean, ATS-compliant resumes without formatting headaches or paywalls.",
      whatIBuilt: "A reactive resume generator engineered for FemHack 2025/2026 with instant live layout preview, section re-ordering, and one-click PDF compilation.",
      challengesSolved: [
        "Nested Form State: Synchronized multi-section form inputs with immediate live canvas preview without UI stutter."
      ],
      technicalHighlights: [
        "Real-time dynamic preview rendering",
        "Modular section reordering and editing",
        "Client-side PDF compilation"
      ],
      stackBreakdown: {
        frontend: ["React.js", "Tailwind CSS", "Lucide Icons"],
        backend: ["Client-side PDF engine"],
        databaseAndAuth: ["Firebase Firestore"],
        devopsAndQuality: ["Vercel Hosting"]
      },
      impact: "Enables users to build print-perfect resumes in under 3 minutes."
    }
  },
  {
    id: "ai-interview-coach",
    title: "AI Interview Coach – Interactive Voice & Prep Portal",
    badge: "Interactive UI Showcase",
    projectType: "Showcase Project",
    tagline: "Voice-assisted interview preparation tool with real-time Web Speech recognition and animated question prompts.",
    description: "An interactive front-end web application designed to prepare technical job seekers with real-time spoken answer evaluation prompts, animated scorecards, and Web Speech API voice capture.",
    category: "UI & Animation",
    tags: ["React.js", "Web Speech API", "Tailwind CSS", "Framer Motion", "Audio UX"],
    liveUrl: "https://github.com/Sana-Khan30",
    codeUrl: "https://github.com/Sana-Khan30",
    featured: false,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      clientNeed: "Job candidates need interactive, low-stress practice environments to refine technical explanations under timed constraints.",
      whatIBuilt: "Crafted an animated interview simulator utilizing browser-native Web Speech recognition, Framer Motion transitions, and timer feedback loops.",
      challengesSolved: [
        "Voice Stream Handling: Implemented native browser Web Speech API listeners with graceful microphone permission fallbacks.",
        "Smooth Visual Feedback: Coordinated live speech-to-text waveforms with reactive answer timers."
      ],
      technicalHighlights: [
        "Browser-native Speech-to-Text answer capture",
        "Animated timer counters and category selectors (Frontend, Backend, System Design)",
        "Responsive, high-contrast dark interface"
      ],
      stackBreakdown: {
        frontend: ["React.js", "Framer Motion", "Tailwind CSS", "Web Speech API"],
        backend: ["Client-Side Evaluation Engine"],
        databaseAndAuth: ["Local State & LocalStorage caching"],
        devopsAndQuality: ["Zero dependency audio processing"]
      },
      impact: "Demonstrates advanced browser API integration and polished audio-visual UI design."
    }
  },
  {
    id: "sushi-restaurant",
    title: "Luxury Sushi Dining & E-Commerce Web App",
    badge: "Frontend Engineering",
    projectType: "Showcase Project",
    tagline: "Gastronomic digital showcase with interactive Context API cart and luxury dark aesthetic.",
    description: "A Japanese culinary web experience featuring interactive menu browsing, real-time cart state management, and immersive visual storytelling.",
    category: "E-Commerce",
    tags: ["React.js", "Context API", "Tailwind CSS", "UX Design"],
    liveUrl: "https://react-luxury-sushi-web.vercel.app/",
    codeUrl: "https://react-luxury-sushi-web.vercel.app/",
    featured: false,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      clientNeed: "High-end restaurants require an appetizing digital presence that drives takeaway orders and table bookings on mobile devices.",
      whatIBuilt: "Developed a React application featuring Context API cart state, smooth scroll anchors, and responsive order drawers.",
      challengesSolved: [
        "Fluid Cart Flow: Implemented reactive subtotal calculations and drawer state without external state bloat."
      ],
      technicalHighlights: [
        "Dynamic shopping cart with live item counters",
        "Categorized menu explorer and smooth section scroll",
        "Luxury dark theme with responsive typography"
      ],
      stackBreakdown: {
        frontend: ["React.js", "Context API", "Tailwind CSS"],
        backend: ["Client-side state"],
        databaseAndAuth: ["Local state storage"],
        devopsAndQuality: ["Vercel Deployment"]
      },
      impact: "Elevated brand perception with a clean, mobile-first ordering experience."
    }
  },
  {
    id: "firebase-chatapp",
    title: "Firebase Real-Time Messenger",
    badge: "Frontend Engineering",
    projectType: "Showcase Project",
    tagline: "Low-latency instant messaging application with Google/Email authentication and Firestore sync.",
    description: "A cloud-powered real-time chat application delivering instant message synchronization, user presence, secure authentication, and cloud storage.",
    category: "React & Cloud",
    tags: ["JavaScript (ES6+)", "Firebase Auth", "Cloud Firestore", "Real-Time Sync"],
    liveUrl: "https://firebase-chatpp.netlify.app/",
    codeUrl: "https://firebase-chatpp.netlify.app/",
    featured: false,
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      clientNeed: "Web platforms need embedded real-time chat channels for instant customer communication.",
      whatIBuilt: "Constructed a real-time messaging client using Firebase Authentication and Firestore snapshot listeners.",
      challengesSolved: [
        "Sub-Second Message Propagation: Utilized Firestore real-time listeners with automatic scroll-to-bottom feeds."
      ],
      technicalHighlights: [
        "User authentication and session retention",
        "Instant bi-directional message dispatch",
        "Responsive mobile messaging UI"
      ],
      stackBreakdown: {
        frontend: ["JavaScript (ES6+)", "HTML5", "CSS3"],
        backend: ["Firebase Serverless"],
        databaseAndAuth: ["Cloud Firestore", "Firebase Auth"],
        devopsAndQuality: ["Netlify Hosting"]
      },
      impact: "Provides instant zero-delay chat with zero server maintenance overhead."
    }
  },
  {
    id: "drivepro-x",
    title: "DrivePro-X Luxury EV Showcase",
    badge: "UI & Animation",
    projectType: "Showcase Project",
    tagline: "Interactive 3D-styled automotive digital showroom with scroll animations and tech specs.",
    description: "An automotive digital showroom highlighting electric vehicles with smooth scroll-triggered animations and interactive specs.",
    category: "UI & Animation",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "AOS Animations"],
    liveUrl: "https://drivepro-x.netlify.app/",
    codeUrl: "https://drivepro-x.netlify.app/",
    featured: false,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      clientNeed: "Automotive dealerships need high-impact visual storytelling platforms to engage digital buyers.",
      whatIBuilt: "Engineered a high-contrast dark theme showroom with scroll-triggered hardware-accelerated reveals.",
      challengesSolved: [
        "Performance Optimization: Prevented layout jank during rapid scroll triggers."
      ],
      technicalHighlights: [
        "Hardware accelerated scroll reveals",
        "Interactive battery and performance metric comparisons"
      ],
      stackBreakdown: {
        frontend: ["HTML5", "Tailwind CSS", "JavaScript", "AOS"],
        backend: ["Static"],
        databaseAndAuth: ["N/A"],
        devopsAndQuality: ["Netlify Deployment"]
      },
      impact: "Created an immersive showroom feel with high visual engagement."
    }
  },
  {
    id: "health-website",
    title: "CarePoint Healthcare & Clinic Portal",
    badge: "Frontend Engineering",
    projectType: "Showcase Project",
    tagline: "Modern healthcare landing page with doctor directory and appointment booking.",
    description: "A clean, trustworthy medical clinic web platform with doctor profiles, healthcare service overviews, and appointment booking flows.",
    category: "React & Cloud",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "SweetAlert2"],
    liveUrl: "https://health-website-from-tailwind.netlify.app/",
    codeUrl: "https://health-website-from-tailwind.netlify.app/",
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      clientNeed: "Clinics require clean, accessible portals allowing patients to discover specialists and schedule consultations effortlessly.",
      whatIBuilt: "Structured a patient-friendly clinic portal with doctor directories and interactive SweetAlert2 booking modals.",
      challengesSolved: [
        "Clarity & Accessibility: High contrast clinical layout with accessible booking CTAs."
      ],
      technicalHighlights: [
        "Doctor specialty directory",
        "Interactive appointment inquiry modal"
      ],
      stackBreakdown: {
        frontend: ["HTML5", "Tailwind CSS", "JavaScript", "SweetAlert2"],
        backend: ["Static / Form handling"],
        databaseAndAuth: ["N/A"],
        devopsAndQuality: ["Netlify Deployment"]
      },
      impact: "Streamlined medical appointment inquiries into 3 clear steps."
    }
  },
  {
    id: "eclat-beauty",
    title: "Éclat Beauty Salon & Aesthetic Hub",
    badge: "Frontend Engineering",
    projectType: "Showcase Project",
    tagline: "Chic salon digital storefront with treatment pricing, service packages, and reviews.",
    description: "A refined beauty and wellness website showcasing salon services, treatment packages, client testimonials, and online appointment booking inquiries.",
    category: "React & Cloud",
    tags: ["React.js", "Tailwind CSS", "Component Design"],
    liveUrl: "https://eclat-beauty.vercel.app/",
    codeUrl: "https://eclat-beauty.vercel.app/",
    featured: false,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      clientNeed: "Beauty salons need an elegant digital experience to showcase services, price packages, and social proof.",
      whatIBuilt: "Built a modular React.js front-end with clean typography, treatment menus, and testimonial carousels.",
      challengesSolved: [
        "Mobile-First Table Layouts: Created responsive service pricing tiers that adapt cleanly to phones."
      ],
      technicalHighlights: [
        "Interactive treatment menu with transparent pricing",
        "Client testimonial carousel and inquiry CTAs"
      ],
      stackBreakdown: {
        frontend: ["React.js", "Tailwind CSS"],
        backend: ["Client state"],
        databaseAndAuth: ["N/A"],
        devopsAndQuality: ["Vercel Deployment"]
      },
      impact: "Delivered a premium digital presence that elevated brand trust."
    }
  },
  {
    id: "coffee-shop",
    title: "Artisan Coffee Roasters Experience",
    badge: "UI & Animation",
    projectType: "Showcase Project",
    tagline: "Sensory coffee brand showcase with animated brew timelines and interactive menu.",
    description: "A modern coffee roastery landing page engineered with React and GSAP animations, featuring artisan drink menus and interactive storytelling.",
    category: "UI & Animation",
    tags: ["React.js", "GSAP", "Tailwind CSS"],
    liveUrl: "https://coffee-shop-landing-page-ikzzrlgf9-sanas-projects-7e9aff20.vercel.app/",
    codeUrl: "https://coffee-shop-landing-page-ikzzrlgf9-sanas-projects-7e9aff20.vercel.app/",
    featured: false,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      clientNeed: "Artisanal coffee brands need immersive visual storytelling to stand out online.",
      whatIBuilt: "Coordinated GSAP animation timelines with React components for fluid hero reveals and brew timeline guides.",
      challengesSolved: [
        "Smooth GSAP Timelines: Crafted 60fps micro-animations without layout shifting."
      ],
      technicalHighlights: [
        "GSAP scroll-triggered entrance animations",
        "Artisan brewing methods showcase"
      ],
      stackBreakdown: {
        frontend: ["React.js", "GSAP", "Tailwind CSS"],
        backend: ["Static"],
        databaseAndAuth: ["N/A"],
        devopsAndQuality: ["Vercel Deployment"]
      },
      impact: "Enhanced brand perception through fluid motion design."
    }
  },
  {
    id: "image-gallery",
    title: "PixelVault Creative Media Gallery",
    badge: "Frontend Engineering",
    projectType: "Showcase Project",
    tagline: "Ultra-fast responsive image showcase with instant category filtering and lightbox.",
    description: "A lightweight, high-performance visual gallery with category-based filtering, responsive grid layouts, and modal lightbox preview.",
    category: "UI & Animation",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Performance"],
    liveUrl: "https://sana-khan30.github.io/ImageGallery/",
    codeUrl: "https://sana-khan30.github.io/ImageGallery/",
    featured: false,
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      clientNeed: "Creative artists need an ultra-fast, zero-bloat web gallery to showcase portfolios.",
      whatIBuilt: "Engineered with pure vanilla JavaScript and CSS Grid for instant sorting and modal preview.",
      challengesSolved: [
        "Zero-Dependency Speed: Achieved sub-100ms load time with pure semantic code."
      ],
      technicalHighlights: [
        "Instant category filtering",
        "Keyboard-accessible lightbox modal"
      ],
      stackBreakdown: {
        frontend: ["HTML5", "CSS3", "JavaScript ES6+"],
        backend: ["Static"],
        databaseAndAuth: ["N/A"],
        devopsAndQuality: ["GitHub Pages"]
      },
      impact: "Achieved a 100/100 Google Lighthouse performance score."
    }
  }
];
