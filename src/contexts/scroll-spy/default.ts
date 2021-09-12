import { useMemo, useState, useEffect, useRef } from 'react'
import useScrollSpy from 'react-use-scrollspy'
import { ScrollSpyContext } from '.'
import { useWindowDimensions } from '~contexts/window-dimensions'

export const useActiveScrollSpy = () => {
  const { isMobile } = useWindowDimensions()

  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null)
  ]

  const initActiveSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -47
  })

  const [activeSection, setActiveSection] = useState(initActiveSection)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const { scrollY: windowScrollY } = window
      if (windowScrollY === 0) {
        setActiveSection(0)
      } else if ((!isMobile && windowScrollY > 3246) || windowScrollY > 4000) {
        setActiveSection(4)
      } else {
        setActiveSection(initActiveSection)
      }

      setScrollY(windowScrollY)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollY, initActiveSection])

  return useMemo<ScrollSpyContext>(
    () => ({
      sectionRefs,
      activeSection,
      setActiveSection
    }),
    [sectionRefs, activeSection, setActiveSection]
  )
}
