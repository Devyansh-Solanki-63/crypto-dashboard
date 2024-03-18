import React from 'react'
import { useContext } from 'react'
import {Link, useParams} from "react-router-dom"
import Context from '../../context/Context'
import "./Pagination.css"

const Pagination = ({setId}) => {

    const {mode, setMode} = useContext(Context)

    const {pageId} = useParams()

    const getClassName = () => {
        if(mode.bg == "light"){
            return "active-light-page-item"
        }
        else if(mode.bg == "dark"){
            return "active-dark-page-item"
        }
    }

    return (
        <>
            <div className='d-flex justify-content-center mt-5'>
                <ul className="pagination pagination-lg">
                    <li className={`page-item ${pageId==1 ? getClassName() : ""}`} onClick={() => setId(1)}>
                        <Link className={`page-link bg-${mode.bg} text-${mode.text} border border-${mode.text} shadow-none`} to="/page/1">1</Link>
                    </li>
                    <li className={`page-item ${pageId==2 ? getClassName() : ""}`} onClick={() => setId(2)}>
                        <Link className={`page-link bg-${mode.bg} text-${mode.text} border border-${mode.text} shadow-none`} to="/page/2">2</Link>
                    </li>
                    <li className={`page-item ${pageId==3 ? getClassName() : ""}`} onClick={() => setId(3)}>
                        <Link className={`page-link bg-${mode.bg} text-${mode.text} border border-${mode.text} shadow-none`} to="/page/3">3</Link>
                    </li>
                    <li className={`page-item ${pageId==4 ? getClassName() : ""}`} onClick={() => setId(4)}>
                        <Link className={`page-link bg-${mode.bg} text-${mode.text} border border-${mode.text} shadow-none`} to="/page/4">4</Link>
                    </li>
                    <li className={`page-item ${pageId==5 ? getClassName() : ""}`} onClick={() => setId(5)}>
                        <Link className={`page-link bg-${mode.bg} text-${mode.text} border border-${mode.text} shadow-none`} to="/page/5">5</Link>
                    </li>
                    <li className={`page-item ${pageId==6 ? getClassName() : ""}`} onClick={() => setId(6)}>
                        <Link className={`page-link bg-${mode.bg} text-${mode.text} border border-${mode.text} shadow-none`} to="/page/6">6</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Pagination