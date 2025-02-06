import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);  // Detectar si es móvil
    const [menuOpen, setMenuOpen] = useState(false);  // Estado para controlar el menú

    // Detectar cambio de tamaño de pantalla para actualizar `isMobile`
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Función para abrir/cerrar menú
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Función para cerrar menú solo si es móvil
    const closeMenuOnMobile = () => {
        if (isMobile) {
            setMenuOpen(false);
        }
    };

    return (
        <nav className="nav">
            <div className="menu" onClick={toggleMenu}>
                <i className={`fa-solid fa-bars ${menuOpen ? 'hidden' : ''}`}></i>
            </div>
            <div className="logo"> <Link to="/home" className="logo-link">CVDP</Link></div>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <i onClick={toggleMenu} className={`fa-solid fa-x ${menuOpen ? '' : 'hidden'}`}></i>
                <li onClick={closeMenuOnMobile}><Link to="/home">Inicio</Link></li>
                <li onClick={closeMenuOnMobile}><Link to="/asesorias">Asesoría experiencia profesional</Link></li>
                <li onClick={closeMenuOnMobile}><Link to="/practicas">Prácticas profesionales y empleo</Link></li>
                <li onClick={closeMenuOnMobile}><Link to="/empresas">¿Eres empresa?</Link></li>
                <li onClick={closeMenuOnMobile}><Link to="/recursos">Recursos</Link></li>
                <li onClick={closeMenuOnMobile}><Link to="/challenge">CVDP Challenge</Link></li>
                <li onClick={closeMenuOnMobile}><Link to="/conocenos">Conócenos</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;