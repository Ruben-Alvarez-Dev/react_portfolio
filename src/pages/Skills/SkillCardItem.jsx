/* import './SkillCardItem.css'; */
export const SkillCardItem = ({ label, color }) => {
  return (
    <span
      style={{ border: `1px solid ${color}`, color: color, fontSize: "20px"}}
      className="skillCardItem">{label}
    
    </span>
  );
};
