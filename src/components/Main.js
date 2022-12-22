import React, { Component } from 'react'
import General from './General';
import  Experience from './Experience';
import Education from './Education';
import { GeneralRender } from './GeneralRender';
import { ExperienceRender } from './ExperienceRender';
import { EducationRender } from './EducationRender';
import uniqid from "uniqid";
import Summary from './Summary';
import { SummaryRender } from './SummaryRender';

export default class Main extends Component {
  constructor(props) {
    super(props);

    // this.setGeneral = this.setGeneral.bind(this)

    this.state = {
      general:[],
      summary: [],
      education:[],
      experience:[],
    }
  }

  setGeneral = (obj) => {
    this.setState({
      general: obj
    })
  }

  setSummary = (obj) => {
    this.setState({
      summary: obj
    })
  }

  setEducation = (obj) => {
    this.setState({
      education: [...this.state.education, obj]
    })
  }

  setExperience = (obj) => {
    this.setState({
      experience: [...this.state.experience, obj]
    })
  }

  render() {
    const {general, experience, education} = this.state
    return (
      <div className='main'>
        <div className='forms'>
          <General setGeneral={this.setGeneral} />
          <Summary setSummary={this.setSummary} />
          <Experience setExperience={this.setExperience} />
          <Education setEducation={this.setEducation} />
        </div>
        <div className='preview'>
          <GeneralRender props={this.state.general} />
          <SummaryRender props={this.state.summary} />
          <ExperienceRender experiences={this.state.experience} />
          <EducationRender education={this.state.education} />
        </div>
        
      </div>
    )
  }
}
