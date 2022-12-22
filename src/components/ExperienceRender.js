import React from 'react'
// import uniqid from "uniqid";

export const ExperienceRender = ({experiences, deleteExperience}) => {
  return (
    <div className="experience-content">
        {experiences.map((experience) => {
            return (
            <div key={experience.id}>
                <p><b>Company: </b>{experience.company}</p>
                <p>{experience.startDate} - {experience.endDate}</p>
                <p><b>{experience.position}</b></p>
                <p id='render-task'>{experience.tasks}</p>
            </div>
            )
        })}
    </div>
  )
}