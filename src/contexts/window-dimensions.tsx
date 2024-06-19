import React, { FunctionComponent, createContext, useEffect, useState, ReactNode } from 'react'
import { contextHookFactory } from './contextHelpers'

const WindowDimensionsCtx = createContext({
  innerWidth: 0,
  innerHeight: 0,
  outerWidth: 0,
  outerHeight: 0,
  isMobile: false,
  isTablet: false
})

interface Props {
  children: ReactNode
}

const WindowDimensionsProvider: FunctionComponent<Props> = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    isMobile: false,
    isTablet: false,
    innerWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    innerHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
    outerWidth: typeof window !== 'undefined' ? window.outerWidth : 0,
    outerHeight: typeof window !== 'undefined' ? window.outerHeight : 0
  })
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set dimensions to state
      setDimensions({
        isMobile: window.innerWidth < 600,
        isTablet: window.innerWidth > 600 && window.innerWidth < 992,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setDimensions({
      isMobile: window.innerWidth < 600,
      isTablet: window.innerWidth > 600 && window.innerWidth < 992,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight
    })
  }, [dimensions.innerWidth])

  return <WindowDimensionsCtx.Provider value={dimensions}>{children}</WindowDimensionsCtx.Provider>
}

export default WindowDimensionsProvider
export const useWindowDimensions = contextHookFactory(WindowDimensionsCtx, 'WindowDimensionsCtx')
