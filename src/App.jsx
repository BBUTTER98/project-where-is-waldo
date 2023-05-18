import { useState } from 'react'
import Board from './components/Board'
import Header from './components/Header'
import GameContainer from './components/GameContainer'
import { useSelector } from 'react-redux'

function App() {
  
  return (
    <>
    
      <Header />
      <GameContainer />
    </>
  )
}

export default App
