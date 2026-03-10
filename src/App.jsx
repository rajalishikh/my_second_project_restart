import './App.css'
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'

function App() {


  return (
    <div className="flex flex-col min-height-screen min-h-screen">
      <div className='grow'>
        <Navbar></Navbar>
        <Banner></Banner>

      </div>
      
      
      <Footer></Footer>
      
    
    </div>
  )
}

export default App
