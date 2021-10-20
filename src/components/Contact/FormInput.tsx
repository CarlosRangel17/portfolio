import { FunctionComponent, useContext, useRef } from 'react'
import { ThemeContext } from '~contexts/theme'
import clsx from 'clsx'

import styles from './contact.module.scss'
import Input from './Input'
import Textarea from './Textarea'

interface Props {
  fieldName?: string
  [rest: string]: unknown
}

const FormInput: FunctionComponent<Props> = ({ fieldName, ...rest }) => {
  const { colorMode } = useContext(ThemeContext)
  const ref = useRef(null)
  const formId = fieldName?.toLowerCase().replace(' ', '')
  const inputProps = {
    autoComplete: 'off',
    className: clsx(styles.input, colorMode === 'dark' && styles.dark, rest?.className),
    id: formId,
    label: fieldName,
    name: fieldName,
    placeholder: ' ',
    type: fieldName === 'Email Address' ? 'email' : 'text',
    ...rest
  }

  if (fieldName === 'Message') {
    return <Textarea {...inputProps} rows={5} />
  }

  return <Input ref={ref} {...inputProps} />
}

export default FormInput
