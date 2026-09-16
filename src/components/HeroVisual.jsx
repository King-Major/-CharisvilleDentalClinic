import { motion, useReducedMotion } from "framer-motion";

/**
 * A warm, generated stand-in for real lifestyle photography of the
 * clinic — soft teal and sand fields with a gentle drift, echoing the
 * arcs in the Charisville mark. Swap for real photography once
 * available (see README).
 */
export default function HeroVisual({ className = "" }) {
  const prefersReduced = useReducedMotion();
  const float = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          animate: { y: [0, -18, 0] },
          transition: { duration: 9, repeat: Infinity, ease: "easeInOut", delay },
        };

  return (
    <div className={`absolute inset-0 overflow-hidden bg-cream-tint ${className}`}>
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="basefade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f3faf9" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <radialGradient id="tealglow" cx="72%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#0eb9b0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0eb9b0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sandglow" cx="18%" cy="78%" r="45%">
            <stop offset="0%" stopColor="#e7dcc8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e7dcc8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1600" height="1000" fill="url(#basefade)" />
        <rect width="1600" height="1000" fill="url(#tealglow)" />
        <rect width="1600" height="1000" fill="url(#sandglow)" />

        {/* Smile-arc motif, echoing the roofline/tooth arcs in the mark.
            Hidden below md — at narrow, tall aspect ratios the "slice"
            crop shifts these into the text column instead of framing it. */}
        <g className="hidden md:block">
          <path
            d="M 120 560 Q 800 300 1480 560"
            fill="none"
            stroke="#0b2a37"
            strokeOpacity="0.12"
            strokeWidth="3"
          />
          <path
            d="M 260 660 Q 800 460 1340 660"
            fill="none"
            stroke="#0eb9b0"
            strokeOpacity="0.35"
            strokeWidth="4"
          />
        </g>
      </svg>

      <motion.div
        {...float(0)}
        className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-teal/20 blur-3xl top-10 right-[-4rem]"
      />
      <motion.div
        {...float(2.4)}
        className="absolute w-64 h-64 rounded-full bg-sand-deep/50 blur-3xl bottom-0 left-[-3rem]"
      />
      <motion.div
        {...float(1.2)}
        className="absolute w-40 h-40 rounded-full bg-teal-light/40 blur-2xl bottom-24 right-1/4"
      />
    </div>
  );
}
