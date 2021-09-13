import { useMemo, useState } from 'react'
import { useWindowDimensions } from '~contexts/window-dimensions'

import styles from './header.module.scss'
import { Navigation } from './Navigation'
import Drawer from '~components/Drawer'
import MenuIcon from '~svg/Menu'

export const Menu = () => {
  const { isMobile, isTablet } = useWindowDimensions()
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  return useMemo(
    () =>
      isMobile || isTablet ? (
        <>
          <button className={styles.menu} type="button" onClick={handleToggle}>
            <MenuIcon />
          </button>
          <Drawer isOpen={toggleMenu} onClose={() => setToggleMenu(false)} bodyClassName={styles.drawerBody}>
            <Navigation />
          </Drawer>
        </>
      ) : (
        <Navigation />
      ),
    [isMobile, isTablet, <Navigation />, toggleMenu]
  )
}
