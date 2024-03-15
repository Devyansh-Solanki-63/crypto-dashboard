import React from 'react'
import CryptoCards from './CryptoCards'
import "./CryptoCards.css"

const CryptoCardContainer = ({finalList, getCryptoData}) => {
  return (
    <>
        <div className="row">
            {finalList.map((crypto)=>{
                let data = getCryptoData(crypto)
                let {rank, name, symbol, explorer, price, last_24h, market_cap, volume_24h, supplyUsd, vwap} = data

                return (
                    <CryptoCards key={rank} 
                        rank={rank} name={name} symbol={symbol} explorer={explorer} 
                        price={price} last_24h={last_24h} market_cap={market_cap} 
                        volume_24h={volume_24h} supplyUsd={supplyUsd} vwap={vwap} 
                    >
                    </CryptoCards>
                )
            })}
        </div>
    </>
  )
}

export default CryptoCardContainer