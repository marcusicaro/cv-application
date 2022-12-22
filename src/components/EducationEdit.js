import React, { Component } from 'react'

export default class EducationEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editSchool: this.props.school,
            editTitle: this.props.title,
            editDate: this.props.date,
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
        const {editSchool, editTitle, editDate} = this.state
        const parent = this.props

        e.preventDefault();
        parent.editEducation(parent.id, editSchool, editTitle, editDate)
      }

  render() {
    const {editSchool, editTitle, editDate} = this.state
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
            <label htmlFor='editSchool'>School: </label>
            <input name='editSchool' value={editSchool} onChange={this.handleInputChanges} type="text" id="editSchool"></input>
            <label htmlFor='editTitle'>Title: </label>
            <input name='editTitle' value={editTitle} onChange={this.handleInputChanges} type="text" id="editTitle"></input>
            <label htmlFor='editDate'>Date: </label>
            <input name='editDate' value={editDate} onChange={this.handleInputChanges} type="text" id="editDate"></input>
            <button type='submit'>Edit</button>
        </form>
      </div>
    )
  }
}
