import React, { useState } from "react";
import "./Contacto.css";

const FormularioContacto = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    setEnviado(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <div className="card-formulario">
      <h2>Envíanos un mensaje</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="btn-enviar">
          Enviar mensaje
        </button>
      </form>

      {enviado && <p className="mensaje-exito">¡Mensaje enviado con éxito!</p>}
    </div>
  );
};

export default FormularioContacto;
