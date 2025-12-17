import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "hey todo 1",
      desc: "desc todo 1"
    },
    {
      title: "hey todo 2",
      desc: "desc todo 2"
    },
    {
      title: "hey todo 3",
      desc: "desc todo 3"
    },
  ])

  // const Todo = ({ todo }) => {
  //   return (<>
  //     <div className="m-4 border border-1 border-purple-400">
  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </div>
  //   </>)
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showBtn?<button>i will be shown when only when a second button is clicked</button>: "thenga"} */}
      {showBtn && <button>i will be shown when only when a second button is clicked</button>}
      <div className="card">
        <button onClick={() => { setCount((count) => count + 1); setshowBtn(!showBtn) }}>
          count is {count}
        </button>
        {todos.map(todo => {
          // return <Todo key={todo.title} todo={todo}/>
          return (
            <div className="m-4 border border-1 border-purple-400">
              <div className="todo">{todo.title}</div>
              <div className="todo">{todo.desc}</div>
            </div>
          )
        })}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
