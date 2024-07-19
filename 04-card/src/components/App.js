import React from "react";            //Importa la libreria de React
import '../App.css';                  //Importa el archivo CSS
import Avatar from './Avatar';        //Importa el componente Avatar
import Intro from './Intro';          //Importa el componente Intro
import SkillList from './SkillList';

function App() {
  return (
    <div className="card">            {/* define un div con la clase "card" */}
      <Avatar />                      {/* Renderiza el componente Avatar */}
      <div className="data">
        <Intro />                     {/* Renderiza el componente Intro */}
        <SkillList />
      </div>
    </div>
  )
}

export default App;                   //Exporta el componente App




