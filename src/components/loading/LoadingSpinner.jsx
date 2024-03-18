import React from 'react'
import { useContext } from 'react'
import Context from '../../context/Context'
import "./LoadingSpinner.css"

const LoadingSpinner = () => {

  const {mode, setMode} = useContext(Context)

  return (
    <div className='spinner-container d-flex'>
        <div className={`spinner-border text-${mode.bg=="light" ? "danger":"warning"}`}></div>
    </div>
  )
}

export default LoadingSpinner