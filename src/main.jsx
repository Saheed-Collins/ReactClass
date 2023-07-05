import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import UserContext, { GlobalProdContext } from '../Library/ProdContext.jsx'
import ProductContext from '../Library/ProductContext.jsx'
import ProdContext from '../Library/ProdContext.jsx'
// import UserContext from '../lib/UserContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ProductContext> */}
     {/* <ProdContext> */}
         <App />
      {/* </ProdContext> */}
     
    {/* </ProductContext> */}
    
    
  </React.StrictMode>,
)
