import { FunctionComponent } from 'react'

import styles from './landingPage.module.scss'
import About from '~components/About'
import Accreditation from '~components/Accreditation'
import SectionLayout from '~layout/SectionLayout'

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <SectionLayout secondary title="About">
        <About />
      </SectionLayout>
      <SectionLayout title="Education / Licenses">
        <Accreditation />
      </SectionLayout>
      <SectionLayout secondary title="Projects">
        test
      </SectionLayout>
      <SectionLayout title="Skills">test</SectionLayout>
      <SectionLayout secondary title="Contact">
        test
      </SectionLayout>
    </div>
  )
}

export default LandingPage
