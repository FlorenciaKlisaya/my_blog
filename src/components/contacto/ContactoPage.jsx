import React from "react";
import "./Contacto.css";
import FormularioContacto from "./FormularioContacto";
import TallerCard from "./TallerCard";
import ContactoCard from "./ContactoCard";
import RedesCard from "./RedesCard";
import MarcaCard from "./MarcaCard";

const ContactoPage = () => {
  return (
    <section className="contacto-container">
      <div className="grid-contacto">
        {/* Columna izquierda: Formulario */}
        <FormularioContacto />

        {/* Columna derecha: Cards */}
        <div className="grid-cards">
          <TallerCard />
          <ContactoCard />
          <RedesCard />
          <MarcaCard />
        </div>
      </div>
    </section>
  );
};

export default ContactoPage;
