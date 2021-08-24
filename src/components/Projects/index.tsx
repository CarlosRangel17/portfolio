import { FunctionComponent } from 'react'
import SectionLayout from '~layout/SectionLayout'
import projects from '~consts/projects'

import styles from './/projects.module.scss'
import Card from './Card'

const Projects: FunctionComponent = () => {
  const projectCards = Object.keys(projects).map((projectKey: string) => (
    <Card key={projectKey} projectKey={projectKey} project={projects[projectKey]} />
  ))

  return (
    <SectionLayout title="Projects">
      <div className={styles.container}>
        <div className={styles.body}>{projectCards}</div>
      </div>
    </SectionLayout>
  )
}

export default Projects
