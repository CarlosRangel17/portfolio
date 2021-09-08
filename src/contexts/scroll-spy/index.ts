import { createContext, MutableRefObject } from 'react'

/**
 * ScrollSpy information.
 */
export interface ScrollSpyContext {
  sectionRefs: MutableRefObject<HTMLElement>[]
  activeSection: number
  setActiveSection(section: number): void
}

/**
 * Default context.
 */
export const DEFAULT_CONTEXT: ScrollSpyContext = {
  sectionRefs: undefined,
  activeSection: undefined,
  setActiveSection: undefined
}

/**
 * Context implementation.
 */
export const ScrollSpyContext = createContext(DEFAULT_CONTEXT)
ScrollSpyContext.displayName = 'ScrollSpy'
