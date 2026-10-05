import React from "react";
import { SkillsData } from "../../UserData/SkillsData";
import "./Skills.css";

const Skills = () => {
    return (
        <div id="skills" className="skills-section">
            <h1>My Skills</h1>
            <div className="skills-content">
                {SkillsData.map((category) => (
                    <div className="skills-category" key={category.category}>
                        <h2>{category.category}</h2>

                        <div className="skills-grid">
                            {category.skills.map((skill) => {
                                const Icon = skill.icon;

                                return (
                                    <div className="skill-box" key={skill.name}>
                                        {Icon && <Icon className="skills-icon" />}
                                        <span>{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;