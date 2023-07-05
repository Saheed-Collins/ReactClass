import React, { useRef, useState } from 'react'
// import { inputStyle } from './StyleCompo'

const BestForm = () => {
    const [data, setdata] = useState()
    // const [show, setshow] = useState('testing')

    const formRef = useRef()

    function formData(e){
        // console.log(e.target.name)
        let key =  e.target.name
        let value = e.target.value

            // prev   //New
          setdata({...data, [key]: value})
    }

    function submitForm(e){
        e.preventDefault()
        // localStorage.setItem('formData', JSON.stringify(data))
        formRef.current.reset()
        console.log(data)
    }
    
const inputStyle = {
        width: '50%',
        padding: '20px 0',
        backgroundColor: '#ccc',
        display: 'block'
    }
    

    // const h1Style = {
    //     color: 'orange'
    // }

    // const testing={
    // }

  return (
    <div>
      <form ref={formRef} >
      <input type="text" name='username' onChange={formData} style={inputStyle} />
        <input type="email" name='email'  onChange={formData} style={inputStyle} />
        <input type="password" name='password'  onChange={formData} style={inputStyle} />

        <select id="" name='gender' onChange={formData} style={inputStyle}>
        <option value="M">Male</option>
        <option value="F">Female</option>
        </select>
        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  )
}

export default BestForm
