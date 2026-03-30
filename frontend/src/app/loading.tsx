export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--void)]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-2 border-[var(--border-gold)] " />
          <div className="absolute inset-0 border-2 border-[var(--gold)] border-t-transparent animate-spin" />
        </div>
        <p className="text-[var(--gold)] text-xs font-bold tracking-[0.15em] uppercase animate-pulse">Loading</p>
      </div>
    </div>
  )
}
