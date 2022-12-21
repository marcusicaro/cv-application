import React, {Component} from 'react'
import {ExperienceRender} from './ExperienceRender';
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
        company: '',
        position: '',
        tasks: '',
        startDate: '',
        endDate: '',
        experiences: [
        ],
    }
  }

  companyChange = (e) => {
    this.setState({
      company: e.target.value
    })
  }

  positionChange = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  tasksChange = (e) => {
    this.setState({
      tasks: e.target.value
    })
  }

  startDateChange = (e) => {
    this.setState({
      startDate: e.target.value
    })
  }

  endDateChange = (e) => {
    this.setState({
      endDate: e.target.value
    })
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      experiences: [
        ...this.state.experiences, {
        company: this.state.company, 
        position: this.state.position, 
        tasks: this.state.tasks, 
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        id: uniqid(),
        },
      ]
    }) 
  }

  render() {
    const {company, position, tasks, startDate, endDate} = this.state
    return (
    <div className='form-cv'>
      <form onSubmit={this.onSubmitForm}>
        <div className='form-content'>
          <div className='input-content'>
          <label htmlFor="company">Company: </label>
          <input value={company} onChange={this.companyChange} type="text" id="company"></input>
          </div>
          <div className='input-content'>
          <label htmlFor="position">Position: </label>
          <input value={position} onChange={this.positionChange} type="text" id="position"></input>
          </div>
          <div className='input-content'>
          <label htmlFor="tasks">Tasks: </label>
          <input value={tasks} onChange={this.tasksChange} type="text" id="tasks"></input>
          </div>
          <div className='input-content'>
          <label htmlFor="startDate">Start date: </label>
          <input value={startDate} onChange={this.startDateChange} type="text" id="startDate"></input>
          </div>
          <div className='input-content'>
          <label htmlFor="endDate">End date: </label>
          <input value={endDate} onChange={this.endDateChange} type="text" id="endDate"></input>
          </div>
        </div>
        <button type='submit'>Add</button>
      </form>
      <div className='cv-preview'>
        <h3>Experience </h3>
        <ExperienceRender experiences={this.state.experiences}/>
      </div>
    </div>
    )
  }
}

export default Experience