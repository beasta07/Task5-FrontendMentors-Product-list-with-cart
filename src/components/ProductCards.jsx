import React, { useContext, useState } from 'react'
import data from '../../data.json'
import { CartContext } from '../context/CartContext'

const ProductCards = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = (item) => {
    if (quantity > 0) {
      addToCart({ ...item, quantity })
      setSelectedIndex(null)
      setQuantity(1) 
    }
  }

  return (
    <div className='grid md:grid-cols-3 my-10 gap-10'>
      {data.map((item, index) => (
        <div key={index}>
          <img
            onClick={() => setSelectedIndex(index)}
            className={`${
              selectedIndex === index ? 'border-red-600 border-2' : ''
            } rounded-xl -z-10 w-full object-cover -mb-5`}
            src={item.image.desktop}
            alt=""
          />
          <div className='text-center flex justify-center'>
            {selectedIndex === index ? (
              <div className='px-4 py-2 flex items-center gap-5 bg-red-800 text-white cursor-pointer text-sm font-semibold rounded-full border border-red-800'>
                <button
                  className='cursor-pointer border border-white rounded-full px-2'
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                >
                  -
                </button>
                <h1 className='text-lg'>{quantity}</h1>
                <button
                  className='cursor-pointer border border-white rounded-full px-2'
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
                <button
                  onClick={() => handleAddToCart(item)}
                  className='ml-4 bg-white text-red-800 px-3 py-1 rounded-full font-bold border border-white'
                >
                  Add
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSelectedIndex(index)}
                className='px-4 py-2 cursor-pointer text-sm font-semibold bg-white rounded-full border border-red-800'
              >
                Add to Cart
              </button>
            )}
          </div>

          <div className='mt-5'>
            <h2 className='text-[#968784] font-medium'>{item.category}</h2>
            <h1 className='font-bold my-1'>{item.name}</h1>
            <h2 className='text-red-600 font-semibold'>${item.price}.00</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductCards
