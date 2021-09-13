import React, { FunctionComponent, useRef, useState, useEffect, useContext } from 'react'

import styles from './drawer.module.scss'
import Portal from '~components/Portal'
import { Transition } from 'react-transition-group'
import trapFocus from '~utils/trapFocus'
import clsx from 'clsx'
import useOpenModal from '~utils/useOpenModal'
import Fade from '~components/Fade'
import Close from '~svg/Close'
import { ThemeContext } from '~contexts/theme'
import DarkToggle from '~components/DarkToggle'

interface Props {
  backdrop?: boolean
  backdropClassName?: string
  backdropDuration?: number
  backdropOpacity?: number
  bodyClassName?: string
  closeButtonClass?: string
  closeButtonColor?: string
  drawerWrapperClass?: string
  duration?: number
  headerClassName?: string
  id?: string
  isOpen?: boolean
  onClose?: Function | null
  [rest: string]: unknown // ...rest property
}

let timeout: ReturnType<typeof setTimeout>

const Drawer: FunctionComponent<Props> = ({
  backdrop = true,
  backdropClassName = '',
  backdropDuration = 50,
  backdropOpacity = 0.75,
  bodyClassName = '',
  children = null,
  closeButtonClass = '',
  closeButtonColor = 'white',
  drawerWrapperClass = '',
  duration = 100,
  headerClassName = '',
  isOpen = false,
  onClose = null,
  id = '',
  ...rest
}) => {
  const { colorMode } = useContext(ThemeContext)

  const [isShowing, setIsShowing] = useState(isOpen)

  const closeBtnRef = useRef<HTMLDivElement>(null)
  const modalRef: any = useRef<HTMLDivElement>(null)
  const portalRef = useRef<HTMLDivElement>(null)

  useOpenModal({ isOpen, setIsShowing, closeBtnRef })
  useEffect(() => () => clearTimeout(timeout), [])

  if (!isOpen) {
    return null
  }

  const hideDrawer = () => {
    if (onClose) {
      timeout = setTimeout(() => {
        onClose()
      }, 250)
    }

    setIsShowing(false)
  }

  const handleKeys = (e: any) => {
    const key = e.keyCode || e.which

    switch (key) {
      // Escape
      case 27: {
        hideDrawer()
        break
      }
      // tab
      case 9: {
        trapFocus(e, modalRef)
        break
      }
      default:
        break
    }
  }
  const drawerClassName = clsx(styles.container, styles.right, drawerWrapperClass)

  return (
    <Portal ref={portalRef}>
      <>
        <Transition in={isShowing} timeout={duration} id={id} {...rest}>
          <div
            className={drawerClassName}
            role="dialog"
            aria-label={`${id} drawer`}
            aria-modal="true"
            ref={modalRef}
            onKeyDown={handleKeys}
          >
            <div className={clsx(styles.header, colorMode === 'dark' && styles.secondary, headerClassName)}>
              <DarkToggle />
              {(close || onClose) && (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={hideDrawer}
                  className={styles.close}
                  aria-label="Close Drawer"
                  ref={closeBtnRef}
                  id={`close-drawer-${id}`}
                >
                  <span className={clsx(styles['close-icon-wrapper'], closeButtonClass)} aria-hidden="true">
                    <Close width="10" height="10" stroke={closeButtonColor} strokeWidth="2" fillColor="white" />
                  </span>
                </div>
              )}
            </div>
            <div className={clsx(styles.body, bodyClassName)}>{children}</div>
          </div>
        </Transition>
        {backdrop && (
          <Fade
            className={clsx(styles['wrapper-backdrop'], isOpen && styles.backdrop, backdropClassName)}
            onClick={hideDrawer}
            onKeyDown={handleKeys}
            duration={backdropDuration}
            in={isOpen && !!backdrop}
            opacity={backdropOpacity}
            data-testid="backdrop"
          />
        )}
      </>
    </Portal>
  )
}

export default Drawer
