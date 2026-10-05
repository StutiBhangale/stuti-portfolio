import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import "./Home.css";

const Home = () => {
    const [nameText, setNameText] = useState("");
    const [roleText, setRoleText] = useState("");
    const [typingName, setTypingName] = useState(true);
    const [typingRole, setTypingRole] = useState(false);

    const name = "Stuti Bhangale";
    const role = "Frontend Developer";

    useEffect(() => {
        let nameIndex = 0;
        let roleIndex = 0;
        let roleTimeout;
        let roleInterval;

        const nameInterval = setInterval(() => {
            setNameText(name.slice(0, nameIndex + 1));
            nameIndex += 1;

            if (nameIndex === name.length) {
                clearInterval(nameInterval);
                setTypingName(false);

                roleTimeout = setTimeout(() => {
                    setTypingRole(true);
                    roleInterval = setInterval(() => {
                        setRoleText(role.slice(0, roleIndex + 1));
                        roleIndex += 1;

                        if (roleIndex === role.length) {
                            clearInterval(roleInterval);
                            setTypingRole(false);
                        }
                    }, 75);
                }, 250);
            }
        }, 75);

        return () => {
            clearInterval(nameInterval);
            clearInterval(roleInterval);
            clearTimeout(roleTimeout);
        };
    }, []);

    return (
        <main id="home" className="home">
            <div className="home-content">
                <div className="home-eyebrow">FRONTEND DEVELOPER · 3+ YEARS</div>
                <div className="home-info">
                    <p>Hi, I'm</p>
                    <h1>
                        {nameText}
                        {typingName && <span className="typing-cursor">|</span>}
                    </h1>
                    <h2>
                        {roleText}
                        {typingRole && <span className="typing-cursor">|</span>}
                    </h2>
                </div>

                <div className="home-description">
                    <p className="home-lead">
                        I build interfaces that make complex products simple.
                    </p>
                    <p>
                        I have 3+ years of frontend development experience across enterprise
                        payment and AI applications. My primary experience is with React,
                        JavaScript and Redux, with additional experience in AngularJS and
                        TypeScript. I focus on responsive UI, reusable components, dynamic
                        forms, state management and REST API integration.
                    </p>
                </div>

                <div className="home-buttons">
                    <a href="#projects" className="home-btn primary">
                        View Projects
                    </a>

                    <a
                        href="/Stuti_Bhangale_Resume.docx"
                        download
                        className="home-btn secondary"
                    >
                        Download Resume ↗
                    </a>
                </div>

                <div className="home-summary">
                    <div className="summary-label">MY APPROACH</div>
                    <p className="approach-flow">Understand <span>→</span> Design <span>→</span> Build <span>→</span> Integrate <span>→</span> Refine</p>
                    <p>
                        I start by understanding the requirement and user flow, then build
                        maintainable frontend components, integrate APIs, and refine the
                        experience with cross-functional teams.
                    </p>
                </div>

                <a className="scroll-cue" href="/#projects" aria-label="Scroll to projects">
                    <ArrowDown size={15} /> Explore projects
                </a>
            </div>
        </main>
    );
};

export default Home;
