const TONES = {
  teal: ["#5fd6cd", "#0eb9b0", "#0a8f88"],
  navy: ["#5b7078", "#1c3f4d", "#0b2a37"],
  sand: ["#f6f1e8", "#e7dcc8", "#cdbe9e"],
  deepteal: ["#0eb9b0", "#0a8f88", "#0b2a37"],
};

/**
 * A generated stand-in for warm, abstract clinic/material imagery —
 * soft gradient studies rather than stock photography, so there's no
 * licensing ambiguity in a client deliverable. Swap for real
 * photography once available (see README).
 */
export default function MaterialRender({ tone = "teal", className = "" }) {
  const [light, mid, dark] = TONES[tone] || TONES.teal;
  const uid = tone;

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-cream-tint ${className}`}>
      <svg viewBox="0 0 800 1000" className="w-full h-full">
        <defs>
          <radialGradient id={`rg-${uid}`} cx="30%" cy="22%" r="80%">
            <stop offset="0%" stopColor={light} stopOpacity="0.9" />
            <stop offset="55%" stopColor={mid} stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="800" height="1000" fill="#f3faf9" />
        <rect width="800" height="1000" fill={`url(#rg-${uid})`} />
        <circle cx="600" cy="760" r="240" fill={dark} opacity="0.14" />
        <circle cx="150" cy="850" r="140" fill={mid} opacity="0.16" />
        <path
          d="M 80 560 Q 400 400 720 560"
          fill="none"
          stroke={dark}
          strokeOpacity="0.18"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
