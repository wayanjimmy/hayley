import React from 'react'
import PropTypes from 'prop-types'

function TextInput({ name, type, value, label, errors, className, ...rest }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        value={value}
        className="form-input"
        type={type}
        {...rest}
      />
      {errors.length > 0 && <div className="form-error">{errors[0]}</div>}
    </div>
  )
}

TextInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  errors: PropTypes.array
}

TextInput.defaultProps = {
  type: 'text',
  className: '',
  errors: []
}

export default TextInput
