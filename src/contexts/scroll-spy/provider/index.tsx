import React, { ReactNode } from 'react'
import { ScrollSpyContext } from '..'
import { useActiveScrollSpy } from '../default'

interface ProviderProps {
  children: ReactNode
}

/**
 * Inject Order context.
 */
export const ScrollSpyProvider = ({ children }: ProviderProps) => (
  <ScrollSpyContext.Provider value={useActiveScrollSpy()}>{children}</ScrollSpyContext.Provider>
)
