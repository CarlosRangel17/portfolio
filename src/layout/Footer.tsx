import React, { FunctionComponent, useContext } from 'react'
import { ThemeContext } from '~contexts/theme'
import clsx from 'clsx'

import styles from './footer.module.scss'
import { links } from '~consts/header'
import { SocialMediaLink } from '~interfaces/header'
import getIcon from '~utils/getIcon'

type Props = {
  homepage?: string
}

const Footer: FunctionComponent<Props> = () => {
  const { colorMode } = useContext(ThemeContext)
  const year = new Date().getFullYear()
  const socialMediaLinks = links.map((link: SocialMediaLink) => (
    <li key={link.name}>
      <a
        aria-label={link.name}
        className={styles.footerLogoLink}
        href={link.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {getIcon(link, '30px', '30px')}
      </a>
    </li>
  ))

  return (
    <footer className={clsx(styles.footer, colorMode === 'dark' && styles.secondary)}>
      <div className={styles.line}></div>
      <ul className={styles.icons}>
        {socialMediaLinks}
        <li key="email">
          <span>carlos.developer17@gmail.com</span>
        </li>
      </ul>
      <ul className={styles.copyright}>
        <li>© Carlos Rangel</li>
        <li>
          <span>{year}</span>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
