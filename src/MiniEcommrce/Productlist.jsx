import React, { useEffect, useState } from 'react'
import { getProduct } from './RequestData'
import { GlobalProductContext } from '../../Library/ProductContext'

const Productlist = () => {
    
    const {data} = GlobalProductContext()

   
  
  return (
    <div className='d-flex flex-wrap'>
        {
            data?.map((product)=> (
            <div key={product.id} className="card" style={{width: '18rem'}}>
                <img src={product.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description.slice(0,100)}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            ) )
        }
    
    </div>
  )
}

export default Productlist
