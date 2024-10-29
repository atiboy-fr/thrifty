import React, { useEffect } from 'react'
import PageNav from './components/PageNav'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import AdminPage from './pages/AdminPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import ProductDetails from './pages/ProductDetails'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import SearchContext from './context/SearchContext'
import { CartContextProvider } from './context/CartContextProvider'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(function() {
    AOS.init({
      duration: 200,
      easing: 'ease-in-out',
      delay: 0,
      once: true,
    })
  },[])

  return (
    <CartContextProvider>
    <SearchContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='shop' element={<ShopPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </SearchContext>
    </CartContextProvider>
  )
}

export default App
