import React, { useState, useCallback } from 'react';
import ThreeScene from './ThreeScene';
import WinOrLose from './WinOrLose';

const App = () => {
  const [outcome, setOutcome] = useState(null); // 'win' | 'lose' | null

  const handleOutcome = useCallback((res) => {
    setOutcome(res);
    // Clear outcome after its display lifecycle so repeated clicks re-trigger animations
    // WinOrLose handles its own fade in/out; we can clear after a little longer than hold
    setTimeout(() => setOutcome(null), 2600); // 200ms in + 2000ms hold + 200ms out + buffer
  }, []);

  return (
    <>
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
      <WinOrLose outcome={outcome} />
      <ThreeScene onOutcome={handleOutcome} />
    </>
  );
};

export default App;
