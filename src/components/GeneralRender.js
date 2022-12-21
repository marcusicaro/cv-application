import React from 'react'

export const GeneralRender = ({name, role, location, email, phone}) => {
  return (
    <div className='general-info'>
        <h3>{name}</h3>
        <p><b>{role}</b></p>
        <p>{location}</p>
        <p><b>Email: </b>{email}</p> 
        <p><b>Phone: </b>{phone} </p> 
    </div>
  )
}
