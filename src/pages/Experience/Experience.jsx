import React from "react";
import { BriefcaseBusiness, Layers3 } from "lucide-react";
import { experiences } from "../../UserData/ExperienceData";
import "./Experience.css";

const Experience = () => (
    <section id="experience" className="experience-section">
        <div className="section-heading">
            <h1>Experience</h1>
            <p>
                Professional experience in frontend engineering,
                enterprise applications and delivery excellence.
            </p>
        </div>

        <div className="experience-timeline">
            {experiences.map((item) => (
                <article
                    className="experience-item"
                    key={`${item.period}-${item.role}`}
                >
                    <div className="experience-marker" aria-hidden="true">
                        <BriefcaseBusiness size={18} />
                    </div>

                    <div className="experience-content">
                        <div className="experience-period">
                            {item.period}
                        </div>

                        <h2>{item.role}</h2>
                        <h3>{item.company}</h3>
                        <p className="experience-description">
                            {item.description}
                        </p>

                        <ul className="experience-responsibilities">
                            {item.responsibilities.map((responsibility) => (
                                <li key={responsibility}>
                                    {responsibility}
                                </li>
                            ))}
                        </ul>

                        <div className="experience-tags">
                            {item.skills.map((skill) => (
                                <span key={skill}>{skill}</span>
                            ))}
                        </div>

                        {item.additionalExperience && (
                            <div className="additional-experience">
                                <div className="additional-experience-heading">
                                    <div className="additional-experience-icon">
                                        <Layers3 size={17} />
                                    </div>

                                    <div>
                                        <span className="additional-label">
                                            ADDITIONAL EXPERIENCE
                                        </span>

                                        <h3 className="additional-role">
                                            {item.additionalExperience.role}
                                        </h3>

                                        <span className="additional-period">
                                            {item.additionalExperience.period}
                                        </span>
                                    </div>
                                </div>

                                <p className="additional-description">
                                    {item.additionalExperience.description}
                                </p>

                                <ul className="experience-responsibilities additional-list">
                                    {item.additionalExperience.responsibilities.map(
                                        (responsibility) => (
                                            <li key={responsibility}>
                                                {responsibility}
                                            </li>
                                        )
                                    )}
                                </ul>

                                <div className="experience-tags">
                                    {item.additionalExperience.skills.map(
                                        (skill) => (
                                            <span key={skill}>{skill}</span>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </article>
            ))}
        </div>
    </section>
);

export default Experience;
