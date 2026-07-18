import React from 'react'
import { Home, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import SearchFilter from './SearchFilter'
import { useCart } from '../context/CartContext'


const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <>
      <header className='sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-orange-900'>
        <div className='conteiner mx-auto px-4 py-4 flex justify-between items-center '>
          <Link to={'/'}>
            <div className='flex items-center space-x-3 cursor-pointer'>
              <Home className='w-8 h-8 text-orange-400 drop-shadow-lg' />
              <h1 className="group select-none text-2xl font-black tracking-[0.2em] uppercase flex items-center cursor-pointer transition-all duration-300 hover:scale-105">
                <span className="text-white group-hover:text-orange-200">ONE</span>

                <span className="bg-gradient-to-b from-orange-300 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  8
                </span>

                <span className="bat-swing mx-2 text-xl inline-block">
                  🏏
                </span>

                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent">
                  THIRTY
                </span>

                <span className="ml-1 text-white group-hover:text-orange-200">
                  3
                </span>
              </h1>
            </div>
          </Link>
          <nav className='flex items-center space-x-6'>
            <Link to={'/cart'} className='relative p-3 bg-orange-500/10 rounded-xl hover:bg-orange-500/20 transition duration-200 border border-orange-400/50 shadow-lg cursor-pointer'>
              <ShoppingCart className='w-6 h-6 text-orange-400 ' />
              {cartCount > 0 && (<span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none  text-white transform translate-x-1/2 bg-red-600 rounded-full min-w-[24px] h-[20px] -translate-y-1/2'>
                {cartCount}
              </span>)}
            </Link>
          </nav>
        </div>

      </header>

    </>
  )
}

export default Navbar
