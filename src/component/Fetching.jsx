import React, { useEffect, useState } from 'react'
import { getDataFromPlaceHlder, getUsers } from '/lib/getProduct'

const Fetching = () => {
    const [data, setdata] = useState()
    // const [post, setpost] =useState
   async function getResult(){
        const result = await getDataFromPlaceHlder()
        console.log(result);
    }

    // getResult()

   async function getUser(){
        const res =  await getUsers()
        setdata(res)
        console.log(res);
    }

    useEffect(() => {
        getUser()
    },[])

    //  async function getPost() {
    //     const res = await getPosts()
    //     setpost(res)
    //     console.log(res);
        
    // }
    // useEffect(() => {
    //     getPost()
    // },[])
    


    // 


  return (
    <div>Fetching

        {
            data?.map((user)=>{
                return(
                    <div style={{border: '1px solid green', padding:'20px',backgroundColor:'pink'}}>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Fetching


// import React, { useEffect, useState } from 'react'



// const Fetching = () => {
//     const [data, setdata] = useState()
//    async function getResult(){
//         const result = await getDataFromPlaceHlder()
//         console.log(result);
//     }

//     getResult()

//    async function getUser(){
//         const res =  await getUsers()
//         setdata(res)
//         console.log(res);
//     }

//     useEffect(() => {
//         getUsers()
//     },[])
 
//   return (
//     <div>Fetching

//         {
//             data?.map((user)=>{
//                 return(
//                     <div style={{border: '1px solid green'}}>
//                         <p>{user.name}</p>
//                         <p>{user.email}</p>
//                         <p>{user.phone}</p>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default Fetching