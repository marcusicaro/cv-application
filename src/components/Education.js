import React, {Component} from 'react'
import { EducationRender } from './EducationRender';
import uniqid from "uniqid";

class Education extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            school: '',
            title: '',
            date: '',
            education: [],
        }
    
    }

    schoolChange = (e) => {
      this.setState({
          school: e.target.value,
      })
    }
  
    titleChange = (e) => {
      this.setState({
          title: e.target.value,
      })
    }
  
    dateChange = (e) => {
      this.setState({
          date: e.target.value,
      })
    }

    onSubmitForm = (e) => {
      e.preventDefault();
      this.setState({
        education: [...this.state.education, {school: this.state.school, title: this.state.title, date: this.state.date, id: uniqid()}]
      })
    }

  render() {
    const {school, title, date} = this.state;
    return (
      <div className='form-cv'>
        <form onSubmit={this.onSubmitForm}>
          <div className='form-content'>
          <div className='input-content'>
          <label htmlFor="school">School: </label>
          <input value={school} onChange={this.schoolChange} type="text" id="school"></input>
          </div>
          <div className='input-content'>
          <label htmlFor="title">Title: </label>
          <input value={title} onChange={this.titleChange} type="text" id="title"></input>
          </div>
          <div className='input-content'>
          <label htmlFor="date">Date: </label>
          <input value={date} onChange={this.dateChange} type="text" id="date"></input>
          </div>
          </div>
          <button type='submit'>Add</button>
        </form>
        <div className='cv-preview'>
        <h3>Education </h3>
        <EducationRender education={this.state.education}/>
        </div>
      </div>
    )
  }
}

export default Education