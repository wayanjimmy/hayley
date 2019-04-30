import React from 'react'
import PropTypes from 'prop-types'

function LoadingButton({ loading, children, ...rest}) {
  return (
    <button disabled={loading} className="flex items-center" {...rest}>
      {loading && <div className="spinner mr-2" />}
      {children}
    </button>
  )
}

LoadingButton.propTypes = {
  loading: PropTypes.bool.isRequired
}

LoadingButton.defaultProps = {
  loading: false
}

export default LoadingButton
