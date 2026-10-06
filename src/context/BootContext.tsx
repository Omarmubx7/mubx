'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'

type BootContextValue = {
  booted: boolean
  setBooted: (value: boolean) => void
}

const BootContext = createContext<BootContextValue | null>(null)

export function BootProvider({ children }: { children: React.ReactNode }) {
  const [booted, setBootedState] = useState(false)
  const setBooted = useCallback((value: boolean) => setBootedState(value), [])

  const value = useMemo(() => ({ booted, setBooted }), [booted, setBooted])

  return <BootContext.Provider value={value}>{children}</BootContext.Provider>
}

export function useBoot() {
  const ctx = useContext(BootContext)
  if (!ctx) throw new Error('useBoot must be used within a BootProvider')
  return ctx
}