import React, { FunctionComponent } from 'react'
import Logo from '~svg/Logo'
import styles from './header.module.scss'

type Props = {
  homepage?: string
}

const Header: FunctionComponent<Props> = () => (
  <header className={styles.header}>
    <a aria-label="home" href="/">
      <Logo className={styles.logo} fillColor="#fff" />
    </a>
    <ul>
      <li>Home</li>
      <li>Education</li>
    </ul>
  </header>
)

export default Header
