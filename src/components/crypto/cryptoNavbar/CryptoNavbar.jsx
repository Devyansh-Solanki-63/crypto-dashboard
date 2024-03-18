import React from 'react'
import { useContext } from 'react'
import Context from '../../../context/Context'
import "./CryptoNavbar.css"

const CryptoNavbar = ({ searchTerm, setSearchTerm, displayCards, setDisplayCards}) => {

  const {mode, setMode} = useContext(Context)

  const removeSearchTerm = () => {
    setSearchTerm("")
  }
  const displayCardContainer = () => {
    setDisplayCards(true)
  }
  const displayTableContainer = () => {
    setDisplayCards(false)
  }

  return (
    <>
        <div className='crypto-navbar d-flex justify-content-md-between justify-content-center my-4'>
            <div className={`searchbar border border-${mode.text} d-flex align-items-center px-2`}>
                <div className='d-flex align-items-center p-2'>
                    <span className={`search-icon text-${mode.text} material-symbols-outlined`}>search</span>
                </div>
                <input className={`border-0 shadow-none text-${mode.text}`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search" />
                <button className={`close-button btn d-flex align-items-center p-2 ${searchTerm == "" ? "visibililty-hidden" : ""}`} onClick={removeSearchTerm}>
                    <span className={`close-icon text-${mode.text} material-symbols-outlined`}>close</span>
                </button>
            </div>
            <div className='d-none d-md-flex align-items-center gap-2'>
                <button className={`d-flex align-items-center btn border border-secondary p-1 btn-${displayCards? mode.text : mode.bg}`} onClick={displayCardContainer}>
                    <span className="grid-icon material-symbols-outlined">grid_view</span>
                </button>
                <button className={`d-flex align-items-center btn border border-secondary p-1 btn-${displayCards? mode.bg : mode.text}`} onClick={displayTableContainer}>
                    <span className="table-icon material-symbols-outlined">reorder</span>
                </button>
            </div>
        </div>
    </>
  )
}

export default CryptoNavbar