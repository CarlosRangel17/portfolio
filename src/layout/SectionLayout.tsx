import React, { FunctionComponent, MutableRefObject, ReactNode } from 'react'
import styles from './sectionLayout.module.scss'
import clsx from 'clsx'

type Props = {
  title?: string
  [rest: string]: unknown
  secondary?: boolean
  innerRef?: MutableRefObject<HTMLElement>
  children: ReactNode
}

const SectionLayout: FunctionComponent<Props> = ({ title, secondary, innerRef, children, ...rest }) => (
  <section {...rest} ref={innerRef} id={title} className={clsx(styles.container, rest.className)}>
    {title && <h3>{title}</h3>}
    <div className={styles.content}>{children}</div>
  </section>
)

export default SectionLayout
