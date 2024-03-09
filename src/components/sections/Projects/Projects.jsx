import './Projects.css'
import { Card } from "../../Card/Card"
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
    return (
      <Card
            as={"section"}
            styles={'projects neo-5-out column'}
            title={"Projects"}
            content={
              <div className="project__container">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
            }
      />
    )
  }