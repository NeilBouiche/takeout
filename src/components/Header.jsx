import Logo from '../assets/logo.jpg'
import Cart from './Cart'
const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-row items-center gap-4'>
        <img
          className='w-16 rounded-full border border-yellow-400'
          src={Logo}
          alt='Logo'
        />
        <span className='uppercase text-3xl lg:tracking-widest text-yellow-400'>
          reactfood
        </span>
      </div>
      <Cart />
    </div>
  )
}

export default Header
