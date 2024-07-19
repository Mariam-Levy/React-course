import React from "react";
import Skill from './Skill';            //Importa el componente Skill

function SkillList() {
    return (
        <div className="skill-list">
            <Skill skill="HTML" emoji="🧡" color="orange" />
            <Skill skill="CSS" emoji="💙" color="#1572B6" />
            <Skill skill="Git + GitHub" emoji="🖤" color="#F05032" />
            <Skill skill="JavaScript" emoji="💛" color="#F7DF1E" />
            <Skill skill="React" emoji="💜" color="#61DAFB" />
        </div>
    )
}


export default SkillList;