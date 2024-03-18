import React from 'react'
import { useContext } from 'react'
import Context from '../../../context/Context'

const CryptoTable1 = ({finalList, getCryptoData, hovered, handleMouseEnter, handleMouseLeave}) => {

    const {mode, setMode} = useContext(Context)

  return (
    <>
        <table className="table-1">
            <thead>
                <tr>
                    <th className="rank">Rank</th>
                    <th className="name">Name</th>
                </tr>
            </thead>
            <tbody className={`text-${mode.text} text-opacity-75`}>
                {
                    finalList.map((crypto) => {
                        let data = getCryptoData(crypto)
                        let {rank, name, symbol, explorer} = data

                        const visitWebsite = () => {
                            window.open(explorer, "_blank")
                        }

                        return (
                            <tr key={rank} 
                                id={`tr-${rank}`} 
                                className={hovered==`tr-${rank}`?"tr-hover":""} 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave}
                                onClick={visitWebsite} 
                            >
                                <td><span className={`rank-circle badge bg-${mode.text} bg-opacity-75 text-${mode.bg}`}>{rank}</span></td>
                                <td>{name} <span className="symbol">{symbol}</span> </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default CryptoTable1