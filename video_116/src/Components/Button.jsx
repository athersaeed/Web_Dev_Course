import React, {useContext} from 'react'
import Component1 from './Component1'
import { counterContext } from '../Context/counter.js'

const Button = () => {
  const value = useContext(counterContext)
  return (
    <div>
      Button
        <button onClick={() => value.setCount((count) => count + 1)} ><Component1 /></button>
    </div>
  )
}

export default Button
