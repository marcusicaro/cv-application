import React, {Component} from 'react'

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        role: '',
        location: '',
        email: '',
        phone: '',
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    })

    this.props.handleState({...this.state, [name]: target.value}, 'general')
  }

  render() {
    const {name, role, location, email, phone} = this.state
    return (
        <div className='form-cv'>
          <form onSubmit={this.onSubmitForm} className="add-form">
                <div className='input-content'>
                <label htmlFor="name">Name: </label>
                <input name="name" value={name} onChange={this.handleInputChange} type="text" id="name"></input>
                </div>
                <div className='input-content'>
                <label htmlFor="role">Role: </label>
                <input name="role" value={role} onChange={this.handleInputChange} type="text" id="role"></input>
                </div>
                <div className='input-content'>
                <label htmlFor="location">Location: </label>
                <input name="location" value={location} onChange={this.handleInputChange} type="text" id="location"></input>
                </div>
                <div className='input-content'>
                <label htmlFor="email">Email: </label>
                <input name="email" value={email} onChange={this.handleInputChange} type="text" id="email"></input>
                </div>
                <div className='input-content'>
                <label htmlFor="phone">Phone: </label>
                <input name="phone" value={phone} onChange={this.handleInputChange} type="text" id="phone"></input>
                </div>  
          </form>
        </div>
    )
  }
}

export default General