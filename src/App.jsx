import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Web3DotZero from './components/Web3DotZero'
import New from './components/New'
import BottomBar from './components/BottomBar'

function App() {


  return (
    <div className='App'>
      <NavBar />
      <div className="hero-ctn">
        <Web3DotZero />
        <New  />
      </div>
      <BottomBar />
    </div>
  )
}

export default App
