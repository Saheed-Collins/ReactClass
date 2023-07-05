import React from 'react'
// import { GlobalProductContext } from '../../Library/ProductContext'
// import { GlobalUserContext } from '../../Library/ProdContext'



const Navbar = () => {
  return (
    <nav>
         <div className='navbox d-flex justify-content-around align-items-center bg-info w-100'>
        <span className='shopping'>My Shopping</span>  
        <div className='cart'>
            <span>
                <i className='fas fa-cart-plus'></i>
                </span>
            
            </div>   
    </div>
    </nav>
   
    
    
  )
}

export default Navbar
