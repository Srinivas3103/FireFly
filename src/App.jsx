import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import ProductCard from './components/ProductCard/ProductCard'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Products/>
      <Footer/>
      <Routes>
      <Route path="/productview" element={<ProductCard/>}/>
      </Routes>
    </div>
  )
}

export default App

