import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);  // Estado para controlar el menú desplegable

    const toggleMenu = () => {
        setIsMobile(!isMobile);  // Cambiar el estado cuando se hace clic en el icono
    };
    return (
        <nav className="nav">
            <div className="menu" onClick={toggleMenu}>
                <i className={`fa-solid fa-bars ${isMobile ? 'hidden' : ''}`}></i>
            </div>
            <div className="logo">
                CVDP
            </div>
            <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
                <i onClick={toggleMenu} className={`fa-solid fa-x ${isMobile ? '' : 'hidden'}`}></i>
                <li onClick={toggleMenu}><Link to="/home">Inicio</Link></li>
                <li onClick={toggleMenu}><Link to="/asesorias">Asesoría experiencia profesional</Link></li>
                <li onClick={toggleMenu}><Link to="/practicas">Prácticas profesionales y empleo</Link></li>
                <li onClick={toggleMenu}><Link to="/empresas">¿Eres empresa?</Link></li>
                <li onClick={toggleMenu}><Link to="/recursos">Recursos</Link></li>
                <li onClick={toggleMenu}><Link to="/challenge">CVDP Challenge</Link></li>
                <li onClick={toggleMenu}><Link to="/conocenos">Conócenos</Link></li>
            </ul>
          
        </nav>

    );
  }
  
  export default Navbar;