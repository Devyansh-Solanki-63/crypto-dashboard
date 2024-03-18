import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainHeading from './MainHeading'
import Context from '../../context/Context'
import "./Home.css"

const Home = () => {

  const {mode, setMode} = useContext(Context)

  return (
    <>
        <div className='home-container'>
            <MainHeading />
            {<Link className={`btn btn-${mode.bg=="light" ? "danger":"warning"} fw-bold btn-lg px-5`} to='/page/1'>Get Started</Link>}
        </div>
    </>
  )
}

export default Home