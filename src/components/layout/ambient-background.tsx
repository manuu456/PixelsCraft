// Fixed "wallpaper" behind every page: soft drifting colour fields + fine grain.
// The frosted-glass surfaces blur this, which is what gives them their iOS look.
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f6f6f2]">
      <div
        className="aurora-blob animate-aurora-1 -top-[18vh] -left-[12vw] w-[max(62vw,440px)] h-[max(62vw,440px)]"
        style={{ background: 'radial-gradient(closest-side, rgba(129, 140, 248, 0.34), rgba(129, 140, 248, 0))' }}
      />
      <div
        className="aurora-blob animate-aurora-2 top-[8vh] -right-[18vw] w-[max(56vw,400px)] h-[max(56vw,400px)]"
        style={{ background: 'radial-gradient(closest-side, rgba(192, 132, 252, 0.26), rgba(192, 132, 252, 0))' }}
      />
      <div
        className="aurora-blob animate-aurora-3 -bottom-[28vh] left-[18vw] w-[max(64vw,460px)] h-[max(64vw,460px)]"
        style={{ background: 'radial-gradient(closest-side, rgba(56, 189, 248, 0.2), rgba(56, 189, 248, 0))' }}
      />
      <div
        className="aurora-blob animate-aurora-2 top-[45vh] -left-[14vw] w-[max(34vw,280px)] h-[max(34vw,280px)]"
        style={{ background: 'radial-gradient(closest-side, rgba(251, 191, 36, 0.12), rgba(251, 191, 36, 0))' }}
      />
      <div className="absolute inset-0 grain opacity-[0.035]" />
    </div>
  )
}
