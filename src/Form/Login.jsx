import React from 'react'
import { GlobalUserContext } from '../../lib/UserContext'

const Login = () => {

  const {product, number} = GlobalUserContext()

  console.log(product, 'coming fro login compo')
  
  return (
    <div>
    <div className='container-fluid d-flex justify-content-center align-item-center bg-success' style={{height:'100vh'}}>
    
        <form className='d-flex m-5 flex-column p-5' style={{backgroundColor:'white', height:'300px', width:'500px', boxShadow:'2px 8px 8px red' }}>
        {product.title}
        {number}
            <label>Name:</label>
            <input className='input-text' type="name" placeholder='Enter Your Name' />
            <label >Email</label>
            <input className='input-text' type="email" placeholder='Enter Email Address'/>
            <label >Password</label>
            <input className='input-text' type="password" placeholder='Enter Password'/>
            
        

        </form>

    </div>
      
    </div>
  )
}



export default Login

