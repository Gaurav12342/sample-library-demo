import React from 'react'
import { PasswordInput } from 'rc-inputs'

const MyPassword = ({
  className,
  placeholder,
  valid,
  pattern,
  onEnter,
  autoComplete,
  autofill,
  value,
  onChange
}) => {
  return (
    <>
      <PasswordInput
        className={className}
        placeholder={placeholder}
        value={value}
        // onChange={(element) => console.log('value', element.target.value)}
        onChange={onChange}
        pattern={'^.{6,}$'}
        // onValid={(valid, element) =>
        //   console.log('valid', valid, 'value', element.target.value)
        // }
        onEnter={(value) => console.log(value)}
        autofill={Boolean}
        autoComplete={autoComplete}
      />
    </>
  )
}

export default MyPassword
