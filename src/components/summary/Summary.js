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
          <form onSubmit={this.onSubmitForm} className="add-form">
                <div className='input-content'>
                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" value={summary} onChange={this.handleInputChange} id="summary"></textarea>
                </div>  
          </form>
        </div>
    )
  }
}
