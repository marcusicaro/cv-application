import React, { Component } from 'react'

export default class ExperienceEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editCompany: this.props.company,
            editPosition: this.props.position,
            editTasks: this.props.tasks,
            editStartDate: this.props.startDate,
            editEndDate: this.props.endDate,
        }
    }

    handleInputChanges = (e) => {
        const target = e.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        })
    }


    onSubmitForm = (e) => {
        const {editCompany, editPosition, editTasks, editStartDate, editEndDate} = this.state
        const parent = this.props
        e.preventDefault();
        parent.editExperience(parent.id, editCompany, editPosition, editStartDate, editEndDate, editTasks)
    }

    deleteItem = (e) => {
      const parent = this.props
      parent.deleteExperience(parent.id, 'experience')
    }

  render() {
    const {editCompany, editPosition, editTasks, editStartDate, editEndDate} = this.state
    return (
      <div className='experience-edit'>
        <div className='input-content'>
        <label htmlFor='editCompany'>Company: </label>
        <input name='editCompany' value={editCompany} onChange={this.handleInputChanges} type="text" id="editCompany"></input>
        </div>
        <div className='input-content'>
        <label htmlFor='editPosition'>Position: </label>
        <input name='editPosition' value={editPosition} onChange={this.handleInputChanges} type="text" id="editPosition"></input>
        </div>
        <div className='input-content'>
        <label htmlFor='editStartDate'>Start date: </label>
        <input name='editStartDate' value={editStartDate} onChange={this.handleInputChanges} type="text" id="editStartDate"></input>
        </div>
        <div className='input-content'>
        <label htmlFor='editEndDate'>End date: </label>
        <input name='editEndDate' value={editEndDate} onChange={this.handleInputChanges} type="text" id="editEndDate"></input>
        </div>
        <div className='tasks-field'>
        <label htmlFor='editTasks'>Tasks: </label>
        <textarea name='editTasks' value={editTasks} onChange={this.handleInputChanges} id="editTasks"></textarea>
        </div>
        <div className='edit-buttons'>
        <button onClick={this.onSubmitForm}>Edit</button>
        <button onClick={this.deleteItem} className="delete">Delete</button>
        </div>
      </div>
    )
  }
}
