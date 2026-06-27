'use client'
import { useEffect } from 'react'
import { initSite } from '@/lib/clientInit'

export default function ClientInit() {
  useEffect(() => { initSite() }, [])
  return null
}
