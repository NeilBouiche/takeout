const Checkout = () => {
  return (
    <div className='mb-10'>
      <h3 className='text-xl font-bold mb-5'>Checkout</h3>
      <span className=''>Total Amount: $89.99</span>
      <form action='#' method='#' className='flex flex-col'>
        <label htmlFor='name'>Full Name</label>
        <input type='text' name='name' id='name' />
        <label htmlFor='email'>E-mail Address</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='street'>Street</label>
        <input type='text' name='street' id='street' />
        <div className='flex items-center mt-5'>
          <div>
            <label htmlFor='zip'>Postal Code</label>
            <input type='text' name='zip' id='zip' />
          </div>
          <div>
            <label htmlFor='city'>City</label>
            <input type='text' name='city' id='city' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Checkout
