import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('ather')

  return (
    <>
      <div>
        the name is {name} <br />
        the count is {count} <br />
        <button onClick={() =>{setName(name + name); setCount(count + 1)}}>click me</button>
      </div>
    </>
  )
}

export default App
