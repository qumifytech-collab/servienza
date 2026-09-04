import type { Metadata } from 'next'
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const display = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display', weight: ['500','600','700','800'] })

export const metadata: Metadata = {
  title: 'Servienza — Field Service Management Software',
  description: 'The all-in-one platform for service businesses. Schedule, dispatch, track, invoice, and get paid — with a real person setting it up with you.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${body.variable} ${display.variable}`}>
      <body className="antialiased">
        {children}
        <Script src="/image-slot.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
