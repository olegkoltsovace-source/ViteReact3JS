import React from 'react';
import ThreeScene from './ThreeScene';

const App = () => (
  <>
    <h1
      style={{
        position: 'absolute',
        zIndex: 1,
        color: '#fff',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '2.1rem', // 30% smaller than default 3rem
        margin: 0,
        fontWeight: 700,
        textAlign: 'center',
        pointerEvents: 'none',
      }}
    >
      Click to Win!
    </h1>
    <ThreeScene />
  </>
);

export default App;
