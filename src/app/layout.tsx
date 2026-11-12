import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import '@fontsource-variable/manrope'
import './globals.css'
import ChatLauncher from '@/components/ChatLauncher'
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/site'
import { jsonLdString, organizationJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Scheduling, estimates & invoicing for small service businesses`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  applicationName: SITE_NAME,
  openGraph: { siteName: SITE_NAME, type: 'website', images: ['/og-image.png'] },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.svg' },
}

export const viewport: Viewport = { themeColor: '#059669', width: 'device-width', initialScale: 1 }

// Support / sales chat. Same Crisp website as the app, so prospects and customers land in one
// inbox. Off unless NEXT_PUBLIC_CRISP_WEBSITE_ID is set, so local dev and previews stay quiet.
const CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(organizationJsonLd()) }} />
        {children}
        {CRISP_WEBSITE_ID && (
          <Script id="crisp-chat" strategy="afterInteractive">
            {`
              window.$crisp = window.$crisp || [];
              window.CRISP_WEBSITE_ID = ${JSON.stringify(CRISP_WEBSITE_ID)};
              window.$crisp.push(["do", "chat:hide"]);
              window.$crisp.push(["on", "chat:closed", function () { window.$crisp.push(["do", "chat:hide"]); }]);
              window.$crisp.push(["set", "session:data", [[["platform", "marketing"]]]]);
              window.$crisp.push(["set", "session:segments", [["prospect"]]]);
              (function () {
                var s = document.createElement("script");
                s.src = "https://client.crisp.chat/l.js";
                s.async = true;
                document.head.appendChild(s);
              })();
            `}
          </Script>
        )}
        {CRISP_WEBSITE_ID && <ChatLauncher />}
      </body>
    </html>
  )
}
