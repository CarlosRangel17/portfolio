/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React, { ReactNode } from 'react'
import Transition from 'react-transition-group/Transition'

import styles from './collapse.module.scss'

interface ChildProps {
  [props: string]: unknown
}

export interface Props {
  isOpen: boolean
  children?: ReactNode | string
  className?: string
  id?: string
  childProps?: ChildProps
  timeout?: number
  [rest: string]: unknown
}

const transitionStatusToClassHash = {
  entering: 'collapsing',
  entered: 'show',
  exiting: 'collapsing',
  exited: 'collapse',
  unmounted: 'collapse'
}

const Collapse: React.FunctionComponent<Props> = ({
  children = null,
  className = '',
  isOpen = false,
  childProps,
  id = '',
  timeout = 350,
  ...rest
}) => {
  return (
    <Transition {...rest} in={isOpen} timeout={0}>
      {(status) => {
        const collapseClass = transitionStatusToClassHash[status] || 'collapse'
        const classes = `${styles[collapseClass]} ${className || ''}`.trim()
        let style = {}

        if (childProps && childProps.style) {
          style = { ...(childProps.style as {}), ...style }
        }
        return (
          <div {...childProps} style={style} className={classes} id={id}>
            {children}
          </div>
        )
      }}
    </Transition>
  )
}

export default Collapse
