import './Projects.css'
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
    return (
      <div className="section projects">
        <h2>Projects</h2>
          <div className="projects__container">
          <ProjectCard />        
          <ProjectCard />        
          <ProjectCard />        
          </div>
          

      </div>
    )
  }