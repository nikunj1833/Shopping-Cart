import React from 'react'
import { useCart } from '../context/CartContext'
import { X , ShoppingBag, ShoppingCartIcon } from 'lucide-react'

const CartItem = ({ item }) => {

  const { addToCart,
    removeCart, } = useCart();

  const increaseQ = () => addToCart(item)
  const decreaseQ = () => removeCart(item.id)

  return (
    <div className='flex flex-col items-center justify-between sm:flex-row p-4 sm:p-6 mb-4 bg-gray-900 rounded-xl shadow-2xl border-gray-800 transition duration-300  hover:border-orange-600/50'>

      <div className='flex items-center space-x-4 w-full sm:w-auto'>
        <img src={item.image} alt={item.name} className='w-24  h-24 object-cover rounded-lg border-2 border-gray-700' />
        <div>
          <h3 className='text-white line-clamp-1 text-xl font-bold'>{item.name}</h3>
          <p className='text-lg text-orange-400  font-semibold'>₹{item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className='flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4'>
        <div className='flex items-center border border-gray-700 rounded-full overflow-hidden shadow-lg '>
          <button onClick={decreaseQ} className=' p-2 text-gray-400 bg-gray-800 hover:bg-gray-700 item-center transition duration-150 w-8 h-8 justify-center'>-</button>
          <span className='px-3 text-base font-bold text-white bg-gray-800 '>
            {item.quantity}
          </span>

          <button onClick={increaseQ} className='p-2 text-gray-400 bg-gray-800  hover:bg-gray-700 item-center transition duration-150 w-8 h-8 justify-center'>+</button>
        </div>
        <p className='font-extrabold text-orange-400 w-24 text-right md:block'>₹{(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={() => removeCart(item.id, true)} className='p-3 bg-red-800/20 text-red-400 rounded-full hover:bg-red-800/40 duration-150 shadow-md'>
          <X />
        </button>
        <div>
        </div>

      </div>

    </div>

  )
}

export default CartItem 
