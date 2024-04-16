import { useState } from 'react'
import "./index.css"
import "./Components/ConnectButton"
import ConnectButton from './Components/ConnectButton'
import StravaData from './Data/exampleData.json'
import FunnyStatistics from './Components/FunnyStatistics'

function App() {

  return (
    <>
      {/* <ConnectButton/> */}
      <FunnyStatistics data = {StravaData} />
    </>
  )
}

export default App
