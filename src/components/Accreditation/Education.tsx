import { FunctionComponent } from 'react'

import styles from './accreditation.module.scss'
import { accreditations } from '~consts/accreditation'
import { Education as IEducation } from '~interfaces/accreditation'
import UTA from '~svg/UTA'
import TTU from '~svg/TTU'

const Education: FunctionComponent = () => {
  const educationLogos = {
    'Texas Tech University': <TTU className={styles.logo} />,
    'The University of Texas at Arlington': <UTA className={styles.logo} />
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
          {gpa && <p>GPA: {gpa}</p>}
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
