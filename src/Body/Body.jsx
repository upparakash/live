// src/Body.jsx
import React from 'react';

const Body = () => {
  return (
    <main style={styles.body}>
      <h1>i love archana</h1>
      
    </main>
  );
};

const styles = {
  body: {
    padding: '16rem',
    paddingTop: '4rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  '@media (max-width: 768px)': {
    body: {
      padding: '17rem',
      paddingTop: '4rem',
    },
  },
};

export default Body;
