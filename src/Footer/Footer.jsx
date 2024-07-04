// src/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 My React App. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    position: 'relative',
    display: 'flex',
    zIndex: 1000,
    width: '100%',
    marginTop: '2rem',
  },
  '@media (max-width: 768px)': {
    footer: {
      padding: '0.5rem',
    },
  },
};

export default Footer;
