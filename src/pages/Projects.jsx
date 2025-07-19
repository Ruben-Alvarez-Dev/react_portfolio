import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico completa con React, Node.js y MongoDB. Incluye sistema de pagos, gestión de inventario y panel de administración.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      image: "🛒",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades avanzadas como colaboración en tiempo real, notificaciones y análisis de productividad.",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      image: "📋",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard meteorológico interactivo con visualizaciones de datos, pronósticos extendidos y mapas interactivos usando APIs externas.",
      technologies: ["Vue.js", "D3.js", "OpenWeather API", "Chart.js"],
      image: "🌤️",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Herramienta de análisis de redes sociales que proporciona insights detallados sobre engagement, alcance y tendencias de contenido.",
      technologies: ["Python", "Django", "React", "Pandas", "Chart.js"],
      image: "📊",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="projects fade-in-up" id="projects">
      <div className="section-header">
        <h2>Proyectos Destacados</h2>
        <p>Una selección de mis trabajos más recientes que demuestran mis habilidades técnicas y creatividad.</p>
      </div>
      
      <div className="portfolio-list">
        {projects.map(project => (
          <div key={project.id} className="portfolio-item project-card">
            <div className="project-icon">{project.image}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="skill-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
              </a>
              <a href={project.demo} className="project-link demo" target="_blank" rel="noopener noreferrer">
                <span>Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-footer">
        <p>¿Interesado en ver más proyectos?</p>
        <a href="https://github.com" className="cta-button" target="_blank" rel="noopener noreferrer">
          Ver GitHub Completo
        </a>
      </div>
    </section>
  );
};

export default Projects;