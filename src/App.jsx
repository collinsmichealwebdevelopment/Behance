import React from 'react'

import { About,Footer} from './container'
import { Navbar } from './components'
import './App.scss';
import Faq from './container/faq/Faq';
import Portfolio from './container/Portfolio/Portfolio';




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

