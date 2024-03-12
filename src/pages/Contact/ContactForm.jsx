import './ContactForm.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const serviceID = 'service_oi3c475';
    const templateID = 'template_53zkgow';
    const userID = 'ztptnLSl-C1nVRxGm';


    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };


    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert('Correo electrónico enviado:', response.status, response.text);

        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
      });
  };

  return (
    <div className="neo-5-out contactForm">
      <h2>Say me hello!</h2>
      <br/>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="neo-5-out"
            placeholder="Your name here..."
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="neo-5-out"
            placeholder="Your email here..."
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            className="neo-5-out"
            placeholder="Guess? Your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="neo-5-out" type="submit">Send</button>
      </form>
    </div>
  );
};
