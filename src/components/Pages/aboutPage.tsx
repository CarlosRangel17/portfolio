import { FunctionComponent, useContext } from 'react'

import About from '~components/About'
import Accreditation from '~components/Accreditation'
import SectionLayout from '~layout/SectionLayout'
import { ThemeContext } from '~contexts/theme'
import clsx from 'clsx'

import styles from './page.module.scss'

const AboutPage: FunctionComponent = () => {
  const { colorMode } = useContext(ThemeContext)
  return (
    <div className={clsx(styles.container, colorMode === 'dark' ? styles.dark : styles.light)}>
      <About className={styles.section} />
      <Accreditation className={styles.section} />
      <SectionLayout className={styles.section} title="Contact">
        test
      </SectionLayout>
    </div>
  )
}

export default AboutPage
