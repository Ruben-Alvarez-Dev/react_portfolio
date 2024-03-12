import './Projects.css'
import { CardComponent } from "../../components/CardComponent/CardComponent"
import { projectsTemplate } from "./projectsData"

export const Projects = () => {
    return (
      <>
        
        <CardComponent name="projects" title="Projects" template={projectsTemplate}/>
        
      </>
      
    )
  }