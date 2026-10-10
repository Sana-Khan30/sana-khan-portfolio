import { MessageSquareCode, Palette, Code, CheckCircle, Rocket } from "lucide-react";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: typeof MessageSquareCode;
}

export const freelanceProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Requirements Alignment",
    description: "We discuss your project goals, review any design files (Figma, XD), analyze feature requirements, and agree on clear milestones and timeline.",
    deliverables: ["Project scope document", "Milestone timeline", "Tech stack confirmation"],
    icon: MessageSquareCode
  },
  {
    step: "02",
    title: "Architecture & UI Component Design",
    description: "I set up the clean component structure, design system tokens in Tailwind CSS, and build out pixel-perfect responsive layouts.",
    deliverables: ["Responsive UI skeleton", "Design tokens setup", "Component library"],
    icon: Palette
  },
  {
    step: "03",
    title: "Full-Stack Logic & API Integration",
    description: "Implementing reactive state management, Firebase backend services, REST API endpoints, form validation, and dynamic interactions.",
    deliverables: ["State flow & hooks", "Database & Auth integration", "Interactive functionality"],
    icon: Code
  },
  {
    step: "04",
    title: "Testing, QA & Performance Tuning",
    description: "Comprehensive cross-browser and mobile device testing, performance audits, bug resolution, and client review rounds.",
    deliverables: ["Cross-browser QA check", "Lighthouse optimization", "Revision adjustments"],
    icon: CheckCircle
  },
  {
    step: "05",
    title: "Deployment & Post-Delivery Support",
    description: "Deploying the live project to your hosting provider (Vercel, Netlify, custom domain), providing clean documentation, and post-launch support.",
    deliverables: ["Live production deployment", "GitHub repository transfer", "Post-delivery warranty"],
    icon: Rocket
  }
];
