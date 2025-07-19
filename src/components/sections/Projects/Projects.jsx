import Card from '../../ui/Card';
import Button from '../../ui/Button';
import Badge from '../../ui/Badge';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de inventario.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/400/200",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      image: "/api/placeholder/400/200",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard meteorológico con visualización de datos y predicciones en tiempo real.",
      technologies: ["React", "D3.js", "API REST", "CSS3"],
      image: "/api/placeholder/400/200",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">Mis Proyectos</h2>
        <p className="projects__subtitle">
          Una selección de mis trabajos más recientes y destacados
        </p>
        
        <div className="projects__grid">
          {projects.map(project => (
            <Card key={project.id} variant="default" hover className="project-card">
              <div className="project-card__image">
                <div className="project-card__image-placeholder">
                  💻
                </div>
              </div>
              
              <Card.Body>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                
                <div className="project-card__technologies">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="tech" size="small">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
              
              <Card.Footer>
                <div className="project-card__actions">
                  <Button variant="primary" size="small">
                    Ver Demo
                  </Button>
                  <Button variant="outline" size="small">
                    Ver Código
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;