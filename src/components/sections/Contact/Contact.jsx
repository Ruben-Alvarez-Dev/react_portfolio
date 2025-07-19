import React, { useState } from 'react';
import Button from '../../ui/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__info">
            <h2 className="contact__title">¡Hablemos!</h2>
            <p className="contact__description">
              ¿Tienes un proyecto en mente? ¿Quieres colaborar? 
              No dudes en contactarme. Estoy siempre abierto a nuevas oportunidades.
            </p>
            
            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>ruben@ejemplo.com</p>
                </div>
              </div>
              
              <div className="contact__detail">
                <span className="contact__detail-icon">📱</span>
                <div>
                  <h4>Teléfono</h4>
                  <p>+34 123 456 789</p>
                </div>
              </div>
              
              <div className="contact__detail">
                <span className="contact__detail-icon">📍</span>
                <div>
                  <h4>Ubicación</h4>
                  <p>Madrid, España</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__label">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact__input"
                required
              />
            </div>
            
            <div className="contact__form-group">
              <label htmlFor="email" className="contact__label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact__input"
                required
              />
            </div>
            
            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact__textarea"
                rows="5"
                required
              ></textarea>
            </div>
            
            <Button type="submit" variant="primary" size="large" className="contact__submit">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;