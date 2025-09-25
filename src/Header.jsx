import React from 'react';

const Header = () => (
  <h1
    style={{
      position: 'absolute',
      zIndex: 1,
      color: '#fff',
      top: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '2.1rem',
      margin: 0,
      fontWeight: 700,
      textAlign: 'center',
      pointerEvents: 'none',
    }}
  >
    Click!
  </h1>
);

export default Header;
