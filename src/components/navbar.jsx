import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    // Detectar cambio de tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Manejo de scroll para ocultar navbar cuando baja y mostrarlo cuando sube
    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY < lastScrollY);
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Función para abrir/cerrar menú
    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Función para cerrar menú solo si es móvil
    const closeMenuOnMobile = () => {
        if (isMobile) setMenuOpen(false);
    };

    return (
        <nav className={`nav ${visible ? "visible" : "hidden-nav"}`}>
            <div className="menu" onClick={toggleMenu}>
                <i className={`fa-solid fa-bars ${menuOpen ? "hidden" : ""}`}></i>
            </div>
            <div className="logo">
                <NavLink to="/home" className="logo-link">CVDP</NavLink>
            </div>
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <i onClick={toggleMenu} className={`fa-solid fa-x ${menuOpen ? "" : "hidden"}`}></i>
                <li onClick={closeMenuOnMobile}>
                    <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>Inicio</NavLink>
                </li>
                <li onClick={closeMenuOnMobile}>
                    <NavLink to="/asesorias" className={({ isActive }) => (isActive ? "active" : "")}>Asesoría experiencia profesional</NavLink>
                </li>
                <li onClick={closeMenuOnMobile}>
                    <NavLink to="/maraton" className={({ isActive }) => (isActive ? "active" : "")}>Maratón de oportunidades laborales</NavLink>
                </li>
                {/* <li onClick={closeMenuOnMobile}><NavLink to="/practicas">Prácticas profesionales y empleo</NavLink></li> */}
                <li onClick={closeMenuOnMobile}>
                    <NavLink to="/empresas" className={({ isActive }) => (isActive ? "active" : "")}>¿Eres empresa?</NavLink>
                </li>
                <li onClick={closeMenuOnMobile}>
                    <NavLink to="/recursos" className={({ isActive }) => (isActive ? "active" : "")}>Recursos</NavLink>
                </li>
                <li onClick={closeMenuOnMobile}>
                    <NavLink to="/challenge" className={({ isActive }) => (isActive ? "active" : "")}>CVDP Challenge</NavLink>
                </li>
                <li onClick={closeMenuOnMobile}>
                    <NavLink to="/conocenos" className={({ isActive }) => (isActive ? "active" : "")}>Conócenos</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
