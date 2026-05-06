import type {Metadata} from 'next'
import {DM_Sans, Syne} from 'next/font/google'
import './globals.css'
import {cn} from "@/lib/utils";
import Navbar from "@/components/Navbar";

const body = DM_Sans({subsets: ['latin'], variable: '--font-body'})
const display = Syne({subsets: ['latin'], variable: '--font-display', weight: ['700', '800']})

const BASE_URL = 'https://servienza.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Servienza - Field Service Management Software',
    template: '%s | Servienza',
  },
  description: 'Servienza is field service management software for HVAC, plumbing, pool service, pest control, and more. Schedule jobs, dispatch crews, track in real time, and get paid — all in one app.',
  keywords: [
    'field service management software',
    'HVAC scheduling software',
    'pool service management software',
    'pest control software',
    'plumbing service software',
    'service dispatch software',
    'technician scheduling app',
    'service business software',
    'job scheduling and invoicing',
    'small business field service',
  ],
  authors: [{ name: 'Servienza' }],
  creator: 'Servienza',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Servienza',
    title: 'Servienza - Field Service Management Software',
    description: 'Schedule, dispatch, track, invoice, and get paid — from one app your whole team will actually use. Built for HVAC, plumbing, pool service, pest control, and more.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Servienza — Field Service Management Software' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servienza — Field Service Management Software',
    description: 'The all-in-one platform for service businesses. Schedule, dispatch, invoice, and get paid.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Servienza',
  url: 'https://servienza.com',
  description: 'Field service management software for HVAC, plumbing, pool service, pest control, landscaping, and more.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free trial available',
  },
  featureList: [
    'AI route optimization',
    'Drag and drop dispatch board',
    'GPS tracking',
    'Auto-invoicing',
    'Customer notifications',
    'Recurring service scheduling',
    'Before/after photo documentation',
    'Smart checklists',
  ],
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'Field service businesses - HVAC, plumbing, pool service, pest control, landscaping, electrical, cleaning',
  },
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(body.variable, display.variable, "font-sans")}>
    <body className="font-sans bg-[#f0f2f8] text-[#1a1f3d] antialiased">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <Navbar/>
    {children}
    </body>
    </html>
  )
}
