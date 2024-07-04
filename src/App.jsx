// src/App.jsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Body from './Body/Body';

const App = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    paddingTop: '4rem',
    paddingBottom: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default App;
