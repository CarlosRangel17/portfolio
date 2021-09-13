import { useMemo, useState, FunctionComponent } from 'react'
import { useWindowDimensions } from '~contexts/window-dimensions'

import styles from './header.module.scss'
import { Navigation } from './Navigation'
import Drawer from '~components/Drawer'
import MenuIcon from '~svg/Menu'
import { Page } from '~interfaces/layout'

interface Props {
  page?: Page
}

export const Menu: FunctionComponent<Props> = ({ page = 'homepage' }) => {
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
            <Navigation page={page} />
          </Drawer>
        </>
      ) : (
        <Navigation page={page} />
      ),
    [isMobile, isTablet, <Navigation page={page} />, toggleMenu]
  )
}
