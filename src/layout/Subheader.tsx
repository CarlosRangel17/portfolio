import React, { FunctionComponent, useContext } from 'react'
import { links, titles } from '~consts/header'
import { SocialMediaLink } from '~interfaces/header'
import getIcon from '~utils/getIcon'
import { ThemeContext } from '~contexts/theme'
import clsx from 'clsx'
import CustomImage from '~components/CustomImage'

import styles from './header.module.scss'
import { useActiveScrollSpy } from '~contexts/scroll-spy/default'

type Props = {
  homepage?: string
}

const Subheader: FunctionComponent<Props> = () => {
  const { sectionRefs } = useActiveScrollSpy()
  const { colorMode, setColorMode } = useContext(ThemeContext)
  const socialMediaLinks = links.map((link: SocialMediaLink) => (
    <a
      key={link.name}
      aria-label="carlos-rangel-portfolio"
      className={styles.headerLogoLink}
      href={link.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {getIcon(link, '30px', '30px')}
    </a>
  ))

  const careerTitles = titles.map((title) => <span key={title}>{title}</span>)

  const handleToggle = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <section
      id="Home"
      className={clsx(styles.subheader, colorMode === 'dark' && styles.secondary)}
      ref={sectionRefs[0]}
    >
      <CustomImage className={styles.icon} imageKey="portfolio" onClick={handleToggle} />
      <h1>Carlos Rangel</h1>
      <div className={styles.titles}>{careerTitles}</div>
      <div className={styles.links}>{socialMediaLinks}</div>
    </section>
  )
}

export default Subheader
