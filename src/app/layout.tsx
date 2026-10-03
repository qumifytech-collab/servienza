import type { Metadata } from 'next'
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import ChatLauncher from '@/components/ChatLauncher'
import './globals.css'

const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const display = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display', weight: ['500','600','700','800'] })

export const metadata: Metadata = {
  title: 'Servienza — Field Service Management Software',
  description: 'The all-in-one platform for service businesses. Schedule, dispatch, track, invoice, and get paid — with a real person setting it up with you.',
}

// Support / sales chat. Same Crisp website as the app, so prospects and customers land in one
// inbox. Off unless NEXT_PUBLIC_CRISP_WEBSITE_ID is set, so local dev and previews stay quiet.
const CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${body.variable} ${display.variable}`}>
      <body className="antialiased">
        {children}
        <Script src="/image-slot.js" strategy="afterInteractive" />
        {CRISP_WEBSITE_ID && (
          <Script id="crisp-chat" strategy="afterInteractive">
            {`
              window.$crisp = window.$crisp || [];
              window.CRISP_WEBSITE_ID = ${JSON.stringify(CRISP_WEBSITE_ID)};
              // Crisp's own bubble stays hidden: ChatLauncher collects name/email/phone first and
              // then opens the chat. Closing the window hides the bubble again.
              window.$crisp.push(["do", "chat:hide"]);
              window.$crisp.push(["on", "chat:closed", function () { window.$crisp.push(["do", "chat:hide"]); }]);
              // Tells the inbox this person is on the marketing site (the app tags "web"/"mobile").
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
