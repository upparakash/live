// src/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="#">Home</a></li>
        <li style={styles.navItem}><a href="#">About</a></li>
        <li style={styles.navItem}><a href="#">Services</a></li>
        <li style={styles.navItem}><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    position: 'fixed',
    top: 0,
    width: '100%',
    // zIndex: 1000,
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap',
  },
  navItem: {
    color: '#fff',
    padding: '0.5rem 1rem',
  },
  '@media (max-width: 768px)': {
    navList: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    navItem: {
      padding: '1rem',
    },
  },
};

export default Navbar;
