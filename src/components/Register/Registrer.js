import React, { useState, useEffect } from 'react';
import emailjs from "emailjs-com";
import "./Register.css";

function Register() {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_ofa30zn",
      "template_k7brvvh",
      e.target,
      "j0V82kbYqUIR3StVz"
    )
    .then((result) => {
      setMessage('Correo enviado con éxito!');
      setShowMessage(true);
    }, (error) => {
      setMessage('Ocurrió un error al enviar el correo.');
      setShowMessage(true);
    });

    e.target.reset();
  }

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 2000); // ocultar después de 2 segundos
    }
  }, [showMessage]);

  return (
    <section className="register">
      <form className="register--form" onSubmit={sendEmail}>
        <input
          type="email"
          name="email"
          placeholder="name@gmail.com"
          className="register--form__input"
		  required
        />
        <input
          type="text"
          name="name"
          placeholder="nombre"
          className="register--form__input"
		  required
        />
        <textarea
          name="message"
          placeholder="Escriba aquí su mensaje"
          className="register--form__input area"
		  required
        />
        {showMessage && <div className="register--message">{message}</div>}
        <button type="submit" className="register--form__button">
          Contáctanos
        </button>
      </form>
    </section>
  );
}

export default Register;
