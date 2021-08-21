import { FunctionComponent } from 'react'

import styles from './landingPage.module.scss'
import About from '~components/About'
import Accreditation from '~components/Accreditation'
import SectionLayout from '~layout/SectionLayout'
import Projects from '~components/Projects'

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <About />
      <Projects />
      <SectionLayout secondary title="Skills">
        test
      </SectionLayout>
      <Accreditation />
      <SectionLayout secondary title="Contact">
        test
      </SectionLayout>
    </div>
  )
}

export default LandingPage
