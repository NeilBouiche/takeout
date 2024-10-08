const Items = ({ counter, setCounter, price }) => {
  const totalButtonClasses =
    'py-[0.25rem] px-[0.75rem] bg-black rounded-full text-yellow-400'

  const handlePlusItem = () => {
    setCounter((prevState) => prevState + 1)
  }

  const handleMinusItem = () => {
    counter > 0 && setCounter((prevState) => prevState - 1)
  }

  return (
    <>
      <div className='flex justify-between flex-wrap gap-10 mt-4'>
        <p>
          SeaFood Paella - {counter} x ${price}
        </p>
        <div className='flex gap-4 items-center'>
          <button onClick={handleMinusItem} className={totalButtonClasses}>
            -
          </button>
          <span>{counter}</span>
          <button onClick={handlePlusItem} className={totalButtonClasses}>
            +
          </button>
        </div>
      </div>
    </>
  )
}

export default Items
