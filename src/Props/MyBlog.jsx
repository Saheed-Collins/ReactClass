import React, { useState } from 'react'
import DataList from './DataList';
// import DataList from './DataList';

// import React from 'react'

const MyBlog = () => {
  const [datas, setdata]= useState([
    { title: 'My website', body:'lorem lorem...', id: 1 },
    { title: 'Welcome to my website' , body:'lorem ipsum...', id: 2},
    { title: 'Web development tips', body: 'lorem ipsum sui', id: 3 }
  ]);
  return (
    <div className='blog container'>
      <DataList datas={datas}/>  
    </div>
  )
}

export default MyBlog


