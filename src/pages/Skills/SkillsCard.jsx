import './SkillsCard.css';
import { SkillCardItem } from './SkillCardItem';

export const SkillsCard = ({label, list}) => {
  

  return (
    <>
      <div className="skillCard neo-5-out">
          <h2 className="skillCard__title">{label}</h2>
          <div className="skillCard__list">
            {
              list && 
              list.map((skill, index) => (
              
                <SkillCardItem
                    key={index}
                    label={skill.label} 
                    color={skill.color}
                />

            ))
            }
          </div>
        </div>
    </>
  )
}



