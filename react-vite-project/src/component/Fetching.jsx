import React, { useEffect, useState } from 'react'
import { getDataFromPlaceHlder, getUsers, getPosts } from '../../lib/getProduct'

const Fetching = () => {
    const [data, setdata] = useState()
    const [post, setPost] = useState()
//    async function getResult(){
//         const result = await getDataFromPlaceHlder()
//         console.log(result);
//     }

    // getResult()

   async function getUser(){
        const res =  await getUsers()
        setdata(res)
        console.log(res);
    }



    // get posts
    
   async function getPost(){
        const res =  await getPosts()
        setPost(res)
        // console.log(res, 'post');
    }

    useEffect(() => {
        getUser()
        getPost()
    },[])


    // 


  return (

    <>
    <div>Fetching

        {
            data?.map((user)=>{
                return(
                    <div style={{border: '1px solid green', padding: '20px', backgroundColor: '#ccc'}}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                )
            })
        }
    </div>

    <div>
        posts
        {
            post?.map((post)=>{
                return(
                    <div style={{border: '1px solid green', padding: '20px', backgroundColor: '#ccc'}}>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <p>{post.id}</p>
                    </div>
                )
            })
        }
    </div>

    </>
  )
}

export default Fetching