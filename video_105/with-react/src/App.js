// import logo from './logo.svg';
import {useState} from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/footer'

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <NavBar logoText = 'CodeWithAthar'/>
      <div className='value'>{value}</div>
      <button onClick={()=>{setValue(value+1)}} className="hehe">click me</button>
      <Footer/>
    </div>
  
  );
}

export default App;
