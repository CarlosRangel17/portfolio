import { useContext } from 'react'
import { ThemeContext } from '~contexts/theme'

const DarkToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  const handleToggle = (ev) => {
    setColorMode(ev.target.checked ? 'dark' : 'light')
  }

  return (
    <label>
      <input type="checkbox" checked={colorMode === 'dark'} onChange={handleToggle} /> Dark
    </label>
  )
}

export default DarkToggle
