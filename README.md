# Cube

A browser-based gambling concept built with React and Three.js. Click a face of a rotating 3D dice cube to spin and reveal a win or loss. Each face has a different multiplier and win probability — higher pip counts are riskier but pay out more.

**Live demo:** https://vite-react3-js.vercel.app/

---

## How to Play

1. Select a bet amount — **$1** or **$5** — using the chips at the bottom
2. Click any face of the spinning cube
3. Win or lose based on the pip value of the face you clicked
4. Your balance updates in the top-right corner

---

## Mechanics

Each face of the cube corresponds to a standard dice value (1–6). Opposite faces sum to 7, matching real dice conventions. Win probability decreases as pip count increases — low-risk faces pay less, high-risk faces pay more.

| Face | Pips | Win Chance | Multiplier |
|------|------|------------|------------|
| Front | 1 | 95% | 1× |
| Right | 2 | 90% | 2× |
| Top | 3 | 70% | 3× |
| Bottom | 4 | 60% | 4× |
| Left | 5 | 25% | 5× |
| Back | 6 | 20% | 6× |

**Win:** the clicked face flashes gold, the cube spins, a particle burst fires, and the payout displays as `$bet × multiplier = $amount`

**Lose:** all faces flash red, borders turn black, the cube shakes, and `$0` displays in red

---

## Visual Effects

- **Idle float** — cube bobs gently on a sine wave with subtle Z-axis micro-rotation
- **Gold aura** — soft additive glow sprite pulses around the cube at all times
- **Fat golden borders** — thick edge lines using Three.js `LineSegments2` with world-unit linewidth
- **Win effects** — golden particle burst from a spherical shell, full cube spin, edge bloom pulse, background warmth boost, container bounce
- **Lose effects** — position jitter, rotation shake, edge flicker, background dim, glow turns red
- **Payout banner** — fades in at top center, win amount highlighted in gold, loss in red
- **Background breathing** — CSS variable-driven alpha animation synced to the pulse cycle
- **Click lock** — input blocked while any animation is active; unlocks only when all systems return to idle

---

## Tech Stack

- React 19
- Three.js
- GSAP (win/lose animation timelines)
- Vite
- Deployed on Vercel

---

## Architecture

```
src/
├── index.jsx          # React root mount
├── App.jsx            # State management — balance, bet, outcome, payout
├── ThreeScene.jsx     # Three.js scene, cube, pips, FX, animation loop
├── Header.jsx         # Title bar
├── BettingUI.jsx      # PayoutBanner and BetControls chip components
└── WinOrLose.jsx      # Legacy win/lose label component
```

All 3D geometry is procedural — no external 3D model files. The cube, pips, edges, glow and particles are all constructed in code at runtime.

---

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.