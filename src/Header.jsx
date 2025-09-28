import React from 'react';

const Header = () => (
  <>
    <style>{`
      html, body, #root { font-family: "Times New Roman", Times, serif !important; }
    `}</style>
    <h1
      style={{
        position: 'absolute',
        zIndex: 2,
        color: '#FFD700',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '2.1rem',
        margin: 0,
        fontWeight: 700,
        textAlign: 'center',
        pointerEvents: 'none',
        textShadow: '0 0 10px rgba(255,215,0,0.5), 0 0 24px rgba(255,165,0,0.35)'
      }}
    >
      CUBE
    </h1>
  </>
);

export default Header;
