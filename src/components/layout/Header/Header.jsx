import './Header.css'

function Header() {
  return (
    <header id="home" className="header">
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">
            Hola, soy <span className="highlight">Tu Nombre</span>
          </h1>
          <h2 className="header-subtitle">Desarrollador Full Stack</h2>
          <p className="header-description">
            Creo experiencias web modernas y funcionales utilizando las últimas tecnologías. 
            Especializado en React, Node.js y desarrollo de aplicaciones escalables.
          </p>
          <div className="header-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Proyectos
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contactar
            </button>
          </div>
        </div>
        <div className="header-image">
          <div className="profile-placeholder">
            <span>👨‍💻</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header