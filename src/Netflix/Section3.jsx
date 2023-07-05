import React from 'react'
import { useState } from 'react'

const Section3 = () => {
    const [data, setdata] = useState('helo')
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    function handleClick(){
       console.log(name) 
       console.log(email)
       console.log(password)
    }
    const [show, setshow] = useState(false)
    
  return (
    <div style={{margin: '50px 0'}}>
      {/* {data} */}
      <p>Username: {name} {email} {password} </p>
      <input type="text" onChange={(e)=> setname(e.target.value)} />
      <input type="email" onChange={(e)=> setemail(e.target.value)} />
      <input type="password" onChange={(e)=> setpassword(e.target.value)} />
      {/* <button onClick={handleClick}>Submit</button> */}
      <button onClick={handleClick} 
      style={{backgroundColor : show ? 'orange' : 'red'}} 
      >{show ? 'Submit' : 'Un Submit'}</button>
 



    </div>
  )
}

export default Section3
