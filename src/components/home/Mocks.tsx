/**
 * HTML recreations of the real app screens (web schedule board, mobile My Day), in the product's
 * own palette. They take the example job names from the chosen trade. Swap for real screenshots
 * by rendering <Screenshot src=…/> in their place when captures exist.
 */

const CUSTOMERS = ['Oakwood HOA', 'Marina Club', 'Green Valley', 'Patel', 'Nguyen', 'Hillside Apts', 'Torres', 'Kelly']
const TECHS = ['Maria', 'Dev', 'Sam']

function job(jobs: string[], i: number) {
  return jobs[i % Math.max(jobs.length, 1)] ?? 'Service'
}

export function BrowserMock({ jobs }: { jobs: string[] }) {
  const rows = [
    { tech: TECHS[0], blocks: [{ l: 2, w: 20, c: CUSTOMERS[0], done: true }, { l: 26, w: 18, c: CUSTOMERS[1], done: true }, { l: 50, w: 22, c: CUSTOMERS[2] }] },
    { tech: TECHS[1], blocks: [{ l: 6, w: 24, c: `${CUSTOMERS[3]} — ${job(jobs, 2)}` }, { l: 36, w: 16, c: CUSTOMERS[4] }, { l: 58, w: 20, c: CUSTOMERS[5] }] },
    { tech: TECHS[2], blocks: [{ l: 10, w: 30, c: `${CUSTOMERS[6]} — ${job(jobs, 3)}` }, { l: 46, w: 18, c: CUSTOMERS[7] }] },
  ]
  return (
    <div className="overflow-hidden rounded-[14px] bg-white shadow-float" aria-hidden="true">
      <div className="flex h-9 items-center gap-1.5 border-b border-line bg-[#F2F1EC] px-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E5E3DB]" /><span className="h-2.5 w-2.5 rounded-full bg-[#E5E3DB]" /><span className="h-2.5 w-2.5 rounded-full bg-[#E5E3DB]" />
        <span className="ml-3 rounded-md bg-white px-2.5 py-0.5 text-[11px] text-faint">app.servienza.com/menu/schedules/job-schedule</span>
      </div>
      <div className="flex h-[340px]">
        <div className="flex w-[150px] flex-col gap-0.5 border-r border-line bg-[#F2F1EC] p-2.5 text-[11px] font-semibold text-ink/80">
          <div className="mb-2 flex items-center gap-2 px-2 py-1.5">
            <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-md bg-brand-600 text-xs font-extrabold text-white">S</span>
            <span className="text-xs font-extrabold">Blue Wave Pools</span>
          </div>
          {['My Day', 'Scheduling', 'Service', 'Customers', 'Missed Calls', 'Estimates', 'Accounts', 'Staff'].map((n) => (
            <div key={n} className={`rounded-md px-2 py-1.5 ${n === 'Scheduling' ? 'bg-[#E0F2EA] text-brand-700' : ''}`}>{n}</div>
          ))}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-extrabold">Dispatch board</div>
              <div className="text-[10px] text-faint">Tuesday · 3 technicians · 14 stops</div>
            </div>
            <div className="flex gap-1 text-[10px] font-bold">
              <span className="rounded-md bg-brand-600 px-2 py-1 text-white">Timeline</span>
              <span className="rounded-md bg-[#F2F1EC] px-2 py-1 text-ink/80">Live map</span>
              <span className="rounded-md bg-[#F2F1EC] px-2 py-1 text-ink/80">5-day</span>
            </div>
          </div>
          <div className="grid grid-cols-[64px_repeat(4,minmax(0,1fr))] text-[9px] font-semibold text-faint">
            <span /><span>8a</span><span>10a</span><span>12p</span><span>2p</span>
          </div>
          <div className="grid grid-cols-[64px_1fr] items-center gap-y-2 text-[10px]">
            {rows.map((r) => (
              <RowFragment key={r.tech} row={r} />
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-2 text-[10px] font-bold">
            <span className="rounded-md bg-brand-50 px-2 py-1.5 text-brand-800">✓ Route optimized — 31 miles saved today</span>
            <span className="rounded-md bg-[#FEF2F2] px-2 py-1.5 text-[#991B1B]">1 overlap — Sam at 1:00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function RowFragment({ row }: { row: { tech: string; blocks: { l: number; w: number; c: string; done?: boolean }[] } }) {
  return (
    <>
      <span className="font-bold">{row.tech}</span>
      <div className="relative h-[26px] rounded-md bg-[#FAFAF8]">
        {row.blocks.map((b) => (
          <span
            key={b.c}
            className={`absolute bottom-[3px] top-[3px] flex items-center overflow-hidden whitespace-nowrap rounded-[5px] border px-1.5 font-bold ${
              b.done ? 'border-brand-300 bg-brand-100 text-brand-800' : 'border-amber-300 bg-amber-50 text-amber-700'
            }`}
            style={{ left: `${b.l}%`, width: `${b.w}%` }}
          >
            {b.c}
          </span>
        ))}
      </div>
    </>
  )
}

export function PhoneMock({ jobs }: { jobs: string[] }) {
  const stops = [
    { c: CUSTOMERS[0], t: '8:00 AM · 1820 Oakwood Dr', s: 'Completed', cls: 'bg-brand-100 text-brand-800' },
    { c: CUSTOMERS[2], t: '11:15 AM · 300 Green Valley Rd', s: 'In progress', cls: 'bg-[#EDE9FE] text-[#5B21B6]', tags: [job(jobs, 1), job(jobs, 2)] },
    { c: CUSTOMERS[1], t: '1:30 PM · 55 Harbor Way', s: 'Scheduled', cls: 'bg-[#DBEAFE] text-[#1E40AF]' },
  ]
  return (
    <div className="h-[440px] w-[220px] rounded-[34px] bg-ink p-2.5 shadow-phone" aria-hidden="true">
      <div className="flex h-full flex-col overflow-hidden rounded-[26px] bg-ground text-[10px]">
        <div className="flex flex-col gap-0.5 px-3.5 pb-2 pt-6">
          <span className="text-[9px] text-faint">Tuesday</span>
          <span className="text-[15px] font-extrabold">Good morning, Maria</span>
        </div>
        <div className="mx-3.5 flex rounded-lg bg-[#E9E8E1] p-0.5 text-[9px] font-bold">
          <span className="flex-1 rounded-md bg-brand-600 py-1.5 text-center text-white">Today</span>
          <span className="flex-1 py-1.5 text-center text-ink/80">Tomorrow</span>
          <span className="flex-1 py-1.5 text-center text-ink/80">Pick date</span>
        </div>
        <div className="mx-3.5 mt-2.5 grid grid-cols-3 gap-1.5">
          {[['3', 'Done'], ['1', 'In progress'], ['4', 'Up next']].map(([n, l]) => (
            <div key={l} className="rounded-lg border border-line bg-white px-2 py-1.5">
              <div className="text-sm font-extrabold">{n}</div>
              <div className="text-[8px] text-faint">{l}</div>
            </div>
          ))}
        </div>
        <div className="mx-3.5 mt-2.5 flex flex-col gap-1.5">
          {stops.map((s) => (
            <div key={s.c} className="flex flex-col gap-0.5 rounded-[10px] border border-line bg-white px-2.5 py-2">
              <div className="flex justify-between">
                <span className="font-extrabold">{s.c}</span>
                <span className={`rounded-full px-1.5 py-0.5 text-[8px] font-bold ${s.cls}`}>{s.s}</span>
              </div>
              <span className="text-[9px] text-faint">{s.t}</span>
              {s.tags && (
                <div className="mt-0.5 flex gap-1">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded bg-[#F2F1EC] px-1.5 py-0.5 text-[8px]">{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mx-2.5 mb-2.5 mt-auto flex justify-around rounded-full border border-line bg-white px-2.5 py-1.5 text-[8px] font-bold text-faint">
          <span className="text-brand-700">My Day</span><span>Dispatch</span><span>Service</span><span>Menu</span>
        </div>
      </div>
    </div>
  )
}

/** Small phone top used in the "A normal day" steps. */
export function MiniPhone({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[300px] justify-center overflow-hidden rounded-2xl border border-line bg-ground px-5 pt-5" aria-hidden="true">
      <div className="w-[180px] rounded-t-[26px] bg-ink px-2 pt-2">
        <div className="flex h-[272px] flex-col gap-2 rounded-t-[20px] bg-ground px-2.5 pt-[18px] text-[9px]">{children}</div>
      </div>
    </div>
  )
}

export function MiniCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-lg border border-line bg-white p-2 ${className}`}>{children}</div>
}

export function MiniButton({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg bg-brand-600 p-2 text-center font-bold text-white">{children}</div>
}

/** The real web app in the same browser frame as BrowserMock. */
export function BrowserShot({ src, alt = 'Servienza web app: the schedule board in timeline view' }: { src: string; alt?: string }) {
  return (
    <div className="overflow-hidden rounded-[14px] bg-white shadow-float">
      <div className="flex h-9 items-center gap-1.5 border-b border-line bg-[#F2F1EC] px-3.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E5E3DB]" /><span className="h-2.5 w-2.5 rounded-full bg-[#E5E3DB]" /><span className="h-2.5 w-2.5 rounded-full bg-[#E5E3DB]" />
        <span className="ml-3 rounded-md bg-white px-2.5 py-0.5 text-[11px] text-faint">app.servienza.com/menu/schedules/job-schedule</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="block h-auto w-full" width={1300} height={700} />
    </div>
  )
}

/** The real mobile app in the same phone frame as PhoneMock (390×844 capture, any scale). */
export function PhoneShot({ src, alt = 'Servienza mobile app: My Day' }: { src: string; alt?: string }) {
  return (
    <div className="h-[440px] w-[220px] rounded-[34px] bg-ink p-2.5 shadow-phone">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full rounded-[26px] object-cover object-top" />
    </div>
  )
}
