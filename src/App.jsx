import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCards from './components/ProductCards'
import Cart from './components/Cart'
import { CartProvider } from './context/cartContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider >
   <div className="md:px-32 md:py-20 px-4 h-full font-redhat bg-[#FDF9F5]">
    <div className='md:flex w-full justify-between'>
      <div className='md:w-[65%]'>
      <h1 className='text-4xl  font-bold'>Desserts</h1>
      <ProductCards/>
      </div>
      <div className='md:w-[30%]'>
       <Cart/>
      </div>

    </div>
   </div>
    </CartProvider>
  )
}

export default App
