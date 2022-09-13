import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Error from '../pages/Error'
import Cart from '../pages/Cart'
import ProductList from '../pages/ProductList'

const Index = () => {
  return (
    <BrowserRouter >
    
    

    

        <Routes >
             
              <Route path="/" element={<Home />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/sign-in" element={<Login />}></Route>
              <Route path="/products" element={<ProductList />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<Error />}></Route>

             
              
        </Routes>


    </BrowserRouter>
  )
}

export default Index