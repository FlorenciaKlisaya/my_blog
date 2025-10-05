// src/pages/ContactoPage.jsx
import React from 'react';
import BentoGrid from '../components/BentoGrid';
import MarcaCard from '../components/MarcaCard';
import ContactoCard from '../components/ContactoCard';
import RedesCard from '../components/RedesCard';
import TallerCard from '../components/TallerCard';
import FormularioContacto from '../components/FormularioContacto';

const ContactoPage = () => {
  return (
    <div>
      <BentoGrid>
        <MarcaCard />
        <ContactoCard />
        <RedesCard />
        <TallerCard />
        <FormularioContacto />
      </BentoGrid>
    </div>
  );
};

export default ContactoPage;

