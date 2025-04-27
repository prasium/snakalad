import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppMenu from './Components/AppMenu'
import Board from './Components/Board'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppMenu />} />
        <Route path='/board' element={<Board />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

)
