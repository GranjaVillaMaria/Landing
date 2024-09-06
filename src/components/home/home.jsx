import React from 'react';
import './home.css';
import logo from '../../images/LogoConNombre.png'
const Home = () => {
    return (
        <div className="home-container">
            <div className="overlay">
                <img src={logo} alt="Logo" className="logo" />
                <p>Bienvenido a la</p>
                <h1>Granja Agroturistica Villa Maria </h1>
                <p>Estamos encantados de tenerte aquí. Explora nuestras ofertas y servicios.</p>
                <a href="https://wa.me/3138832314?text=Hola%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios%20en%20la%20Granja%20Agroturistica%20Villa%20Maria..." target="_blank" rel="noopener noreferrer">
                    <button className="whatsapp-button">Habla con nosotros</button>
                </a>
            </div>
        </div>
    );
};

export default Home;