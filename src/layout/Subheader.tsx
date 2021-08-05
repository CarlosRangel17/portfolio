import React, { FunctionComponent } from 'react'
import styles from './header.module.scss'
import { links, titles } from '~consts/header'
import { SocialMediaLink } from '~interfaces/header'
import getIcon from '~utils/getIcon'
import ProfileImage from '~components/About/profileImage'

type Props = {
  homepage?: string
}

const Subheader: FunctionComponent<Props> = () => {
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
    <div className={styles.subheader}>
      <ProfileImage headerImage />
      <h1>Carlos Rangel</h1>
      <div className={styles.titles}>{careerTitles}</div>
      <div className={styles.links}>{socialMediaLinks}</div>
    </div>
  )
}

export default Subheader
