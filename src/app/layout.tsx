import type {Metadata} from 'next'
import {DM_Sans, Syne} from 'next/font/google'
import './globals.css'
import {cn} from "@/lib/utils";
import Navbar from "@/components/Navbar";

const body = DM_Sans({subsets: ['latin'], variable: '--font-body'})
const display = Syne({subsets: ['latin'], variable: '--font-display', weight: ['700', '800']})

export const metadata: Metadata = {
  title: 'Servienza — Field Service Management Software',
  description: 'Manage customers, scheduling, dispatching, routing, invoicing and payments — all in one powerful platform built for service businesses.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(body.variable, display.variable, "font-sans")}>
    <body className="font-sans bg-[#f0f2f8] text-[#1a1f3d] antialiased">
    <Navbar/>
    {children}
    </body>
    </html>
  )
}
