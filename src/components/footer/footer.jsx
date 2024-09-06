// src/components/Footer.js

import React from 'react';
import {FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-block">
                    <h3>Granja Agroturistica Villa Maria</h3>
                    <p className="footer-description">
                        Disfruta de la belleza de la Granja Villa María, un lugar ideal para tus vacaciones en contacto con la naturaleza.
                    </p>
                    <div className="footer-socials">
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://wa.me/3138832314?text=Hola,%20me%20gustaría%20hacer%20una%20reserva%20en%20la%20Granja%20Agroturistica%20Villa%20Maria" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
                <div className="footer-block">
                    <h4>Contáctanos</h4>
                    <p>Email: granjaagroturisticavillamaria@gmail.com</p>
                    <p>Teléfono: +57 313 8832314</p>
                    <p>Dirección: Chiquinquirá Boyacá, Vereda Cordoba Alto</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Granja Agroturistica Villa María. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
