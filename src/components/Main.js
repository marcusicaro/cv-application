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

  // editEducation = (id) => {
  //   this.setState({
  //     education: this.state.education.map(el => (el.id === id ? {...el, school:'123123'} : el))
  //   })
  // }
  editEducation = (id, newSchool, newTitle, newDate) => {
    let findIndex = this.state.education.findIndex(item => item.id === id)
    let copyEducation = [...this.state.education]
    copyEducation[findIndex] = {school: [newSchool], title: [newTitle], date: [newDate], id: [id]}
    this.setState({
      education: [...copyEducation]
    })
  }


  editExperience = (id) => {
    console.log(id)
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
          <SummaryRender props={summary} />
          <ExperienceRender experiences={experience} deleteExperience={this.deleteItem} editExperience={this.editExperience}/>
          <EducationRender education={education} deleteEducation={this.deleteItem} editEducation={this.editEducation}/>
        </div>
        
      </div>
    )
  }
}
