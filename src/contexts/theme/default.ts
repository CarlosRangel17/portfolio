import { useMemo, useState, useEffect } from 'react'
import { ThemeContext } from '.'
import COLORS, { COLOR_MODE_KEY } from '~consts/colors'

export const useTheme = () => {
  const [colorMode, rawSetColorMode] = useState(undefined)

  const setColorMode = (newValue: string): void => {
    const root = window.document.documentElement

    localStorage.setItem(COLOR_MODE_KEY, newValue)

    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`

      root.style.setProperty(cssVarName, colorByTheme[newValue])
    })

    rawSetColorMode(newValue)
  }

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue('--initial-color-mode')
    rawSetColorMode(initialColorValue)
  }, [])

  return useMemo<ThemeContext>(
    () => ({
      colorMode,
      setColorMode
    }),
    [colorMode, setColorMode]
  )
}
