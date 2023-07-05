import React, { useRef, useState } from 'react'
import Form from './Form'
import image from '../assets/pasted image 01.png'
import { GlobalUserContext } from '../../lib/UserContext'

const Listing = () => {
  const {product, setproduct,number, setnumber} = GlobalUserContext()

  console.log(product, 'user here')

  function handleClickContext(){
    setproduct({title: 'sweeet'})
  }

  function increment(){
    setnumber((prev)=> prev +1)
    console.log(number)
  }


  const inpRef = useRef()
  const h1Ref = useRef()
  const [email, setEmail] = useState()

  let users = [
    {
      id: 1,
      name: 'oslim',
      email: 'oslim@gmail.com',
      career: 'web dev'
    },
    {
      id: 2,
      name: 'ahmed',
      email: 'ahmed@gmail.com',
      career: 'web dev'
    },
    {
      id: 3,
      name: 'ore',
      email: 'ore@gmail.com',
      career: 'web dev'
    }
  ]

  function handleCick(){
    console.log( h1Ref.current.textContent);
    //  {h1Ref.current.textContent or innerHTML or innerText}
  
    console.log(inpRef.current)
  }
  return (
    <div>
     {
      users.map((elem)=>{
        return(
          <div key={elem.id}>
            <p>{elem.name}</p>
            {/* <p>{elem.email}</p>
            <p>{elem.career}</p> */}
          </div>
        )
       
      })
     }
     <h1 ref={h1Ref}>welcome to react app</h1>
     <input type="text" ref={inpRef} />
     <button onClick={handleCick}>Reveal value</button>
     <input type="text" onInput={(e)=> setEmail(e.target.value) } />

     {/* <img src='/image/pasted image 01.png' alt="" /> */}
     {/* <img src={image} alt="" /> */}

     <button onClick={handleClickContext}>Change Context prod</button>
     <button onClick={increment}>Increment Number</button>


     <Form/>
    </div>
  )
}

export default Listing
