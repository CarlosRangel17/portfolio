import React, { FunctionComponent, useState, useRef } from 'react'
import SectionLayout from '~layout/SectionLayout'
import ContactForm from './ContactForm'

import styles from './contact.module.scss'
import clsx from 'clsx'
import Success from '~svg/Success'

interface Props {
  [rest: string]: unknown // ...rest property
}

const Contact: FunctionComponent<Props> = ({ ...rest }) => {
  const [submitted, setSubmitted] = useState(false)
  const [keep, setKeep] = useState(false)

  const setSubmission = () => {
    setSubmitted(true)
    setTimeout(() => {
      setKeep(true)
    }, 250)
  }

  return (
    <SectionLayout title="Contact" {...rest}>
      <div className={styles.container}>
        <p className={styles.description}>
          Want to connect? Feel free to contact me for any work or suggestions below.{' '}
        </p>
        <ContactForm submitted={submitted} setSubmitted={setSubmission} />
        <div
          className={clsx(
            styles.successContainer,
            styles.draw,
            styles.meet,
            keep && styles.keep,
            submitted && styles.submitted
          )}
        >
          <div className={styles.logoContainer}>
            <Success className={styles.successLogo} width="75px" height="75px" />
          </div>
          <h2 className={styles.title}>Success!</h2>
          <p className={styles.text}>Your contact form has been submitted!</p>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Contact
