import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [data, setdata] = useState([])

  useEffect(() => {
    async function fetchData() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setdata(json));
    }
    fetchData();
  }, [])



  return (
    <>
    <Navbar />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map(todo => (
            <div key={todo.id} className="p-4 border border-purple-400 rounded-lg shadow-sm">
              <div className="todo">{todo.userId}</div>
              <div className="todo">{todo.id}</div>
              <div className="todo">{todo.title}</div>
              <div className="todo">{todo.body}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
