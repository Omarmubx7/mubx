'use client'

import SmoothScroll from '@/components/SmoothScroll'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>
}
