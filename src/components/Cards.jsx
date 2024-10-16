import { useContext } from 'react'
import { GlobalContext } from '../utils/GlobalProvider'

const Cards = ({ name, id, image, price, description }) => {
  const { state, dispatch } = useContext(GlobalContext)

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEMS',
      payload: [
        {
          name: name,
          price: price,
          quantity: 1,
        },
      ],
    })
  }

  return (
    <div id={id} key={id} className=' bg-[#1d1a16] rounded-lg'>
      <img
        src={`../../backend/public/${image}`}
        alt={name}
        className='rounded-t-xl object-cover'
      />
      <div className='flex flex-col items-center justify-between gap-4 text-center mt-4'>
        <span className='text-lg font-bold line-clamp-1'>{name}</span>
        <span className='bg-[#312c1d] text-[#ffc404] px-7 rounded-md'>
          ${price}
        </span>
        <div className='h-16'>
          <p className='text-sm px-4  line-clamp-3'>{description}</p>
        </div>
        <button
          onClick={handleAddToCart}
          className='bg-[#ffc404] px-8 py-2 rounded-lg mb-6 text-black block hover:bg-yellow-300 hover:scale-105 hover:transition'>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Cards
