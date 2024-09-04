import React from 'react';
import './about.css';
import logo from '../../images/LogoConNombre.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-text">
                <h1>Descubre Villa María</h1>
                <p>
                    Ubicada en la pintoresca ciudad de Chiquinquirá, Boyacá, la <span className="color1">Granja Agroturística</span> <span className="color2">Villa María</span> te invita a vivir la auténtica experiencia rural en un entorno de paisajes diversos y amplias áreas recreativas. Disfruta de vistas a nuestros animales de granja, como búfalos, llamas, avestruces y caballos, entre muchos otros. En un lugar donde la naturaleza y la tranquilidad se combinan, te ofrecemos un escape perfecto.
                </p>
            </div>
            <div className="about-image">
                <img src={logo} alt="Logo Granja Villa Maria" />
            </div>
        </div>
    );
};

export default About;