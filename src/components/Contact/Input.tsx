import React, { forwardRef, FunctionComponent, ReactNode } from 'react'
import useForwardRefHasValue from '~/utils/useForwardRefHasValue'
import clsx from 'clsx'
import useControlled from '~/utils/useControlled'
import styles from './contact.module.scss'

export interface Props {
  wrapperClass?: string
  className?: string
  name?: string
  label?: string | ReactNode
  error?: boolean
  inputMessage?: string
  value?: string | number | readonly string[]
  defaultValue?: string | number | readonly string[]
  onChange?: Function
  [rest: string]: unknown
}

const Input: FunctionComponent<Props> = forwardRef<HTMLInputElement, Props>(function TextField(props, ref) {
  const {
    wrapperClass,
    className,
    name,
    label,
    error = false,
    inputMessage,
    onChange,
    defaultValue = '',
    value,
    ...rest
  } = props
  const { hasValue, setHasValue, forwardedRef } = useForwardRefHasValue<HTMLInputElement>(ref, value)
  const [valueDerived, setValue] = useControlled({ controlled: value, defaultValue: defaultValue })
  const errorClass = error && styles.error

  const formControl = (e: any) => {
    const length = e.target.value.length

    if (hasValue && length === 0) {
      setHasValue(false)
    } else if (!hasValue && length > 0) {
      setHasValue(true)
    }

    setValue(e.target.value)

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className={clsx(styles.inputWrapper, wrapperClass)}>
      <div className={styles.innerWrapper}>
        <input
          className={clsx(styles.input, errorClass, hasValue && styles.hasValue, className)}
          name={name}
          onChange={formControl}
          onBlur={formControl}
          value={valueDerived}
          ref={forwardedRef}
          {...rest}
        />
        {label && (
          <label htmlFor={name} className={clsx(styles.label, errorClass)}>
            {label}
          </label>
        )}
      </div>
      {inputMessage && <p className={clsx(styles.footer, errorClass)}>{inputMessage}</p>}
    </div>
  )
})

export default Input
