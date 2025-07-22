import './Main.css'

function Main() {
  const projects = [
    {
      id: 1,
      title: "E-commerce App",
      description: "Aplicación de comercio electrónico completa con React y Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "🛒",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Task Manager",
      description: "Gestor de tareas con funcionalidades avanzadas y colaboración en tiempo real",
      technologies: ["React", "Firebase", "Material-UI"],
      image: "📋",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Weather App",
      description: "Aplicación del clima con geolocalización y pronósticos detallados",
      technologies: ["JavaScript", "API REST", "CSS3"],
      image: "🌤️",
      github: "#",
      demo: "#"
    }
  ]

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "CSS/SASS", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Git", level: 80 }
  ]

  return (
    <main className="main">
      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">Sobre Mí</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Soy un desarrollador apasionado por crear soluciones web innovadoras y funcionales. 
                Con experiencia en desarrollo full-stack, me especializo en tecnologías modernas 
                como React, Node.js y bases de datos NoSQL.
              </p>
              <p>
                Mi enfoque se centra en escribir código limpio, escalable y mantenible, 
                siempre buscando las mejores prácticas y las últimas tendencias en desarrollo web.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>2+</h3>
                  <p>Años de experiencia</p>
                </div>
                <div className="stat">
                  <h3>15+</h3>
                  <p>Proyectos completados</p>
                </div>
                <div className="stat">
                  <h3>100%</h3>
                  <p>Clientes satisfechos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Proyectos</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      GitHub
                    </a>
                    <a href={project.demo} className="project-link">
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Habilidades</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>¡Hablemos!</h3>
              <p>
                Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
                No dudes en contactarme si tienes alguna pregunta o propuesta.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <span>tu.email@ejemplo.com</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📍</span>
                  <span>Tu Ciudad, País</span>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Tu email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Tu mensaje" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main