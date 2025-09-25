import React, { useState, useCallback } from 'react';
import ThreeScene from './ThreeScene';
import WinOrLose from './WinOrLose';
import Header from './Header';

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
      <Header />
      <WinOrLose outcome={outcome} />
      <ThreeScene onOutcome={handleOutcome} />
    </>
  );
};

export default App;
