import { SkillsCard } from "./SkillsCard";

export const skillsFrontend = [
    { label: "HTML", color: "orange" },
    { label: "CSS", color: "lightblue" },
    { label: "Javascript", color: "yellow" },
    { label: "React JS", color: "purple" },
    /* { label: "Tailwind CSS", color: "cyan" }, */
    { label: "Sass", color: "pink" },
    /* { label: "Jquery", color: "white" }, */
    { label: "Bootstrap", color: "lime" }
  ];
export const skillsBackend = [
    { label: "Node.js", color: "olive" },
    /* { label: "Express.js", color: "white" }, */
    { label: "MongoDB", color: "lightgreen" },
    { label: "MySQL", color: "cornFlowerBlue" },
    /* { label: "Python", color: "yellow" }, */
    { label: "Java", color: "salmon" },
    { label: "C#", color: "fuchsia" },
    { label: "PHP", color: "aqua" }
  ];
export const toolsAndTech = [
    { label: "Git", color: "grey" },
    { label: "VS Code", color: "blue" },
    { label: "Postman", color: "orangered" },
    { label: "Docker", color: "cornFlowerBlue" },
/*     { label: "AWS", color: "orange" }, */
    { label: "Firebase", color: "yellow" },
    /* { label: "Heroku", color: "indigo" },
    { label: "Jenkins", color: "darkorange" } */
  ];
export const skillsTemplate = (
        <>
              <ul>
                  <SkillsCard label="Frontend" list={skillsFrontend}/>
                  <SkillsCard label="Backend" list={skillsBackend}/>
                  <SkillsCard label="Tools & Tech" list={toolsAndTech}/>
              </ul>
          
        </>
    )

  