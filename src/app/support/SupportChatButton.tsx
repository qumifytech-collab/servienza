'use client'

// Opens the Crisp chat loaded in app/layout.tsx. Same window.$crisp queue ChatLauncher uses, so
// this works before Crisp has finished loading. When Crisp is not configured (no
// NEXT_PUBLIC_CRISP_WEBSITE_ID), fall back to email so the button is never a dead end.
const SUPPORT_EMAIL = 'at@servienza.com'

declare global {
  interface Window {
    $crisp?: unknown[][]
    CRISP_WEBSITE_ID?: string
  }
}

export default function SupportChatButton() {
  const onClick = () => {
    if (typeof window === 'undefined') return
    if (!window.CRISP_WEBSITE_ID) {
      window.location.href = `mailto:${SUPPORT_EMAIL}?subject=Servienza%20support`
      return
    }
    window.$crisp = window.$crisp ?? []
    window.$crisp.push(['set', 'session:segments', [['support']]])
    window.$crisp.push(['do', 'chat:show'])
    window.$crisp.push(['do', 'chat:open'])
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
    >
      Start a chat
    </button>
  )
}
