import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </BrowserRouter>
)
