import React, {Component} from 'react'
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
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    })
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.setExperience({...this.state, id:uniqid()});
    this.setState({
      company: '',
      position: '',
      tasks: '',
      startDate: '',
      endDate: '',
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
          <input name="company" value={company} onChange={this.handleInputChange} type="text" id="company"></input>
          </div>
          <div className='input-content'>
          <label htmlFor="position">Position: </label>
          <input name="position" value={position} onChange={this.handleInputChange} type="text" id="position"></input>
          </div>
          <div className='input-content'>
          <label htmlFor="tasks">Tasks: </label>
          <input name="tasks" value={tasks} onChange={this.handleInputChange} type="text" id="tasks"></input>
          </div>
          <div className='input-content'>
          <label htmlFor="startDate">Start date: </label>
          <input name="startDate" value={startDate} onChange={this.handleInputChange} type="text" id="startDate"></input>
          </div>
          <div className='input-content'>
          <label htmlFor="endDate">End date: </label>
          <input name="endDate" value={endDate} onChange={this.handleInputChange} type="text" id="endDate"></input>
          </div>
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
    )
  }
}

export default Experience