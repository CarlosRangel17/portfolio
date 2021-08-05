import { FunctionComponent } from 'react'

// import styles from './about.module.scss'
import ProfileImage from './profileImage'
import { description, intro, experience, speciality } from '~consts/about'

import styles from './about.module.scss'

const About: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <ProfileImage />
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
