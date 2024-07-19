import React from "react";              //Importa la libreria React

function Skill(props) {
    return (
        <div className="skill" style={{ backgroundColor: props.color }}>
            <span>{props.skill}</span>  {/* renderiza el nombre de la habilidad */}
            <span>{props.emoji}</span>  {/* renderiza el emoji de la habilidad */}
        </div>
    )
}

export default Skill;