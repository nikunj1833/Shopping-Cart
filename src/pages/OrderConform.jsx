import React from 'react'
import { CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
const OrderConform = ({ deliveryDetails }) => {
  return (
    <>
      <div className="container mx-auto md:px-8 pt-12" >
        <div className=' p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto text-center mt-12 border border-green-700 text-white'>
          <CheckCircle className='w-24 h-24 text-green-500 mx-auto mb-6 drop-shadow-lg' />
          <h2 className='text-4xl font-extrabold text-white mb-4 '>Order Conformed!</h2>
          <p className='text-lg text-gray-300 mb-6 '>Your transition is complete. A confirmation email has been sent to your account. </p>

          <div className='p-6 bg-green-900/30 border border-green-700 rounded-xl font-mono text-left inline-block text-green-300 text-sm '>
            <p className='font-semibold text-lg mb-1 '>
              {deliveryDetails?.name}
            </p>
            <p>
              {deliveryDetails?.address}
            </p>
            <p>{deliveryDetails?.city},{deliveryDetails?.zip}</p>
          </div>
          <Link
            to="/"
            className='mt-8 mx-auto flex w-fit px-10 py-3 bg-orange-600 text-white font-bold text-base rounded-full shadow-lg shadow-orange-800/40 cursor-pointer hover:bg-orange-700 transition duration-300 items-center justify-center space-x-2 hover:ring-2 hover:ring-orange-500 uppercase tracking-wider'
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  )
}

export default OrderConform
