import { FunctionComponent, useContext } from 'react'
import SectionLayout from '~layout/SectionLayout'
import projects, { personalProjects } from '~consts/projects'
import { useRouter } from 'next/router'

import styles from './/projects.module.scss'
import Card from './Card'
import { ScrollSpyContext } from '~contexts/scroll-spy'

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
  const router = useRouter()
  const { setActiveSection } = useContext(ScrollSpyContext)

  const projectCards = showPersonalProjects
    ? Object.keys(personalProjects).map((projectKey: string) => (
        <Card key={projectKey} projectKey={projectKey} project={personalProjects[projectKey]} />
      ))
    : Object.keys(projects).map((projectKey: string) => (
        <Card key={projectKey} projectKey={projectKey} project={projects[projectKey]} />
      ))
  const onSeeAll = () => {
    setActiveSection(0)
    window.scrollTo(0, 0)
    router.push('/projects')
  }

  return (
    <SectionLayout title={title} {...rest}>
      <div className={styles.container}>
        <div className={styles.body}>
          {projectCards}
          {showAll && (
            <div className={styles.seeAllContainer}>
              <button className={styles['see-all']} type="button" onClick={onSeeAll}>
                See All Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </SectionLayout>
  )
}

export default Projects
