// Cart.jsx
import Modal from './Modal'
import CartList from './CartList'
import Checkout from './Checkout'
import { useContext, useRef, useState, useEffect } from 'react'
import { GlobalContext } from '../utils/GlobalProvider'
import { handleConfirmOrder } from '../utils/handleConfirmOrder'

const Cart = () => {
  const dialogRef = useRef(null)
  const [isCheckout, setIsCheckout] = useState(false)
  const [formError, setFormError] = useState(null)
  const { state, dispatch } = useContext(GlobalContext)
  const formRef = useRef(null)

  useEffect(() => {
    console.log('Latest state:', state)
  }, [state])

  const handleOpen = () => {
    dialogRef.current.open()
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
        onConfirm={(e) =>
          handleConfirmOrder(
            e,
            formRef,
            dialogRef,
            setIsCheckout,
            setFormError,
            state,
            dispatch
          )
        }
        setFormError={setFormError}>
        {isCheckout ? (
          <Checkout
            errorMessage={formError}
            onSubmit={(e) =>
              handleConfirmOrder(
                e,
                formRef,
                dialogRef,
                setIsCheckout,
                setFormError,
                state,
                dispatch
              )
            }
            formRef={formRef}
          />
        ) : (
          <CartList />
        )}
      </Modal>
    </div>
  )
}

export default Cart
