import React, { ReactNode } from 'react'
import { ThemeContext } from '..'
import { useTheme } from '../default'

interface ProviderProps {
  children: ReactNode
}

/**
 * Inject Order context.
 */
export const ThemeProvider = ({ children }: ProviderProps) => (
  <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
)
