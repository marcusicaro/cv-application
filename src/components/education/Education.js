import React, {Component} from 'react'
import uniqid from "uniqid";

class Education extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            school: '',
            title: '',
            date: '',
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
      this.props.handleStateArray({...this.state, id: uniqid()}, 'education');
      this.setState({
        school: '',
        title: '',
        date: '',
      })
    }

  render() {
    const {school, title, date} = this.state;
    return (
      <div className='form-cv'>
        <form onSubmit={this.onSubmitForm} className="add-form">
          <div className='form-content'>
          <div className='input-content'>
          <label htmlFor="school">School: </label>
          <input name="school" value={school} onChange={this.handleInputChange} type="text" id="school"></input>
          </div>
          <div className='input-content'>
          <label htmlFor="title">Title: </label>
          <input name="title" value={title} onChange={this.handleInputChange} type="text" id="title"></input>
          </div>
          <div className='input-content'>
          <label htmlFor="date">Date: </label>
          <input name="date" value={date} onChange={this.handleInputChange} type="text" id="date"></input>
          </div>
          </div>
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default Education