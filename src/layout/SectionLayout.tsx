import React, { FunctionComponent, useContext } from 'react'
import styles from './sectionLayout.module.scss'
import clsx from 'clsx'
import { ThemeContext } from '~contexts/theme'

type Props = {
  title?: string
  secondary?: boolean
}

const SectionLayout: FunctionComponent<Props> = ({ title, secondary, children }) => {
  const { colorMode } = useContext(ThemeContext)

  const sectionTitle = <h3>{title}</h3>

  return (
    <div
      className={clsx(
        styles.container,
        colorMode === 'dark' && styles.dark,
        colorMode === 'light' && !secondary && styles.light,
        colorMode === 'dark' && secondary && styles['secondary']
      )}
    >
      {title && sectionTitle}
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default SectionLayout
