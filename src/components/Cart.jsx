import Modal from './Modal'
import CartList from './CartList'
import Checkout from './Checkout'
import { useContext, useRef, useState } from 'react'
import { GlobalContext } from '../utils/GlobalProvider'

const Cart = () => {
  const dialogRef = useRef(null)
  const [isCheckout, setIsCheckout] = useState(false)
  const [formError, setFormError] = useState(null)
  const { state } = useContext(GlobalContext)
  const formRef = useRef(null)

  const handleOpen = () => {
    dialogRef.current.open()
  }

  const handleConfirmOrder = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current)
      const name = formData.get('name')
      const email = formData.get('email')
      const street = formData.get('street')
      const zip = formData.get('zip')
      const city = formData.get('city')

      if (!name || !email || !street || !zip || !city) {
        setFormError('Please fill in all fields.')
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(email)) {
        setFormError('Please enter a valid email address.')
      }

      if (!/^\d+$/.test(zip)) {
        setFormError('Please enter a valid zip code (numbers only).')
      }

      const streetPattern = /^(?=.*\d)(?=.*[a-zA-Z]).+$/
      if (!streetPattern.test(street)) {
        setFormError(
          'Street address must contain at least one number and one word.'
        )
      }
      if (formError === null && name && email && street && zip && city) {
        formRef.current.submit()
        console.log('Order confirmed!: ', formData)
      }
    }
  }

  return (
    <div>
      <button
        onClick={handleOpen}
        className='text-yellow-400 text-xl cursor-pointer'>
        Cart ({state.totalQuantity})
      </button>
      <Modal
        ref={dialogRef}
        isCheckout={isCheckout}
        setIsCheckout={setIsCheckout}
        onConfirm={handleConfirmOrder}
        setFormError={setFormError}>
        {isCheckout ? (
          <Checkout errorMessage={formError} formRef={formRef} />
        ) : (
          <CartList />
        )}
      </Modal>
    </div>
  )
}

export default Cart
