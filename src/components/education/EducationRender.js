import React from 'react'
import EducationEdit from './EducationEdit'

export const EducationRender = ({education, deleteEducation, editEducation}) => {
  return (
    <div className="education-content">
        {education.map((e) => {
            return (
            <div key={e.id}>
              <p><b>School: </b>{e.school}</p>
              <p><b>Title: </b>{e.title}</p>
              <p><b>Date: </b>{e.date}</p>
              <div className='edit-field'>
                <EducationEdit editEducation={editEducation} id={e.id} school={e.school} title={e.title} date={e.date} deleteEducation={deleteEducation}/>
              </div>
            </div>
            )
        })}
    </div>
  )
}
