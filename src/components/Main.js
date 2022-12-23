import React, { Component } from 'react'
import General from './general/General';
import  Experience from './experience/Experience';
import Education from './education/Education';
import { GeneralRender } from './general/GeneralRender';
import { ExperienceRender } from './experience/ExperienceRender';
import { EducationRender } from './education/EducationRender';
import Summary from './summary/Summary';
import { SummaryRender } from './summary/SummaryRender';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general:[],
      summary: [],
      education:[],
      experience:[],
    }
  }

  handleState = (obj, type) => {
    this.setState({
      [type]: obj
    })
  }

  handleStateArray = (obj, type) => {
    this.setState({
      [type]: [...this.state[type], obj]
    })
  }

  deleteItem = (id, type) => {
    let filteredArray = this.state[type].filter(item => item.id !== id)
    this.setState({
      [type]: filteredArray
    })
  }

  editEducation = (id, newSchool, newTitle, newDate) => {
    let findIndex = this.state.education.findIndex(item => item.id === id)
    let copyEducation = [...this.state.education]
    copyEducation[findIndex] = {school: [newSchool], title: [newTitle], date: [newDate], id: [id]}
    this.setState({
      education: [...copyEducation]
    })
  }

  editExperience = (id, newCompany, newPosition, newStartDate, newEndDate, newTasks) => {
    let findIndex = this.state.experience.findIndex(item => item.id === id)
    let copyExperience = [...this.state.experience]
    copyExperience[findIndex] = {company: [newCompany], position: [newPosition], startDate: [newStartDate], endDate: [newEndDate], tasks: [newTasks], id: [id]}
    this.setState({
      experience: [...copyExperience]
    })
  }

  render() {
    const {general, summary, experience, education} = this.state
    return (
      <div className='main'>
        <div className='forms'>
          <General handleState={this.handleState} />
          <Summary handleState={this.handleState} />
          <Experience handleStateArray={this.handleStateArray} />
          <Education handleStateArray={this.handleStateArray} />
        </div>
        <div className='preview'>
          <GeneralRender props={general} />
          <h2>Summary</h2>
          <SummaryRender props={summary} />
          <h2>Experience</h2>
          <ExperienceRender experiences={experience} deleteExperience={this.deleteItem} editExperience={this.editExperience}/>
          <h2>Education</h2>
          <EducationRender education={education} deleteEducation={this.deleteItem} editEducation={this.editEducation}/>
        </div>
        
      </div>
    )
  }
}
