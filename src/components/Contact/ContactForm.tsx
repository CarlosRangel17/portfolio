import { FunctionComponent, useState } from 'react'
import clsx from 'clsx'
import FormInput from './FormInput'
import Button from './Button'
import { initialState } from '~consts/contact'

import styles from './contact.module.scss'

interface Props {
  submitted: boolean
  setSubmitted: () => void
}

const ContactForm: FunctionComponent<Props> = ({ submitted, setSubmitted }) => {
  const [firstName, setFirstName] = useState(initialState.first)
  const [lastName, setLastName] = useState(initialState.last)
  const [email, setEmail] = useState(initialState.email)
  const [message, setMessage] = useState(initialState.message)
  const [emailError, setEmailError] = useState('')

  const handleClearState = () => {
    setFirstName(initialState.first)
    setLastName(initialState.last)
    setEmail(initialState.email)
    setMessage(initialState.message)
  }

  const handleFormInput = (e: any, setFormInput: React.Dispatch<React.SetStateAction<string>>) => {
    const { value } = e.target
    setFormInput(value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!email.match(email)) {
      setEmailError('Please enter a valid email address.')
    } else {
      setEmailError('')
      const data = {
        firstName,
        lastName,
        email,
        message
      }

      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          // setSubmitted(true)
          setSubmitted()
          handleClearState()
        } else {
          // Something went wrong!
        }
      })
    }
  }

  if (submitted) {
    return null
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={clsx(styles.formGroup, styles.col)}>
        <FormInput
          fieldName="First Name"
          required
          value={firstName}
          onChange={(e: any) => handleFormInput(e, setFirstName)}
        />
        <FormInput
          fieldName="Last Name"
          required
          value={lastName}
          onChange={(e: any) => handleFormInput(e, setLastName)}
        />
      </div>
      <div className={styles.formGroup}>
        <FormInput
          fieldName="Email Address"
          error={!!emailError}
          inputMessage={emailError}
          required
          value={email}
          onChange={(e: any) => handleFormInput(e, setEmail)}
        />
      </div>
      <div className={styles.formGroup}>
        <FormInput fieldName="Message" required value={message} onChange={(e: any) => handleFormInput(e, setMessage)} />
      </div>
      <div className={clsx(styles.formGroup, styles.btnGroup)}>
        <Button type="button" buttonType="tertiary" onClick={handleClearState}>
          Clear Form
        </Button>
        <Button type="submit" buttonType="success">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
