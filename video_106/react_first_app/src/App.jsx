import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title='Card 1' desc='this is my card 1'/>
        <Card title='Card 2' desc='this is my card 2'/>
        <Card title='Card 3' desc='this is my card 3'/>
        <Card title='Card 4' desc='this is my card 4'/>
      </div>
      <Footer />
    </>
  )
}

export default App
