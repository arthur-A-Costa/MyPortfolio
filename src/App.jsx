import { useState } from 'react'
import './App.css'
import { Intro } from './parts/Intro.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro />
    </>
  )
}

export default App
