import React from 'react'
import { Input, LargeTExt, SmallTExt } from './utility'
import { useState } from 'react';

const Form = () => {
    const [data, setData] = useState()

    function handleSumit(e){
        e.preventDefault()
        console.log(data)
    }
    function handleChange(e){
        let name = e.target.name;
        let value = e.target.value
        setData({...data, [name]: value}) 
    }

  return (
    <div>
      <div className="container border py-3">
             <LargeTExt text='Sign up' />
        <form onClick={handleSumit}>
             <Input type={'text'} placeholder={'Enter Name'} className={''} name={'firstName'} handleChange={handleChange} />
             <Input type={'text'} placeholder={'Enter Last Name'} className={''} name={'lastName'} handleChange={handleChange} />
             <Input type={'email'} placeholder={'Enter Email'} className={''} name={'email'} handleChange={handleChange} />
             <Input type={'password'} placeholder={'Enter Password'} className={''} name={'password'} handleChange={handleChange} />

             <SmallTExt text='all fields are required'className={'fw-light'}/>

             <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form
