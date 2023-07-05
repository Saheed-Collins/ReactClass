import React from 'react'

const EcommNavbar = () => {
  return (
    <div>
      <nav className=' d-flex justify-content-around align-items-center bg-primary'>
        
            <span className='fw-bold fs-3'>E-commerce</span>
            <div className='cart'>
            <span>
                <i className='fas fa-cart-plus fw-bold fs-3'></i>
                </span>
            
            </div>   
        
      </nav>
    </div>
  )
}

export default EcommNavbar
