import React from 'react'
import { Link } from 'react-router-dom'
import MainHeading from './MainHeading'
import "./Home.css"

const Home = () => {

  return (
    <>
        <div className='home-container'>
            <MainHeading />
            {<Link className='btn btn-danger btn-lg px-5' to='/1'>Get Started</Link>}
        </div>
    </>
  )
}

export default Home