import { MdForest } from 'react-icons/md';
import './comodidades.css';
import { FaWifi, FaDog, FaCar, FaGamepad, FaUtensils, FaTractor } from 'react-icons/fa';

const Comodidades = () => {
    const comodidades = [
        { icon: <FaWifi />, title: "WiFi", description: "Conexión sin límites con nuestro WiFi gratuito, para que compartas tus momentos sin perder el contacto con el mundo exterior." },
        { icon: <FaDog />, title: "Pet Friendly", description: "Tu amigo de cuatro patas es bienvenido aquí, donde la diversión y el confort también son para ellos." },
        { icon: <FaCar />, title: "Parqueadero", description: "Facilitamos tu llegada con un amplio y seguro parqueadero, pensando en tu comodidad desde el primer momento." },
        { icon: <FaGamepad />, title: "Entretenimiento", description: "Explora juegos tradicionales, de mesa y canchas al aire libre, perfectos para disfrutar y conectar con la cultura local en compañía de tus seres queridos." },
        { icon: <FaUtensils />, title: "Snacks y Bebidas", description: "Refréscate y sacia tu apetito en cualquier momento con nuestra variada oferta de snacks y bebidas, siempre a tu disposición." },
        { icon: <MdForest />, title: "Paisajes Únicos", description: "Disfruta de una vista única e inigualable, contemplando la majestuosidad de la Ciudad Mariana, rodeada por una rica diversidad de flora y fauna." },
        { icon: <FaTractor />, title: "Vida de Granja", description: "Vive la experiencia de granja con la observación de todos los animales que se encuentran en la finca, acercándote a la naturaleza de una forma única y educativa" }
    ];

    return (
        <div className="comodidades-container">
            <div className="comodidades-title-container">
                <h2 className="comodidades-title">Comodidades</h2>
            </div>
            <div className="comodidades-grid">
                {comodidades.map((comodidad, index) => (
                    <div key={index} className="comodidad-card">
                        <div className="comodidad-icon">{comodidad.icon}</div>
                        <h3 className="comodidad-title">{comodidad.title}</h3>
                        <p className="comodidad-description">{comodidad.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comodidades;