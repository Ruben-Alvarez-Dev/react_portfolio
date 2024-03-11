import './Skills.css'
/* import { skillsFrontend, skillsBackend, toolsAndTech } from './skillsData'
import { Card } from "../../Card/Card"
import { SkillsCard } from "./SkillsCard" */
import { CardComponent } from '../../components/CardComponent/CardComponent'
import { skillsTemplate } from './SkillsData'

export const Skills = () => {

  return (
    <>
      <CardComponent
          name="skills" 
          title="Skills"
          template={skillsTemplate}/>
      
    </>
  )
}


