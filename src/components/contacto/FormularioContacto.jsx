// src/components/FormularioContacto.jsx
import React, { useState } from 'react';
import SuccessPopup from './SuccessPopup';

const FormularioContacto = () => {
  // Estados para los inputs
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [showPopup, setShowPopup] = useState(false); // Estado para el popup

  // Función al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mostramos en consola los datos
    console.log({ nombre, email, mensaje });
    
    // Mostrar popup de éxito
    setShowPopup(true);

    // Limpiar inputs
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div>
      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          background: '#f5f0e1'
        }}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>

      {/* Popup de éxito */}
      {showPopup && (
        <SuccessPopup
          mensaje="¡Mensaje enviado con éxito!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default FormularioContacto;

