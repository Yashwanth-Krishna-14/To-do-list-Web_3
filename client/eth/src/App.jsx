import { useState } from 'react'
import { Navbar,Welcome,Footer,Services,Transaction } from './components'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome></Welcome>
        

      </div>
      <Services></Services>
      <Transaction></Transaction>
      <Footer></Footer>
   

    </div>
  )
}

export default App
