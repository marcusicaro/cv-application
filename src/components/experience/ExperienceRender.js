import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'

export const ExperienceRender = ({experiences, deleteExperience, editExperience}) => {
  return (
    <div className="experience-content">
        {experiences.map((el) => {
            return (
            <div key={el.id}>
                <p><b>Company: </b>{el.company}</p>
                <p>{el.startDate} - {el.endDate}</p>
                <p><b>{el.position}</b></p>
                <p id='render-task'>{el.tasks}</p>
                <div className='icons'>
                <FontAwesomeIcon icon={faTrash} className="trash" onClick={() => {deleteExperience(el.id, 'experience')}}/>
                <FontAwesomeIcon icon={faPencil} className="pen" onClick={() => {editExperience(el.id)}}/>
                </div>
            </div>
            )
        })}
    </div>
  )
}