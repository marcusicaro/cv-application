import React from 'react'
// import uniqid from "uniqid";

const ExperienceRender = (props) => {
    const {experiences} = props;
  return (
    <div>
        <h3>Experience </h3>
        {experiences.map((experience) => {
            return (
            <div key={experience.id}>
                <p><b>Company: </b>{experience.company}</p>
                <p><b>Position: </b>{experience.position}</p>
                <p><b>Tasks: </b>{experience.tasks}</p>
                <p><b>Start date: </b>{experience.startDate}</p>
                <p><b>End date: </b>{experience.endDate}</p>
            </div>
            )
        })}
    </div>
  )
}

export default ExperienceRender