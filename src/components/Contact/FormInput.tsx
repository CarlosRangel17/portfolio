import { FunctionComponent, useContext } from 'react'
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

  const formId = fieldName?.toLowerCase().replace(' ', '')
  const inputProps = {
    autoComplete: 'off',
    className: clsx(styles.input, colorMode === 'dark' && styles.dark, rest?.className),
    id: formId,
    label: fieldName,
    name: fieldName === 'Email Address' ? 'email' : fieldName,
    placeholder: ' ',
    type: 'text',
    ...rest
  }

  if (fieldName === 'Message') {
    return <Textarea {...inputProps} rows={5} />
  }

  return <Input {...inputProps} />
}

export default FormInput
