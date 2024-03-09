import './Skills.css'
import { SkillsCard } from "./SkillsCard"
export const Skills = () => {
  
  const skillsFrontend = [
    { label: "HTML", color: "red" },
    { label: "CSS", color: "blue" },
    { label: "Javascript", color: "yellow" },
    { label: "React JS", color: "mediumvioletred" },
    { label: "Tailwind CSS", color: "cyan" },
    { label: "Sass", color: "deepPink" },
    { label: "Jquery", color: "white" },
    { label: "Bootstrap", color: "green" }
  ];

  const skillsBackend = [
    { label: "Node.js", color: "lime" },
    { label: "Express.js", color: "white" },
    { label: "MongoDB", color: "green" },
    { label: "MySQL", color: "cornFlowerBlue" },
    { label: "Python", color: "yellow" },
    { label: "Java", color: "red" },
    { label: "C#", color: "fuchsia" },
    { label: "PHP", color: "aqua" }
  ];

  const toolsAndTech = [
    { label: "Git", color: "grey" },
    { label: "VS Code", color: "blue" },
    { label: "Postman", color: "orangered" },
    { label: "Docker", color: "cornFlowerBlue" },
    { label: "AWS", color: "orange" },
    { label: "Firebase", color: "yellow" },
    { label: "Heroku", color: "indigo" },
    { label: "Jenkins", color: "darkorange" }
  ];

  return (
    <>
      <section className="section skills">
        <h2>Skills</h2>
        <div className="skills__container">
        <ul>
          <SkillsCard label="Frontend" list={skillsFrontend}/>
          <SkillsCard label="Backend" list={skillsBackend}/>
          <SkillsCard label="Tools & Tech" list={toolsAndTech}/>
        </ul>
        </div>
      </section>
    </>
  )
}
