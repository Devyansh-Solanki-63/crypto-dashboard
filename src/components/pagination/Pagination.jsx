import React from 'react'
import {Link, useParams} from "react-router-dom"
import "./Pagination.css"

const Pagination = ({setId}) => {

    const {pageId} = useParams()

    return (
        <>
            <div className='d-flex justify-content-center my-5'>
                <ul className="pagination pagination-lg">
                    <li className={`page-item ${pageId==1 ? "active":""}`} onClick={() => setId(1)}>
                        <Link className="page-link text-secondary border border-black shadow-none" to="/page/1">1</Link>
                    </li>
                    <li className={`page-item ${pageId==2 ? "active":""}`} onClick={() => setId(2)}>
                        <Link className="page-link text-secondary border border-black shadow-none" to="/page/2">2</Link>
                    </li>
                    <li className={`page-item ${pageId==3 ? "active":""}`} onClick={() => setId(3)}>
                        <Link className="page-link text-secondary border border-black shadow-none" to="/page/3">3</Link>
                    </li>
                    <li className={`page-item ${pageId==4 ? "active":""}`} onClick={() => setId(4)}>
                        <Link className="page-link text-secondary border border-black shadow-none" to="/page/4">4</Link>
                    </li>
                    <li className={`page-item ${pageId==5 ? "active":""}`} onClick={() => setId(5)}>
                        <Link className="page-link text-secondary border border-black shadow-none" to="/page/5">5</Link>
                    </li>
                    <li className={`page-item ${pageId==6 ? "active":""}`} onClick={() => setId(6)}>
                        <Link className="page-link text-secondary border border-black shadow-none" to="/page/6">6</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Pagination