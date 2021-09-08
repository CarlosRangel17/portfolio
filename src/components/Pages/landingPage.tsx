import { FunctionComponent, useContext } from 'react'

import SectionLayout from '~layout/SectionLayout'
import clsx from 'clsx'
import { ThemeContext } from '~contexts/theme'
import Projects from '~components/Projects'
import Skills from '~components/Skills'
import About from '~components/About'

import styles from './page.module.scss'
import Accreditation from '~components/Accreditation'
import { ScrollSpyContext } from '~contexts/scroll-spy'

const LandingPage: FunctionComponent = () => {
  const { colorMode } = useContext(ThemeContext)
  const { sectionRefs } = useContext(ScrollSpyContext)
  return (
    <div className={clsx(styles.container, colorMode === 'dark' ? styles.dark : styles.light)}>
      <Projects className={styles.section} innerRef={sectionRefs[1]} />
      <About className={styles.section} innerRef={sectionRefs[2]} />
      <Skills className={styles.section} innerRef={sectionRefs[3]} />
      <Accreditation className={styles.section} />
      <SectionLayout className={styles.section} title="Contact" innerRef={sectionRefs[4]}>
        test
      </SectionLayout>
    </div>
  )
}

export default LandingPage
