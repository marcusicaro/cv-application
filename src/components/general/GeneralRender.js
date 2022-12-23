import React from 'react'

export const GeneralRender = ({props}) => {
  const {name, role, location, email, phone} = props
  return (
    <div className='general-info'>
        <h1>{name}</h1>
        <p><b>{role}</b></p>
        <p>{location}</p>
        <p><b>Email: </b>{email}</p> 
        <p><b>Phone: </b>{phone} </p> 
    </div>
  )
}
