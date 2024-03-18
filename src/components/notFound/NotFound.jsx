import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../context/Context'

const NotFound = () => {

  const {mode, setMode} = useContext(Context)

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <h1 className={`display-1 fw-bold mb-4 text-${mode.text} text-opacity-75`}>Oops!</h1>
        <p className={`lead mb-4 text-${mode.text}`}>We can't seem to find the page you're looking for.</p>
        <Link to="/" className={`btn btn-${mode.bg=="light" ? "danger":"warning"} btn-lg`}>Go Back Home</Link>
      </div>
    </>
  )
}

export default NotFound