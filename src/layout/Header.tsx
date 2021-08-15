import React, { FunctionComponent, useContext } from 'react'
import Logo from '~svg/Logo'
import styles from './header.module.scss'
import DarkToggle from '~components/DarkToggle'
import { ThemeContext } from '~contexts/theme'
import clsx from 'clsx'

type Props = {
  homepage?: string
}

const Header: FunctionComponent<Props> = () => {
  const { colorMode } = useContext(ThemeContext)

  return (
    <header className={clsx(styles.header, colorMode === 'dark' && styles.secondary)}>
      <a aria-label="home" href="/">
        <Logo className={styles.logo} fillColor="#fff" />
      </a>
      <DarkToggle />
      <nav>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Education">Education</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
