import React, {Component} from 'react'
import { GeneralRender } from './GeneralRender';

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        email: '',
        phone: ''
    }
  }


  nameChange = (e) => {
    this.setState({
        name: e.target.value
    })
  };

  emailChange = (e) => {
    this.setState({
        email: e.target.value
    })
  }

  phoneChange = (e) => {
    this.setState({
        phone: e.target.value
    })
  }

  onSubmitForm = (e) => {
    e.preventDefault();
  }

  render() {
    const {name, email, phone} = this.state
    return (
        <div className='form-cv'>
          <form onSubmit={this.onSubmitForm}>
            <div className='form-content'>
                <div className='input-content'>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={this.nameChange} type="text" id="name"></input>
                </div>
                <div className='input-content'>
                <label htmlFor="email">Email: </label>
                <input value={email} onChange={this.emailChange} type="text" id="email"></input>
                </div>
                <div className='input-content'>
                <label htmlFor="phone">Phone: </label>
                <input value={phone} onChange={this.phoneChange} type="text" id="phone"></input>
                </div>
            </div>    
                <button type='submit'>Add</button>
          </form>
          <div className='cv-preview'>
          <GeneralRender name={name} email={email} phone={phone}/>
          </div>
        </div>

    )
  }
}

export default General