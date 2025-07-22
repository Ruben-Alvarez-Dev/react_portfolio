import './SkillItem.css'

function SkillItem({ skill }) {
  const { name, level } = skill

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  )
}

export default SkillItem