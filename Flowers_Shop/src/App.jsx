
import { BrowserRouter, Route, Routes, Link } from 'react-router'
import Home from './assets/components/home/home'
import Cart from './assets/components/cart/Cart'
import Shop from './assets/components/shop/Shop'
import About from './assets/components/about/About'
import './assets/components/STYLE/navbar.css'
import Footer from './assets/components/footer/Footer'
import { useState } from 'react'
import CardContextProvider from './context/CardContextProvider'

 

  


function App() {
 

   

  return(
      <>
         <CardContextProvider>

         
         <BrowserRouter>
            <nav>
               <h2>Kanu Flower Shop</h2>

              <div >   
                 <Link className='text-white' to="/">Home</Link>
                 <Link className='text-white' to="/shop">Our Shop</Link>
                 <Link className='text-white' to="/cart">My Cart</Link>
                 <Link className='text-white' to="/about">About us</Link>
              </div>

            </nav>
            <Routes>
                <Route path='/'element={ <Home/>} /> 
                <Route path='/cart'element={ <Cart/>} /> 
                <Route path='/shop'element={ <Shop/>} /> 
                <Route path='/about'element={ <About/>} /> 
            </Routes>
         </BrowserRouter>
        
 
        <Footer></Footer>
         </CardContextProvider>
      </>
  )
}

export default App
