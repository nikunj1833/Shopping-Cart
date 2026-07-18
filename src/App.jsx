import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import ProductDetails from './pages/ProductDetails'
import Footer from './components/Footer'
import OrderConform from './pages/OrderConform'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { ToastContainer, toast,Bounce } from 'react-toastify';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <div>
          <Navbar />

          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
