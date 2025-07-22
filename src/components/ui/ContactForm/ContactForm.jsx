import Button from '../Button'
import './ContactForm.css'

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Tu nombre" 
          required 
          className="form-input"
        />
      </div>
      <div className="form-group">
        <input 
          type="email" 
          placeholder="Tu email" 
          required 
          className="form-input"
        />
      </div>
      <div className="form-group">
        <textarea 
          placeholder="Tu mensaje" 
          rows="5" 
          required 
          className="form-textarea"
        ></textarea>
      </div>
      <Button type="submit" variant="primary">
        Enviar Mensaje
      </Button>
    </form>
  )
}

export default ContactForm