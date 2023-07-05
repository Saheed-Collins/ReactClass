import React from 'react'
import './navbar.css'
import { Logo } from './Logo'
import MenuHeader from './MenuHeader'
import Fetching from '../component/Fetching'


const Navbar1 = () => {
  return (
    <div>
     
     <div className='myNavbar d-flex '>
      <Logo/>
      <MenuHeader/>
     </div>
      <Fetching/>
      
    </div>
  )
}

export default Navbar1