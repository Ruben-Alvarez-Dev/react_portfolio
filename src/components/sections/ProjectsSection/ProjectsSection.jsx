import { Section, ProjectCard } from '../../ui'
import './ProjectsSection.css'

function ProjectsSection() {
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

  return (
    <Section id="projects" title="Proyectos" className="projects-section">
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}

export default ProjectsSection