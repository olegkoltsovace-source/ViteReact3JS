import React, { useEffect, useRef, useState } from 'react';

// PayoutBanner
// Displays a message string like "5 USD x 3 = 15 USD!" when triggered, then fades out.
// Usage: <PayoutBanner message={string|null} inMs={200} holdMs={2000} outMs={200} />
// - Pass a string to show; pass null to hide. The component manages fade timing.
export const PayoutBanner = ({ message, variant, inMs = 200, holdMs = 2000, outMs = 200 }) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [opacity, setOpacity] = useState(0);
  const fadeTimeouts = useRef([]);

  useEffect(() => {
    fadeTimeouts.current.forEach(clearTimeout);
    fadeTimeouts.current = [];

    if (message == null) {
      setOpacity(0);
      fadeTimeouts.current.push(setTimeout(() => setVisible(false), outMs));
      return () => {};
    }

    setText(message);
    setVisible(true);
    requestAnimationFrame(() => setOpacity(1));

    fadeTimeouts.current.push(setTimeout(() => {
      setOpacity(0);
      fadeTimeouts.current.push(setTimeout(() => setVisible(false), outMs));
    }, inMs + holdMs));

    return () => {
      fadeTimeouts.current.forEach(clearTimeout);
      fadeTimeouts.current = [];
    };
  }, [message, inMs, holdMs, outMs]);

  if (!visible) return null;

  const display = text;
  const style = {
    position: 'absolute',
    zIndex: 3,
    color: '#fff',
    top: 60,
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '2rem',
    margin: 0,
    fontWeight: 700,
    textAlign: 'center',
    pointerEvents: 'none',
    opacity,
    transition: `opacity ${inMs}ms ease`,
    whiteSpace: 'pre',
  };

  const gold = '#FFD700';
  const red = '#FF0000';

  // If win format is "$bet x mult = $amount!", color only the final result in gold
  if (variant === 'win' && display.includes(' = ')) {
    const parts = display.split(' = ');
    const lhs = parts.slice(0, -1).join(' = ');
    const rhs = parts[parts.length - 1];
    return (
      <div style={style}>
        <span>{lhs} = </span>
        <span style={{ color: gold, textShadow: '0 0 10px rgba(255,215,0,0.6), 0 0 24px rgba(255,165,0,0.45)' }}>{rhs}</span>
      </div>
    );
  }

  // If lose, show the entire text in red (display is "$0")
  if (variant === 'lose') {
    return (
      <div style={style}>
        <span style={{ color: red, textShadow: '0 0 10px rgba(255,0,0,0.6), 0 0 20px rgba(255,0,0,0.35)' }}>{display}</span>
      </div>
    );
  }

  return <div style={style}>{display}</div>;
};

// BetControls
// Two centered chips at the bottom for selecting bet amount.
// Usage: <BetControls selected={number} onSelect={(v)=>...} />
export const BetControls = ({ selected, onSelect }) => {
  const wrap = {
    position: 'absolute',
    zIndex: 3,
    left: '50%',
    bottom: 24,
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'auto',
    userSelect: 'none'
  };

  const chipBase = (active) => ({
    minWidth: 72,
    height: 40,
    padding: '0 16px',
    borderRadius: 999,
    border: '2px solid rgba(255,255,255,0.85)',
    color: '#fff',
    background: active
      ? 'radial-gradient(120% 120% at 50% 50%, rgba(255, 215, 0, 0.45) 0%, rgba(255, 180, 0, 0.25) 60%, rgba(255, 140, 0, 0.15) 100%)'
      : 'radial-gradient(120% 120% at 50% 50%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.05) 100%)',
    boxShadow: active
      ? '0 0 10px rgba(255, 200, 50, 0.8), 0 0 24px rgba(255, 150, 40, 0.6)'
      : '0 0 8px rgba(255, 255, 255, 0.18)',
    backdropFilter: 'blur(6px)',
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 0.3,
    lineHeight: '36px',
    textAlign: 'center',
    transition: 'transform 120ms ease, box-shadow 120ms ease, background 120ms ease',
  });

  const Chip = ({ value }) => {
    const active = selected === value;
    return (
      <button
        onClick={() => onSelect?.(value)}
        style={chipBase(active)}
        onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
        onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        ${value}
      </button>
    );
  };

  return (
    <div style={wrap}>
      <Chip value={1} />
      <Chip value={5} />
    </div>
  );
};
