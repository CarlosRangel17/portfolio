import { FunctionComponent, useContext } from 'react'

import SectionLayout from '~layout/SectionLayout'
import clsx from 'clsx'
import { ThemeContext } from '~contexts/theme'
import Projects from '~components/Projects'
import Skills from '~components/Skills'
import About from '~components/About'

import styles from './page.module.scss'

const LandingPage: FunctionComponent = () => {
  const { colorMode } = useContext(ThemeContext)
  return (
    <div className={clsx(styles.container, colorMode === 'dark' ? styles.dark : styles.light)}>
      <About className={styles.section} />
      <Projects className={styles.section} />
      <Skills className={styles.section} />
      <SectionLayout className={styles.section} title="Contact">
        test
      </SectionLayout>
    </div>
  )
}

export default LandingPage
