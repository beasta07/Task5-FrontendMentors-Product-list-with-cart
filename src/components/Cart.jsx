import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import ConfirmModel from './ConfirmModel'

const Cart = () => {
  const { cartItems, removeRow } = useContext(CartContext)
  console.log(cartItems)
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
 const [openModel , setOpenModel]= useState(false)

 const toggleModel = () => {
  setOpenModel(prev => !prev);
 }
  return (
    <div>
      {cartItems.length < 1 ? (
        <div className='bg-white rounded-xl p-4'>
          <h1 className='text-2xl font-bold text-red-800'>Your Cart</h1>
          <div className='flex flex-col items-center justify-center'>
            <img src="/assets/images/illustration-empty-cart.svg" className='size-32' alt="Empty cart" />
            <p className='text-amber-800 text-xs'>Your added items will appear here</p>
          </div>
        </div>
      ) : (
        <div className='bg-white rounded-xl p-4'>
          <h1 className='text-2xl font-bold text-red-800 mb-4'>Your Cart</h1>
          <ul>
            {cartItems.map((item, index) => (
              <>
              <li key={index} className="mb-2 flex items-center justify-between">
                <div>
                  <h1 className='font-semibold'>{item.name}</h1>
                  <div className='flex mt-2 gap-5 text-sm'>
                    <span className='text-red-700 font-semibold'>{item.quantity} x</span>
                    <span className='text-gray-500 '>@ Rs {item.price}</span>
                    <span className='text-red-400'>Rs {item.price * item.quantity}</span>
                  </div>

                </div>
                <img src='/assets/images/icon-remove-item.svg' className='border cursor-pointer border-amber-600 p-1 rounded-full' onClick={()=>removeRow(item)} />
                

              </li><hr className='my-4 text-gray-200' /></>
              
            ))}
            <div className='flex justify-between'>
              <h2 className='text-sm text-gray-800 font-medium'>Order Total</h2>
              <h2 className='text-lg  font-semibold'>Rs {total}</h2>
            </div>
            <div className='bg-[#FDF9F5] m-4 rounded-md flex justify-center text-sm items-center p-4'>
              <span><img src="/assets/images/icon-carbon-neutral.svg" alt="" /></span>
              This is a  <span className='font-semibold mx-1'> carbon-neutral </span> delivery


            </div>
            <div className='m-4'>
              <button onClick={toggleModel} className='w-full rounded-full bg-red-800 text-center p-2 text-white'>Confirm Order</button>

            </div>
          </ul>
        </div>
      )}

      <ConfirmModel openModel={openModel} toggleModel={toggleModel} />
    </div>
  )
}

export default Cart
