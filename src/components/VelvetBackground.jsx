export default function VelvetBackground({ children, className = '' }) {
  return (
    <div
      className={className}
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--t-bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Layer 1 — fine fabric grain */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* Layer 2 — coarser weave on top */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.4' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n2)' opacity='0.05'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* Layer 3 — gold shimmer from top center (like light hitting velvet) */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 40% at 50% -10%, #D4A96A26 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* Layer 4 — warm candlelight glow from bottom (matches your venue candles) */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 30% at 50% 110%, #E8C4A018 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* Layer 5 — vignette edges (exactly like your physical invitation card) */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  )
}