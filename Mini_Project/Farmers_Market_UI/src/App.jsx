import './App.css'
import Flowers from './components/Flowers/Flowers'
import HeroSection from './components/HeroSection/HeroSection'
import Vegetables from './components/Vegetables/Vegtables'

function App() {

  return (
    <div className="container">

    <HeroSection/>
    <Vegetables limit={4}/>
    <Flowers limit = {4}/>
    </div>
  )
}

export default App
