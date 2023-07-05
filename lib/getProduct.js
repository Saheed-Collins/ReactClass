// import { collection, getDocs } from "firebase/firestore"
// import { db } from "./firebaseConfig"

export const getDataFromFB = async()=>{
    let produt = []
    try {
    const colRef = collection(db, 'product')
    const res = await getDocs(colRef)
    res.docs.forEach((elem)=>{
     produt.push(elem.data())
       
    })
    return produt
      
    } catch (error) {
        console.log(error);
    }
}
export const getDataFromPlaceHlder = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await res.json() 
  return data
}

export const getUsers = async()=>{
   try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
   } catch (error) {
    return error
   }
}
// export  const getPosts = async()=>{
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await res.json()
//         return data
        
//     } catch (error) {
        
//     }
// }



      

 