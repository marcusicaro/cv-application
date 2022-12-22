import React from 'react'
import EducationEdit from './EducationEdit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'


export const EducationRender = ({education, deleteEducation, editEducation}) => {
  return (
    <div className="education-content">
        {education.map((e) => {
            return (
            <div key={e.id}>
              <p><b>School: </b>{e.school}</p>
              <p><b>Title: </b>{e.title}</p>
              <p><b>Date: </b>{e.date}</p>
              <div className='icons'>
                <FontAwesomeIcon icon={faTrash} className="trash" onClick={() => {deleteEducation(e.id, 'education')}}/>
                <FontAwesomeIcon icon={faPen} className="pen" onClick={() => {editEducation()}}/>
                <EducationEdit editEducation={editEducation} id={e.id} school={e.school} title={e.title} date={e.date}/>
              </div>
            </div>
            )
        })}
    </div>
  )
}
