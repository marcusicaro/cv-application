import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'


export const EducationRender = ({education, deleteEducation, editEducation}) => {
  return (
    <div className="education-content">
        {education.map((e) => {
            return (
            <div key={e.id}>
            <p><b>School: </b>{e.school}</p>
            <p><b>Title: </b>{e.title}</p>
            <p><b>Date: </b>{e.date}</p>
            <FontAwesomeIcon icon={faTrash} className="trash" onClick={() => {deleteEducation(e.id, 'education')}}/>
            <FontAwesomeIcon icon={faPencil} className="pen" onClick={() => {editEducation()}}/>
            </div>
            )
        })}
    </div>
  )
}
