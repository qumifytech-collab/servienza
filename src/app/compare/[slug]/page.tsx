import { competitorPages } from '@/content/competitors'
import ClientInit from '@/components/ClientInit'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return Object.keys(competitorPages).map((slug) => ({ slug }))
}

export default function ComparePage({ params }: { params: { slug: string } }) {
  const html = competitorPages[params.slug]
  if (!html) notFound()
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <ClientInit />
    </>
  )
}
