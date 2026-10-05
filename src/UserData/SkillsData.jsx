import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiRedux,
  SiMui,
  SiFigma,
  SiJira,
} from "react-icons/si";

import {
  Globe2,
  Layers3,
  BadgeCheck,
  Component,
  MonitorSmartphone,
  CreditCard,
  ArrowLeftRight,
  GitBranch,
  Search,
  Bot,
  RefreshCw,
  Users,
  Workflow,
  BarChart3,
  Files,
  Gauge,
  ShieldCheck,
  TriangleAlert,
  Accessibility,
  Route,
} from "lucide-react";

export const skillsData = [
  {
    category: "Frontend Technologies",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React Hooks", icon: FaReact },
      { name: "React Router", icon: Route },
      { name: "Redux", icon: SiRedux },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Angular", icon: FaAngular },
      { name: "Material UI", icon: SiMui },
    ],
  },

  {
    category: "Development & Engineering",
    skills: [
      { name: "Performance Optimization", icon: Gauge },
      { name: "REST API Integration", icon: Globe2 },
      { name: "State Management", icon: Layers3 },
      { name: "Reusable Components", icon: Component },
      { name: "Responsive UI", icon: MonitorSmartphone },
      { name: "Form Validation", icon: BadgeCheck },
      { name: "Authentication & Authorization", icon: ShieldCheck },
      { name: "Error Handling", icon: TriangleAlert },
      { name: "Accessibility", icon: Accessibility },
    ],
  },

  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Jira", icon: SiJira },
      { name: "Figma", icon: SiFigma },
      { name: "Power BI", icon: BarChart3 },
      { name: "SharePoint", icon: Files },
    ],
  },

  {
    category: "Domain & Practices",
    skills: [
      { name: "Payments", icon: CreditCard },
      { name: "ISO 8583", icon: ArrowLeftRight },
      { name: "Payment Switch", icon: GitBranch },
      { name: "RAG", icon: Search },
      { name: "Role-Based Agents", icon: Bot },
      { name: "Agentic AI Workflow", icon: Workflow },
      { name: "Agile", icon: RefreshCw },
      { name: "Scrum", icon: Users },
      { name: "SDLC", icon: Workflow },
    ],
  },
];