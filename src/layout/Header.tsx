import React, { FunctionComponent, useContext } from 'react'
import Logo from '~svg/Logo'
import DarkToggle from '~components/DarkToggle'
import { ThemeContext } from '~contexts/theme'
import clsx from 'clsx'

import styles from './header.module.scss'

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
        <DarkToggle />
        <div className={styles.listSection}>
          <ul className={styles.list}>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Education">Education</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
