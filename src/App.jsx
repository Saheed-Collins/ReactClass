import { useState } from "react"
// import HeroPAge from "./component/HeroPAge"
// import Navbar from "./component/navbar"
// import Button from "./component/Button"


// function App(){ 
//   const [state, setState] = useState('hello oslim')
//   const [data, setdata] = useState({name: 'oslim'})

//   // let name = 'oslim';


//   return(
//     <div id=''>
//       <Navbar/>

//       {/* {state} */}



//       {/* <Navbar /> */}
//      <HeroPAge names={data} />

//        {/* <p className="pTag"> {name}</p> */}

//         <Button/>

//     </div>
//   )
  
// }

// export default App

import React from 'react'
// import Netflix from "./Netflix/Netflix"
import Login from "./Form/Login"
// import MyBlog from "./Props/MyBlog"
import Listing from "./List/listing"
import CondiTionCompo from "./component/CondiTionCompo"
// import MiniEcommerce from "./MiniEcommrce/Ecommerce"
// import MinCommerce from "./MinCommerce/commerce"
import Props from "./PropsDrilling/Props"
import Faqs from "./NetflixProps/Faqs"
// import Form from "./List/Form"
// import BestForm from "./Form/BestForm"
// import Fetching from "./component/Fetching"

const App = () => {
  return (
    <div>
      {/* <MinCommerce/> */}
      {/* <MiniEcommerce/> */}
      <Props/>
      {/* <Faqs/> */}
      
      {/* <CondiTionCompo/> */}
      {/* <Netflix/> */}
      {/* <Login/> */}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
      {/* <MyBlog/> */}

      {/* <Listing/>   */}
      {/* <BestForm/> */}
      {/* <Fetching/> */}
      
      
      
      
      
    </div>
  )
}

export default App
