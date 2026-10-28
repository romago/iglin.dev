// Decorative orbit on the right side of the hero: faint rings with a few slowly orbiting dots.

const dots = [
  { r: 90, dur: 38, angle: 20, size: 4 },
  { r: 150, dur: 60, angle: 200, size: 5 },
  { r: 150, dur: 60, angle: 320, size: 3 },
  { r: 210, dur: 90, angle: 110, size: 4 },
  { r: 210, dur: 90, angle: 260, size: 3 },
]

export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 500 500" className="hero-art__svg">
        <defs>
          <radialGradient id="hero-art-glow">
            <stop offset="0" stopColor="#a8ff3e" stopOpacity="0.22" />
            <stop offset="1" stopColor="#a8ff3e" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="250" cy="250" r="140" fill="url(#hero-art-glow)" />
        {[90, 150, 210].map((r, i) => (
          <circle key={r} cx="250" cy="250" r={r} fill="none" stroke="rgba(255,255,255,0.07)"
            strokeDasharray={i === 1 ? '2 6' : undefined} />
        ))}
        <circle cx="250" cy="250" r="5" fill="#a8ff3e" opacity="0.7" />
        {dots.map((d, i) => (
          <g key={i} className="hero-art__spin" style={{ animationDuration: `${d.dur}s`, transform: `rotate(${d.angle}deg)` }}>
            <circle cx={250 + d.r} cy="250" r={d.size} fill="#a8ff3e" opacity={i % 2 ? 0.35 : 0.6} />
          </g>
        ))}
      </svg>
    </div>
  )
}
