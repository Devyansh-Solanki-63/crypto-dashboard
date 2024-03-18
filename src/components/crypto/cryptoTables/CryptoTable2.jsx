import React from 'react'
import { useContext } from 'react'
import Context from '../../../context/Context'

const CryptoTable2 = ({finalList, getCryptoData, hovered, handleMouseEnter, handleMouseLeave}) => {

    const {mode, setMode} = useContext(Context)

    const defineTextColor = (last_24h) => {
        last_24h = last_24h.toString()
        if(last_24h[0] === "-"){ return "red" }
        else{ return "green" }
    }

  return (
    <>
        <table className="table-2">
            <thead>
                <tr>
                    <th className="price ps-5">Price</th>
                    <th className="last_24h">Last 24h %</th>
                    <th className="market_cap">Market Cap</th>
                    <th className="volume_24h">Volume(24h)</th>
                    <th className="supply">Supply</th>
                    <th className="vwap">VWAP</th>
                </tr>
            </thead>
            <tbody className={`text-${mode.text} text-opacity-75`}>                
                { 
                    finalList.map((crypto) => {
                        let data = getCryptoData(crypto)
                        let {rank, name, symbol, explorer, price, last_24h, market_cap, volume_24h, supplyUsd, vwap} = data

                        let textColor = defineTextColor(last_24h)

                        const visitWebsite = () => {
                            window.open(explorer, "_blank")
                        }

                        return (
                            <tr key={rank} 
                                id={`tr-${rank}`} 
                                className={hovered==`tr-${rank}`?"tr-hover":""} 
                                onClick={visitWebsite} 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave}
                            >
                                <td className='ps-5'>${price}</td>
                                <td>
                                    <span className={`text-${textColor} fw-bold d-inline-flex`}>
                                        {last_24h}%
                                        <span className="material-symbols-outlined arrow">arrow_drop_up</span>
                                    </span>
                                </td>
                                <td>${market_cap}</td>
                                <td>${volume_24h}</td>
                                <td>{supplyUsd}</td>
                                <td>${vwap}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default CryptoTable2


{/* <th className="vwap">Volume Weighted Avg Price</th> */}