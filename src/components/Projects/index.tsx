import { FunctionComponent } from 'react'
import SectionLayout from '~layout/SectionLayout'
import projects from '~consts/projects'
import Project from '~interfaces/project'

import styles from './/projects.module.scss'
import CustomImage from '~components/CustomImage'
import getIcon from '~utils/getIcon'
import Github from '~svg/Github'

const Projects: FunctionComponent = () => {
  const projectCards = Object.keys(projects).map((projectKey: string) => {
    const { title, description, technologies, githubUrl, siteUrl }: Project = projects[projectKey]
    const links = (
      <>
        <a key={projectKey} aria-label={title} className={styles.link} href={githubUrl} target="_blank">
          <Github fillColor="#000" height="22px" width="22px" />
        </a>
        <a key={projectKey} aria-label={title} className={styles.link} href={siteUrl} target="_blank">
          {getIcon({ name: 'default', url: siteUrl }, '22px', '22px')}
        </a>
      </>
    )

    const technologyDescription = technologies.join(', ').trimEnd()
    return (
      <div className={styles.card}>
        <div key={projectKey} className={styles.imageContainer}>
          <div className={styles.overlay}></div>
          <CustomImage imageKey={projectKey} />
        </div>
        <div className={styles.content}>
          <div className={styles.project}>
            <div className={styles.header}>
              <h5>{title}</h5>
              <div className={styles.links}>{links}</div>
            </div>
            <p>{description}</p>
          </div>
          <div className={styles.techStack}>
            <h5>Technologies</h5>
            <p>{technologyDescription}</p>
          </div>
        </div>
      </div>
    )
  })
  return (
    <SectionLayout title="Projects">
      <div className={styles.container}>{projectCards}</div>
    </SectionLayout>
  )
}

export default Projects
