import React from 'react'
import Logo from './Logo'
import HeroPAge from './HeroPAge'

const Navbar = ({naming, data}) => {
    console.log(data)
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Logo/>
         <button>Submit</button>

    </div>
  )
}

export default Navbar
