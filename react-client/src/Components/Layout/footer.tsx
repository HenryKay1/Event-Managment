// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 EventManager. All rights reserved.</p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 20px',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%'
};

export default Footer;
