import React from 'react'
import Logoflix from './Logoflix'

const Navbarr = () => {
  return (
    <div className=' nav d-flex justify-content-between align-items-center'>
      <Logoflix/>
      <button className='btn btn-danger m-4'>Sign Up</button>
     
    </div>
  )
}

export default Navbarr


