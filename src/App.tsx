import 'react'

import './App.css'
import MenuAppBar from './Components/AppBar'
import Caroucsell from './Components/Carousel'
import NavBar from './Components/Navigation'
import { useState } from 'react'
import SwitchedBody from './Components/SwitchedBody'
import Footer from './Components/Footer'
import { CartProvider } from './Components/CartContext'

function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
    <MenuAppBar/>
    <Caroucsell/>
  

    <NavBar activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
    <CartProvider>

    <SwitchedBody index={activeIndex}/>
    </CartProvider>
    <Footer/>
    </>
  )
}

export default App
