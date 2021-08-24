import { FunctionComponent, useContext } from 'react'
import Project from '~interfaces/project'

import styles from './projects.module.scss'
import Github from '~svg/Github'
import CustomImage from '~components/CustomImage'
import clsx from 'clsx'
import { ThemeContext } from '~contexts/theme'
import Site from '~svg/Site'

interface Props {
  projectKey: string
  project: Project
}
const Card: FunctionComponent<Props> = ({ projectKey, project }) => {
  const { colorMode } = useContext(ThemeContext)
  const { title, description, technologies, githubUrl, siteUrl }: Project = project

  const linkProps = {
    fillColor: colorMode === 'dark' ? 'white' : 'black',
    height: '22px',
    width: '22px'
  }
  const links = (
    <>
      {githubUrl && (
        <a aria-label={title} className={styles.link} href={githubUrl} target="_blank">
          <Github {...linkProps} />
        </a>
      )}
      {siteUrl && (
        <a aria-label={title} className={styles.link} href={siteUrl} target="_blank">
          <Site {...linkProps} />
        </a>
      )}
    </>
  )

  const technologyDescription = technologies.join(', ').trimEnd()
  return (
    <div className={styles.card}>
      <div key={projectKey} className={styles.imageContainer}>
        <div className={styles.overlay}></div>
        <CustomImage className={styles.image} imageKey={projectKey} />
      </div>
      <div className={clsx(styles.content, colorMode === 'dark' && styles.dark)}>
        <div className={styles.project}>
          <div className={styles.header}>
            <h5>{title}</h5>
            <div key={projectKey} className={styles.links}>
              {links}
            </div>
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
}

export default Card
