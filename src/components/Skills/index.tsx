import { FunctionComponent } from 'react'
import SectionLayout from '~layout/SectionLayout'

import styles from './skills.module.scss'
import JavaScript from '~svg/JavaScript'
import CSharp from '~svg/CSharp'
import ReactJS from './React'

interface Props {
  [rest: string]: unknown
}

const Skills: FunctionComponent<Props> = ({ ...rest }) => (
  <SectionLayout title="Skills" {...rest}>
    <div className={styles.container}>
      <JavaScript />
      <CSharp />
      <ReactJS />
    </div>
  </SectionLayout>
)

export default Skills
