import { useContext } from 'react'
import { ThemeContext } from '~contexts/theme'
import Sun from '~svg/Sun'

import styles from './darkToggle.module.scss'

const DarkToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext)
  if (!colorMode) {
    return null
  }

  const handleToggle = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <button aria-label="Switch to dark mode" type="button" className={styles.toggleBtn} onClick={handleToggle}>
      <Sun fillColor={colorMode === 'dark' ? 'white' : '#FFB600'} height="20px" width="20px" />
    </button>
  )
}

export default DarkToggle
