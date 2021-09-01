import React, { FunctionComponent, useContext, useState } from 'react'
import Logo from '~svg/Logo'
import DarkToggle from '~components/DarkToggle'
import { ThemeContext } from '~contexts/theme'
import clsx from 'clsx'

import styles from './header.module.scss'
import { useWindowDimensions } from '~contexts/window-dimensions'
import Menu from '~svg/Manu'

type Props = {
  homepage?: string
}

const Header: FunctionComponent<Props> = () => {
  const { colorMode } = useContext(ThemeContext)
  const { isMobile } = useWindowDimensions()
  const [toggleDrawer, setToggleDrawer] = useState(false)

  const handleToggle = () => {
    setToggleDrawer(!toggleDrawer)
  }
  const menu = isMobile ? (
    <button className={styles.menu} type="button" onClick={handleToggle}>
      <Menu />
    </button>
  ) : (
    <ul className={styles.list}>
      <li>
        <a href="#Home">Home</a>
      </li>
      <li>
        <a href="#Education">Education</a>
      </li>
    </ul>
  )

  return (
    <header className={clsx(styles.header, colorMode === 'dark' && styles.secondary)}>
      <nav className={styles.nav}>
        <a aria-label="home" href="/">
          <Logo className={styles.logo} fillColor="#fff" />
        </a>
        <DarkToggle />
        <div className={styles.listSection}>{menu}</div>
      </nav>
    </header>
  )
}

export default Header
