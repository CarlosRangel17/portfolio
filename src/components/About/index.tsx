import { FunctionComponent } from 'react'

// import styles from './about.module.scss'
import { description, intro, experience, speciality } from '~consts/about'

import styles from './about.module.scss'
import CustomImage from '~components/CustomImage'

const About: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <CustomImage imageKey="about" />
      <div className={styles.bio}>
        <p className={styles.intro}>{intro}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.experience}>{experience}</p>
        <p className={styles.speciality}>{speciality}</p>
      </div>
    </div>
  )
}

export default About
