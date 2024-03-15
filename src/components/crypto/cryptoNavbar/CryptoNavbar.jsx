import React from 'react'
import "./CryptoNavbar.css"

const CryptoNavbar = ({ searchTerm, setSearchTerm, displayCards, setDisplayCards}) => {

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
            <div className='searchbar d-flex align-items-center px-2'>
                <div className='d-flex align-items-center p-2'>
                    <span className="search-icon material-symbols-outlined">search</span>
                </div>
                <input className="border-0 shadow-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search" />
                <button className={`close-button btn d-flex align-items-center p-2 ${searchTerm == "" ? "visibililty-hidden" : ""}`} onClick={removeSearchTerm}>
                    <span className="close-icon material-symbols-outlined">close</span>
                </button>
            </div>
            <div className='d-none d-md-flex align-items-center gap-2'>
                <button className={`d-flex align-items-center btn border border-secondary p-1 bg-${displayCards?"secondary":"light"} text-${displayCards?"light":"secondary"}`} onClick={displayCardContainer}>
                    <span className="grid-icon material-symbols-outlined">grid_view</span>
                </button>
                <button className={`d-flex align-items-center btn border border-secondary p-1 bg-${!displayCards?"secondary":"light"} text-${!displayCards?"light":"secondary"}`} onClick={displayTableContainer}>
                    <span className="table-icon material-symbols-outlined">reorder</span>
                </button>
            </div>
        </div>
    </>
  )
}

export default CryptoNavbar