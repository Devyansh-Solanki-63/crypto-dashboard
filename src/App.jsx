import './App.css'
import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Context from "./context/Context"
import CryptoMainSection from "./components/crypto/cryptoMain/CryptoMainSection"
import Navbar from './components/navbar/Navbar'
import Home from './components/homePage/Home'
import NotFound from './components/notFound/NotFound'

function App() {

  const [id, setId] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [displayCards, setDisplayCards] = useState(true)
  const [mode, setMode] = useState({bg:"light", text:"dark"})

  return (
    <>
      <Context.Provider value={{mode, setMode}}>
        <div className={`bg-${mode.bg}`}>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/page/:pageId' element={<CryptoMainSection key={id} setId={setId} searchTerm={searchTerm} setSearchTerm={setSearchTerm} displayCards={displayCards} setDisplayCards={setDisplayCards}/>}></Route>
            <Route exact path='/not-found' element={<NotFound />}></Route>
            <Route exact path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </Context.Provider>
    </>
  )
}

export default App