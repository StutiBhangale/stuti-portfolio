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
  SiJira 
} from "react-icons/si";

import {
  Globe2,
  Database,
  Plug,
  Layers3,
  BadgeCheck,
  Component,
  MonitorSmartphone,
  ListChecks,
  CreditCard,
  ArrowLeftRight,
  GitBranch,
  Brain,
  Search,
  BookOpen,
  Bot,
  RefreshCw,
  Users,
  Workflow,
  BarChart3,
  Files
} from "lucide-react";

export const SkillsData = [
  {
    category: "Frontend Technologies",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React Hooks", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "AngularJS", icon: FaAngular },
      { name: "Material UI", icon: SiMui },
    ],
  },
  {
    category: "Development & Engineering",
    skills: [
      { name: "REST APIs", icon: Globe2 },
      { name: "CRUD Operations", icon: Database },
      { name: "API Integration", icon: Plug },
      { name: "State Management", icon: Layers3 },
      { name: "Form Validation", icon: BadgeCheck },
      { name: "Reusable Components", icon: Component },
      { name: "Responsive UI", icon: MonitorSmartphone },
      { name: "Dynamic Forms", icon: ListChecks },
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
    category: "Domain Experience",
    skills: [
      { name: "Payments", icon: CreditCard },
      { name: "ISO 8583", icon: ArrowLeftRight },
      { name: "Payment Switch", icon: GitBranch },
      { name: "Transaction Processing", icon: ArrowLeftRight },
      { name: "Artificial Intelligence", icon: Brain },
      { name: "RAG", icon: Search },
      { name: "Knowledge Vault", icon: BookOpen },
      { name: "Agentic AI", icon: Bot },
    ],
  },

  {
    category: "Methodologies",
    skills: [
      { name: "Agile", icon: RefreshCw },
      { name: "Scrum", icon: Users },
      { name: "SDLC", icon: Workflow },
    ],
  },
];