import React from 'react'
import '../component/style.scss'

const MenuHeader = () => {
  return (

    <div>
        <ul className='d-flex gap-5 hoder'>
            <li className='headerLists p-3'>About Us</li>
            <li className='headerLists p-3'>What we do</li>
            <li className='headerLists p-3'>Contact Us</li>
        </ul>
        
        </div>
  )
}

export default MenuHeader