import Items from './Items'
import { useContext } from 'react'
import { GlobalContext } from '../utils/GlobalProvider'
const CartList = () => {
  const { state } = useContext(GlobalContext)
  return (
    <div className='flex flex-col'>
      <span className='text-xl font-bold'>Your Cart</span>
      {state.cart.length > 0 ? (
        state.cart.map((item, index) => <Items order={item} key={index} />)
      ) : (
        <span>No Items in your cart</span>
      )}
      <span className='font-bold basis-full text-right mt-5'>
        ${state.totalPrice}
      </span>
    </div>
  )
}

export default CartList
