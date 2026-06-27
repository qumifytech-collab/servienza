import { industryPages } from '@/content/industries'
import ClientInit from '@/components/ClientInit'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return Object.keys(industryPages).map((slug) => ({ slug }))
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const html = industryPages[params.slug]
  if (!html) notFound()
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <ClientInit />
    </>
  )
}
