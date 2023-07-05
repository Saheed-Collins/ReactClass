import { createContext,useEffect, useContext, useState } from 'react'
import { getProduct } from '../src/MinCommerce/RequesttData';


const Product =createContext();

const ProdContext = ({children}) => {
  const [data, setData] =useState();
 
 async function getData() {
    const res =await getProduct()
    setData(res)
    console.log(res);

    
  }
  // useEffect(()=>{
  //   getData()
  // },[])
    
  return (
    <Product.Provider value={{data}}>
        {children}

    </Product.Provider>
     
  );
};

export default ProdContext


export const GlobalProdContext = ()=>{
  return useContext(Product)
}