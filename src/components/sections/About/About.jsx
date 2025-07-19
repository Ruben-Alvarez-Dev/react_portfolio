import React from 'react';
import Badge from '../../ui/Badge';
import './About.css';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 
    'PostgreSQL', 'HTML5', 'CSS3', 'Git', 'Docker'
  ];

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">Sobre mí</h2>
          <div className="about__text">
            <p>
              Soy un desarrollador full stack apasionado por crear soluciones web innovadoras 
              y eficientes. Con experiencia en tecnologías modernas, me especializo en 
              desarrollar aplicaciones escalables y con excelente experiencia de usuario.
            </p>
            <p>
              Mi enfoque se centra en escribir código limpio, mantenible y siguiendo las 
              mejores prácticas de desarrollo. Siempre estoy aprendiendo nuevas tecnologías 
              y metodologías para mejorar mis habilidades.
            </p>
          </div>
          
          <div className="about__skills">
            <h3 className="about__skills-title">Tecnologías</h3>
            <div className="about__skills-list">
              {skills.map((skill, index) => (
                <Badge key={index} variant="tech">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="about__stats">
          <div className="about__stat">
            <span className="about__stat-number">2+</span>
            <span className="about__stat-label">Años de experiencia</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">15+</span>
            <span className="about__stat-label">Proyectos completados</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">5+</span>
            <span className="about__stat-label">Tecnologías dominadas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;