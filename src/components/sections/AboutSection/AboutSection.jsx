import { Section, StatCard } from '../../ui'
import './AboutSection.css'

function AboutSection() {
  const stats = [
    { number: "2+", description: "Años de experiencia" },
    { number: "15+", description: "Proyectos completados" },
    { number: "100%", description: "Clientes satisfechos" }
  ]

  return (
    <Section id="about" title="Sobre Mí" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <p>
            Soy un desarrollador apasionado por crear soluciones web innovadoras y funcionales. 
            Con experiencia en desarrollo full-stack, me especializo en tecnologías modernas 
            como React, Node.js y bases de datos NoSQL.
          </p>
          <p>
            Mi enfoque se centra en escribir código limpio, escalable y mantenible, 
            siempre buscando las mejores prácticas y las últimas tendencias en desarrollo web.
          </p>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <StatCard 
                key={index}
                number={stat.number}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutSection