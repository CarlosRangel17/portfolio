import React, { FunctionComponent } from 'react'
import styles from './sectionLayout.module.scss'
import clsx from 'clsx'

type Props = {
  mat?: boolean
  title?: string
}

const SectionLayout: FunctionComponent<Props> = ({ mat, title, children }) => {
  const sectionTitle = <h3>{title}</h3>

  return (
    <div className={clsx(styles.container, mat && styles['mat-black'])}>
      {title && sectionTitle}
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default SectionLayout
