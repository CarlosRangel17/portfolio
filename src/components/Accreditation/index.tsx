import React, { FunctionComponent } from 'react'
import Education from './Education'
import Licenses from './Licenses'
import SectionLayout from '~layout/SectionLayout'

import styles from './accreditation.module.scss'

const Accreditation: FunctionComponent = () => (
  <SectionLayout title="Education / Licenses">
    <div className={styles.container}>
      <Education />
      <Licenses />
    </div>
  </SectionLayout>
)

export default Accreditation
