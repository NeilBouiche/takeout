// orderHandler.js
import { sendAllData } from '../utils/calls' // Adjust the path as necessary

export const handleConfirmOrder = async (
  e,
  formRef,
  dialogRef,
  setIsCheckout,
  setFormError,
  state,
  dispatch // Accept state and dispatch as parameters
) => {
  e.preventDefault()

  if (formRef.current) {
    const formData = new FormData(formRef.current)
    const name = formData.get('name')
    const email = formData.get('email')
    const street = formData.get('street')
    const zip = formData.get('zip')
    const city = formData.get('city')

    let error = null

    const fields = {
      name,
      email,
      street,
      zip,
      city,
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Validate fields
    if (!email) {
      error = 'Please enter your email.'
    } else if (!emailPattern.test(email)) {
      error = 'Please enter a valid email address.'
    } else if (!name) {
      error = 'Please enter your name.'
    } else if (!street) {
      error = 'Please enter your street address.'
    } else if (!zip) {
      error = 'Please enter your zip code.'
    } else if (!city) {
      error = 'Please enter your city.'
    }

    if (error) {
      setFormError(error)
    } else {
      setFormError(null)

      const dataToSend = {
        user: {
          name,
          email,
          street,
          zip,
          city,
        },
        items: state.cart,
        totalQuantity: state.totalQuantity,
        totalPrice: state.totalPrice,
      }

      console.log('Data to send:', dataToSend) // Check the structure of the data

      dispatch({
        type: 'ADD_USER_INFO',
        payload: dataToSend,
      })

      // Send data and await the response
      await sendAllData(dataToSend)

      // Reset cart state after successful submission
      dispatch({ type: 'RESET_CART' })

      // Optionally reset form and close dialog
      formRef.current.reset()
      dialogRef.current.close()
      setIsCheckout(false)
    }
  }
}
