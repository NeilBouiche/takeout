export const order = {
  user: {
    name: '',
    email: '',
    street: '',
    zip: '',
    city: '',
  },
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER_INFO':
      return {
        ...state,
        user: action.payload,
      }

    case 'ADD_ITEMS':
      const newItem = action.payload[0]
      const itemExists = state.cart.find((item) => item.name === newItem.name)

      let updatedCart

      if (itemExists) {
        // Update the quantity for the existing item
        updatedCart = state.cart.map((item) =>
          item.name === newItem.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        // Add the new item with an initial quantity of 1
        updatedCart = [...state.cart, { ...newItem, quantity: 1 }]
      }

      // Recalculate totalPrice and totalQuantity after updating the cart
      const totalPrice = updatedCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )

      const totalQuantity = updatedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      )

      // Return the updated state with the recalculated totalPrice and totalQuantity
      return {
        ...state,
        cart: updatedCart,
        totalPrice, // Update total price
        totalQuantity, // Update total quantity
      }

    case 'SUBTRACT_ITEMS': {
      const newItem = action.payload[0]
      const itemExists = state.cart.find((item) => item.name === newItem.name)

      if (!itemExists) return state // No action if the item doesn't exist in the cart

      let updatedCart = state.cart
        .map((item) =>
          item.name === newItem.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity becomes 0

      // Recalculate totalPrice and totalQuantity after updating the cart
      const totalPrice = updatedCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )

      const totalQuantity = updatedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      )

      return {
        ...state,
        cart: updatedCart,
        totalPrice,
        totalQuantity,
      }
    }

    default:
      return state
  }
}
