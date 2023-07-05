import React from 'react'
import { GlobalProdContext } from '../../Library/ProdContext'

const Product = () => {
  const {data} = GlobalProdContext()


  return (
    <div className='d-flex flex-wrap gap-3'>
      {
        data?.map((product)=>(
          <div key={product.id} className="card" style={{width: '18rem'}}>
          <img src={product.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description.slice(0,100)}</p>
            <a href="#" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>
        ))
      }
      
    </div>
  )
}

export default Product
