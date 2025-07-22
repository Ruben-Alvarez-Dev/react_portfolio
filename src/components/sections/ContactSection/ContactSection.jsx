import { Section, ContactMethod, ContactForm } from '../../ui'
import './ContactSection.css'

function ContactSection() {
  const contactMethods = [
    { icon: "📧", text: "tu.email@ejemplo.com" },
    { icon: "📱", text: "+1 (555) 123-4567" },
    { icon: "📍", text: "Tu Ciudad, País" }
  ]

  return (
    <Section id="contact" title="Contacto" className="contact-section">
      <div className="contact-content">
        <div className="contact-info">
          <h3>¡Hablemos!</h3>
          <p>
            Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
            No dudes en contactarme si tienes alguna pregunta o propuesta.
          </p>
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <ContactMethod 
                key={index}
                icon={method.icon}
                text={method.text}
              />
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  )
}

export default ContactSection