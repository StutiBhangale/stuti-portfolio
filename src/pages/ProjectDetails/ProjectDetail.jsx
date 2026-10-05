import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectData } from "../../UserData/ProjectData";
import "./ProjectDetail.css";

const ProjectDetail = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const project = projectData.find((data) => data.slug === slug);

    if (!project) {
        return (
            <main className="detail-section">
                <div className="detail-page">
                    <h1>Project not found</h1>
                    <button className="detail-btn" type="button" onClick={() => navigate("/")}>
                        <ArrowLeft size={16} /> Back to Projects
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="detail-section">
            <button className="detail-btn" type="button" onClick={() => navigate("/#projects")}>
                <ArrowLeft size={16} /> Back to Projects
            </button>

            <article className="detail-page">
                <div className="detail-eyebrow">PROJECT DETAILS</div>
                <h1>{project.name}</h1>
                <div className="detail-meta">{project.duration}</div>
                <p className="detail-overview">{project.overview}</p>

                <h2>My Contribution</h2>
                <ul>
                    {project.contribution.map((item) => <li key={item}>{item}</li>)}
                </ul>

                <h2>Challenges</h2>
                <ul>
                    {project.challenges.map((item) => <li key={item}>{item}</li>)}
                </ul>

                <h2>Technologies</h2>
                <div className="detail-stack">
                    {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
            </article>
        </main>
    );
};

export default ProjectDetail;
