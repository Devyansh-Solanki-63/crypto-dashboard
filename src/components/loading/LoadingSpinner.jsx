import React from 'react'
import "./LoadingSpinner.css"

const LoadingSpinner = () => {
  return (
    <div className='spinner-container d-flex'>
        <div className='spinner-border text-danger'></div>
    </div>
  )
}

export default LoadingSpinner