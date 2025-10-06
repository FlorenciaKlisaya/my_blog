import React from 'react';

const SuccessPopup = ({ mensaje, onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#d4edda',
      color: '#155724',
      padding: '20px 30px',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      zIndex: 1000,
    }}>
      <p>{mensaje}</p>
      <button onClick={onClose} style={{ marginTop: '10px', padding: '5px 10px' }}>Cerrar</button>
    </div>
  );
};

export default SuccessPopup;
