import { useRef, useState } from 'react'
import Modal from './Modal'
import CartList from './CartList'
import Checkout from './Checkout'

const Cart = () => {
  const dialogRef = useRef(null)
  const [isCheckout, setIsCheckout] = useState(false)

  const handleOpen = () => {
    dialogRef.current.open()
  }

  return (
    <div>
      <button
        onClick={handleOpen}
        className='text-yellow-400 text-xl cursor-pointer'>
        Cart (0)
      </button>
      <Modal
        ref={dialogRef}
        isCheckout={isCheckout}
        setIsCheckout={setIsCheckout}>
        {isCheckout ? <Checkout /> : <CartList />}
      </Modal>
    </div>
  )
}

export default Cart
