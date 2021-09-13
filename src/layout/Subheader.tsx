import React, { FunctionComponent, useContext } from 'react'
import { links, titles } from '~consts/header'
import { SocialMediaLink } from '~interfaces/header'
import getIcon from '~utils/getIcon'
import { ThemeContext } from '~contexts/theme'
import clsx from 'clsx'
import CustomImage from '~components/CustomImage'
import Link from 'next/link'

import styles from './header.module.scss'
import { useActiveScrollSpy } from '~contexts/scroll-spy/default'
import { Page } from '~interfaces/layout'

type Props = {
  page?: Page
}

const Subheader: FunctionComponent<Props> = ({ page = 'homepage' }) => {
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

  if (page === 'projects') {
    return (
      <section
        id="Projects"
        className={clsx(styles.subheader, styles.projects, colorMode === 'dark' && styles.secondary)}
        ref={sectionRefs[0]}
      >
        <div className={styles.innerContainer}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <Link href="/projects" passHref>
              <span className={styles.separator}>/ Projects</span>
            </Link>
          </div>
          <h1>Explore all of my recent projects.</h1>
        </div>
      </section>
    )
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
