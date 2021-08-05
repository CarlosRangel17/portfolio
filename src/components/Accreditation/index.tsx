import React, { FunctionComponent } from 'react'

// import styles from './about.module.scss'

import styles from './accreditation.module.scss'
import Education from './Education'
import Licenses from './Licenses'

const Accreditation: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Education />
      <Licenses />
    </div>
  )
}

export default Accreditation
