import React, { Component } from 'react'

export default class Summary extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            summary: '',
        }
      }
    
      handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
    
        this.setState({
          [name]: target.value
        })
    
        this.props.handleState({...this.state, [name]: target.value}, 'summary')
      }

  render() {
    const {summary} = this.state
    return (
        <div className='form-cv'>
          <form onSubmit={this.onSubmitForm}>
                <div className='input-content'>
                <label htmlFor="summary">Summary: </label>
                <input name="summary" value={summary} onChange={this.handleInputChange} type="text" id="summary"></input>
                </div>  
          </form>
        </div>
    )
  }
}
