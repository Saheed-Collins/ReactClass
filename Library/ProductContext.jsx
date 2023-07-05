import { createContext, useContext, useEffect, useState } from "react";
import { getProduct } from "../src/MiniEcommrce/RequestData";


const Product =  createContext()

const ProductContext = ({children})=>{
    const [data, setData] = useState()

    async function getData(){
        const res = await getProduct()
        console.log(res)
        setData(res)
       }

    useEffect(()=>{
       getData()
    }, [])


    return (
        <Product.Provider value={{data}}>
            {children}
        </Product.Provider>
    )
}
export default ProductContext


export const GlobalProductContext = ()=>{
    return useContext(Product)
}



