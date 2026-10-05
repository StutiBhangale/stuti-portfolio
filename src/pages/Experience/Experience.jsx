import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import "./Experience.css";

const experiences = [
    {
        period: "Feb 2026 – Present",
        role: "Frontend Developer",
        project: "AI Application",
        description:
            "Building responsive enterprise UI for an AI application using AngularJS, TypeScript, JavaScript and REST APIs. Work includes user flows, Figma-based implementation, reusable components and API-driven workflows.",
        skills: ["AngularJS", "TypeScript", "REST APIs", "Figma"]
    },
    {
        period: "May 2025 – Jan 2026",
        role: "Delivery Excellence",
        project: "Project Metrics & Reporting",
        description:
            "Worked on delivery reporting and governance activities, including project metrics, health, risks, escalations, Power BI dashboards, SharePoint-based information and training documentation for project teams.",
        skills: ["Power BI", "SharePoint", "Reporting", "Governance"]
    },
    {
        period: "Jan 2024 – Dec 2024",
        role: "Frontend Developer",
        project: "Payment Solution",
        description:
            "Developed React interfaces for an enterprise payment solution, working with dynamic forms, complex hierarchical data, reusable components, Redux state management and REST API integration.",
        skills: ["React", "Redux", "TypeScript", "REST APIs"]
    },
    {
        period: "Jun 2023 – Dec 2023",
        role: "Frontend Developer",
        project: "Employee Meal Booking",
        description:
            "Developed responsive React screens, integrated REST APIs, managed application state with Redux and worked on reusable UI components and form workflows.",
        skills: ["React", "Redux", "JavaScript", "REST APIs"]
    }
];

const Experience = () => (
    <section id="experience" className="experience-section">
        <div className="section-heading">
            <span>CAREER</span>
            <h1>Experience</h1>
            <p>Frontend development experience across enterprise applications, with additional exposure to delivery reporting and governance.</p>
        </div>

        <div className="experience-timeline">
            {experiences.map((item) => (
                <article className="experience-item" key={`${item.period}-${item.project}`}>
                    <div className="experience-marker" aria-hidden="true">
                        <BriefcaseBusiness size={17} />
                    </div>
                    <div className="experience-content">
                        <div className="experience-period">{item.period}</div>
                        <h2>{item.role}</h2>
                        <h3>{item.project}</h3>
                        <p>{item.description}</p>
                        <div className="experience-tags">
                            {item.skills.map((skill) => <span key={skill}>{skill}</span>)}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </section>
);

export default Experience;
