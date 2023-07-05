import React, { useState } from 'react'
import AnotherCom from './AnotherCom'

const Bcontent = () => {
  const [data, setdata] = useState()

  return (
    <div className='text-white d-flex align-items-center justify-content-center flex-column position-relative content '>
       <div>
        <h2 className='fs-3 text-center fw-bold'>Unlimited movies, TV shows, and more.</h2>
        <h4 className='fs-5 text-center'>Watch anywhere. Cancel anytime.</h4>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
       </div>
       <div className='d-flex justify-content-between regis'>
        <input onChange={(e)=> setdata(e.target.value)} className='w-100 h-50  form-control rounded-0' type="email" placeholder='Email Address' />
        <button className='btn  btn-danger w-50 h-50 rounded-0'>Get Started</button>
       </div>
       <AnotherCom data={data}/>
    </div>
  )
}

export default Bcontent
