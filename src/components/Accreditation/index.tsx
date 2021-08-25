import React, { FunctionComponent } from 'react'
import Education from './Education'
import Licenses from './Licenses'
import SectionLayout from '~layout/SectionLayout'

import styles from './accreditation.module.scss'

interface Props {
  [rest: string]: unknown
}

const Accreditation: FunctionComponent<Props> = ({ ...rest }) => (
  <SectionLayout title="Education / Licenses" {...rest}>
    <div className={styles.container}>
      <Education />
      <Licenses />
    </div>
  </SectionLayout>
)

export default Accreditation
