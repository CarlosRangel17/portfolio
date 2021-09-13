import { FunctionComponent, useContext } from 'react'

import { ThemeContext } from '~contexts/theme'
import clsx from 'clsx'

import styles from './page.module.scss'
import Projects from '~components/Projects'

const ProjectPage: FunctionComponent = () => {
  const { colorMode } = useContext(ThemeContext)
  return (
    <div className={clsx(styles.container, colorMode === 'dark' ? styles.dark : styles.light)}>
      <Projects className={styles.section} />
      <Projects className={styles.section} showPersonalProjects title="Other Projects" />
    </div>
  )
}

export default ProjectPage
