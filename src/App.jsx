import Header from './components/Header'
import Products from './components/Products'
import { GlobalProvider } from './utils/GlobalProvider'
function App() {
  return (
    <div className='m-10'>
      <GlobalProvider>
        <Header />
        <Products />
      </GlobalProvider>
    </div>
  )
}

export default App
