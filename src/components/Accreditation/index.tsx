import React, { FunctionComponent, useState, useEffect } from 'react'

// import styles from './about.module.scss'

import styles from './accreditation.module.scss'
import Education from './Education'
import Licenses from './Licenses'
import { useWindowDimensions } from '~contexts/window-dimensions'

const Accreditation: FunctionComponent = () => {
  const { innerWidth } = useWindowDimensions()
  const initDimensions = { width: '100px', height: '100px' }
  const [dimensions, setDimensions] = useState(initDimensions)

  useEffect(() => {
    if (innerWidth < 768) {
      setDimensions({ width: '56px', height: '56px' })
    } else {
      setDimensions(initDimensions)
    }
  }, [innerWidth])

  return (
    <div className={styles.container}>
      <Education dimensions={dimensions} />
      <Licenses dimensions={dimensions} />
    </div>
  )
}

export default Accreditation
