import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

import { ShoppingCart, ChevronLeft, Zap } from 'lucide-react'
import CartItem from '../components/CartItem'
const Cart = () => {
  const { cart, cartTotal, cartCount } = useCart()
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">

        <div className='flex items-center mb-10'>
          <Link to={'/'} className='flex items-center text-gray-400 hover:text-orange-400 transition duration-150 font-semibold text-lg'>
            <ChevronLeft className='w-6 h-6 mr-1' />
            <span>Back to Store</span>
          </Link>
        </div>

        <h2 className='text-4xl font-extrabold text-white mb-10 tracking-tight'>Shopping Cart ({cartCount})</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <div className='lg:col-span-2 space-y-4'>
            {cart.map(item => <CartItem key={item.id} item={item} />)}
          </div>
          <div className='lg:col-span-1 p-8 bg-gray-900 rounded-2xl border-1-4 sticky top-20 h-fit border border-gray-800'>
            <h3 className='text-3xl font-bold text-white mb-5 border-b border-gray-700 pb-3 flex items-center space-x-2'>
              <div className='flex justify-between'>
                <span className='w-g h-6 text-orange-400'>₹</span>
                <span>Order Total</span>
              </div>
            </h3>
            <div className='space-y-4 text-gray-400 '>
              <div className='flex justify-between text-xl'>
                <span>Subtotal :</span>
                <span className='font-semibold text-white'>₹{cartTotal.toFixed(2)}</span>
              </div>

              <div className='flex justify-between text-xl'>
                <span>Shipping (Express) :</span>
                <span className='font-semibold text-green-500'>Free</span>
              </div>

              <div className='flex justify-between border-t pt-6 border-gray-700'>
                <span className='text-2xl font-extrabold text-white'>Estimated  <br />Total :</span>
                <span className='font-extrabold text-2xl text-orange-400'>₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className='mx-auto mt-8 flex py-4 w-full bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer text-xl hover:bg-orange-700 transition duration-300 items-center justify-center space-x-2 transform hover:ring-4 hover:ring-orange-600/50 tracking-wider uppercase'
            >
              <ShoppingCart className='w-6 h-6' />
              <Zap className='w-6 h-6' />
              <span>Proceed Securely</span>
            </Link>
            <p className='text-xs text-gray-500 text-center mt-4'>All transition are encrypted and secure.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Cart
