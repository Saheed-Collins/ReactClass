import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContext from '../Library/UserContext.jsx'
import ProductContext from '../Library/ProductContext.jsx'
// import UserContext from '../lib/UserContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContext>
      <UserContext>
          <App />
      </UserContext>
    </ProductContext>
    
    
  </React.StrictMode>,
)
