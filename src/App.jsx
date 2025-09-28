import React, { useState, useCallback } from 'react';
import ThreeScene from './ThreeScene';
import Header from './Header';
import { PayoutBanner, BetControls } from './BettingUI';

const App = () => {
  const [outcome, setOutcome] = useState(null); // 'win' | 'lose' | null
  const [bet, setBet] = useState(1); // 1 or 5
  const [payout, setPayout] = useState(null); // number | null
  const [payoutMsg, setPayoutMsg] = useState(null); // string | null
  const [balance, setBalance] = useState(1000); // player's balance (resets each load)

  const handleOutcome = useCallback((payload) => {
    // payload can be string 'win'|'lose' (legacy) or { result, multiplier, face }
    const result = typeof payload === 'string' ? payload : payload?.result;
    const mult = typeof payload === 'string' ? (result === 'win' ? 1 : 0) : (payload?.multiplier ?? 0);

    setOutcome(result);
    const amount = result === 'win' ? bet * mult : 0;
    setPayout(amount);
    setBalance(prev => prev + (result === 'win' ? bet * mult : -bet));

    // Build payout message string for top banner
    if (result === 'win') {
      setPayoutMsg(`$${bet} x ${mult} = $${amount}!`);
    } else {
      setPayoutMsg(`$0`);
    }

    setTimeout(() => {
      setOutcome(null);
      setPayout(null);
      setPayoutMsg(null);
    }, 2600);
  }, [bet]);

  return (
    <>
      <Header />
      {/* Balance badge (upper-right) styled exactly like an active bet chip */}
      <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 4, pointerEvents: 'none' }}>
        <div
          style={{
            minWidth: 72,
            height: 40,
            padding: '0 4px',
            borderRadius: 999,
            border: '2px solid rgba(255,255,255,0.85)',
            color: '#fff',
            background:
              'radial-gradient(120% 120% at 50% 50%, rgba(255, 215, 0, 0.45) 0%, rgba(255, 180, 0, 0.25) 60%, rgba(255, 140, 0, 0.15) 100%)',
            boxShadow:
              '0 0 10px rgba(255, 200, 50, 0.8), 0 0 24px rgba(255, 150, 40, 0.6)',
            backdropFilter: 'blur(6px)',
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: 0.3,
            lineHeight: '36px',
            textAlign: 'center',
          }}
        >
          ${balance}
        </div>
      </div>
      {/* Payout banner: shows e.g., "$5 x 3 = $15!"; color gold for WIN amount, red for LOSE */}
      <PayoutBanner message={payoutMsg} variant={outcome === 'win' ? 'win' : outcome === 'lose' ? 'lose' : undefined} />
      {/* Upper golden divider */}
      <div
        style={{
          position: 'absolute',
          top: 112,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 48px)',
          height: 2,
          background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #FFD700 10%, #FFD700 90%, rgba(0,0,0,0) 100%)',
          boxShadow: '0 0 8px rgba(255,215,0,0.5), 0 0 16px rgba(255,165,0,0.35)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <ThreeScene onOutcome={handleOutcome} />
      {/* Lower golden divider */}
      <div
        style={{
          position: 'absolute',
          bottom: 100,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 48px)',
          height: 2,
          background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #FFD700 10%, #FFD700 90%, rgba(0,0,0,0) 100%)',
          boxShadow: '0 0 8px rgba(255,215,0,0.5), 0 0 16px rgba(255,165,0,0.35)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      {/* Bottom-center bet controls */}
      <BetControls selected={bet} onSelect={setBet} />
    </>
  );
};

export default App;
