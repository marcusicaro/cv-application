import React from 'react'

export const EducationRender = (props) => {
    const {education} = props;
  return (
    <div>
        <h3>Education </h3>
        {education.map((e) => {
            return (
            <div key={e.id}>
            <p><b>School: </b>{e.school}</p>
            <p><b>Title: </b>{e.title}</p>
            <p><b>Date: </b>{e.date}</p>
            </div>
            )
        })}
    </div>
  )
}
