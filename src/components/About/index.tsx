import { FunctionComponent } from 'react'

// import styles from './about.module.scss'
import { description, intro, experience, speciality } from '~consts/about'

import styles from './about.module.scss'
import CustomImage from '~components/CustomImage'
import SectionLayout from '~layout/SectionLayout'

interface Props {
  [rest: string]: unknown
}

const About: FunctionComponent<Props> = ({ ...rest }) => {
  return (
    <SectionLayout title="About" {...rest}>
      <div className={styles.container}>
        <CustomImage imageKey="about" />
        <div className={styles.bio}>
          <p className={styles.intro}>{intro}</p>
          <p className={styles.description}>{description}</p>
          <p className={styles.experience}>{experience}</p>
          <p className={styles.speciality}>{speciality}</p>
        </div>
      </div>
    </SectionLayout>
  )
}

export default About
