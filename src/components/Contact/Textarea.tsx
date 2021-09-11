import React, { forwardRef, FunctionComponent, ReactNode } from 'react'
import useForwardRefHasValue from '~/utils/useForwardRefHasValue'
import useControlled from '~/utils/useControlled'
import clsx from 'clsx'
import styles from './contact.module.scss'

interface Props {
  className?: string
  error?: boolean
  label?: string | ReactNode
  inputMessage?: string
  name?: string
  value?: string | number | readonly string[]
  defaultValue?: string | number | readonly string[]
  onChange?: Function
  [rest: string]: unknown // ...rest property
}
const Textarea: FunctionComponent<Props> = forwardRef<HTMLTextAreaElement, Props>(function TextField(props, ref) {
  const { className, error = false, label, name, inputMessage, value, defaultValue, onChange, ...rest } = props
  const { hasValue, setHasValue, forwardedRef } = useForwardRefHasValue<HTMLTextAreaElement>(ref, value)
  const errorClass = error && styles.error
  const [valueDerived, setTextAreaValue] = useControlled({
    controlled: value,
    defaultValue: defaultValue
  })

  const handleKeyUp = (e: any) => {
    if (e.target.value.length > 0) return
    e.target.style.height = 'inherit'
  }

  const handleKeyDown = (e: any) => {
    const scrollTop =
      //@ts-ignore
      window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

    // Reset field height
    e.target.style.height = 'inherit'

    // Get the computed styles for the element
    const computed = window.getComputedStyle(e.target)

    // Calculate the height
    const height =
      parseInt(computed.getPropertyValue('border-top-width'), 10) +
      parseInt(computed.getPropertyValue('padding-top'), 10) +
      (e.target.scrollHeight - 20) +
      parseInt(computed.getPropertyValue('padding-bottom'), 10) +
      parseInt(computed.getPropertyValue('border-bottom-width'), 10)

    e.target.style.height = `${height}px`
    window.scrollTo(0, scrollTop)
  }

  const formControl = (e: any) => {
    const length = e.target.value.length

    // extra checks to prevent unnecessary rerenders every keystroke
    if (hasValue && length === 0) {
      setHasValue(false)
    } else if (!hasValue && length > 0) {
      setHasValue(true)
    }

    setTextAreaValue(e.target.value)

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className={styles.textareaWrapper}>
      <div className={styles.formGroup}>
        <textarea
          className={clsx(styles.textarea, errorClass, hasValue && styles.hasValue, className)}
          name={name}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onChange={formControl}
          ref={forwardedRef}
          value={valueDerived}
          {...rest}
        />
        {label && (
          <label htmlFor={name} className={clsx(styles.label, errorClass)}>
            {label}
          </label>
        )}
        {inputMessage && <p className={clsx(styles.footer, errorClass)}>{inputMessage}</p>}
      </div>
    </div>
  )
})

export default Textarea
