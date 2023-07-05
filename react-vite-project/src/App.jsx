import { useState } from "react";
import './App.css'
import About from './component/About'
import HeroPage from './component/HeroPage'
import Navbar from './component/Navbar'
import Navbar1 from "./Navbar/Navbar1";


function App() {
  

  const [data, setData] = useState('hello world')
 
  let name = 'selim'
  let arr = [
    'sam','sql','oslim', 'collins','ahmed'
  ]


  return (

    <>
    <Navbar1/>

        {/* <Navbar lolipop={name} /> */}
      {/* above is a sample of adding a prop */}
      {/* <HeroPage lolipop={name} />
      <About names={arr} lolipop={name} /> */}
    </>
  )
}

export default App
