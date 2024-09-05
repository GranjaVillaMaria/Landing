import React from 'react';
import './underconstruction.css'; // Asegúrate de crear este archivo para los estilos
import construccion from '../../images/construccion.gif'


const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <h3>El sitio sigue en construcción</h3>
      <div className="animation-wrapper">
        <img src= {construccion} alt="Construcción en progreso" className="construction-gif" />
      </div>
    </div>
  );
};

export default UnderConstruction;