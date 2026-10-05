import React from "react";
import "./ProjectInfo.css";
import { ProjectData } from "../../UserData/ProjectData";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectsInfo = () => {
    const navigate = useNavigate();

    return (
        <section id="projects" className="project-section">
            <div className="section-heading">
                <span>SELECTED WORK</span>
                <h1>Projects</h1>
                <p>Enterprise and internal applications across React, AngularJS, payments and AI.</p>
            </div>

            <div className="project-container">
                {ProjectData.map((data) => {
                    const Icon = data.icon;
                    return (
                        <article className="project-card" key={data.id}>
                            <div className="project-icon"><Icon size={21} /></div>
                            <h2>{data.name}</h2>
                            <p>{data.description}</p>
                            <div className="project-highlights">
                                {data.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
                            </div>
                            <div className="project-tech">{data.tech}</div>
                            <button className="learn-more-btn" type="button" onClick={() => navigate(`/projects/${data.slug}`)}>
                                View Details <ArrowUpRight size={15} />
                            </button>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectsInfo;
