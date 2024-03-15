import { useState } from 'react'
import CryptoTable1 from './CryptoTable1'
import CryptoTable2 from './CryptoTable2'
import "./CryptoTables.css"

const CryptoTableContainer = ({finalList, getCryptoData}) => {

  const [hovered, setHovered] = useState("")

  const handleMouseEnter = (event) => {
    setHovered(event.currentTarget.id);
  };

  const handleMouseLeave = () => {
    setHovered("");
  };

  return (
    <>
        <div className="d-flex flex-row">
            <div className="table_container_1">
                <CryptoTable1 finalList={finalList} getCryptoData={getCryptoData} hovered={hovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
            </div>
            <div className="table_container_2">
                <CryptoTable2 finalList={finalList} getCryptoData={getCryptoData} hovered={hovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
            </div>
        </div>     
    </>
  )
}

export default CryptoTableContainer