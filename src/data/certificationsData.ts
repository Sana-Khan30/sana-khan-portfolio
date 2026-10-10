export interface Certification {
  id: string;
  title: string;
  institution: string;
  issueDate: string;
  certificateNo?: string;
  credentialUrl: string;
  imageKey?: "smit" | "cisco-js" | "cisco-css" | "cisco-html";
  verified: boolean;
  desc: string;
  skillsLearned: string[];
}

export const certificationsData: Certification[] = [
  {
    id: "smit-wmad",
    title: "Web and Mobile App Development (Batch-15)",
    institution: "Saylani IT Training Programme (SMIT)",
    issueDate: "Dec 2024 – May 2026 (18 Months)",
    certificateNo: "SMIT/2024/WMAD/B15/347005",
    credentialUrl: "https://www.saylaniwelfare.com",
    imageKey: "smit",
    verified: true,
    desc: "Rigorous 18-month full-stack development program under Saylani Welfare International Trust, mastering MERN stack (React.js, Node.js, Express, MongoDB Atlas), REST APIs, authentication architecture, and modern mobile/web engineering.",
    skillsLearned: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "REST APIs", "JWT Auth", "Tailwind CSS"]
  },
  {
    id: "cisco-js",
    title: "JavaScript Essentials 1",
    institution: "Cisco Networking Academy & OpenEDG JavaScript Institute",
    issueDate: "Dec 31, 2025",
    certificateNo: "Cisco Verified Badge",
    credentialUrl: "https://www.netacad.com",
    imageKey: "cisco-js",
    verified: true,
    desc: "Achieved student-level credential covering core JavaScript syntax, data types, algorithmic problem solving, flow control, functions, exception handling, and runtime execution.",
    skillsLearned: ["JavaScript (ES6+)", "Algorithmic Logic", "Data Types & Scope", "Exception Handling", "Functions & Objects"]
  },
  {
    id: "cisco-css",
    title: "CSS Essentials",
    institution: "Cisco Networking Academy & JS Institute",
    issueDate: "Dec 31, 2025",
    certificateNo: "Cisco Verified Badge",
    credentialUrl: "https://www.netacad.com",
    imageKey: "cisco-css",
    verified: true,
    desc: "Completed styling credential mastering CSS box model, positioning, Flexbox, CSS Grid, media queries, keyframe animations, contrast accessibility, and responsive design systems.",
    skillsLearned: ["CSS3 & Flexbox", "CSS Grid", "Responsive Design", "Transitions & Keyframes", "Web Accessibility (a11y)"]
  },
  {
    id: "cisco-html",
    title: "HTML Essentials",
    institution: "Cisco Networking Academy",
    issueDate: "Nov 09, 2025",
    certificateNo: "Cisco Verified Badge",
    credentialUrl: "https://www.netacad.com",
    imageKey: "cisco-html",
    verified: true,
    desc: "Mastered semantic HTML5 markup, DOM accessibility, forms, media embedding, and standards-compliant document structure for production web apps.",
    skillsLearned: ["HTML5", "Semantic Markup", "DOM Architecture", "Forms & Inputs", "Web Standards"]
  },
  {
    id: "vtc-dit",
    title: "Diploma in Information Technology (DIT)",
    institution: "Vocational Training Centre (VTC) – Sindh Board of Technical Education",
    issueDate: "Completed",
    certificateNo: "SBTE Verified",
    credentialUrl: "#",
    verified: true,
    desc: "Comprehensive foundation in computer architecture, database management systems, network fundamentals, software design, and applied programming.",
    skillsLearned: ["IT Fundamentals", "Database Systems", "Software Engineering Basics", "Web Fundamentals"]
  }
];
