import React, { useEffect, useRef, useState } from 'react';

// Usage: <WinOrLose outcome={null | 'win' | 'lose'} inMs={200} holdMs={2000} outMs={200} />
// When outcome switches to 'win' or 'lose', the label fades in, holds, and fades out.
const WinOrLose = ({ outcome, inMs = 200, holdMs = 2000, outMs = 200 }) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [opacity, setOpacity] = useState(0);
  const fadeTimeouts = useRef([]);

  useEffect(() => {
    // Clear any prior timers when outcome changes
    fadeTimeouts.current.forEach(clearTimeout);
    fadeTimeouts.current = [];

    if (outcome !== 'win' && outcome !== 'lose') {
      // Hide immediately if outcome is cleared
      setOpacity(0);
      fadeTimeouts.current.push(setTimeout(() => setVisible(false), outMs));
      return;
    }

    setText(outcome === 'win' ? 'Win!' : 'Lose!');
    setVisible(true);
    // Start fade in on next frame to ensure transition is applied
    requestAnimationFrame(() => setOpacity(1));

    // Hold, then fade out
    fadeTimeouts.current.push(setTimeout(() => {
      setOpacity(0);
      // After fade out completes, hide
      fadeTimeouts.current.push(setTimeout(() => setVisible(false), outMs));
    }, inMs + holdMs));

    return () => {
      fadeTimeouts.current.forEach(clearTimeout);
      fadeTimeouts.current = [];
    };
  }, [outcome, inMs, holdMs, outMs]);

  const baseStyle = {
    position: 'absolute',
    zIndex: 1,
    color: '#fff',
    top: 60, // roughly under the main title (which is at top: 20)
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '2rem',
    margin: 0,
    fontWeight: 600,
    textAlign: 'center',
    pointerEvents: 'none',
    opacity,
    transition: `opacity ${inMs}ms ease`, // same for in/out (they are equal by default)
    whiteSpace: 'pre',
  };

  if (!visible) return null;
  return <div style={baseStyle}>{text}</div>;
};

export default WinOrLose;
