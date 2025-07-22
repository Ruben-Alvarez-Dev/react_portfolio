import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>Desarrollador Full Stack apasionado por crear soluciones web innovadoras.</p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                  Sobre mí
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                  Proyectos
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Redes Sociales</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="GitHub">
                <span>🐙</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <span>📧</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Portfolio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer