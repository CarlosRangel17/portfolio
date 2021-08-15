import { FunctionComponent } from 'react'

import styles from './accreditation.module.scss'
import { accreditations } from '~consts/accreditation'
import { Education as IEducation } from '~interfaces/accreditation'
import UTA from '~svg/UTA'
import TTU from '~svg/TTU'
import { useWindowDimensions } from '~contexts/window-dimensions'

interface Props {
  dimensions: any
}

const Education: FunctionComponent<Props> = ({ dimensions }) => {
  const { isMobile } = useWindowDimensions()
  const educationLogos = {
    'Texas Tech University': <TTU className={styles.logo} {...dimensions} />,
    'The University of Texas at Arlington': <UTA className={styles.logo} {...dimensions} />
  }
  const { education: educationData } = accreditations

  const education = educationData.map((edu: IEducation) => {
    const { degree, gpa, institution, issueDate, term, major } = edu
    return (
      <div key={degree} className={styles.item}>
        {educationLogos[institution]}
        <div key={degree} className={styles.detail}>
          <p className={styles.institution}>{institution}</p>
          <p>
            {degree}, {major}
          </p>
          {!isMobile && gpa && <p>GPA: {gpa}</p>}
          {issueDate && <p>Issued: {issueDate}</p>}
          {term && <p>{term}</p>}
        </div>
      </div>
    )
  })
  return (
    education?.length > 0 && (
      <div className={styles.panel}>
        <h4 className={styles.title}>Education</h4>
        {education}
      </div>
    )
  )
}

export default Education
