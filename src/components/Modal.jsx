import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../utils/GlobalProvider'

const Modal = forwardRef(function Modal(
  { children, isCheckout, setIsCheckout, onConfirm, setFormError },
  ref
) {
  const { state } = useContext(GlobalContext)
  const dialogRef = useRef(null)

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current.showModal()
    },
    close: () => {
      dialogRef.current.close()
    },
  }))

  const handleClose = () => {
    dialogRef.current.close()
    setFormError(null)
    setIsCheckout(false)
  }

  const disabledButton =
    'text-black bg-stone-400 text-md cursor-pointer rounded-md px-6 py-2'
  const enabledButton =
    'text-black bg-yellow-400 text-md cursor-pointer rounded-md hover:bg-yellow-500 px-6 py-2'

  return (
    <dialog
      ref={dialogRef}
      className='bg-[#dfd7cb] rounded-md py-5 px-3 w-auto max-w-[30rem]'>
      {children}
      <div className='flex justify-end gap-2 mt-5'>
        <button
          onClick={handleClose}
          className='text-md cursor-pointer hover:text-stone-800'>
          Close
        </button>
        {!isCheckout ? (
          <button
            onClick={() => setIsCheckout(true)}
            disabled={state.totalPrice === 0 ? true : false}
            className={state.totalPrice === 0 ? disabledButton : enabledButton}>
            Go To Checkout
          </button>
        ) : (
          <button
            onClick={onConfirm}
            className='text-black bg-yellow-400 text-md cursor-pointer rounded-md hover:bg-yellow-500 px-6 py-2'>
            Confirm Order
          </button>
        )}
      </div>
    </dialog>
  )
})

export default Modal
