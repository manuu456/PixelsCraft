export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-[rgba(245,197,24,0.2)] rounded-full" />
          <div className="absolute inset-0 border-4 border-[var(--gold)] border-t-transparent rounded-full animate-spin" />
        </div>

        {/* Text */}
        <p className="text-[var(--gold)] text-sm font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  )
}
