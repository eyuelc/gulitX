import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './pages/home'
import Shop from './pages/shop'
import Cart from './pages/cart'
import MyOrder from './pages/myOrder';


function App() {


  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/orders' element={<MyOrder />}/>
      </Routes>
      <Footer />
    </Router>
    
  )
}

export default App
