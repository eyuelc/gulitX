import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './pages/home'
import Shop from './pages/shop'
import Cart from './pages/cart'


function App() {


  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </Router>
    
  )
}

export default App
