import { forwardRef, useImperativeHandle, useRef } from 'react'

const Modal = forwardRef(function Modal(
  { children, isCheckout, setIsCheckout },
  ref
) {
  const dialogRef = useRef(null)

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current.showModal()
    },
  }))

  const handlClose = () => {
    dialogRef.current.close()
    setIsCheckout(false)
  }

  return (
    <dialog
      ref={dialogRef}
      className='bg-[#dfd7cb] rounded-md py-5 px-3 w-auto max-w-[30rem]'>
      {children}
      <div className='flex justify-end gap-2 mt-5'>
        <button
          onClick={() => handlClose()}
          className='text-md cursor-pointer hover:text-stone-800'>
          Close
        </button>
        {!isCheckout ? (
          <button
            onClick={() => setIsCheckout(true)}
            className='text-black bg-yellow-400 text-md cursor-pointer rounded-md hover:bg-yellow-500 px-6 py-2'>
            Go To Checkout
          </button>
        ) : (
          <button className='text-black bg-yellow-400 text-md cursor-pointer rounded-md hover:bg-yellow-500 px-6 py-2'>
            Confirm Order
          </button>
        )}
      </div>
    </dialog>
  )
})

export default Modal
