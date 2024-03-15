import React from 'react'

const CryptoTable1 = ({finalList, getCryptoData, hovered, handleMouseEnter, handleMouseLeave}) => {
  return (
    <>
        <table className="table-1">
            <thead className='border-bottom'>
                <tr>
                    <th className="rank">Rank</th>
                    <th className="name">Name</th>
                </tr>
            </thead>
            <tbody>
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
                                <td><span className='rank-circle badge bg-dark bg-opacity-75 text-light'>{rank}</span></td>
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