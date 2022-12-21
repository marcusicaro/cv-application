import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const EducationRender = ({education, deleteEducation}) => {
  return (
    <div className="education-content">
        {education.map((e) => {
            return (
            <div key={e.id}>
            <FontAwesomeIcon icon={faTrash} className="trash" onClick={() => {deleteEducation(e.id)}}/>
            <p><b>School: </b>{e.school}</p>
            <p><b>Title: </b>{e.title}</p>
            <p><b>Date: </b>{e.date}</p>
            </div>
            )
        })}
    </div>
  )
}
