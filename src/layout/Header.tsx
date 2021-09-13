import React, { FunctionComponent, useContext } from 'react'
import Logo from '~svg/Logo'
import DarkToggle from '~components/DarkToggle'
import { ThemeContext } from '~contexts/theme'
import clsx from 'clsx'

import styles from './header.module.scss'
import { Menu } from './Menu'

type Props = {
  homepage?: string
}

const Header: FunctionComponent<Props> = () => {
  const { colorMode } = useContext(ThemeContext)

  return (
    <header className={clsx(styles.header, colorMode === 'dark' && styles.secondary)}>
      <nav className={styles.nav}>
        <a aria-label="home" href="/">
          <Logo className={styles.logo} fillColor="#fff" />
        </a>
        <div className={styles.listSection}>
          <DarkToggle />
          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header
