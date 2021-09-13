import React, { FunctionComponent, useContext } from 'react'
import Logo from '~svg/Logo'
import DarkToggle from '~components/DarkToggle'
import { ThemeContext } from '~contexts/theme'
import clsx from 'clsx'

import styles from './header.module.scss'
import { Menu } from './Menu'
import { Page } from '~interfaces/layout'

type Props = {
  page?: Page
}

const Header: FunctionComponent<Props> = ({ page = 'homepage' }) => {
  const { colorMode } = useContext(ThemeContext)

  return (
    <header className={clsx(styles.header, colorMode === 'dark' && styles.secondary)}>
      <nav className={styles.nav}>
        <a aria-label="home" href="/">
          <Logo className={styles.logo} fillColor="#fff" />
        </a>
        <div className={styles.listSection}>
          <DarkToggle />
          <Menu page={page} />
        </div>
      </nav>
    </header>
  )
}

export default Header
