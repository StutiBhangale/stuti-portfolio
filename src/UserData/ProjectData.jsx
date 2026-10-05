import {
  Sparkles,
  Banknote,
  ChartNoAxesCombined,
  CalendarCheck
} from "lucide-react";

export const ProjectData = [
  {
    id: 1,
    slug: "ai-application",
    name: "AI Application",

    description:
      "Enterprise AI application featuring AI Chat, RAG, Knowledge Vault, role-based agents and Agentic AI workflows",

    tech: "AngularJS · TypeScript · Figma · REST APIs",

    highlights: ["API Integrations", "Reusable Components", "AI Workflows"],

    icon: Sparkles,

    duration: "Feb 2026 – Present",

    stack: [
      "AngularJS",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Figma",
      "Git",
      "GitHub"
    ],

    overview:
      "An enterprise AI application bringing together capabilities such as RAG, AI Chat, Knowledge Vault, role-based agents and Agentic AI through user-friendly frontend workflows.",

    contribution: [
      "Translated business requirements into user flows, Figma designs and frontend implementations.",
      "Developed responsive UI screens and integrated 30+ REST APIs.",
      "Built reusable frontend components including navigation, search, chat interface and prompt input.",
      "Worked with AI concepts including RAG, Graph RAG and agent-based workflows from a frontend and user experience perspective.",
      "Mentored 3 interns on Graph-based RAG and chunking concepts, assigned tasks and supported their implementation work.",
      "Participated in Scrum activities, including sprint discussions, task assignment and progress tracking."
    ],

    challenges: [
      "Understanding new AI concepts and translating ambiguous business requirements into clear Figma designs and user-friendly frontend experiences.",
      "Working with a new frontend technology stack while integrating multiple backend APIs."
    ]
  },

  {
    id: 2,
    slug: "payment-solution",
    name: "Payment Solution",

    description:
      "Enterprise payment solution built around ISO 8583 and payment-switch workflows.",

    tech: "React · TypeScript · JavaScript · Redux · REST APIs",

    highlights: ["Dynamic Forms", "Complex Data", "State Management"],

    icon: Banknote,

    duration: "Jan 2024 – Dec 2024",

    stack: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Redux Thunk",
      "Formik",
      "Yup",
      "Material UI",
      "REST APIs",
      "Axios",
      "Jira"
    ],

    overview:
      "An enterprise payment platform for configuring and managing payment message specifications, interfaces, mappings, transformations and routing workflows. The application supports structured configuration of payment processing components through a centralized web interface.",

    contribution: [
      "Developed responsive React interfaces for multiple configuration modules, including Node Interface, Message Configuration, Form Data Tables and Mapping screens.",
      "Integrated REST APIs using Redux, Redux Thunk and Axios.",
      "Implemented dynamic forms, CRUD workflows, validation and state management for configuration-driven interfaces.",
      "Worked with complex hierarchical data and parent-child table structures.",
      "Built reusable UI components and collaborated with BA, backend and QA teams to understand requirements, resolve issues and deliver features.",
      "Participated in Agile activities including sprint planning, task estimation, task tracking and regular team discussions using Jira.",
      "Debugged and independently resolved frontend issues across interconnected workflows while maintaining consistent UI behavior."
    ],

    challenges: [
      "Handling complex nested data and hierarchical tables with multiple levels of parent-child relationships.",
      "Managing data flow between components and keeping UI state synchronized with API responses."
    ]
  },

  {
    id: 3,
    slug: "delivery-excellence",
    name: "Delivery Excellence",

    description:
      "Delivery reporting initiative focused on project metrics, health, risks and management reporting.",

    tech: "Power BI · SharePoint · Data Visualization",

    highlights: ["Project Metrics", "Delivery Reporting", "Governance"],

    icon: ChartNoAxesCombined,

    duration: "May 2025 – Jan 2026",

    stack: [
      "Power BI",
      "SharePoint",
      "Data Visualization"
    ],

    overview:
      "A project governance and reporting initiative focused on tracking monthly delivery metrics and providing visibility into project health, risks, escalations, complaints and other delivery-related information. The initiative supported structured reporting and review processes for project managers and delivery teams, helping them monitor project performance and identify areas requiring attention.",

    contribution: [
      "Collaborated with project managers to understand reporting requirements and delivery governance needs.",
      "Built monthly project metrics and Power BI dashboards to provide visibility into project performance.",
      "Worked with project health, status, risk, escalation and complaint-related information.",
      "Helped organize project information into structured reports for delivery reviews and management discussions.",
      "Created training materials and reference documentation for the Delivery Excellence program to support project managers in following reporting and governance processes."
    ],

    challenges: [
      "Understanding different project governance metrics and how they contribute to delivery visibility.",
      "Consolidating information from different project areas into clear and meaningful reports."
    ]
  },

  {
    id: 4,
    slug: "employee-meal-booking",
    name: "Employee Meal Booking",

    description:
      "Web application for managing employee meal bookings, schedules and related booking information.",

    tech: "React · TypeScript · JavaScript · Redux · REST APIs",

    highlights: ["React UI", "Redux", "API Integration"],

    icon: CalendarCheck,

    duration: "Jun 2023 – Dec 2023",

    stack: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "REST APIs",
      "HTML",
      "CSS"
    ],

    overview:
      "An internal employee application for managing meal-booking workflows through a responsive and API-driven web interface.",

    contribution: [
      "Developed responsive frontend screens using React, JavaScript and TypeScript.",
      "Integrated REST APIs and managed application state using Redux.",
      "Built reusable UI components and worked on form handling and validation.",
      "Debugged frontend issues and collaborated with senior developers and team members."
    ],

    challenges: [
      "Learning to work with APIs, Redux and reusable component patterns as an early-career developer."
    ]
  }
];