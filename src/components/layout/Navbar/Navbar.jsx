import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Portfolio</h2>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <button className="nav-link" onClick={() => scrollToSection('home')}>
            Inicio
          </button>
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            Sobre mí
          </button>
          <button className="nav-link" onClick={() => scrollToSection('projects')}>
            Proyectos
          </button>
          <button className="nav-link" onClick={() => scrollToSection('skills')}>
            Habilidades
          </button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>
            Contacto
          </button>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar