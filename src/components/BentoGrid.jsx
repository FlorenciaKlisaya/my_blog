// src/components/BentoGrid.jsx
import React from 'react';

const BentoGrid = ({ children }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      padding: '20px'
    }}>
      {children}
    </div>
  );
};

export default BentoGrid;
