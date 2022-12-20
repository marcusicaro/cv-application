import React, { Component } from 'react'
import { GeneralRender } from './GeneralRender';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
        general: {},
        education: {},
        experience: {},
    }
  }

  nameChange = (e) => {
    this.setState()
  };

  emailChange = (e) => {
    this.setState()
  }

  phoneChange = (e) => {
    this.setState()
  }

  schoolChange = (e) => {
    this.setState({
        education: {
        school: e.target.value,
        title: this.state.education.title,
        date: this.state.education.date
        }
    })
  }

  titleChange = (e) => {
    this.setState({
        education: {
        school: this.state.education.school,
        title: e.target.value,
        date: this.state.education.date
        }
    })
  }

  dateChange = (e) => {
    this.setState({
        education: {
        school: this.state.education.school,
        title: this.state.education.title,
        date: e.target.value,
        }
    })
  }

  companyChange = (e) => {
    this.setState({
        experience: {
        company: e.target.value,
        position: this.state.experience.position,
        tasks: this.state.experience.tasks,
        startDate: this.state.experience.startDate,
        endDate: this.state.experience.endDate,
        }
    })
  }

  positionChange = (e) => {
    this.setState({
      experience: {
      company: this.state.experience.company,
      position: e.target.value,
      tasks: this.state.experience.tasks,
      startDate: this.state.experience.startDate,
      endDate: this.state.experience.endDate,
      }
    })
  }

  tasksChange = (e) => {
    this.setState({
      experience: {
      company: this.state.experience.company,
      position: this.state.experience.position,
      tasks: e.target.value,
      startDate: this.state.experience.startDate,
      endDate: this.state.experience.endDate,
      }
    })
  }

  startDateChange = (e) => {
    this.setState({
      experience: {    
      company: this.state.experience.company,
      position: this.state.experience.position,
      tasks: this.state.experience.tasks,
      startDate: e.target.value,
      endDate: this.state.experience.endDate,
      }
    })
  }

  endDateChange = (e) => {
    this.setState({
      experience: {
      company: this.state.experience.company,
      position: this.state.experience.position,
      tasks: this.state.experience.tasks,
      startDate: this.state.experience.startDate,
      endDate: e.target.value,
      }
    })
  }

  render() {
    const {general, experience, education} = this.state
    return (
      <div>
        <form>
            <label htmlFor="name">Name</label>
            <input value={general.name} onChange={this.nameChange} type="text" id="name"></input>
            <label htmlFor="email">Email</label>
            <input value={general.email} onChange={this.emailChange} type="text" id="email"></input>
            <label htmlFor="phone">Phone</label>
            <input value={general.phone} onChange={this.phoneChange} type="text" id="phone"></input>
            <label htmlFor="company">Company</label>
            <input value={experience.company} onChange={this.companyChange} type="text" id="company"></input>
            <label htmlFor="position">Position</label>
            <input value={experience.position} onChange={this.positionChange} type="text" id="position"></input>
            <label htmlFor="tasks">Tasks</label>
            <input value={experience.tasks} onChange={this.tasksChange} type="text" id="tasks"></input>
            <label htmlFor="startDate">Start Date</label>
            <input value={experience.startDate} onChange={this.startDateChange} type="text" id="startDate"></input>
            <label htmlFor="endDate">End Date</label>
            <input value={experience.endDate} onChange={this.endDateChange} type="text" id="endDate"></input>
            <label htmlFor="school">School</label>
            <input value={education.school} onChange={this.schoolChange} type="text" id="school"></input>
            <label htmlFor="title">Title</label>
            <input value={education.title} onChange={this.titleChange} type="text" id="title"></input>
            <label htmlFor="date">Date</label>
            <input value={education.date} onChange={this.dateChange} type="text" id="date"></input>
        </form>
        <GeneralRender name={general.name} email={general.email} phone={general.phone}/>
      </div>
    )
  }
}
