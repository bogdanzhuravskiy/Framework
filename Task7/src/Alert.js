import React from 'react'

const Alert = ({ type, msg }) => {
  return <p className={`alert alert-${type}`} role='status'>{msg}</p>
}

export default Alert
