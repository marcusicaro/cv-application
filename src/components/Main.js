import React, { Component } from 'react'
import { GeneralRender } from './GeneralRender';
import { ExperienceRender } from './ExperienceRender';
import { EducationRender } from './EducationRender';
import uniqid from "uniqid";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
        general: {
          name: '',
          role: '',
          location: '',
          email: '',
          phone: '',
        },
        education: {
          school:'',
          title:'',
          date:'',
          educations: [],
        },
        experience: {
          company:'',
          position: '',
          tasks: '',
          startDate: '',
          endDate: '',
          experiences: [],
        },
    }
  }

  nameChange = (e) => {
    this.setState({
      general: {
        ...this.state.general,
        name: e.target.value
      }
    })
  };

  roleChange = (e) => {
    this.setState({
      general: {
        ...this.state.general,
        role: e.target.value
      }
    })
  };

  locationChange = (e) => {
    this.setState({
      general: {
        ...this.state.general,
        location: e.target.value
      }
    })
  };

  emailChange = (e) => {
    this.setState({
      general: {
        ...this.state.general,
        email: e.target.value
      }
    })
  }

  phoneChange = (e) => {
    this.setState({
      general: {
        ...this.state.general,
        phone: e.target.value
      }
    })
  }

  schoolChange = (e) => {
    this.setState({
        education: {
        ...this.state.education,
        school: e.target.value,
        }
    })
  }

  titleChange = (e) => {
    this.setState({
        education: {
        ...this.state.education,
        title: e.target.value,
        }
    })
  }

  dateChange = (e) => {
    this.setState({
        education: {
        ...this.state.education,
        date: e.target.value,
        }
    })
  }

  companyChange = (e) => {
    this.setState({
        experience: {
        ...this.state.experience,
        company: e.target.value,
        }
    })
  }

  positionChange = (e) => {
    this.setState({
      experience: {
      ...this.state.experience,
      position: e.target.value,
      }
    })
  }

  tasksChange = (e) => {
    this.setState({
      experience: {
      ...this.state.experience,
      tasks: e.target.value,
      }
    })
  }

  startDateChange = (e) => {
    this.setState({
      experience: {    
      ...this.state.experience,
      startDate: e.target.value,
      }
    })
  }

  endDateChange = (e) => {
    this.setState({
      experience: {
      ...this.state.experience,
      endDate: e.target.value,
      }
    })
  }

  experiencesSubmit = (e) => {
    e.preventDefault();
    this.setState({
      experience: {
        experiences: [
          ...this.state.experience.experiences,
          { 
            company: this.state.experience.company,
            position: this.state.experience.position,
            tasks: this.state.experience.tasks,
            startDate: this.state.experience.startDate,
            endDate: this.state.experience.endDate,
            id: uniqid(),
          }
        ]
      }
    })
  }

  educationSubmit = (e) => {
    e.preventDefault();
    this.setState({
      education: {
        educations: [
          ...this.state.education.educations,
          { 
            school: this.state.education.school,
            title: this.state.education.title,
            date: this.state.education.date,
            id: uniqid(),
          }
        ]
      }
    })
  }

  deleteEducation = (id) => {

    let filteredArray = this.state.education.educations.filter(item => item.id !== id)
    this.setState({
      education: {
        educations: filteredArray
      }
    })
  }

  render() {
    const {general, experience, education} = this.state
    return (
      <div className='main'>
        <div>
          <form>
              <label htmlFor="name">Name</label>
              <input value={general.name} onChange={this.nameChange} type="text" id="name"></input>
              <label htmlFor="role">Title</label>
              <input value={general.role} onChange={this.roleChange} type="text" id="role"></input>
              <label htmlFor="location">Location</label>
              <input value={general.location} onChange={this.locationChange} type="text" id="location"></input>
              <label htmlFor="email">Email</label>
              <input value={general.email} onChange={this.emailChange} type="text" id="email"></input>
              <label htmlFor="phone">Phone</label>
              <input value={general.phone} onChange={this.phoneChange} type="text" id="phone"></input>
          </form>
          <form onSubmit={this.experiencesSubmit}>
              <label htmlFor="company">Company</label>
              <input value={experience.company} onChange={this.companyChange} type="text" id="company"></input>
              <label htmlFor="position">Position</label>
              <input value={experience.position} onChange={this.positionChange} type="text" id="position"></input>
              <label htmlFor="tasks">Tasks</label>
              <textarea value={experience.tasks} onChange={this.tasksChange} type="text" id="tasks"></textarea>
              <label htmlFor="startDate">Start Date</label>
              <input value={experience.startDate} onChange={this.startDateChange} type="text" id="startDate"></input>
              <label htmlFor="endDate">End Date</label>
              <input value={experience.endDate} onChange={this.endDateChange} type="text" id="endDate"></input>
              <button type='submit'>Add</button>
          </form>
          <form onSubmit={this.educationSubmit}>
              <label htmlFor="school">School</label>
              <input value={education.school} onChange={this.schoolChange} type="text" id="school"></input>
              <label htmlFor="title">Title</label>
              <input value={education.title} onChange={this.titleChange} type="text" id="title"></input>
              <label htmlFor="date">Date</label>
              <input value={education.date} onChange={this.dateChange} type="text" id="date"></input>
              <button type='submit'>Add</button>
          </form>
        </div>

        <div className='cv-preview'>
          <GeneralRender name={general.name} role={general.role} location={general.location} email={general.email} phone={general.phone}/>
          <h3>Experience</h3>
          <ExperienceRender experiences={experience.experiences}/>
          <h3>Education</h3>
          <EducationRender education={education.educations} deleteEducation={this.deleteEducation}/>
        </div>
      
      </div>
    )
  }
}
