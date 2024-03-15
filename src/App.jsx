import './App.css'
import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import CryptoMainSection from "./components/crypto/cryptoMain/CryptoMainSection"
import Navbar from './components/navbar/Navbar'
import Home from './components/homePage/Home'

function App() {

  const [id, setId] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [displayCards, setDisplayCards] = useState(true)

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/:pageId' element={<CryptoMainSection key={id} setId={setId} searchTerm={searchTerm} setSearchTerm={setSearchTerm} displayCards={displayCards} setDisplayCards={setDisplayCards}/>}></Route>
      </Routes>
    </>
  )
}

export default App