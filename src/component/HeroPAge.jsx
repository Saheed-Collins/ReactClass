import React from 'react'
// import Navbar from './navbar'

const HeroPAge = ({names}) => {
    console.log(names)
  return (
    <div style={{height: '100vh', backgroundColor: 'green'}}>
       {
        names.name
       }
      i am hero page
    </div>
  )
}

export default HeroPAge
