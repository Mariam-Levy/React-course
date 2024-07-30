import React from "react";
import Skill from "./Skill";
import skills from "../data/skills";

function SkillList() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill skill={skill.skill} color={skill.color} level={skill.level} />
            ))}
        </div>
    );
}

export default SkillList;