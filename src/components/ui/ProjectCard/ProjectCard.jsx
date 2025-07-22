import './ProjectCard.css'

function ProjectCard({ project }) {
  const { title, description, technologies, image, github, demo } = project

  return (
    <div className="project-card">
      <div className="project-image">
        <span className="project-emoji">{image}</span>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={github} className="project-link">
            GitHub
          </a>
          <a href={demo} className="project-link">
            Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard