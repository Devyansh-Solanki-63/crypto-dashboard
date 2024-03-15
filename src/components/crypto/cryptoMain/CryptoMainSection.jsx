import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../../loading/LoadingSpinner'
import CryptoNavbar from '../cryptoNavbar/CryptoNavbar'
import CryptoCardContainer from '../cryptoCards/CryptoCardContainer'
import CryptoTableContainer from '../cryptoTables/CryptoTableContainer'
import Pagination from '../../pagination/Pagination'
import "./CryptoMainSection.css"

const CryptoMainSection = ({setId, searchTerm, setSearchTerm, displayCards, setDisplayCards}) => {

    const {pageId} = useParams()

    const [loading, setLoading] = useState(true)
    const [cryptoLists, setCryptoLists] = useState([])


    // set URL configuration and fetch data
    async function fetchData() {
        // const api = "f7b7d878-df88-4ba3-a485-1a3bd49173ea"
        const api = import.meta.env.API_KEY
        let limit = 15
        let offset = 0
        if(pageId){ offset = (pageId-1) * 15 }

        try{
            setLoading(true)
            const url = `https://api.coincap.io/v2/assets?apiKey=${api}&offset=${offset}&limit=${limit}`
            const data = await fetch(url)
            const jsonData = await data.json()
            const parsedData = await jsonData.data

            setCryptoLists(parsedData)
            setLoading(false)
        }
        catch(error){
            console.log("There might be some issue in fetching API....", error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [pageId])


    // creating crypto lists array depending on searchbar value
    let finalList = cryptoLists.filter((list) => {
        const listName = list.name.toLowerCase()
        const search = searchTerm.toLowerCase()
        return listName.includes(search)
    })

    // display only cards when window width < 768px
    window.addEventListener('resize', () => {
        let value = window.innerWidth
        if(value < 768){
            setDisplayCards(true)
        }
    })

    // converting raw data into displayable data, and returning that data Object
    const getCryptoData = (crypto) => {
        let {rank, name, symbol, explorer, priceUsd, changePercent24Hr, marketCapUsd, volumeUsd24Hr, supply, vwap24Hr} = crypto

        let price  =  Math.round(priceUsd * 1000000) / 1000000
        let last_24h  =  Math.round(changePercent24Hr * 100000) / 100000
        let market_cap  =  Math.round(marketCapUsd)
        let volume_24h  =  Math.round(volumeUsd24Hr * 100000) / 100000
        let supplyUsd  =  Math.round(supply)
        let vwap  =  Math.round(vwap24Hr * 100000) / 100000

        return {rank, name, symbol, explorer, price, last_24h, market_cap, volume_24h, supplyUsd, vwap}
    }





  return (
    <>
        { loading && 
            <LoadingSpinner />
        }

        { !loading && displayCards && 
            <div className='crypto-card-container container'>
                <CryptoNavbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} displayCards={displayCards} setDisplayCards={setDisplayCards}/>
                <CryptoCardContainer finalList={finalList} getCryptoData={getCryptoData}/>
                <Pagination setId={setId}/>
            </div>
        }

        { !loading && !displayCards && 
            <div className='crypto-table-container'>
                <CryptoNavbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} displayCards={displayCards} setDisplayCards={setDisplayCards}/>
                <CryptoTableContainer finalList={finalList} getCryptoData={getCryptoData}/>
                <Pagination setId={setId}/>
            </div>
        }
    </>
  )
}

export default CryptoMainSection