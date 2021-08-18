import { useContext } from 'react'
import { ThemeContext } from '~contexts/theme'
import Sun from '~svg/Sun'

import styles from './darkToggle.module.scss'
import Moon from '~svg/Moon'

const DarkToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext)
  if (!colorMode) {
    return null
  }

  const handleToggle = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  const toggleIcon =
    colorMode === 'light' ? (
      <Sun fillColor={'#FFB600'} height="20px" width="20px" />
    ) : (
      <Moon fillColor={'#00B0EF'} height="20px" width="20px" />
    )

  return (
    <button aria-label="Switch to dark mode" type="button" className={styles.toggleBtn} onClick={handleToggle}>
      {toggleIcon}
    </button>
  )
}

export default DarkToggle
