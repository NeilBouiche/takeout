import { useEffect, useState } from 'react'
import { fetchAllData } from '../utils/calls'
import Cards from './Cards'

const Products = () => {
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [fetchError, setFetchError] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true)
        const data = await fetchAllData()
        setProducts(data)
      } catch (error) {
        setFetchError('Data Fetching Failed, Please try again')
      }
    }
    fetchData()
    setIsFetching(false)
  }, [])

  if (fetchError) {
    return (
      <div className='bg-[#312c1d] p-4 text-red-400 text-center mt-10'>
        <p>{fetchError}</p>
      </div>
    )
  }

  if (isFetching) {
    return (
      <div className='bg-[#312c1d] p-4 text-yellow-400 text-center mt-10'>
        Loading data...
      </div>
    )
  }

  return (
    <div className='grid grid-cols-3 gap-5 mx-24 my-14 '>
      {products.map((el) => (
        <Cards
          key={el.id}
          id={el.id}
          name={el.name}
          image={el.image}
          price={el.price}
          description={el.description}
        />
      ))}
    </div>
  )
}

export default Products
