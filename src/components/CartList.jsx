import { useState } from 'react'
import Items from './Items'

const CartList = () => {
  const [counter, setCounter] = useState(1)
  const price = 19.99
  return (
    <div className='flex flex-col'>
      <span className='text-xl font-bold'>Your Cart</span>
      <Items counter={counter} setCounter={setCounter} price={price} />
      <span className='font-bold basis-full text-right mt-5'>
        ${(price * counter).toFixed(2)}
      </span>
    </div>
  )
}

export default CartList
