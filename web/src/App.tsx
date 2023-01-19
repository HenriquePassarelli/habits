import { useState } from 'react'
import { Habits } from './components/Habits'
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Habits/>
    </div>
  )
}

export default App
