import './ContactMethod.css'

function ContactMethod({ icon, text }) {
  return (
    <div className="contact-method">
      <span className="contact-icon">{icon}</span>
      <span>{text}</span>
    </div>
  )
}

export default ContactMethod