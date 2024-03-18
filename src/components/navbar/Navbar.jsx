import React from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import logo from "/images/bitcoin-logo.png"
import Context from '../../context/Context'
import "./Navbar.css"

const Navbar = () => {

    const {mode, setMode} = useContext(Context)

    return (
        <>
            <nav className={`navbar navbar-expand-md bg-${mode.bg} navbar-${mode.bg} py-2`}>
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src={logo} alt="" width="65px" className='me-2'/>
                        <span>Devyansh</span>
                    </Link>
                    <button type='button' className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="collapsibleNavbar" className="navbar-collapse collapse d-md-flex justify-content-end">
                        <ul className="navbar-nav pt-md-0 pt-3">
                            <li className="nav-item ps-md-0 ps-3">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item ps-md-0 ps-3">
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className="nav-item ps-md-0 ps-3">
                                <Link className="nav-link" to="#">Contact</Link>
                            </li>
                            {mode.bg=="light" && 
                            <li className="nav-item ps-md-3 ps-3">
                                <button className={`btn btn-${mode.text}`} onClick={() => {setMode({bg:"dark", text:"light"})}}>Dark Mode</button>
                            </li>}
                            {mode.bg=="dark" && 
                            <li className="nav-item ps-md-3 ps-3">
                                <button className={`btn btn-${mode.text}`} onClick={() => {setMode({bg:"light", text:"dark"})}}>Light Mode</button>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar