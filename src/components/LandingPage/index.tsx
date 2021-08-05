import { FunctionComponent } from 'react'

import styles from './landingPage.module.scss'
import About from '~components/About'
import Accreditation from '~components/Accreditation'
import SectionLayout from '~layout/SectionLayout'

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <SectionLayout mat title="About">
        <About />
      </SectionLayout>
      <SectionLayout title="Degrees / Certifications">
        <Accreditation />
      </SectionLayout>
      <SectionLayout mat title="Projects">
        test
      </SectionLayout>
      <SectionLayout title="Skills">test</SectionLayout>
      <SectionLayout mat title="Contact">
        test
      </SectionLayout>
    </div>
  )
}

export default LandingPage
