export const SkillsTemplate = () => {
  return (
        
    <section className="section skills">
        <h2>Skills</h2>
        
        <div className="skills__container">
            <ul>
                <SkillsCard label="Frontend" list={skillsFrontend}/>
                <SkillsCard label="Backend" list={skillsBackend}/>
                <SkillsCard label="Tools & Tech" list={toolsAndTech}/>
            </ul>
        </div>

  </section>  )
}
