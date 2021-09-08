import React, { FunctionComponent, useContext, useState, useMemo } from 'react'
import Logo from '~svg/Logo'
import DarkToggle from '~components/DarkToggle'
import { ThemeContext } from '~contexts/theme'
import clsx from 'clsx'

import styles from './header.module.scss'
import { useWindowDimensions } from '~contexts/window-dimensions'
import Menu from '~svg/Manu'
import { ScrollSpyContext } from '~contexts/scroll-spy'
import { menuItems } from '~consts/header'
import Drawer from '~components/Drawer'

type Props = {
  homepage?: string
}

const Header: FunctionComponent<Props> = () => {
  const { colorMode } = useContext(ThemeContext)
  const { activeSection } = useContext(ScrollSpyContext)
  const { isMobile, isTablet } = useWindowDimensions()
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  const scrollTo = (sectionId: string) => {
    const { offsetTop } = document.getElementById(sectionId)
    if (sectionId === 'About Me') {
      window.scrollTo({ top: offsetTop - 40, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: offsetTop - 45, behavior: 'smooth' })
    }
  }

  const navigation: JSX.Element = useMemo(
    () => (
      <ul className={clsx(styles.list, colorMode === 'dark' && styles.dark)}>
        {menuItems.map((item) => (
          <li
            key={item.title}
            className={activeSection === menuItems.indexOf(item) ? styles.active : ''}
            onClick={() => scrollTo(item.id || item.title)}
          >
            <a>{item.title}</a>
          </li>
        ))}
      </ul>
    ),
    [activeSection, colorMode]
  )

  const menu: JSX.Element = useMemo(
    () =>
      isMobile || isTablet ? (
        <>
          <button className={styles.menu} type="button" onClick={handleToggle}>
            <Menu />
          </button>
          {/* {toggleMenu && <div className={styles.dropdownMenu}>Dropdown</div>} */}
          <Drawer isOpen={toggleMenu} onClose={() => setToggleMenu(false)} bodyClassName={styles.drawerBody}>
            {navigation}
          </Drawer>
        </>
      ) : (
        navigation
      ),
    [isMobile, isTablet, navigation, toggleMenu]
  )

  return (
    <header className={clsx(styles.header, colorMode === 'dark' && styles.secondary)}>
      <nav className={styles.nav}>
        <a aria-label="home" href="/">
          <Logo className={styles.logo} fillColor="#fff" />
        </a>
        <div className={styles.listSection}>
          <DarkToggle />
          {menu}
        </div>
      </nav>
    </header>
  )
}

export default Header
