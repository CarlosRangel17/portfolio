import { FunctionComponent, useState } from 'react'
import SectionLayout from '~layout/SectionLayout'
import projects, { personalProjects } from '~consts/projects'

import styles from './/projects.module.scss'
import Card from './Card'
import Collapse from '~components/Collapse'

interface Props {
  title?: string
  showAll?: boolean
  showPersonalProjects?: boolean
  [rest: string]: unknown
}

const Projects: FunctionComponent<Props> = ({
  showAll = false,
  showPersonalProjects = false,
  title = 'Recent Projects',
  ...rest
}) => {
  const [seeAll, setSeeAll] = useState(false)

  let projectCards = []
  let otherProjectCards = []
  if (showAll) {
    projectCards = Object.keys(projects).map((projectKey: string) => (
      <Card key={projectKey} projectKey={projectKey} project={projects[projectKey]} />
    ))
    otherProjectCards = Object.keys(personalProjects).map((projectKey: string) => (
      <Card key={projectKey} projectKey={projectKey} project={personalProjects[projectKey]} />
    ))
  } else {
    projectCards = showPersonalProjects
      ? Object.keys(personalProjects).map((projectKey: string) => (
          <Card key={projectKey} projectKey={projectKey} project={personalProjects[projectKey]} />
        ))
      : Object.keys(projects).map((projectKey: string) => (
          <Card key={projectKey} projectKey={projectKey} project={projects[projectKey]} />
        ))
  }

  const onSeeAll = () => {
    setSeeAll(!seeAll)
  }

  return (
    <SectionLayout title={title} {...rest}>
      <div className={styles.container}>
        <div className={styles.body}>
          {projectCards}
          {showAll && (
            <>
              <Collapse className={styles.collapse} isOpen={seeAll}>
                {otherProjectCards}
              </Collapse>
              <button className={styles['see-all']} type="button" onClick={onSeeAll}>
                {seeAll ? 'See Less' : 'See All'}
              </button>
            </>
          )}
        </div>
      </div>
    </SectionLayout>
  )
}

export default Projects
