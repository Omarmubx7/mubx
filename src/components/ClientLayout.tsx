'use client'

import SmoothScroll from '@/components/SmoothScroll'
import { BootProvider } from '@/context/BootContext'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <BootProvider>
      <SmoothScroll>{children}</SmoothScroll>
    </BootProvider>
  )
}