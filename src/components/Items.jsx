import { useContext } from 'react'
import { GlobalContext } from '../utils/GlobalProvider'

const Items = ({ order }) => {
  const { state, dispatch } = useContext(GlobalContext)

  const totalButtonClasses =
    'py-[0.25rem] px-[0.75rem] bg-black rounded-full text-yellow-400'

  const handlePlusItem = () => {
    dispatch({
      type: 'ADD_ITEMS',
      payload: [{ ...order, quantity: order.quantity + 1 }],
    })
  }

  const handleMinusItem = () => {
    if (order.quantity > 0) {
      dispatch({
        type: 'SUBTRACT_ITEMS',
        payload: [{ ...order, quantity: order.quantity - 1 }],
      })
    }
  }

  return (
    <>
      <div className='flex justify-between flex-wrap gap-10 mt-4'>
        <p>
          {order.name} - {order.quantity} x ${order.price}
        </p>
        <div className='flex gap-4 items-center'>
          <button onClick={handleMinusItem} className={totalButtonClasses}>
            -
          </button>
          <span>{order.quantity}</span>
          <button onClick={handlePlusItem} className={totalButtonClasses}>
            +
          </button>
        </div>
      </div>
    </>
  )
}

export default Items
