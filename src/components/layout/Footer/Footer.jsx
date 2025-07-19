import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__info">
            <h4>Rubén Álvarez</h4>
            <p>Desarrollador Full Stack</p>
          </div>
          <div className="footer__links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:ruben@ejemplo.com">
              Email
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2024 Rubén Álvarez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;