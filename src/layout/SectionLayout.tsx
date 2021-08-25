import React, { FunctionComponent } from 'react'
import styles from './sectionLayout.module.scss'
import clsx from 'clsx'

type Props = {
  title?: string
  [rest: string]: unknown
  secondary?: boolean
}

const SectionLayout: FunctionComponent<Props> = ({ title, secondary, children, ...rest }) => (
  <div {...rest} id={title} className={clsx(styles.container, rest.className)}>
    {title && <h3>{title}</h3>}
    <div className={styles.content}>{children}</div>
  </div>
)

export default SectionLayout
