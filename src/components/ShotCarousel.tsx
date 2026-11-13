'use client'

import { useState } from 'react'
import { Screenshot } from './ui'

type Shot = { label: string; kind: 'web' | 'phone'; src?: string; alt?: string }

/**
 * One screenshot at a time with arrows and dots, for features that show both the web app and a
 * phone. Side by side, the web capture shrank to a thumbnail; here each gets the full width.
 */
export default function ShotCarousel({ shots }: { shots: Shot[] }) {
  const [i, setI] = useState(0)
  const n = shots.length
  const s = shots[i]
  const go = (d: number) => setI((i + d + n) % n)
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="flex min-h-[420px] w-full items-center justify-center">
        {s.kind === 'web' ? (
          <Screenshot key={s.label} label={s.label} src={s.src} alt={s.alt} className="w-full" />
        ) : (
          <Screenshot key={s.label} kind="phone" label={s.label} src={s.src} alt={s.alt} />
        )}
      </div>
      <div className="flex w-full items-center justify-between gap-3">
        <button type="button" onClick={() => go(-1)} aria-label="Previous screenshot" className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink hover:bg-ground">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <div className="flex min-w-0 flex-1 flex-col items-center gap-1.5">
          <span className="truncate text-[13px] font-bold text-muted">{s.label}</span>
          <div className="flex gap-1.5" role="tablist" aria-label="Screenshots">
            {shots.map((sh, k) => (
              <button
                key={sh.label}
                type="button"
                role="tab"
                aria-selected={k === i}
                aria-label={sh.label}
                onClick={() => setI(k)}
                className={`h-2 rounded-full transition-all ${k === i ? 'w-6 bg-brand-600' : 'w-2 bg-line hover:bg-faint'}`}
              />
            ))}
          </div>
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next screenshot" className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink hover:bg-ground">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
    </div>
  )
}
