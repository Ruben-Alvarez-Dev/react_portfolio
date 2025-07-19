import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
                <div className="social-links">
                    <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:tu-email@example.com">Contacto</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;