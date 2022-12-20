import React from 'react'

export const GeneralRender = ({name, email, phone}) => {
  return (
    <div>
        <h3>{name}</h3>
        Name: {name} Email: {email} Phone: {phone} 
    </div>
  )
}
