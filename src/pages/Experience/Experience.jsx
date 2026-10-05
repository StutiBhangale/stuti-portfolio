import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import { experiences } from "../../UserData/ExperienceData";
import "./Experience.css";

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
