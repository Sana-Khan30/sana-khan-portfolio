export interface FAQItem {
  question: string;
  answer: string;
  category: "Hiring & Process" | "Full-Stack & Backend" | "Technical Quality";
}

export const faqData: FAQItem[] = [
  {
    question: "Do you build the backend as well, or only frontend React?",
    answer: "I build both! As a full-stack MERN developer ('From API to pixel — I own the full stack'), I design and build your complete Node.js/Express backend, MongoDB database schemas with atomic transactions, JWT authentication, and REST APIs, while engineering the responsive React/Tailwind frontend.",
    category: "Full-Stack & Backend"
  },
  {
    question: "How do we collaborate, and how is my payment protected?",
    answer: "You can hire me securely via Fiverr or Upwork. Both platforms provide built-in milestone escrow protection: your funds are held safely by the platform and only released when you have reviewed and approved each milestone deliverable.",
    category: "Hiring & Process"
  },
  {
    question: "How do you handle revisions and project scope?",
    answer: "Every contract includes dedicated revision rounds to refine typography, layouts, colors, or feature interactions. We align on a clear requirements checklist before starting, so there are no surprises.",
    category: "Hiring & Process"
  },
  {
    question: "What is your timezone and communication availability?",
    answer: "I am based in Karachi, Pakistan (UTC+5), which allows for flexible communication overlap across Europe, the Middle East, the Americas, and Asia. I communicate fluently in English (and Urdu) with prompt daily or milestone progress updates.",
    category: "Hiring & Process"
  },
  {
    question: "Can you convert my Figma or Adobe XD design into clean React and Tailwind code?",
    answer: "Yes. I specialize in 100% pixel-perfect Figma to React conversions. I match exact typography, spacing tokens, mobile/tablet responsive breakpoints, and add smooth hover/micro-interaction states.",
    category: "Technical Quality"
  },
  {
    question: "Do you handle deployment or domain setup?",
    answer: "Yes! I can help deploy your website, configure the backend and database, and connect your custom domain. I also assist with environment variables and HTTPS setup. Domain registration and hosting costs are separate and are usually paid by the client. The deployment approach depends on the project’s requirements.",
    category: "Full-Stack & Backend"
  },
  {
    question: "Who owns the source code and assets after completion?",
    answer: "You own 100% of the code and digital assets. Upon project completion, the repository is transferred directly to your GitHub account with a comprehensive README for local setup and maintenance.",
    category: "Technical Quality"
  },
  {
    question: "Can you build stores with Cash on Delivery (COD) and WhatsApp order routing?",
    answer: "Yes! Like in my flagship project CLENORA, I build custom checkout workflows with server-side price recalculation, atomic stock reservation, Cash on Delivery confirmation, and automated WhatsApp order summary generation.",
    category: "Full-Stack & Backend"
  }
];
