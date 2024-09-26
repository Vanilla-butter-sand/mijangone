import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import './App.css'
import Test from './pages/Test/test'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  )
}

export default App
