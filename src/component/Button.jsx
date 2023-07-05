import React from 'react'

const Button = () => {

    function toggle(){
        setState('welcome t sqi')
        setdata({name: 'sammm'})
        console.log(data)
    
      }
    
  return (
    <div>
      <button onClick={toggle} >Change state</button>
    </div>
  )
}

export default Button
