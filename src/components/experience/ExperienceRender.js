import React from 'react'
import ExperienceEdit from './ExperienceEdit'

export const ExperienceRender = ({experiences, deleteExperience, editExperience}) => {
  return (
    <div className="experience-content">
        {experiences.map((e) => {
            return (
            <div key={e.id}>
                <p><b>{e.company}</b>, {e.position}</p>
                <p>{e.startDate} - {e.endDate}</p>
                <p id='render-task'>{e.tasks}</p>
                <div>
                <ExperienceEdit editExperience={editExperience} id={e.id} company={e.company} position={e.position} startDate={e.startDate} endDate={e.endDate} tasks={e.tasks} deleteExperience={deleteExperience}/>
                </div>
            </div>
            )
        })}
    </div>
  )
}