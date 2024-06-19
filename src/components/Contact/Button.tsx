import { FunctionComponent, ReactNode } from 'react'
import clsx from 'clsx'

import styles from './button.module.scss'

interface Props {
  buttonType?: 'primary' | 'secondary' | 'tertiary' | 'success'
  children: ReactNode
  [rest: string]: unknown
}

const Button: FunctionComponent<Props> = ({ buttonType = 'primary', children, ...rest }) => {
  const buttonProps = {
    className: clsx(styles.btn, styles[buttonType], rest?.className)
  }

  return (
    <button {...buttonProps} {...rest}>
      {children}
    </button>
  )
}

export default Button
