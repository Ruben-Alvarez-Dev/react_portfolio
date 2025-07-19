import React from 'react';
import './Header.css'; // Assuming you will create a Header.css for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Mi Portafolio</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Sobre Mí</a></li>
                    <li><a href="/projects">Proyectos</a></li>
                    <li><a href="/contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;