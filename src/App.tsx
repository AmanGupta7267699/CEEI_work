
import './App.css'
import HomePage from './pages/homePage'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom';
import About from './pages/about';


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
          <Route path='/' element= {<HomePage />} />
          <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
