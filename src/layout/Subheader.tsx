import React, { FunctionComponent, useContext } from 'react'
import styles from './header.module.scss'
import { links, titles } from '~consts/header'
import { SocialMediaLink } from '~interfaces/header'
import getIcon from '~utils/getIcon'
import { ThemeContext } from '~contexts/theme'
import clsx from 'clsx'
import CustomImage from '~components/CustomImage'

type Props = {
  homepage?: string
}

const Subheader: FunctionComponent<Props> = () => {
  const { colorMode } = useContext(ThemeContext)

  const socialMediaLinks = links.map((link: SocialMediaLink) => (
    <a
      key={link.name}
      aria-label="carlos-rangel-portfolio"
      className={styles.headerLogoLink}
      href={link.url}
      target="_blank"
    >
      {getIcon(link, '30px', '30px')}
    </a>
  ))

  const careerTitles = titles.map((title) => <span key={title}>{title}</span>)

  return (
    <div className={clsx(styles.subheader, colorMode === 'dark' && styles.secondary)}>
      <CustomImage imageKey="portfolio" />
      <h1>Carlos Rangel</h1>
      <div className={styles.titles}>{careerTitles}</div>
      <div className={styles.links}>{socialMediaLinks}</div>
    </div>
  )
}

export default Subheader
