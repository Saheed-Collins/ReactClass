import React from 'react'
import { LargeTExt } from './utility'
import Form from './Form'

const Props = () => {
  return (
    <div>
     <LargeTExt text='hello world' className='text-danger display-1'/>

     <LargeTExt text='Welcome to react class' className={'text-primary'} />
     <LargeTExt text="hello Sqi" className={'text-secondary'}  />

     <Form/>
    </div>
  )
}

export default Props
