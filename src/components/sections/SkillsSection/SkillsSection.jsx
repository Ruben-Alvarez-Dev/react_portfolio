import { Section, SkillItem } from '../../ui'
import './SkillsSection.css'

function SkillsSection() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "CSS/SASS", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Git", level: 80 }
  ]

  return (
    <Section id="skills" title="Habilidades" className="skills-section">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </Section>
  )
}

export default SkillsSection