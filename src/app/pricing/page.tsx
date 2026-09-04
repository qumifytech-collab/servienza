import { redirect } from 'next/navigation'

/**
 * The standalone pricing page belonged to the previous site design; pricing now lives as a
 * section on the homepage. Redirect so old links and indexed URLs keep working.
 */
export default function PricingPage() {
  redirect('/#pricing')
}
