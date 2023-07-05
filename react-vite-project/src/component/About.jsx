import React from 'react'

const About = ({names, lolipop}) => {
    console.log(names);
  return (
    <div>
        this is About us

        {
            names.map((elem)=>{
                return(
                    <p>{elem}</p>
                )
            })
        }
    </div>
  )
}

export default About