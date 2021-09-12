import React, { FunctionComponent } from 'react'
import SectionLayout from '~layout/SectionLayout'
import FormInput from './FormInput'

import styles from './contact.module.scss'
import Button from './Button'
import clsx from 'clsx'

interface Props {
  [rest: string]: unknown // ...rest property
}

const Contact: FunctionComponent<Props> = ({ ...rest }) => {
  return (
    <SectionLayout title="Contact" {...rest}>
      <div className={styles.container}>
        <p>Want to connect? Feel free to contact me for any work or suggestions below. </p>
        <form className={styles.form}>
          <div className={clsx(styles.formGroup, styles.col)}>
            <FormInput fieldName="First Name" />
            <FormInput fieldName="Last Name" />
          </div>
          <div className={styles.formGroup}>
            <FormInput fieldName="Email Address" />
          </div>
          <div className={styles.formGroup}>
            <FormInput fieldName="Message" />
          </div>
          <div className={clsx(styles.formGroup, styles.btnGroup)}>
            <Button type="button" buttonType="tertiary">
              Clear Form
            </Button>
            <Button type="button" buttonType="success">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </SectionLayout>
  )
}

export default Contact
