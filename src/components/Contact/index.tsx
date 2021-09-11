import React, { FunctionComponent } from 'react'
import SectionLayout from '~layout/SectionLayout'
import FormInput from './FormInput'

import styles from './contact.module.scss'

interface Props {
  [rest: string]: unknown // ...rest property
}

const Contact: FunctionComponent<Props> = ({ ...rest }) => {
  return (
    <SectionLayout title="Contact" {...rest}>
      <div className={styles.container}>
        <p>Want to connect? </p>
        <form className={styles.form}>
          <FormInput fieldName="First & Last Name" />
          <FormInput fieldName="Email Address" />
          <FormInput fieldName="Message" />
          <button type="submit">Clear Form</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </SectionLayout>
  )
}

export default Contact
