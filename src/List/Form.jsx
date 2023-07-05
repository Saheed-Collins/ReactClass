import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [gender, setgender] = useState()
    
    
  return (
      <div>
        <p>Name {name}  </p>
        <p>Email {email}</p>
        <p> password {password}</p>
        <p>Gender : {gender}</p>

      <input type="text" onInput={(e)=> setName(e.target.value)} />


      <input type="email" onInput={(e)=> setemail(e.target.value)} />

      <input type="password" onInput={(e)=> setpassword(e.target.value)} />

      <select name="" id="" onInput={(e)=> setgender(e.target.value)}>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>
    </div>
  )
}

export default Form
