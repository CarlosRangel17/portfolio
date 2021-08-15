import { createContext } from 'react'

/**
 * Theme information.
 */
export interface ThemeContext {
  colorMode: string
  setColorMode(value: string): void
}

/**
 * Default context.
 */
export const DEFAULT_CONTEXT: ThemeContext = {
  colorMode: undefined,
  setColorMode: undefined
}

/**
 * Context implementation.
 */
export const ThemeContext = createContext(DEFAULT_CONTEXT)
ThemeContext.displayName = 'Theme'
