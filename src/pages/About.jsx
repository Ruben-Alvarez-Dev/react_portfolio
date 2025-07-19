import React from "react";

const About = () => {
  const skills = {
    frontend: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Sass", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Django", "Express.js", "PostgreSQL", "MongoDB", "Redis"],
    tools: ["Git", "Docker", "AWS", "Webpack", "Jest", "Cypress", "Figma", "VS Code"]
  };

  const experience = [
    {
      period: "2022 - Presente",
      role: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      description: "Desarrollo de aplicaciones web escalables usando React y Node.js. Liderazgo de equipo en proyectos de alta complejidad."
    },
    {
      period: "2020 - 2022",
      role: "Frontend Developer",
      company: "Digital Agency",
      description: "Creación de interfaces de usuario responsivas y optimizadas. Colaboración estrecha con diseñadores UX/UI."
    },
    {
      period: "2019 - 2020",
      role: "Junior Developer",
      company: "StartUp Innovate",
      description: "Desarrollo de funcionalidades web y mantenimiento de aplicaciones existentes. Aprendizaje continuo de nuevas tecnologías."
    }
  ];

  return (
    <section className="about fade-in-up" id="about">
      <div className="section-header">
        <h2>Sobre mí</h2>
        <p>
          Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales 
          y soluciones tecnológicas innovadoras que impacten positivamente en la vida de las personas.
        </p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Mi Historia</h3>
          <p>
            Con más de <span className="tech-highlight">4 años de experiencia</span> en desarrollo web, 
            he trabajado en proyectos que van desde startups hasta empresas consolidadas. 
            Mi enfoque se centra en escribir código limpio, escalable y mantenible.
          </p>
          <p>
            Me especializo en el ecosistema de <span className="tech-highlight">JavaScript</span>, 
            pero siempre estoy explorando nuevas tecnologías y metodologías para mejorar 
            la calidad y eficiencia de mis desarrollos.
          </p>
          <p>
            Cuando no estoy programando, disfruto contribuir a proyectos open source, 
            escribir artículos técnicos y mentorear a desarrolladores junior.
          </p>
        </div>

        <div className="skills-section">
          <h3>Habilidades Técnicas</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend</h4>
              <div className="skill-tags">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>Backend</h4>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>Herramientas</h4>
              <div className="skill-tags">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <h3>Experiencia Profesional</h3>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{exp.period}</div>
                  <h4>{exp.role}</h4>
                  <div className="company">{exp.company}</div>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Proyectos Completados</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4+</div>
            <div className="stat-label">Años de Experiencia</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Tecnologías Dominadas</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfacción del Cliente</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;