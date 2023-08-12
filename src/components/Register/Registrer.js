import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Register.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  const submitForm = (event) => {
    event.preventDefault();

    emailjs
      .send(
        'service_ofa30zn',
        'template_k7brvvh',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'j0V82kbYqUIR3StVz'
      )
      .then((response) => {
        console.log('Correo electrónico enviado con éxito:', response);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setFormStatus('success');
        setTimeout(hideMessage, 2000);
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
        setFormStatus('error');
        setTimeout(hideMessage, 2000);
      });
  };

  const hideMessage = () => {
    setFormStatus(null);
  };

  return (
    <div className="register" id="contact">

      <form className="register--form" onSubmit={submitForm}>

        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          placeholder="nombre"
          className="register--form__input"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="name@gmail.com"
          className="register--form__input"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />


        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          placeholder="Escriba aquí su mensaje"
          className="register--form__input area"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />


        {formStatus === 'success' && (
          <div className="register--message">
            Formulario enviado exitosamente.
          </div>
        )}
        {formStatus === 'error' && (
          <div className="contact-us__status-message error">
            Ocurrió un error al enviar el formulario.
          </div>
        )}

        <button type="submit" className="register--form__button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
