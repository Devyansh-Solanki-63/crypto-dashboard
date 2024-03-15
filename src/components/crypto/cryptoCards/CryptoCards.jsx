import React from 'react'

const CryptoCards = ({rank, name, symbol, explorer, price, last_24h, market_cap, volume_24h, supplyUsd, vwap}) => {

    const defineTextColor = (last_24h) => {
        last_24h = last_24h.toString()
        if(last_24h[0] === "-"){ return "red" }
        else{ return "green" }
    }

    let textColor = defineTextColor(last_24h)

    return (
        <div className="col-xl-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1 py-3">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title d-flex align-items-center">
                        <span className='rank-circle badge bg-dark text-light me-2'>{rank}</span>
                        <span className='name'>{name}</span>
                    </h4>
                    <p className="card-text">
                        <span className='fw-bold'>Price:</span> ${price}
                    </p>
                    <p className="card-text">
                        <span className='fw-bold'>Last 24H:</span> &nbsp;
                        <span className={`text-${textColor} fw-bold d-inline-flex`}>
                            {last_24h}%
                            <span className="material-symbols-outlined arrow">arrow_drop_up</span>
                        </span>
                    </p>
                    <p className="card-text">
                        <span className='fw-bold'>Market Cap:</span> ${market_cap}
                    </p>
                    <p className="card-text">
                        <span className='fw-bold'>Volume 24H:</span> ${volume_24h}
                    </p>
                    <p className="card-text">
                        <span className='fw-bold'>VWAP:</span> ${vwap}
                    </p>
                    <p className="card-text">
                        <span className='fw-bold'>Supply:</span> ${supplyUsd}
                    </p>
                    <a href={explorer} className="btn btn-outline-primary" target="_blank">Read More</a>
                </div>
                <span className='symbol badge bg-danger text-light p-2'>{symbol}</span>
            </div>
        </div>
    )
}

export default CryptoCards