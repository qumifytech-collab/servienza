import Link from 'next/link'

export function Logo({ light = false, size = 32 }: { light?: boolean; size?: number }) {
  return (
    <Link href="/" aria-label="Servienza home" className={`flex items-center gap-2.5 ${light ? 'text-white' : 'text-ink'}`}>
      <span
        className="inline-flex items-center justify-center rounded-[9px] bg-brand-600 font-extrabold text-white"
        style={{ width: size, height: size, fontSize: size * 0.56 }}
      >
        S
      </span>
      <span className="text-xl font-extrabold tracking-[-0.3px]">Servienza</span>
    </Link>
  )
}
