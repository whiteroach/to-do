import React, { Component } from 'react'

export class form extends Component {
  state = {
    value : ''
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
      value:''
    });

    
  }
  render() {
    return (
      <div>
         <form className='row' onSubmit = {this.handleSubmit}>
          <label for ='task'>Task: </label>
          <input value = {this.state.value} type='text' id='task-input' name='task' onChange={this.handleNewToDoChange}/>
          <input type='submit' value = 'ADD'/>
        </form>
      </div>
    )
  }
}

export default form
