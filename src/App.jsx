import React from 'react'

import { About,Footer,Portfolio} from './container'
import { Navbar } from './components'
import './App.scss';
import Faq from './container/faq/Faq';





const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <About />
      <Portfolio />
      <Faq />
      <Footer />

    </div>
  )
}

export default App

