import React, { Component } from 'react'

export class form extends Component {
  state = {
    value: ''
  }

  handleNewToDoChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.handleAddToDo(this.state.value);

    this.setState({
      value: ''
    });


  }
  render() {
    return (
      <div>
        <form className='row' onSubmit={this.handleSubmit}>
          <div className='input-text'>
            <label for='task'>TASK: </label>
            <input value={this.state.value} type='text' id='task-input' name='task' onChange={this.handleNewToDoChange} />
          </div>
          <input className='btn-form' type='submit' value='ADD' />
        </form>
      
      </div>
    )
  }
}

export default form
